"""Compute real roster figures for content-audit findings M3 and M4.

Reads the pipeline's rosterwise.db and emits, for every unsourced generalization
listed in reports/content-audit-2026-08-25.md, the actual distribution from the
2025-26 roster season: median, IQR, range, and the program counts behind them.

Output: markdown tables + a flat CSV, for review before any website edit.
"""

from __future__ import annotations

import csv
import sqlite3
import statistics
from pathlib import Path

DB = Path.home() / "Code/rosterwise/pipeline/data/rosterwise.db"
SEASON = "2025-26"
MIN_ROSTER = 12  # implausibly small => treated as an incomplete scrape, excluded

OUT_DIR = Path(__file__).parent
rows_csv: list[dict[str, object]] = []


def connect() -> sqlite3.Connection:
    con = sqlite3.connect(DB)
    con.row_factory = sqlite3.Row
    return con


def pct(n: int, d: int) -> float:
    return round(100.0 * n / d, 1) if d else 0.0


def describe(values: list[int]) -> dict[str, float]:
    """Median, quartiles, mean and range for a list of per-program counts."""
    vs = sorted(values)
    n = len(vs)
    if n == 0:
        return {}
    q = statistics.quantiles(vs, n=4, method="inclusive") if n > 1 else [vs[0]] * 3
    return {
        "n": n,
        "median": statistics.median(vs),
        "p25": q[0],
        "p75": q[2],
        "mean": round(statistics.fmean(vs), 1),
        "min": vs[0],
        "max": vs[-1],
    }


def log_row(claim: str, population: str, **stats: object) -> None:
    rows_csv.append({"claim": claim, "population": population, **stats})


def program_rosters(
    con: sqlite3.Connection,
    sport: str,
    gender: str | None = None,
    division: str | None = None,
    require_full_positions: bool = False,
) -> list[sqlite3.Row]:
    """One row per program-season with roster size and per-position counts."""
    sql = """
        SELECT p.id            AS pid,
               p.school_name   AS school,
               p.division      AS division,
               p.gender        AS gender,
               COUNT(*)                                              AS roster,
               SUM(CASE WHEN pl.position_normalized IS NULL
                          OR pl.position_normalized = '' THEN 1 ELSE 0 END) AS nopos,
               SUM(pl.is_international)                              AS intl,
               SUM(CASE WHEN pl.class_year_normalized IN ('SR','RS-SR')
                        THEN 1 ELSE 0 END)                           AS seniors,
               SUM(CASE WHEN pl.class_year_normalized IN ('SR','RS-SR','GR')
                        THEN 1 ELSE 0 END)                           AS seniors_gr,
               SUM(CASE WHEN pl.class_year_normalized IN ('FR','RS-FR')
                        THEN 1 ELSE 0 END)                           AS frosh,
               pl.position_normalized                                AS _unused
        FROM players pl
        JOIN programs p ON p.id = pl.program_id
        JOIN sports   s ON s.id = p.sport_id
        WHERE pl.roster_season = ?
          AND COALESCE(pl.is_non_player, 0) = 0
          AND s.code = ?
    """
    params: list[object] = [SEASON, sport]
    if gender:
        sql += " AND p.gender = ?"
        params.append(gender)
    if division:
        sql += " AND p.division = ?"
        params.append(division)
    sql += " GROUP BY p.id HAVING roster >= ?"
    params.append(MIN_ROSTER)
    if require_full_positions:
        sql += " AND nopos = 0"
    return con.execute(sql, params).fetchall()


def position_counts(
    con: sqlite3.Connection, pids: list[int], position: str
) -> list[int]:
    """Per-program count of one normalized position, zero-filled for programs
    on the list that carry none."""
    if not pids:
        return []
    marks = ",".join("?" * len(pids))
    got = dict(
        con.execute(
            f"""SELECT program_id, COUNT(*) FROM players
                WHERE roster_season = ?
                  AND COALESCE(is_non_player,0) = 0
                  AND position_normalized = ?
                  AND program_id IN ({marks})
                GROUP BY program_id""",
            [SEASON, position, *pids],
        ).fetchall()
    )
    return [got.get(pid, 0) for pid in pids]


def share_in_range(values: list[int], lo: int, hi: int) -> float:
    return pct(sum(1 for v in values if lo <= v <= hi), len(values))


md: list[str] = []
W = md.append


def table(header: list[str], body: list[list[object]]) -> None:
    W("| " + " | ".join(header) + " |")
    W("| " + " | ".join("---" for _ in header) + " |")
    for r in body:
        W("| " + " | ".join(str(c) for c in r) + " |")
    W("")


def main() -> None:
    con = connect()

    W("# M3 / M4 — computed roster figures")
    W("")
    W(f"**Season:** {SEASON} (published on the site as \"the 2025 season\", "
      "matching the existing `soccer/insights/` pages).")
    W("**Source:** RosterWise roster dataset, `pipeline/data/rosterwise.db`.")
    W(f"**Exclusions:** non-players (managers/staff, `is_non_player=1`) and "
      f"program-seasons with fewer than {MIN_ROSTER} rostered players "
      "(treated as incomplete scrapes).")
    W("**Position tables** additionally require the program to list a position "
      "for *every* rostered player, so a partly-unlabelled roster cannot "
      "understate a position group.")
    W("")
    W("Capture windows by sport (when the 2025-26 rosters were read):")
    W("")
    cap = con.execute(
        """SELECT s.code, MIN(substr(pl.scraped_at,1,7)), MAX(substr(pl.scraped_at,1,7))
           FROM players pl JOIN programs p ON p.id=pl.program_id
           JOIN sports s ON s.id=p.sport_id
           WHERE pl.roster_season=? AND pl.scraped_at != ''
           GROUP BY 1 ORDER BY 1""",
        [SEASON],
    ).fetchall()
    table(["Sport", "First capture", "Last capture"], [list(r) for r in cap])

    # ---------------------------------------------------------------- A. soccer positions
    W("## A. Soccer position groups per roster")
    W("")
    W("Claim under audit: *\"most programs carry three to four goalkeepers … "
      "midfielders often 8-10, defenders 6-8\"* "
      "(`soccer/{mens,womens}/guide/goalkeeper-recruiting.md:42`).")
    W("")
    for gender, label in (("M", "Men's"), ("W", "Women's")):
        W(f"### {label} soccer")
        W("")
        body = []
        for div in ("D1", "D2", "D3", "NAIA", None):
            rs = program_rosters(con, "soccer", gender, div, require_full_positions=True)
            pids = [r["pid"] for r in rs]
            if not pids:
                continue
            divname = div or "All divisions"
            for pos, posname in (("GK", "Goalkeeper"), ("DEF", "Defender"),
                                 ("MID", "Midfielder"), ("FWD", "Forward")):
                vals = position_counts(con, pids, pos)
                d = describe(vals)
                body.append([divname, posname, d["n"], d["median"],
                             f'{d["p25"]:g}-{d["p75"]:g}', d["mean"],
                             f'{d["min"]}-{d["max"]}'])
                log_row(f"{label} soccer {posname} per roster", f"{divname}, {SEASON}",
                        **d)
        table(["Division", "Position", "Programs", "Median", "IQR (p25-p75)",
               "Mean", "Range"], body)

        # the exact wording the page uses, tested against the data
        rs = program_rosters(con, "soccer", gender, "D1", require_full_positions=True)
        pids = [r["pid"] for r in rs]
        gk = position_counts(con, pids, "GK")
        mid = position_counts(con, pids, "MID")
        dfn = position_counts(con, pids, "DEF")
        W(f"**Testing the page's wording against D1 {label.lower()} programs "
          f"(n={len(pids)}):**")
        W("")
        W(f"- Programs carrying 3-4 goalkeepers: **{share_in_range(gk,3,4)}%** "
          f"(exactly 3: {share_in_range(gk,3,3)}%)")
        W(f"- Programs carrying 8-10 midfielders: **{share_in_range(mid,8,10)}%**")
        W(f"- Programs carrying 6-8 defenders: **{share_in_range(dfn,6,8)}%**")
        W("")

    # ---------------------------------------------------------------- B. volleyball
    W("## B. Volleyball position groups per roster")
    W("")
    W("Claim under audit: *\"most rosters carry 3-5 OH … typically 3-4 MB … "
      "usually 2-3 setters … 1-2 liberos … typically 2-3 opposites … "
      "1-3 DS\"* (`blog/how-to-read-a-college-volleyball-roster.md:56-59`).")
    W("")
    for gender, label in (("W", "Women's"), ("M", "Men's")):
        rs = program_rosters(con, "volleyball", gender, None, require_full_positions=True)
        pids = [r["pid"] for r in rs]
        if not pids:
            continue
        W(f"### {label} volleyball — all divisions (n={len(pids)} programs)")
        W("")
        body = []
        claimed = {"OH": (3, 5), "MB": (3, 4), "S": (2, 3),
                   "L": (1, 2), "OP": (2, 3), "DS": (1, 3)}
        names = {"OH": "Outside Hitter", "MB": "Middle Blocker", "S": "Setter",
                 "L": "Libero", "OP": "Opposite / Right Side",
                 "DS": "Defensive Specialist"}
        for pos, (lo, hi) in claimed.items():
            vals = position_counts(con, pids, pos)
            d = describe(vals)
            body.append([names[pos], d["n"], d["median"], f'{d["p25"]:g}-{d["p75"]:g}',
                         d["mean"], f'{d["min"]}-{d["max"]}',
                         f"{lo}-{hi}", f"{share_in_range(vals, lo, hi)}%"])
            log_row(f"{label} volleyball {names[pos]} per roster",
                    f"All divisions, {SEASON}", **d)
        table(["Position", "Programs", "Median", "IQR (p25-p75)", "Mean", "Range",
               "Page claims", "% of programs inside claimed range"], body)

    # ---------------------------------------------------------------- C. lacrosse roster size
    W("## C. Lacrosse roster size")
    W("")
    W("Claims under audit: men's D1 rosters *\"typically around 50+ players\"* "
      "(`lacrosse/mens/guide/recruiting-timeline.md:135`, "
      "`lacrosse/mens/guide/scholarships-after-house-settlement.md:72`); "
      "women's D1 *\"typically 30-35+ players\"* "
      "(`lacrosse/womens/guide/scholarships-after-house-settlement.md:69`).")
    W("")
    body = []
    for gender, label in (("M", "Men's"), ("W", "Women's")):
        for div in ("D1", "D2", "D3", "NAIA"):
            rs = program_rosters(con, "lacrosse", gender, div)
            vals = [r["roster"] for r in rs]
            if not vals:
                continue
            d = describe(vals)
            body.append([f"{label} {div}", d["n"], d["median"],
                         f'{d["p25"]:g}-{d["p75"]:g}', d["mean"],
                         f'{d["min"]}-{d["max"]}'])
            log_row(f"{label} lacrosse roster size", f"{div}, {SEASON}", **d)
    table(["Population", "Programs", "Median", "IQR (p25-p75)", "Mean", "Range"], body)

    for gender, label, lo, hi in (("M", "Men's", 50, 999), ("W", "Women's", 30, 35)):
        rs = program_rosters(con, "lacrosse", gender, "D1")
        vals = [r["roster"] for r in rs]
        W(f"- D1 {label.lower()} lacrosse programs at **{lo}+** players: "
          f"**{share_in_range(vals, lo, 999)}%** of {len(vals)}")
        if hi != 999:
            W(f"- D1 {label.lower()} lacrosse programs in the published "
              f"**{lo}-{hi}** band: **{share_in_range(vals, lo, hi)}%**")
    W("")

    # ---------------------------------------------------------------- D. sport-agnostic roster size + seniors
    W("## D. Sport-agnostic roster size and graduating class")
    W("")
    W("Claims under audit: *\"a typical college roster has somewhere between "
      "20 and 35 athletes\"* and *\"each year, a class of seniors graduates — "
      "usually 4 to 8 athletes\"* (`guide/late-bloomers.md:95`).")
    W("")
    body = []
    all_rosters: list[int] = []
    all_sr: list[int] = []
    all_srgr: list[int] = []
    for sport in ("soccer", "volleyball", "lacrosse", "wrestling"):
        rs = program_rosters(con, sport)
        vals = [r["roster"] for r in rs]
        d = describe(vals)
        body.append([sport, d["n"], d["median"], f'{d["p25"]:g}-{d["p75"]:g}',
                     d["mean"], f'{d["min"]}-{d["max"]}'])
        log_row(f"{sport} roster size", f"All divisions & genders, {SEASON}", **d)
        all_rosters += vals
        all_sr += [r["seniors"] for r in rs]
        all_srgr += [r["seniors_gr"] for r in rs]
    d = describe(all_rosters)
    body.append(["**all four sports**", d["n"], d["median"],
                 f'{d["p25"]:g}-{d["p75"]:g}', d["mean"], f'{d["min"]}-{d["max"]}'])
    log_row("Roster size, all RosterWise sports", f"All divisions & genders, {SEASON}", **d)
    table(["Sport", "Programs", "Median", "IQR (p25-p75)", "Mean", "Range"], body)
    W(f"- Programs whose roster falls in the published **20-35** band: "
      f"**{share_in_range(all_rosters, 20, 35)}%** of {len(all_rosters)}")
    W("")
    dsr, dsg = describe(all_sr), describe(all_srgr)
    log_row("Seniors (SR + RS-SR) per roster", f"All sports, {SEASON}", **dsr)
    log_row("Seniors + graduate students per roster", f"All sports, {SEASON}", **dsg)
    table(["Departing-class measure", "Programs", "Median", "IQR (p25-p75)", "Mean",
           "Range", "% in published 4-8 band"],
          [["Seniors (SR + RS-SR)", dsr["n"], dsr["median"],
            f'{dsr["p25"]:g}-{dsr["p75"]:g}', dsr["mean"],
            f'{dsr["min"]}-{dsr["max"]}', f"{share_in_range(all_sr,4,8)}%"],
           ["Seniors + graduate students", dsg["n"], dsg["median"],
            f'{dsg["p25"]:g}-{dsg["p75"]:g}', dsg["mean"],
            f'{dsg["min"]}-{dsg["max"]}', f"{share_in_range(all_srgr,4,8)}%"]])

    # ---------------------------------------------------------------- E. house settlement walk-on math
    W("## E. House-settlement walk-on math")
    W("")
    W("Claim under audit: *\"a program with 9.9 scholarship equivalencies might "
      "carry 30 players — meaning roughly 20 walk-ons\"* "
      "(`guide/house-settlement.md:137`).")
    W("")
    rs = program_rosters(con, "soccer", "M", "D1")
    vals = [r["roster"] for r in rs]
    d = describe(vals)
    log_row("D1 men's soccer roster size", f"D1, {SEASON}", **d)
    table(["Population", "Programs", "Median", "IQR (p25-p75)", "Mean", "Range"],
          [["D1 men's soccer", d["n"], d["median"], f'{d["p25"]:g}-{d["p75"]:g}',
            d["mean"], f'{d["min"]}-{d["max"]}']])
    W("**The second half of this claim is not computable.** RosterWise holds no "
      "scholarship or athletic-aid data at the player level, so the number of "
      "walk-ons on any roster cannot be derived from our dataset. "
      "See the recommendation table.")
    W("")

    # ---------------------------------------------------------------- F. M4 international
    W("## F. M4 — soccer international composition")
    W("")
    W("Claim under audit: *\"the national average for men's D1 soccer is roughly "
      "20-25% international\"* and *\"some D1 and D2 programs … 30% or more\"* "
      "and *\"in women's soccer, international percentages tend to be lower "
      "across the board\"* (`soccer/guide/recruiting-myths.md:88`).")
    W("")
    body = []
    for gender, label in (("M", "Men's"), ("W", "Women's")):
        for div in ("D1", "D2", "D3", "NAIA", None):
            rs = program_rosters(con, "soccer", gender, div)
            if not rs:
                continue
            players = sum(r["roster"] for r in rs)
            intl = sum(r["intl"] for r in rs)
            per_prog = [pct(r["intl"], r["roster"]) for r in rs]
            dd = describe([round(v) for v in per_prog])
            over30 = pct(sum(1 for v in per_prog if v >= 30), len(per_prog))
            body.append([f"{label} {div or 'all divisions'}", len(rs), players,
                         intl, f"{pct(intl, players)}%",
                         f"{statistics.median(per_prog):.1f}%",
                         f"{min(per_prog):.1f}%-{max(per_prog):.1f}%", f"{over30}%"])
            log_row(f"{label} soccer international share", f"{div or 'all'}, {SEASON}",
                    n=len(rs), players=players, intl=intl,
                    overall_pct=pct(intl, players),
                    median_program_pct=round(statistics.median(per_prog), 1),
                    min=round(min(per_prog), 1), max=round(max(per_prog), 1),
                    pct_programs_over_30=over30)
    table(["Population", "Programs", "Players", "International",
           "Share of all roster spots", "Median program share",
           "Program range", "% of programs at 30%+"], body)

    (OUT_DIR / "m3-m4-computed-figures.md").write_text("\n".join(md))

    keys: list[str] = []
    for r in rows_csv:
        for k in r:
            if k not in keys:
                keys.append(k)
    with (OUT_DIR / "m3-m4-computed-figures.csv").open("w", newline="") as fh:
        w = csv.DictWriter(fh, fieldnames=keys)
        w.writeheader()
        w.writerows(rows_csv)

    print(f"wrote {OUT_DIR/'m3-m4-computed-figures.md'}")
    print(f"wrote {OUT_DIR/'m3-m4-computed-figures.csv'} ({len(rows_csv)} rows)")


if __name__ == "__main__":
    main()
