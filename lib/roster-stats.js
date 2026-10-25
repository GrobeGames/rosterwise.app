// Roster stats on pages: every figure prints from its id in
// src/_data/rosterStats/<sport>.json (written by the pipeline's
// scripts/roster_stats.py), so a page can't type a number (board rs-fixes,
// RS-1, 2026-10-24). An unknown id, an unknown field or a figure the file
// marks unpublishable stops the build: a typo can never publish a blank or an
// old number.
//
//   {% stat "soccer.2025-26.m.d1.intl_share", "pct" %}            → 33.6%
//   {% stat "soccer.2025-26.m.d1.roster_size", "mean" %}           → 28.9
//   {% stat "soccer.2025-26.w.d1.intl_share_by_conference", "rows[NEC].programs" %}
//   {% statNote "soccer.2025-26.m.d1.roster_size" %}               → Rosters as of Jun 21, 2026 · 2025-26 season
//   {{ "soccer.2025-26.m.all.programs" | stat("programs") }}       (front matter, via eleventyComputed)

const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "_data", "rosterStats");

const STATE_NAMES = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", DC: "District of Columbia",
  FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois",
  IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana",
  ME: "Maine", MD: "Maryland", MA: "Massachusetts", MI: "Michigan",
  MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana",
  NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota",
  OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania",
  PR: "Puerto Rico", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin",
  WY: "Wyoming", GU: "Guam", VI: "U.S. Virgin Islands",
};

const files = {};

function statsFile(sport) {
  if (!files[sport]) {
    const file = path.join(DATA_DIR, `${sport}.json`);
    if (!fs.existsSync(file)) {
      throw new Error(`rosterStats: no stats file for "${sport}" (${file})`);
    }
    files[sport] = JSON.parse(fs.readFileSync(file, "utf8"));
  }
  return files[sport];
}

function figure(id) {
  if (typeof id !== "string" || !id.includes(".")) {
    throw new Error(`rosterStats: ${JSON.stringify(id)} is not a figure id`);
  }
  const data = statsFile(id.split(".")[0]);
  const fig = data.figures[id];
  if (!fig) throw new Error(`rosterStats: no figure "${id}"`);
  if (fig.publishable === false) {
    throw new Error(`rosterStats: "${id}" is not publishable (${fig.blocked || "no reason given"})`);
  }
  return fig;
}

// "pct", "GK.per_program", "rows[NEC].programs", "n.programs",
// "aside[no height listed].count". A leading n / coverage / rosters_read /
// aside reads the figure's own block; anything else reads its value. A
// list[KEY] step matches a row's conference, state or reason.
function lookup(id, fieldPath) {
  const fig = figure(id);
  const parts = String(fieldPath).split(".");
  const head = parts[0].replace(/\[.*$/, "");
  let node = ["n", "coverage", "rosters_read", "aside"].includes(head) ? fig : fig.value;
  for (const part of parts) {
    const row = part.match(/^(\w+)\[(.+)\]$/);
    if (row) {
      const rows = node && node[row[1]];
      node = Array.isArray(rows)
        ? rows.find((r) => [r.conference, r.state, r.reason].includes(row[2]))
        : undefined;
    } else {
      node = node === null || node === undefined ? undefined : node[part];
    }
    if (node === undefined || node === null) {
      throw new Error(`rosterStats: "${id}" has no "${fieldPath}" (stopped at "${part}")`);
    }
  }
  return node;
}

function defaultFormat(fieldPath, value) {
  const last = String(fieldPath).split(".").pop();
  if (last === "pct" || last.endsWith("_pct")) return "pct";
  if (["mean", "per_program"].includes(last)) return "d1";
  if (typeof value === "number" && !Number.isInteger(value)) return "d1";
  if (typeof value === "number") return "n";
  return "text";
}

function format(value, fmt) {
  switch (fmt) {
    case "pct":
      return `${Number(value).toFixed(1)}%`;
    case "d1":
      return Number(value).toFixed(1);
    case "d2":
      return Number(value).toFixed(2);
    case "n":
      return Number(value).toLocaleString("en-US");
    case "text":
      return String(value);
    default:
      throw new Error(`rosterStats: unknown format "${fmt}"`);
  }
}

function stat(id, fieldPath, fmt) {
  const value = lookup(id, fieldPath);
  return format(value, fmt || defaultFormat(fieldPath, value));
}

// a − b, both read from ids: "the gap is 1.2 players".
function statDiff(idA, pathA, idB, pathB, fmt) {
  const a = Number(lookup(idA, pathA));
  const b = Number(lookup(idB, pathB));
  return format(a - b, fmt || "d1");
}

// a ÷ b as a share: "D1 is 25.0% of all programs".
function statShare(idA, pathA, idB, pathB) {
  return format((100 * Number(lookup(idA, pathA))) / Number(lookup(idB, pathB)), "pct");
}

// a ÷ b as a ratio: "1.54 midfielders per forward".
function statRatio(idA, pathA, idB, pathB) {
  return format(Number(lookup(idA, pathA)) / Number(lookup(idB, pathB)), "d2");
}

function statNote(id) {
  return figure(id).footnote;
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

function longDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

// The sources-block entry for a season: the file, the bundle it was computed
// from and the window that season's rosters were read in (the all-programs
// figure spans every other figure of the season).
function statSource(sport, season) {
  const data = statsFile(sport);
  const fig = figure(`${sport}.${season}.all.all.programs`);
  const read = fig.rosters_read;
  return (
    `RosterWise roster stats — <code>rosterStats/${sport}.json</code>, computed ` +
    `${longDate(data.computed)} from the ${sport} app's own bundle ` +
    `(${data.bundle.label}); ${season} rosters as published on official athletics ` +
    `websites, read ${longDate(read.from)} – ${longDate(read.to)}. Each table's ` +
    `own date is printed beneath it.`
  );
}

// The bundle a sport's figures were computed from: "app-soccer v2.0.2-12".
function statBundle(sport) {
  return statsFile(sport).bundle.label;
}

// The first or last day a season's rosters were read ("from" | "to"), or the
// day the file was computed ("computed"): "April 26, 2026".
function statRead(sport, season, end) {
  if (end === "computed") return longDate(statsFile(sport).computed);
  if (!["from", "to"].includes(end)) throw new Error(`rosterStats: statRead takes from, to or computed, not "${end}"`);
  return longDate(figure(`${sport}.${season}.all.all.programs`).rosters_read[end]);
}

const LEFT_OUT_REASONS = [
  [/mid-transition/, "mid-transition from Division II to Division I"],
  [/provisional/, "roster not yet settled when the app's rosters were read"],
  [/^no .* roster$/, "no roster published for the season"],
  [/out_of_scope/, "NJCAA, outside the scope of the soccer figures"],
  [/season suspended/, "season suspended, with no games played"],
];

// The programs a season's figures leave out, one bullet per school and reason.
function statLeftOut(sport, season) {
  const rows = statsFile(sport).left_out[season];
  if (!rows) throw new Error(`rosterStats: no left_out list for ${sport} ${season}`);
  const GENDER = { M: "men's", W: "women's" };
  const groups = new Map();
  for (const r of rows) {
    const match = LEFT_OUT_REASONS.find(([re]) => re.test(r.reason));
    if (!match) throw new Error(`rosterStats: no wording for left-out reason "${r.reason}"`);
    const key = `${r.school_name}|${r.division}|${match[1]}`;
    if (!groups.has(key)) groups.set(key, { ...r, why: match[1], genders: [] });
    groups.get(key).genders.push(GENDER[r.gender] || r.gender);
  }
  return [...groups.values()]
    .map((g) => `- **${g.school_name}** (${g.division}, ${g.genders.join(" and ")}) — ${g.why}`)
    .join("\n");
}

function markdownTable(header, rows) {
  const line = (cells) => `| ${cells.join(" | ")} |`;
  return [line(header), line(header.map(() => "---")), ...rows.map(line)].join("\n");
}

// Conference rows whose share is in [low, high), highest first, independents
// left out: a conference that crosses a band edge moves table by itself.
function statConferenceTable(id, low, high) {
  const rows = conferenceRows(id)
    .filter((r) => r.pct >= low && (high === undefined || high === null || r.pct < high));
  if (rows.length === 0) {
    throw new Error(`rosterStats: "${id}" has no conference in [${low}, ${high})`);
  }
  return markdownTable(
    ["Conference", "Programs", "Players", "Intl Players", "Intl %"],
    rows.map((r) => [r.conference, format(r.programs, "n"), format(r.players, "n"),
      format(r.international, "n"), format(r.pct, "pct")])
  );
}

function conferenceRows(id) {
  return lookup(id, "rows").filter((r) => r.conference !== "Independent");
}

// How many conferences have a share above `threshold` (independents left out).
function statCountAbove(id, threshold) {
  return format(conferenceRows(id).filter((r) => r.pct > threshold).length, "n");
}

// The lowest to the highest conference share: "2.5% to 33.1%".
function statRowRange(id) {
  const pcts = conferenceRows(id).map((r) => r.pct);
  return `${format(Math.min(...pcts), "pct")} to ${format(Math.max(...pcts), "pct")}`;
}

// The top `count` states by programs, two state/programs pairs per row.
function statStateTable(id, count) {
  const rows = lookup(id, "rows").slice(0, count);
  const half = Math.ceil(rows.length / 2);
  const out = [];
  for (let i = 0; i < half; i++) {
    const left = rows[i];
    const right = rows[i + half];
    out.push([
      STATE_NAMES[left.state] || left.state, format(left.programs, "n"),
      right ? STATE_NAMES[right.state] || right.state : "", right ? format(right.programs, "n") : "",
    ]);
  }
  return markdownTable(["State", "Programs", "State", "Programs"], out);
}

// The state at a rank (1 = most programs), by name: "New York".
function statStateAt(id, rank) {
  const row = lookup(id, "rows")[rank - 1];
  if (!row) throw new Error(`rosterStats: "${id}" has no state at rank ${rank}`);
  return STATE_NAMES[row.state] || row.state;
}

module.exports = {
  stat, statDiff, statShare, statRatio, statNote, statSource,
  statConferenceTable, statCountAbove, statRowRange, statStateTable, statStateAt,
  statBundle, statRead, statLeftOut, lookup, figure,
};
