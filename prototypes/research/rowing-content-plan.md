# RosterWise Rowing — Content Plan

Companion to `prototypes/research/rowing-fact-log.md` (read that first — every
claim below should trace to a row there, or be flagged the same way it's
flagged there). Produced via the `rosterwise-sport-content-research` skill.
The `rosterwise-sport-evaluation` skill already scored women's rowing "GO"
and men's rowing "GO WITH CAVEATS — portfolio completeness," and flagged the
governance split this plan is built around: **women's rowing is a full NCAA
sport (D1/D2/D3); men's rowing is governed entirely outside the NCAA, by the
IRA (varsity) and ACRA (club).**

## Why this shapes the plan

That asymmetry is more extreme than any sport currently on the site —
even wrestling, the closest precedent for asymmetric mens/womens content
depth, is NCAA-governed on both sides. Two consequences:

1. **Women's rowing gets the fuller guide set** (NCAA recruiting calendar,
   scholarship/roster-cap detail, lightweight-vs-openweight, junior
   pathways) — it's a full NCAA sport with real scholarship stakes.
2. **Men's rowing gets a leaner, honest set** — IRA-vs-ACRA recruiting,
   walk-on pathways, and an explicit note that athletic scholarships are
   rare on the men's side (per the sport-evaluation skill's own finding).
   Padding this out to match women's depth would overstate how
   institutionalized men's rowing recruiting actually is.

Both share a **gender-agnostic pillar set** — the governance explainer,
boat classes, and erg scores apply the same way to both sides and are each
independently the single most-searched point of confusion for a family new
to the sport.

## Content architecture

```
src/rowing/
├── index.md                               hub.njk — sport landing; states the NCAA/IRA/ACRA split in the first paragraph
├── guide/                                  gender-agnostic, rowing-wide
│   ├── index.md
│   ├── governing-bodies-explained.md       PILLAR — NCAA (women, D1/D2/D3) vs IRA (men, varsity) vs ACRA (men, club); the #1 confusion point
│   ├── understanding-boat-classes.md       V8 / 2V8 / V4, sweep vs. sculling, lightweight vs. openweight, how team scoring works
│   ├── erg-scores-explained.md             the Concept2 2k test as recruiting's primary objective screen (structural description; no fabricated-precision thresholds — see fact log)
│   ├── walk-on-and-novice-recruiting.md    the novice-boat-category pathway; no invented statistics on prevalence
│   ├── coxswain-recruiting.md              distinct evaluation track (academics + communication, no erg-equivalent metric)
│   └── evaluating-programs.md              reading a program's boat depth/lineup, adapted from soccer's evaluating-programs pattern
├── methodology/
│   ├── index.md
│   ├── erg-score-benchmarks.md             how RosterFit calibrates by boat class/division — explicitly notes no central published threshold exists; describes RosterWise's own approach
│   ├── boat-class-depth.md                 analogous to soccer's roster-composition — depth across V8/2V8/V4
│   ├── coach-tenure.md                     reused pattern (same shape as other sports' methodology pages)
│   ├── recruiting-geography.md             reused pattern, adapted to rowing's actual geographic concentration once sourced
│   └── governance-tier-model.md            discloses the bespoke NCAA/IRA/ACRA tier dimension RosterFit uses instead of a single division enum
├── mens/
│   ├── index.md                            leads with the governance disclaimer — not an NCAA sport, scholarships uncommon
│   └── guide/
│       ├── ira-vs-acra-recruiting.md       how the recruiting process differs varsity (IRA) vs. club (ACRA)
│       ├── walk-on-pathways.md             men's-side specific framing
│       └── what-coaches-look-for.md        explicitly notes scholarship scarcity
└── womens/
    ├── index.md
    └── guide/
        ├── recruiting-timeline.md          NCAA calendar specifics for rowing — dates pending the fact log's "open item" primary re-check
        ├── scholarships.md                 equivalency history + 2025-26 roster-cap change, dated and sourced, opt-in/opt-out explained
        ├── what-coaches-look-for.md
        ├── club-and-junior-pathways.md     USRowing youth pipeline
        ├── lightweight-vs-openweight.md    the NCAA-eligible / IRA-championship hybrid explainer
        └── id-camps-and-recruiting-events.md
```

**Cross-links, not duplication.** Every rowing guide links out to the
existing 21 sport-agnostic guides in `src/guide/` (scholarships mechanics,
transfer portal, visits, red flags, questionnaires, highlight video, House
settlement, NIL, etc.) rather than re-explaining them. Three of those
universal guides assume an NCAA D1/D2/D3/NAIA/NJCAA structure that doesn't
hold for men's rowing — `division-differences`, `ncaa-recruiting-rules`,
`njcaa-juco-explained` — the rowing pages should note the exception inline
(especially on the `mens/` side) and link out rather than duplicate; no
edits to those universal files are needed.

**No numbered guide count is enumerated here beyond what's listed above.**
Resist the urge to pad the tree with topics that don't have a sourced
reason to exist yet (e.g., a men's `recruiting-timeline.md` was
deliberately *not* added as its own page — per the fact log, whether IRA
programs formally follow NCAA-style dates isn't yet confirmed against a
primary source; `ira-vs-acra-recruiting.md` covers the men's-side process
without asserting a specific calendar structure it can't yet back up).

## Content guardrails applied

- No editorializing on the NCAA-vs-IRA governance split — state what it is,
  not an opinion on whether men's rowing should be an NCAA sport.
- No competitor names.
- No mental-health content.
- Lightweight/openweight content (`understanding-boat-classes`,
  `lightweight-vs-openweight`) stays strictly regulatory: what the weight
  categories are and how they're structured, never weight-management or
  weight-cutting technique guidance — same guardrail the site already
  applies to wrestling's weight classes.

## Site plumbing

1. `src/_data/apps.json` — add a `rowing` entry following the existing
   **softball** template (`live: false`, `appId: null`, `appStoreUrl: null`,
   `downloadPage: null`, `hub: null`, `scenario: []`), with
   `analysisAxis`/`axisVerb` reflecting boat-class/erg-tier rather than
   position or weight class, so `content.njk`'s CTA resolution renders
   "coming soon" instead of a dead link on any published rowing page.
2. `src/_includes/sidebar.njk` — manually add a `rowing` block once Phase 1
   pages exist, mirroring wrestling's `data-sidebar-group` structure
   (`rowing`, `-mens`, `-womens`, `-guides`, `-methodology`). A
   `/assets/rosterwise-rowing-app-logo.png` asset is needed and doesn't
   exist yet.
3. `programs/` hub pages and `programs.json` rowing records are **out of
   scope for this plan** — `programs.json` is generated by the separate
   `pipeline` repo per this repo's CLAUDE.md; rowing program data has to be
   exported there first. This plan covers hand-authored guide/methodology
   content only.

## Suggested build order

1. **Pillar pages first**: `governing-bodies-explained`,
   `understanding-boat-classes`, `erg-scores-explained`, plus women's
   `recruiting-timeline` and `scholarships` (highest search-intent value).
2. Remaining gender-specific guides (men's leaner set, then women's
   remainder).
3. Methodology section (needs `governance-tier-model` settled first, since
   the other methodology pages build on that framework).
4. Site plumbing (`apps.json`, sidebar nav).
5. Defer `programs/` + `programs.json` until the pipeline repo exports
   rowing program records.

## Before any page goes live

Work through the fact log's "Open items to re-check before/at publish"
list — several numbers here (IRA membership count, ACRA program count,
total NCAA program counts, the exact women's rowing recruiting-calendar
dates, the "68" roster-cap figure) were corroborated via search snippets in
a sandboxed session that could not open the primary documents directly, and
need a direct read of ncaa.org / irarowing.com / americancollegiaterowing.com
before being published as settled, citable facts.
