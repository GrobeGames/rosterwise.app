"""Check every figure on /soccer/insights/ against the 2025-26 roster-stats ids.

Finding RS-1 (Review Board rs-design, 2026-10-24; Scott: fix): five insights pages
still carry figures from the April-May 2026 capture. This reads each page's
tables and headline sentences, finds the figure id each cell should cite in
`src/_data/rosterStats/soccer.json`, and prints every cell: published, computed,
id, match. Re-run it at each release until the pages render from the ids
themselves, after which it has nothing left to check.

    python3 -I prototypes/research/roster-stats/check_soccer_insights.py \
        > prototypes/research/roster-stats/soccer-insights-check.md

Stdlib only. Read-only.
"""

from __future__ import annotations

import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
PAGES = ROOT / "src" / "soccer" / "insights"
STATS = ROOT / "src" / "_data" / "rosterStats" / "soccer.json"
SEASON = "2025-26"

#: The pages' spellings of conferences the bundle stores another way.
CONFERENCE_ALIASES = {
    "Northeast Conference": "NEC",
    "CAA": "Coastal Athletic Association",
    "Metro Atlantic Athletic Conf.": "Metro Atlantic Athletic Conference",
}
POSITION_ROWS = {"Goalkeeper": "GK", "Defender": "DEF", "Midfielder": "MID", "Forward": "FWD"}
CLASS_ROWS = {"Freshman": "FR", "Sophomore": "SO", "Junior": "JR", "Senior": "SR", "Graduate": "GR"}
STATE_CODES = {
    "Pennsylvania": "PA", "New York": "NY", "California": "CA", "Texas": "TX",
    "Massachusetts": "MA", "Illinois": "IL", "Ohio": "OH", "North Carolina": "NC",
    "Indiana": "IN", "Virginia": "VA", "Florida": "FL", "Georgia": "GA", "Missouri": "MO",
    "Wisconsin": "WI", "Tennessee": "TN", "Michigan": "MI",
}

#: Headline sentences: (page, phrase as published, [(id key, value path, published)]).
#: Not covered: division-by-numbers' "88.7% of player records" publish a height, which counts
#: both genders' players together; no id computes height coverage across genders.
PROSE = [
    ("division-by-numbers.md", "2,235 programs and 66,888 players", [
        ("all.all.programs", "programs", 2235), ("all.all.programs", "players", 66888)]),
    ("division-by-numbers.md", "D3 has the most programs (822) and the most roster spots (24,283)", [
        ("all.d3.programs", "programs", 822), ("all.d3.programs", "players", 24283)]),
    ("mens-roster-size.md", "1,012 programs and 33,057 players", [
        ("m.all.programs", "programs", 1012), ("m.all.programs", "players", 33057)]),
    ("womens-roster-size.md", "1,223 programs and 33,831 players", [
        ("w.all.programs", "programs", 1223), ("w.all.programs", "players", 33831)]),
    ("mens-international-conferences.md", "1,012 men's programs ... 9,504 players ... 28.7%", [
        ("m.all.programs", "programs", 1012), ("m.all.intl_share", "international", 9504),
        ("m.all.intl_share", "pct", 28.7)]),
    ("mens-international-conferences.md", "211 D1 ... 33.6% ... 2,050 of 6,099", [
        ("m.d1.programs", "programs", 211), ("m.d1.intl_share", "pct", 33.6),
        ("m.d1.intl_share", "international", 2050), ("m.d1.intl_share", "players", 6099)]),
    ("mens-international-conferences.md", "D2 37.3%, D3 11.2%, NAIA 48.2%", [
        ("m.d2.intl_share", "pct", 37.3), ("m.d3.intl_share", "pct", 11.2),
        ("m.naia.intl_share", "pct", 48.2)]),
    ("womens-international-conferences.md", "12.5% D1, 11.3% D2, 2.1% D3, 19.5% NAIA", [
        ("w.d1.intl_share", "pct", 12.5), ("w.d2.intl_share", "pct", 11.3),
        ("w.d3.intl_share", "pct", 2.1), ("w.naia.intl_share", "pct", 19.5)]),
]


@dataclass(frozen=True)
class Table:
    """One Markdown table: the heading above it, its header and rows, and its first line."""

    heading: str
    header: list
    rows: list
    line: int


@dataclass(frozen=True)
class Cell:
    """One published value checked against its id."""

    where: str
    label: str
    published: object
    computed: object
    figure_id: str

    @property
    def ok(self) -> bool:
        """Whether the page prints what the id holds."""
        return self.published == self.computed


def cells_of(line: str) -> list:
    """A table line's cells, bold and padding stripped."""
    return [c.strip().strip("*").strip() for c in line.strip().strip("|").split("|")]


def parse_tables(text: str) -> list:
    """Every Markdown table in a page, with the nearest heading above it."""
    tables, heading, lines, i = [], "", text.splitlines(), 0
    while i < len(lines):
        if lines[i].startswith("#"):
            heading = lines[i].lstrip("#").strip()
        if lines[i].startswith("|") and i + 1 < len(lines) and set(lines[i + 1]) <= set("|-: "):
            start, header, rows = i + 1, cells_of(lines[i]), []
            i += 2
            while i < len(lines) and lines[i].startswith("|"):
                rows.append(cells_of(lines[i]))
                i += 1
            tables.append(Table(heading, header, rows, start))
            continue
        i += 1
    return tables


def number(text: str):
    """A published cell as a number where it is one ("2,050" -> 2050, "33.6%" -> 33.6)."""
    raw = text.replace(",", "").replace("%", "").strip()
    for cast in (int, float):
        try:
            return cast(raw)
        except ValueError:
            pass
    return text.strip()


class Checker:
    """Looks figures up by their 2025-26 id and collects checked cells."""

    def __init__(self, figures: dict) -> None:
        self.figures = figures
        self.cells: list = []

    def value(self, key: str, path: str):
        """The value at `path` ("rows", "GK.text") of figure soccer.2025-26.<key>."""
        fig = self.figures.get(f"soccer.{SEASON}.{key}")
        node = fig["value"] if fig else None
        for part in path.split("."):
            node = node.get(part) if isinstance(node, dict) else None
        return node

    def check(self, where: str, label: str, published, key: str, path: str) -> None:
        """Record one cell."""
        self.cells.append(Cell(where, label, published, self.value(key, path), f"soccer.{SEASON}.{key}"))


def check_conferences(c: Checker, page: str, t: Table) -> None:
    """A conference table: programs, players, international, share."""
    gender = "m" if page.startswith("mens") else "w"
    fid = f"soccer.{SEASON}.{gender}.d1.intl_share_by_conference"
    rows = c.value(f"{gender}.d1.intl_share_by_conference", "rows") or []
    by_name = {r["conference"]: r for r in rows}
    for n, row in enumerate(t.rows):
        got = by_name.get(CONFERENCE_ALIASES.get(row[0], row[0]), {})
        for col, field in zip(row[1:5], ("programs", "players", "international", "pct")):
            c.cells.append(Cell(f"{page}:{t.line + 1 + n}", f"{row[0]} {field}", number(col), got.get(field), fid))


def check_division_rows(c: Checker, page: str, t: Table, gender: str) -> None:
    """Roster size (Programs | Avg | Median | Min | Max) or positions (GK | DEF | MID | FWD)."""
    for n, row in enumerate(t.rows):
        div, where = row[0].lower(), f"{page}:{t.line + 1 + n}"
        if t.header[1] == "Programs":
            for col, field in zip(row[1:6], ("programs", "mean", "median", "min", "max")):
                c.check(where, f"{row[0]} {field}", number(col), f"{gender}.{div}.roster_size", field)
        else:
            for col, pos in zip(row[1:5], t.header[1:5]):
                c.check(where, f"{row[0]} {pos} per roster", number(col),
                        f"{gender}.{div}.position_counts", f"{pos}.per_program")


def check_heights(c: Checker, page: str, t: Table) -> None:
    """Average heights by position and division."""
    gender = "m" if t.heading.startswith("Men") else "w"
    for n, row in enumerate(t.rows):
        for col, div in zip(row[1:5], t.header[1:5]):
            c.check(f"{page}:{t.line + 1 + n}", f"{gender} {div} {row[0]}", col,
                    f"{gender}.{div.lower()}.height_by_position", f"{POSITION_ROWS[row[0]]}.text")


GLANCE = {
    "Men's programs": ("m", "programs", "programs"),
    "Women's programs": ("w", "programs", "programs"),
    "Total programs": ("all", "programs", "programs"),
    "Men's avg. roster size": ("m", "roster_size", "mean"),
    "Women's avg. roster size": ("w", "roster_size", "mean"),
    "Men's international %": ("m", "intl_share", "pct"),
    "Women's international %": ("w", "intl_share", "pct"),
}


def check_glance(c: Checker, page: str, t: Table) -> None:
    """division-by-numbers' "at a glance" metric table."""
    for n, row in enumerate(t.rows):
        if row[0] in GLANCE:
            gender, measure, path = GLANCE[row[0]]
            for col, div in zip(row[1:5], t.header[1:5]):
                c.check(f"{page}:{t.line + 1 + n}", f"{row[0]} {div}", number(col),
                        f"{gender}.{div.lower()}.{measure}", path)


def check_states(c: Checker, page: str, t: Table) -> None:
    """Programs by state (two State | Programs pairs a row)."""
    rows = c.value("all.all.programs_by_state", "rows") or []
    by_state = {r["state"]: r["programs"] for r in rows}
    for n, row in enumerate(t.rows):
        for name, count in ((row[0], row[1]), (row[2], row[3])):
            if name:
                c.cells.append(Cell(f"{page}:{t.line + 1 + n}", f"{name} programs", number(count),
                                    by_state.get(STATE_CODES[name]), f"soccer.{SEASON}.all.all.programs_by_state"))


def check_comparison(c: Checker, page: str, t: Table) -> None:
    """mens-vs-womens-comparison's side-by-side tables."""
    head = tuple(t.header)
    for n, row in enumerate(t.rows):
        where = f"{page}:{t.line + 1 + n}"
        if head[:3] == ("Metric", "Men's", "Women's"):
            size = re.match(r"(D1|D2|D3|NAIA) average roster size", row[0])
            for col, g in zip(row[1:3], ("m", "w")):
                if size:
                    c.check(where, f"{row[0]} {g}", number(col), f"{g}.{size.group(1).lower()}.roster_size", "mean")
                elif row[0].startswith("Total programs"):
                    c.check(where, f"{row[0]} {g}", number(col), f"{g}.all.programs", "programs")
                elif row[0].startswith("Total roster spots"):
                    c.check(where, f"{row[0]} {g}", number(col), f"{g}.all.programs", "players")
        elif head[1:3] == ("Men's Intl %", "Women's Intl %"):
            for col, g in zip(row[1:3], ("m", "w")):
                c.check(where, f"{row[0]} {g} intl", number(col), f"{g}.{row[0].lower()}.intl_share", "pct")
        elif head[0] == "Class Year":
            for col, label in zip(row[1:5], head[1:5]):
                div, g = label.split()[0].lower(), "m" if "Men" in label else "w"
                c.check(where, f"{label} {row[0]}", number(col), f"{g}.{div}.class_year_mix",
                        f"{CLASS_ROWS[row[0]]}.pct")
        elif head[0] == "Position":
            for col, g in zip(row[1:3], ("m", "w")):
                c.check(where, f"D1 {g} {row[0]} per roster", number(col), f"{g}.d1.position_counts",
                        f"{POSITION_ROWS[row[0]]}.per_program")
        elif head[1:3] == ("Men's Programs", "Women's Programs"):
            div = "all" if row[0] == "Total" else row[0].lower()
            for col, g in zip(row[1:3], ("m", "w")):
                c.check(where, f"{row[0]} {g} programs", number(col), f"{g}.{div}.programs", "programs")


def check_page(c: Checker, page: Path) -> None:
    """Every checkable table on one page."""
    name = page.name
    for t in parse_tables(page.read_text(encoding="utf-8")):
        if t.header[0] == "Conference":
            check_conferences(c, name, t)
        elif name in ("mens-roster-size.md", "womens-roster-size.md") and t.header[0] == "Division":
            check_division_rows(c, name, t, "m" if name.startswith("mens") else "w")
        elif name == "division-by-numbers.md" and t.header[0] == "Position":
            check_heights(c, name, t)
        elif name == "division-by-numbers.md" and t.header[0] == "Metric":
            check_glance(c, name, t)
        elif name == "division-by-numbers.md" and t.header[0] == "State":
            check_states(c, name, t)
        elif name == "mens-vs-womens-comparison.md":
            check_comparison(c, name, t)


def main() -> int:
    """Print the check as Markdown."""
    data = json.loads(STATS.read_text(encoding="utf-8"))
    c = Checker(data["figures"])
    for page in sorted(PAGES.glob("*.md")):
        check_page(c, page)
    for page, phrase, checks in PROSE:
        for key, path, published in checks:
            c.check(f"{page} (prose: {phrase})", f"{key} {path}", published, key, path)
    bad = [x for x in c.cells if not x.ok]
    print(f"# /soccer/insights/ against roster stats {SEASON} ({data['bundle']['label']})\n")
    print(f"Generated by `check_soccer_insights.py` from `{STATS.relative_to(ROOT)}`,"
          f" computed {data['computed']}. {len(c.cells)} cells checked, {len(bad)} differ.\n")
    by_page: dict = {}
    for x in c.cells:
        by_page.setdefault(x.where.split(":")[0].split(" ")[0], []).append(x)
    print("| Page | Cells | Differ |\n| --- | --- | --- |")
    for page, cells in by_page.items():
        print(f"| {page} | {len(cells)} | {sum(1 for x in cells if not x.ok)} |")
    print("\n## Cells that differ\n\n| Where | Cell | Published | Computed | Id |\n| --- | --- | --- | --- | --- |")
    for x in bad:
        print(f"| {x.where} | {x.label} | {x.published} | {x.computed} | `{x.figure_id}` |")
    print("\n## Cells that match\n\n| Where | Cell | Value |\n| --- | --- | --- |")
    for x in c.cells:
        if x.ok:
            print(f"| {x.where} | {x.label} | {x.published} |")
    return 0


if __name__ == "__main__":
    sys.exit(main())
