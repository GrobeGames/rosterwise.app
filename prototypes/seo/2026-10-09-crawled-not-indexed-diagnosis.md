# "Crawled – currently not indexed": diagnosis and plan

**Date:** 2026-10-09 · **Status:** R0 shipped on this branch (see "R0 results"
below). R1–R7 still need Scott's go-ahead.

**Decisions (Scott, 2026-10-09):**
- **No roster data on the free pages.** R2 as written below is rejected; what
  replaces it is open (see the R2 note).
- **Conference hub URL pattern `/soccer/{gender}/conferences/{slug}/` is approved**
  (R3).

GSC lists about 180 programmatic program pages (e.g.
`/soccer/womens/programs/west-liberty-hilltoppers/`,
`/soccer/mens/programs/notre-dame-fighting-irish/`) and a few guides and hubs
(`/soccer/mens/programs/`, `/guide/contacting-coaches/`, `/volleyball/mens/`) as
*Crawled – currently not indexed*. All of them return 200, are self-canonical and
are in the sitemap. So this is Google deciding the pages aren't worth indexing,
not a technical fault. This document measures why.

Reproduce: build to any directory, then
`python3 -I prototypes/seo/measure_program_pages.py <site_dir> src/_data/programs.json <out.json>`.

---

## Summary

The program pages are **IPEDS institution facts wrapped in about 560 words of
boilerplate that every page shares**. The men's and women's pages for a school
are nearly identical. Three-quarters of the pages share a `<title>` with other
pages. The template also states things that are **false on most pages**. Linking
is not the problem: every page is reachable through a plain HTML link. But each
page has exactly one inbound link, from an 800 KB hub. Google is indexing a
sample and declining the rest. About 180 flagged pages is the visible edge of
that, not the full extent.

---

## Findings

### F1. The template prints false statements (accuracy issue, not just SEO)

Measured in the built site (`src/program-pages.njk`):

| Defect | Pages | Where |
|---|---|---|
| "*{School} is a {public / private nonprofit} **research university** founded in …*". The hero adds "research university" unconditionally, but only 2 programs have a `carnegie_classification` (e.g. Belmont, a D1 school without R1/R2 status, is called a research university) | **2,243** (every active page) | `program-pages.njk:153` |
| "**NCAA NAIA**". The division pill and hero hard-code the "NCAA " prefix | **390** | `:139`, `:153`, `:199`; the pipeline meta description (`export_web_programs.py:727`) has the same bug |
| "*how long has **he** been building this program*", on every women's page (and it assumes a male coach on men's pages too) | **1,230** women's (all pages carry the line) | `:380` |
| "*Simon Fraser University is a  research university founded in .*". Empty IPEDS fields render as broken sentences (no IPEDS record: Simon Fraser is Canadian; Stanton is the other) | 4 | `:153`, `:364` |
| Map pin on the wrong spot: `map_pin_left/top` is null for Washington, DC schools. Nunjucks `default()` ignores null, so the pin rendered as `left: %; top: %` (top-left corner of the map) | 13 (all DC programs: Georgetown, Howard, GW, American, Catholic, Gallaudet, UDC, Trinity Washington) | pipeline `compute_map_pin_position` + template |

This is RosterWise's 100%-accuracy rule, independent of Google. It goes first
whatever else is decided. Every fix is either **removing** template text that
isn't backed by data, or a pipeline data fix (DC pins, missing IPEDS).

### F2. 74% of pages share a `<title>` with other pages

`title_tag` is built from the **nickname only** (`export_web_programs.py:721`):
"*Eagles Women's Soccer Recruiting — Program Profile | RosterWise™*".

- **1,666 of 2,264** pages share their title with at least one other page. There
  are 278 distinct duplicated titles. "Eagles Women's" is used by 38 pages,
  "Tigers Women's" by 35, "Bulldogs Women's" by 34.
- The Article JSON-LD `headline` (`program.h1`) is duplicated the same way: 1,667 pages.
- The visible `<h1>` does use `school_name`, so it is fine.

The title is Google's strongest per-page relevance signal. 38 pages sharing one
title look like duplicates before the body is even compared. Nobody searches for
"Eagles women's soccer". People search for "Georgia Southern women's soccer".

### F3. Very little unique text per page

5-word shingles over the visible `<main>` text (scripts, SVG and nav excluded),
active pages (n=2,246):

| Metric | p10 | median | p90 | max |
|---|---|---|---|---|
| Total words | 685 | **695** | 711 | 866 |
| Words in text found on ≤2 pages (this school, both genders) | 78 | **99 (14%)** | 151 | 330 |
| Words in text found on this page only | 7 | **9 (1.3%)** | 76 | 209 |

Even the ~99 "school-specific" words are mostly template sentences with the
school name substituted in. What a page actually contributes is about a dozen
values: division, conference, city, enrollment, acceptance rate, tuition,
locale, and founding year. Nearly all of them are **IPEDS institution data**:
they're identical on the men's and women's page and Google already has them from
College Navigator, Wikipedia and the school's own site. Fields that are specific
to the soccer program are almost empty:

| Field | Programs with it (of 2,264) |
|---|---|
| `notable_history` | 3 |
| `first_season_year` | 3 |
| `ncaa_championships_count` | 3 |
| `home_venue` | 5 |
| `conference_history_note` | 6 |
| `notable_alumni` | 83 |

**Notre Dame men's**, one of the three richest pages (history, venue, title,
alumni, 173 page-only words), is itself on the not-indexed list. So adding a
little history doesn't help. A page needs **data nobody else publishes**, and
the product already has it (F7).

### F4. Men's and women's pages for the same school are near-duplicates

There are 1,005 schools with both a men's and a women's page. Their 5-shingle
Jaccard similarity has a median of **0.84** (p10–p90: 0.839–0.844). The
remaining 16% exists only because every shingle that contains "men's"/"women's"
counts as different. With gender words normalized, the pair is essentially one
page. For comparison, two *unrelated* program pages score 0.62. When Google
picks one of each pair, the other ends up as "crawled – not indexed".

### F5. Internal linking: crawlable, but each page has one link from a huge hub

- **Hub links are plain HTML.** `/soccer/{mens,womens}/programs/` render every
  card as `<a href>` at build time (`src/soccer/mens/programs/index.njk:65`). The
  JS filter only hides cards. **Nothing depends on client-side rendering.**
- **Every program page has exactly one inbound internal link:** its gender hub.
  No guide, methodology page, or other program page links to any program page,
  apart from each page's own breadcrumb.
- **The hubs are huge:** 802 KB, about 1,070 links and about 10,000 words of card
  text, with roughly 40 words of actual prose. One page passing a tiny share of
  link weight to 1,000 children is a weak signal. The hub itself is also flagged
  not indexed, which fits: it reads as a long list.
- **3 orphans:** the `status: "new"` programs (Wayne State W, Pittsburg State W,
  Lincoln M) are left out by the hub's `status == "active"` filter. Google can
  only find them through the sitemap.

### F6. Staleness signals

- `programs.json` was last regenerated **2026-05-20** and is almost five months
  old. Program pages show "*Last verified: May 2026*", the JSON-LD hard-codes
  `datePublished`/`dateModified: 2026-05-17`, and the sitemap has no
  `<lastmod>` for them.
- **Drift between the repos:** the website commit `92ec0f5` (2026-05-18)
  shortened meta descriptions **inside `programs.json`**, but the pipeline
  exporter still generates the long form ("…Program history, academic profile,
  and roster intelligence…"). The next regen silently reverts that fix and
  brings back the "NCAA NAIA" meta text.

### F7. The pipeline already has the data that would make the pages unique

`export_web_programs.py` reads only `programs`, `institutions`, and
`program_changes`. The pipeline DB also has `players`, `coaches`,
`program_season_facts`, and `published_seasons` (the settled-roster gate). Those
tables hold exactly the per-program, per-gender, first-party information that
**no other site publishes in aggregate**, which is the product's whole wedge.
None of it reaches the website.

### F8. Flagged guides and hubs are a different case

| URL | Main-content words | Read |
|---|---|---|
| `/guide/contacting-coaches/` | 3,156 | Substantial, but it's a generic topic with heavy competition. It just became the 301 target for `/guide/questions-to-ask-coaches/`, which consolidates signals |
| `/volleyball/mens/` | 3,177 | Published 2026-08-26, so it's new; normal indexing lag on a young domain |
| `/soccer/mens/programs/` | ~10k (all card text) | See F5: a list page with almost no prose |

These are not thin. They are most likely the **sitewide quality** effect: when
most of a domain's URLs (2,264 of roughly 2,450 built pages) are thin template
pages, Google crawls and indexes the whole site more conservatively. If so,
fixing the program pages is also the fix for the guides.

---

## Recommendations (ranked)

The ranking weighs expected indexing impact against effort. **R0 is not ranked;
it ships first regardless,** because it's an accuracy defect.

### R0. Remove the false template statements (website and pipeline)

- Change `:153` to the conditional form `:364` already uses: say "research
  university" only when `carnegie_classification` is set, otherwise "institution".
- Render the NCAA prefix from data: "NCAA D1" vs. "NAIA". Fix it in the template
  *and* the pipeline meta generator.
- Make the coach question gender-neutral ("How long has the current head coach
  been building this program?").
- Guard every IPEDS-interpolated sentence: if `control`/`year_established` is
  null, leave the clause out.
- Pipeline: compute DC map pins (or leave the map out when there's no pin), and
  remove the hard-coded Notre Dame fallback in the template.
- Effort: small. Risk: none; it only removes or conditions text.

### R1. Unique, school-led titles and headlines (pipeline)

- `title_tag` → "*{School} {Gender} Soccer — Roster & Recruiting Profile |
  RosterWise™*" (check length; drop "RosterWise™" if it goes past about 60 chars).
- `h1` / JSON-LD headline: same change.
- Port the 2026-05-18 meta-description shortening **into the exporter** so a
  regen stops reverting it (F6).
- Effort: small. Impact: high. This removes 1,666 duplicate titles in one regen.

### R2. Per-program roster aggregates from published seasons (pipeline, then template)

> **Rejected 2026-10-09:** Scott ruled out roster data on the free pages. Uniqueness
> has to come from non-roster, program-level first-party fields instead
> (e.g. conference history, program changes, labeled last-season record, home
> venue, first season). Which of these count as "roster data" needs Scott's call
> before an R2 replacement is scoped.

The one change that makes each page different from every other page, men's vs.
women's included. Candidate fields, all first-party and all **gated on
`published_seasons` / settled status**, exactly like the app export:

- Roster size and class-year breakdown (Fr/So/Jr/Sr/Gr) for the last settled season
- Number of home states and countries represented; international share
- Top home states (aggregate counts only, no player names)
- Head coach name and first season (only where `coaches` is verified)
- Last completed season record, **labeled with its season** (records policy)
- "Season shown: 2025-26 (settled)". A non-settled newest season gets its last
  settled season plus the reason, the same rule as the apps

Rules: no aggregator data, no unsettled rosters; a program with no settled
season shows **no** roster block (not zeros). **This is a product decision for
Scott:** the free page has to show enough to be unique without giving away the
paid app. Suggestion: show composition at headline level, and keep
position-level depth, the class-year gap analysis, and RosterFit in the app.
This also creates natural long-tail keywords ("{school} women's soccer roster
international players").

- Effort: medium (export, fact gate, template block). Impact: highest.

### R3. Structured internal linking (website, existing data)

- **Conference hub pages**, e.g. `/soccer/womens/conferences/{conference}/`: one
  static page per conference listing its programs, with a short data-driven
  intro (counts by state, etc.). That gives each program a second, topical
  inbound link and a page that can rank for "{conference} women's soccer".
- On each program page, an **"Other {conference} programs"** block (static
  links) plus a link to the **same school's other-gender page**.
- Include `status: "new"` programs in the hubs (fixes the 3 orphans).
- Optional: split the main hubs by division (D1/D2/D3/NAIA sub-pages) so no list
  page has 1,000 links; the main hub keeps an intro and division and conference
  entry points.
- Effort: medium. Impact: medium-high.

### R4. Cut the shared boilerplate (website)

About 560 of the ~695 words are the same on every page: the generic "Academic
and Institutional Profile" and "Location and Campus Context" paragraphs, the
6-bullet analysis card, "Every Recruiting Journey Is Different", and the CTA.
Shorten them to one tight app pitch plus one sentence, so per-program content
(R2) becomes most of the page instead of 14% of it. Copy edits go through
`rosterwise-content-standards`.

- Effort: small. Impact: medium (it improves the ratio; it doesn't add value on
  its own).

### R5. Real freshness signals (pipeline and website)

Export a per-program `verified_date` (the date of the season data behind the
page) and use it for the "Last verified" line, the JSON-LD `dateModified`, and
the sitemap `<lastmod>` (program pages currently have none, see `CLAUDE.md`
sitemap rules). Regenerate `programs.json` on a schedule, after each settled
monthly pass, instead of once in May.

### R6. Conditional `noindex`: decide after R0–R3, not now

A blanket noindex now would remove the entire programmatic SEO surface just as
it's about to get better. Proposed rule once R2 ships: **index a program page
only if it has a settled roster season** (`indexable = has_published_season`).
Pages without one stay live for users, carry `noindex,follow`, and leave the
sitemap, and they qualify again automatically once the program settles. The
same mechanism as the app gate, so it's one concept instead of two.
Discontinued pages (18) stay indexed; they answer a real query.

### R7. Guides and hubs: no direct action

Re-check `/guide/contacting-coaches/` and `/volleyball/mens/` 6–8 weeks after
R0–R3 ship. If they're still excluded, use "Request indexing" for them and add
links from relevant program and conference pages. The `/soccer/*/programs/` hubs
are covered by R3 (intro prose and division split).

---

## Proposed milestones (each one gets a review and commit checkpoint)

| # | Milestone | Repo | Depends on |
|---|---|---|---|
| M1 | R0 accuracy fixes in the template; re-measure (zero false-claim hits) | website | none |
| M2 | R0 pipeline data fixes (DC pins, NAIA meta) + R1 titles/H1 + meta-shortening ported into exporter; regen `programs.json` | pipeline, then website | none |
| M3 | R3 conference hubs, lateral links, new-program orphans | website | M2 regen |
| M4 | R2 roster aggregates from settled seasons + template block | pipeline, then website | Scott's call on how much to show |
| M5 | R4 boilerplate trim + R5 freshness dates | website (+ small pipeline field) | M4 |
| M6 | Measure in GSC (6–8 weeks), then decide R6 | none | M1–M5 |

## Open questions for Scott

1. **GSC export:** could you export the full *Crawled – currently not indexed*
   list (and the *Indexed* count for `/soccer/*/programs/`)? Comparing the ~180
   against division and field coverage would show whether Google is picking
   pages by division, M/W twin, or at random. The sample of two (one rich D1,
   one bare D2) doesn't tell us.
2. **R2 scope:** how much roster composition should be public on the free pages
   vs. kept in the $39.99 app?
3. **Conference hub URLs:** `/soccer/{gender}/conferences/{slug}/` OK?
4. The program pages exist only for soccer; lacrosse, volleyball and wrestling
   have apps but no program pages. Out of scope here; noted for later.

---

## R0 results (2026-10-09)

The fixes are in `src/program-pages.njk`. `scripts/check-program-claims.js` now
runs in `npm run build` and fails the build if any built program page repeats a
pattern. Counts are pages, out of 2,264:

| Pattern | Before | After |
|---|---|---|
| "research university" without a Carnegie classification | 2,241 | 0 |
| "NCAA NAIA" | 390 | 0 |
| Gendered pronoun for the head coach | 2,246 | 0 |
| Broken sentence from a missing field (`a -sized` ×35, `founded in .` ×8, `located in ,` ×4, hero `, BC` ×4, empty JSON-LD `addressLocality` ×4) | 35 | 0 |
| Map pin with no computed coordinates | 13 | 0 (map omitted) |
| `addressCountry: "US"` on a non-US address (Simon Fraser) | 2 | 0 |
| Governing-body source doesn't match the division (390 NAIA pages cited NCAA.org; 18 discontinued pages with no division) | 408 | 0 |
| IPEDS cited on a page with no IPEDS data | 17 | 0 |
| "is launching" a new program whose first season has already started | 3 | 0 |

All 11,302 JSON-LD blocks on program pages parse.

### Pipeline follow-ups (not fixed here: data, so it gets fixed upstream)

1. **Wrong IPEDS joins: the page shows another school's location and
   institution data.** Programs that share one IPEDS location with a different
   school include:
   - Lincoln (Missouri) → Lincoln (PA)
   - St. Thomas (Minnesota) → St. Thomas (TX)
   - Anderson (Indiana) → Anderson (SC)
   - Bethel (Minnesota) → Bethel (TN)
   - Westminster (Missouri) → Westminster (PA)
   - Benedictine at Mesa → Benedictine (IL)
   - Ottawa-Arizona → Ottawa (KS)
   - Park-Gilbert → Park (MO)
   - IU Columbus → IU Indianapolis
   - Saint Joseph's (Maine) / University of New England
   - Several branch campuses on a parent unit: Vermont State, PennWest,
     Commonwealth (Bloomsburg/Lock Haven/Mansfield), St. Joseph's NY

   Each one needs its `ipeds_unitid` checked. A 100%-accuracy violation on live
   pages. (Detection: same gender, identical lat/long, different athletics domain.)
2. **Wesleyan College (Georgia)** has two women's program records with
   different conferences (CCS and SSAC), so two pages exist for one program.
3. **Discontinued meta descriptions** read "*… men's soccer — None, None, None,
   None.*" on the 18 discontinued pages (R1 scope, exporter).
4. **The exporter's meta description** still hard-codes "NCAA {division}"
   (`export_web_programs.py:727`). The next regen would put "NCAA NAIA" into
   390 descriptions (R1 scope).
5. **DC map pins:** `compute_map_pin_position` returns null for DC. Once fixed,
   the map returns automatically.
6. **Simon Fraser** (Canadian; no IPEDS) has `state_full_name: "BC"`. **Stanton
   University** has no IPEDS match, and its athletics domain `stantonelks.com`
   doesn't match its "Titans" nickname. Verify both.
7. **`status: "new"`** is a May snapshot: Lincoln (2024) and Pittsburg State
   (2024) are in at least their third season. Decide when "new" expires.
