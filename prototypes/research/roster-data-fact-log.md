# RosterWise Roster Data — Fact Log & Audit Trail

**Purpose:** one row per published claim → primary source → date verified →
article(s) that use it.
Lives in `prototypes/` so it never deploys (build only emits from `src/`).
Before flipping any article to live, check every number/date/rule in its copy
against a row here.

**Verification date for this pass:** 2026-08-26 (re-confirm at each season
rollover — see "Open items").

**Scope of this pass:** content-audit findings **M3** (roster and position
heuristics with no attribution) and **M4** (soccer international percentages
unattributed), from `reports/content-audit-2026-08-25.md`, plus one
out-of-scope international error found while computing M4 (see §G).

**Sourcing rules honored:** every figure below is **first-party RosterWise
data** — the roster dataset built by the `rosterwise-pipeline` repo from
publicly available college athletics websites (Sidearm, Sidearm NextGen,
PrestoSports, and program-published tables). No aggregator, no recruiting
service, no third-party statistics site contributed to any figure here. Under
the source-tier system this is the strongest class of source available for
these claims: RosterWise is the body that *creates* the fact, and it is
publishing it itself.

## Dataset definition — read this before using any row below

| Property | Value |
| --- | --- |
| Database | `rosterwise-pipeline` → `data/rosterwise.db` |
| Season | `roster_season = '2025-26'` — the last **completed** season |
| Capture window | Soccer April–August 2026; volleyball May–August 2026; lacrosse and wrestling June–August 2026 |
| Excluded | Non-players (managers, staff, student assistants — `is_non_player = 1`) |
| Not excluded | **No roster-size floor.** An earlier version of this pass excluded program-seasons under 12 players as presumed incomplete scrapes. That floor was wrong — see "Floor sensitivity" below — and has been removed. |
| Extra filter, position rows only | The program must list a position for **every** rostered player, so a partly-unlabelled roster cannot understate a position group |
| Computation | `prototypes/research/roster-figures-2025-26/compute.py` (committed alongside this log) |

**Why 2025-26 and not 2026-27.** The pipeline already holds partial 2026-27
rosters, but a roster republished for an upcoming season is systematically
biased: graduating seniors roll off first and the incoming class lands weeks or
months later, so the roster reads smaller and more senior-heavy than it will
be. Per the family-wide never-publish-an-incomplete-roster rule, only the last
completed season is used for published figures.

**Method validated against already-published work.** Applying the exclusion
that `soccer/insights/mens-roster-size.md` states in its own methodology note
(Mercyhurst and New Haven, mid-transition D2→D1) reproduces that page's
published figures exactly: 211 D1 men's soccer programs, mean roster 28.9,
range 15–42. The same population reproduces its 1,012-program men's total. The
figures in this log are therefore computed the same way the site's existing
insight pages were.

---

## A. Soccer position depth per roster

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Of 204 D1 men's soccer programs that list a position for every rostered player, **91.7%** carried three or four goalkeepers; the **median program carried 3** | RosterWise 2025-26 roster dataset (see definition above) | 2026-08-26 | soccer/mens/guide/goalkeeper-recruiting |
| Those same 204 D1 men's programs carried a median of **10 midfielders** (IQR **8–12**), **9 defenders** (IQR **8–10**), **6 forwards** (IQR **5–8**) | RosterWise 2025-26 roster dataset | 2026-08-26 | soccer/mens/guide/goalkeeper-recruiting |
| Of 339 D1 women's soccer programs that list a position for every rostered player, the **median program carried 3** goalkeepers and **64.0%** carried exactly three | RosterWise 2025-26 roster dataset | 2026-08-26 | soccer/womens/guide/goalkeeper-recruiting |
| Those same 339 D1 women's programs carried a median of **9 midfielders** (IQR **7–10**), **8 defenders** (IQR **7–10**), **7 forwards** (IQR **6–9**) | RosterWise 2025-26 roster dataset | 2026-08-26 | soccer/womens/guide/goalkeeper-recruiting |

## B. Volleyball position depth per roster

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Across **1,412** women's college volleyball programs that list a position for every rostered player: median **5 outside hitters** (IQR 4–6), **4 middle blockers** (3–5), **3 setters** (2–3) | RosterWise 2025-26 roster dataset | 2026-08-26 | blog/how-to-read-a-college-volleyball-roster |
| The **opposite/right side** label is applied unevenly: **22%** of those 1,412 programs list nobody as an opposite, and most of the rest carry one or two. The median (1) sits on a boundary of a near-flat distribution, so no single figure is published | RosterWise 2025-26 roster dataset | 2026-08-26 | blog/how-to-read-a-college-volleyball-roster |
| Libero and defensive specialist are **not separable** in published rosters: of those 1,412 rosters **766** list anyone as a libero while **1,068** list someone as a defensive specialist. Counted as one back-row group the middle half of programs carry **three or four** (median 3.5) | RosterWise 2025-26 roster dataset | 2026-08-26 | blog/how-to-read-a-college-volleyball-roster |
| Across **238** men's volleyball programs on the same filter the position mix is broadly similar to the women's, but the labelling is reversed: **209** name a libero and only **90** name a defensive specialist | RosterWise 2025-26 roster dataset | 2026-08-26 | blog/how-to-read-a-college-volleyball-roster |

## C. Lacrosse roster size

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Across **77** D1 men's lacrosse programs, the median roster carried **49** players, IQR **47–53** (mean 49.7, range 34–63) | RosterWise 2025-26 roster dataset | 2026-08-26 | lacrosse/mens/guide/recruiting-timeline; lacrosse/mens/guide/scholarships-after-house-settlement |
| Across **133** D1 women's lacrosse programs, the median roster carried **34** players, IQR **31–37** (mean 34.0, range 20–46); **84%** are at or below the 38-player cap | RosterWise 2025-26 roster dataset | 2026-08-26 | lacrosse/womens/guide/scholarships-after-house-settlement |

## D. Sport-agnostic roster size and graduating class

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Across **5,694** program rosters in four sports, median roster size runs from **17** (women's wrestling, women's volleyball) to **42** (men's lacrosse). Full table: men's soccer 31, women's soccer 28; men's volleyball 18, women's 17; men's lacrosse 42, women's 26; men's wrestling 29, women's 17 | RosterWise 2025-26 roster dataset | 2026-08-26 | guide/late-bloomers |
| Across those same 5,694 rosters the median program carried **4 seniors** (including redshirt seniors), IQR **2–7** (mean 4.6, range 0–22) | RosterWise 2025-26 roster dataset | 2026-08-26 | guide/late-bloomers |

## E. D1 men's soccer roster size under the House roster limit

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Across **213** D1 men's soccer programs in the first season played under the new limits, the median roster was **28** players — matching the cap — IQR **27–30** (mean 29.1, range 15–58) | RosterWise 2025-26 roster dataset | 2026-08-26 | guide/house-settlement |

## F. Soccer international composition (M4)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Across **213** D1 men's soccer programs, international players held **2,099 of 6,203** roster spots — **33.8%** | RosterWise 2025-26 roster dataset | 2026-08-26 | soccer/guide/recruiting-myths |
| **56.3%** of D1 men's and **63.9%** of D2 men's soccer programs carry rosters that are **30% or more** international | RosterWise 2025-26 roster dataset | 2026-08-26 | soccer/guide/recruiting-myths |
| Women's international share is lower at **every** division: D1 **12.4%** (vs 33.8% men), D2 **11.3%** (vs 37.3%), D3 **2.1%** (vs 11.2%), NAIA **20.0%** (vs 48.2%) | RosterWise 2025-26 roster dataset | 2026-08-26 | soccer/guide/recruiting-myths |
| Across all **1,012** men's soccer programs (D1, D2, D3, NAIA), **9,504** players are international — **28.7%** overall | RosterWise 2025-26 roster dataset | 2026-08-26 | soccer/insights/mens-international-conferences |
| The international flag is not being set on unresolved hometowns: **12,756 of 12,910** flagged players (98.8%) carry a resolved country code | RosterWise 2025-26 roster dataset | 2026-08-26 | (integrity check — supports every row in this section) |
| Across **211** D1 men's soccer programs (excluding Mercyhurst and New Haven, mid-transition D2→D1), international players hold **2,050 of 6,099** roster spots — **33.6%**. Conference shares run from **11.3%** (Patriot League) to **62.3%** (American Conference) | RosterWise 2025-26 roster dataset | 2026-08-26 | soccer/insights/mens-international-conferences |
| All **22** D1 conference rows on that page — programs, players, international players, percentage — were regenerated and then machine-verified row by row against the database: **0 mismatches**, and the row totals reconcile to the division total (210 tabled programs + 1 independent = 211) | RosterWise 2025-26 roster dataset | 2026-08-26 | soccer/insights/mens-international-conferences |
| Division totals for men's soccer: D2 **37.3%**, D3 **11.2%**, NAIA **48.2%** | RosterWise 2025-26 roster dataset | 2026-08-26 | soccer/insights/mens-international-conferences |

## G. Corrections made in this pass

Recorded under the corrections protocol. Each of these is a figure RosterWise
had **published** that the dataset contradicts.

| Page | Was published | Actual | Nature of the error |
| --- | --- | --- | --- |
| `soccer/guide/recruiting-myths.md` | "the national average for men's D1 soccer is roughly **20-25%** international" | **33.8%** | Understated by 9–14 points. The page used the figure to reassure families that international recruiting is a limited factor; the real share is about one roster spot in three |
| `soccer/guide/recruiting-myths.md` | "**Some** D1 and D2 programs recruit heavily from overseas — 30% or more" | **56.3%** of D1 and **63.9%** of D2 men's programs | "Some" described the majority |
| `soccer/mens/guide/goalkeeper-recruiting.md` | defenders "**6-8**" per roster | median **9**, IQR **8–10**; only 40.2% of D1 men's programs fall in 6–8 | Understated |
| `soccer/mens/guide/goalkeeper-recruiting.md` | midfielders "often **8-10**" | median **10**, IQR **8–12**; only 46.1% fall in 8–10 | Band too narrow |
| `soccer/womens/guide/goalkeeper-recruiting.md` | defenders "**6-8**", midfielders "**8-10**" | defenders median **8** (IQR 7–10), midfielders median **9** (IQR 7–10) | Understated |
| `blog/how-to-read-a-college-volleyball-roster.md` | outside hitters "**3-5**"; opposites "typically **2-3**" | OH median **5** (IQR 4–6); OP median **2** (IQR 1–2) | OH understated; OP overstated |
| `guide/late-bloomers.md` | "a class of seniors graduates — usually **4 to 8** athletes" | median **4**, IQR **2–7**; only 49.3% fall in 4–8 | Overstated at the top of the range |
| `guide/late-bloomers.md` | "a typical college roster has somewhere between **20 and 35** athletes" | Only 54.1% of rosters fall in that band; the median ranges from **17** (volleyball) to **31** (lacrosse) by sport | A single band across sports concealed a factor-of-two difference |
| `soccer/insights/mens-international-conferences.md` | "across all 1,012 **men's** programs … **12,838** players are classified as international — **19.1%** overall" | **9,504** international, **28.7%** | The 12,838 count and the 19.1% denominator were both men's **and** women's totals, presented under a men's-only label. Found while computing M4; corrected in this pass |

## Claims cut for lack of supporting data

| Page | Claim cut | Why |
| --- | --- | --- |
| `guide/house-settlement.md` | "meaning roughly **20 walk-ons** had roster spots" | **Not computable.** RosterWise holds no player-level scholarship or athletic-aid data, so the number of walk-ons on a roster cannot be derived from our dataset. Cut rather than approximated |
| `guide/house-settlement.md` | a pre-settlement men's soccer program "carried **30 or more** players" | Our roster data begins with 2025-26, the first season played **under** the new caps. We hold no pre-House rosters, so we cannot describe pre-House roster sizes. Sentence restructured to state only the sourced rule (no roster cap existed) |
| `lacrosse/mens/guide/recruiting-timeline.md`, `lacrosse/mens/guide/scholarships-after-house-settlement.md` | pre-settlement D1 men's lacrosse rosters "typically **50+** players" | Same reason — the count described the pre-House era, which our data does not cover. Replaced with the 2025-26 figure, explicitly labelled as post-settlement |
| `lacrosse/womens/guide/scholarships-after-house-settlement.md` | pre-settlement D1 women's lacrosse rosters "typically **30-35+** players" | Same reason. Replaced with the 2025-26 figure, explicitly labelled as post-settlement |
| `soccer/insights/mens-roster-size.md` | pre-settlement D1 men's soccer programs "carried **30 or more** players, including walk-ons" | Found by tracing the blast radius of the `guide/house-settlement.md` cut — the same unsupported pre-House claim. We hold no pre-House rosters. Restructured to state only the sourced rule (no roster cap existed) and to say plainly that our data cannot size those rosters |
| `blog/how-to-read-a-college-volleyball-roster.md` | separate per-roster counts for **libero** ("1-2") and **defensive specialist** ("1-3") | Programs use the two labels interchangeably, so the split is a labelling artifact rather than a real distribution. Published as one combined back-row figure instead |

### Floor sensitivity — why there is no roster-size floor

The first version of this pass excluded program-seasons under 12 players,
assuming such rosters were incomplete scrapes. Testing that assumption at floors
of 0, 8, 12, 15 and 18 showed two things.

**First, the floor was almost entirely inert.** Every soccer and lacrosse figure
published from this log — D1 position medians and IQRs, D1 roster sizes, the
33.8% D1 men's international share — is *identical* at every floor. The floor was
doing no work on the figures it was supposed to protect.

**Second, where it did bite, it biased the result.** The sub-12 rosters are
overwhelmingly women's wrestling (50 of 73) and they are not failed scrapes:
they return `scrape_status = success` and their rosters are all-freshman —
Westminster (Missouri) 1 wrestler, Penn State Altoona 4 (4 freshmen), PennWest
Edinboro 3 (3 freshmen). These are **real first-year programs in a rapidly
expanding sport**, and excluding them pushed the wrestling median from 26 to 28.
A size floor cannot distinguish a new program from a broken scrape, so it was
removed rather than tuned.

Two published figures changed as a result and were corrected the same day:
women's volleyball opposites (the median sits on a boundary of a near-flat
distribution and is now reported as a shape, not a number) and the
`guide/late-bloomers.md` roster-size line, which also moved from
gender-blended per-sport medians to per-gender medians — the gender gap within a
sport (men's lacrosse 42 vs women's 26) turned out to be larger than the gap
between several sports, so the blended figure was hiding the more useful fact.

### Open items to re-check before/at publish

- **Every figure in this log is seasonal and expires at the 2026-27 rollover.**
  When 2026-27 rosters settle, re-run `compute.py` and update every row plus
  every page listed in its `Articles` column in one commit. Do not update pages
  piecemeal — a half-updated set is how contradictions get published.
- ~~**`soccer/insights/mens-international-conferences.md` is only partly refreshed.**~~
  **Resolved 2026-08-26.** The whole page was regenerated from the current
  dataset, so its division totals and all four conference tables now come from a
  single capture. Every one of the 22 conference rows was machine-verified
  against the database (0 mismatches) and the rows reconcile to the division
  total. The headline 33.6% D1 figure was unchanged by the refresh, but several
  conferences moved — the American Conference from 58.8% to 62.3%, the Metro
  Atlantic from 39.7% to 37.5%, the Northeast Conference from 33.3% to 27.0%,
  the Southern Conference from 29.1% to 32.5% — and two conferences had been
  carrying pre-normalization names (CAA → Coastal Athletic Association, NEC →
  Northeast Conference). One D1 program competing as an independent, previously
  absent from the page, is now accounted for in the reconciliation note.
  **Its sister page `soccer/insights/mens-roster-size.md` and the other five
  `soccer/insights/` pages have not been regenerated** and remain at their
  original capture — they should get the same treatment in a dedicated pass.
- **The pipeline's roster-settled machinery is not populated.** The
  `completeness` and `coverage_state` columns on `roster_observations` are empty
  for every row, so the settled/not-settled status that the family-wide rule
  depends on cannot be used as a population filter. This is a **pipeline** gap,
  not a website one: populating those columns is the durable fix, and until it
  lands every figure here rests on the full-population definition above. When it
  is populated, re-run `compute.py` with the real settled filter and confirm the
  figures do not move.
- **Wrestling carries no position data at all** (weight-class sport — 100% of
  `position_normalized` is blank for wrestling). It contributes only to the
  sport-agnostic roster-size row in §D. Any future position-depth claim about
  wrestling has no data behind it today.
- ~~**D3 women's soccer international share is 2.1%** — re-confirm.~~
  **Resolved 2026-08-26.** Verified: 244 of 11,333 D3 women are flagged
  international (2.15%), **all 244 carry a resolved country code** (zero
  unresolved), hometown is missing on only 0.7% of the population, and the
  country mix is plausible (Canada 51, Lebanon 19, England/GB 18, Sweden 17).
  The internationals concentrate at a handful of programs (North Park 13,
  Principia 6). The figure is real, not a normalization artifact.
