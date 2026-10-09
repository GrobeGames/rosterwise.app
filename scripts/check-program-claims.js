#!/usr/bin/env node
/**
 * Program-page claim check for rosterwise.app
 *
 * Runs as part of the build. Scans every built program page against its
 * record in src/_data/programs.json and fails if the template rendered a
 * claim the data does not back (RosterWise's 100% data-accuracy rule).
 * Each pattern below was a real defect found in the 2026-10-09 audit
 * (prototypes/seo/2026-10-09-crawled-not-indexed-diagnosis.md, F1).
 *
 * Usage: node scripts/check-program-claims.js [siteDir]   (default: _site)
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE_ROOT = path.resolve(process.argv[2] || path.join(ROOT, "_site"));
const programs = require(path.join(ROOT, "src", "_data", "programs.json"));

// US states + DC + territories IPEDS covers. Anything else is not a US address.
const US_CODES = new Set(
  ("AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS " +
    "MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI " +
    "WY PR GU VI AS MP").split(" ")
);

const isNcaa = (p) => ["D1", "D2", "D3"].includes(p.division);

// Visible text of <main>, without scripts/styles/SVG.
function mainText(html) {
  const m = html.match(/<main[\s\S]*?<\/main>/);
  return (m ? m[0] : html)
    .replace(/<(script|style|svg)[^>]*>[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&middot;/g, "·")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");
}

// Each check returns true when the page is WRONG.
const CHECKS = [
  {
    label: '"research university" without a Carnegie classification',
    bad: (p, html, text) =>
      !p.carnegie_classification && /research university/i.test(text),
  },
  {
    label: '"NCAA NAIA" (NAIA is not an NCAA division)',
    bad: (p, html) => /NCAA\s+NAIA/.test(html),
  },
  {
    label: "gendered pronoun assuming a coach's gender",
    bad: (p, html, text) => /\b(he|she|him|his|her)\b/i.test(templateText(p, text)),
  },
  {
    label: "broken sentence from a missing field",
    bad: (p, html, text) =>
      /\bis an? (institution|research university)\b|founded in [.,]|\ban? -sized|located in ,|the their conference|\(\s*\)/.test(text) ||
      /&middot;\s*(<\/p>|&middot;)|school-name">\s*,|"(name|addressLocality)":\s*"(,[^"]*)?"/.test(html),
  },
  {
    label: 'double period after an abbreviated name ("Conf..")',
    bad: (p, html, text) => /[^.]\.\.(?!\.)/.test(text),
  },
  {
    label: "map pin rendered without computed pin coordinates (default position)",
    bad: (p, html) =>
      /class="program-map-pin"/.test(html) &&
      (p.map_pin_left == null || p.map_pin_top == null),
  },
  {
    label: 'addressCountry "US" on a non-US address',
    bad: (p, html) => /"addressCountry":\s*"US"/.test(html) && !US_CODES.has(p.state),
  },
  {
    label: "governing-body source does not match the program's division",
    bad: (p, html) =>
      (/href="https:\/\/www\.ncaa\.org"/.test(html) && !isNcaa(p)) ||
      (/href="https:\/\/www\.naia\.org"/.test(html) && p.division !== "NAIA"),
  },
  {
    label: "IPEDS cited on a page with no IPEDS data",
    bad: (p, html) => /nces\.ed\.gov\/ipeds/.test(html) && !p.control,
  },
  {
    label: '"is launching" for a new program (not true once its first season starts)',
    bad: (p, html, text) => /is launching/.test(text),
  },
];

// Free-text data fields may legitimately contain pronouns (e.g. a history
// blurb about a person); the pronoun check is about template copy only.
function templateText(p, text) {
  let t = text;
  for (const s of [p.notable_history, p.discontinuation_context, ...(p.notable_alumni || [])]) {
    if (s) t = t.split(s).join(" ");
  }
  return t;
}

const failures = CHECKS.map(() => []);
let scanned = 0;
for (const p of programs) {
  const file = path.join(SITE_ROOT, p.page_url, "index.html");
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  const text = mainText(html);
  scanned++;
  CHECKS.forEach((c, i) => {
    if (c.bad(p, html, text)) failures[i].push(p.page_url);
  });
}

console.log(`Program-page claim check (${scanned} pages):`);
let errors = 0;
CHECKS.forEach((c, i) => {
  const n = failures[i].length;
  if (n === 0) {
    console.log(`  ✓ ${c.label}`);
  } else {
    errors++;
    console.error(`  ✗ FAIL: ${c.label} — ${n} page(s), e.g. ${failures[i].slice(0, 3).join(", ")}`);
  }
});

if (scanned === 0) {
  console.error("  ✗ FAIL: no program pages found — is the site built?");
  errors++;
}
if (errors > 0) process.exit(1);
