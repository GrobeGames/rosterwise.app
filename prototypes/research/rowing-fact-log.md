# RosterWise Rowing — Fact Log & Audit Trail

**Purpose:** one row per published claim → primary source → date verified → article(s) that use it.
Lives in `prototypes/` so it never deploys (build only emits from `src/`; commit excludes `prototypes/`).
Before flipping any rowing article to live, check every number/date/rule in its copy against a row here.

**Verification date for this pass:** 2026-07-29.

**Sourcing rules honored:** primary/near-primary only (NCAA.org/.com, ncaaorg S3 PDFs, IRA — irarowing.com, ACRA —
americancollegiaterowing.com, USRowing — usrowing.org, individual college athletic-department domains for
program-specific/illustrative claims). NO aggregators and NO recruiting-service blogs (NCSA, Sparks, Ready All
Row, VarsityBio, Crimson Education, RowerAcademy) as sources for facts — several surfaced in research and were
deliberately excluded, even where their underlying claim is plausible; row2k (rowing journalism) used only as
Tier-2 corroboration/context, never as the sole source for a hard number.

**Environment note:** this research pass ran in a sandboxed session where outbound fetches to ncaa.org,
irarowing.com, usrowing.org, and even Wikipedia returned HTTP 403 at the proxy level — every claim below with a
listed NCAA/IRA/ACRA/USRowing URL was corroborated via web-search result snippets that quote or summarize that
page, not by opening and reading the full primary document directly. Treat this as "sourced but not yet
independently opened and re-read," and see "Open items to re-check" at the bottom before publishing anything
here as a hard, quotable fact — this mirrors how the existing wrestling fact log flags some rows "VERIFY against
NCAA primary before stating the exact number."

---

## A. Women's rowing = full NCAA sport (settled structural fact)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Women's rowing is an NCAA championship sport in **Division I, Division II, and Division III**, each with its own NCAA championship | NCAA.org championship pages (ncaa.org/championship/division-i/rowing/, and DII/DIII equivalents); NCAA.com championship-history/selection pages | 2026-07-29 | governing-bodies-explained, womens hub |
| Rowing was the **first sport to graduate NCAA's "Emerging Sports for Women" program to full championship status**, in **1996**; program itself created 1994 following a NCAA Gender Equity Task Force recommendation | NCAA.org, "Emerging Sports for Women" (ncaa.org/championships/emerging-sports-for-women/) — search-snippet corroborated, page states rowing (1996), ice hockey (2000), water polo (2000), bowling (2003), beach volleyball (2015) as graduated sports (women's wrestling, 2025, is a later addition per NCAA.org "NCAA adds women's wrestling as 91st championship") | 2026-07-29 | governing-bodies-explained, womens hub |
| NCAA DIII rowing championship **founded 2002**; fields **8 teams**, each entering a Varsity Eight and Second Varsity Eight | NCAA.com DIII rowing championship coverage; Wikipedia cross-check only (not cited in copy) | 2026-07-29 | governing-bodies-explained, divisions |
| NCAA rowing championships (DI/DII/DIII) are scored across **three boats: Varsity Eight (V8), Second Varsity Eight (2V8), and Varsity Four (V4)** — V8 win = 66 team points, 2V8 win = 44, V4 win = 22, stepped down from there | NCAA.org DI rowing page (ncaa.org/championship/division-i/rowing/) | 2026-07-29 | understanding-boat-classes, governing-bodies-explained |

## B. Men's rowing = NOT an NCAA sport (settled structural fact — the core content wrinkle)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Men's rowing has never been an NCAA-sponsored championship sport** | Consistently reported; corroborated by IRA's own role as the de facto national championship body (see next row) rather than an NCAA press release — treat "not NCAA" as the absence of any NCAA.org rowing page for men, which is itself the evidence | 2026-07-29 | governing-bodies-explained, mens hub |
| **IRA (Intercollegiate Rowing Association)** is the historic national championship body for varsity men's rowing (heavyweight and lightweight); founded **1891** (Cornell, Columbia, Penn); first regatta **1895** on the Hudson at Poughkeepsie, NY; also hosts the women's lightweight rowing national championship | irarowing.com (official site, membership and championship pages) | 2026-07-29 | governing-bodies-explained, ira-vs-acra-recruiting |
| IRA has **64 member institutions**, competing at the Division I or Division III level in men's heavyweight, men's lightweight, or women's lightweight rowing | irarowing.com/membership (search-snippet corroborated) | 2026-07-29 | governing-bodies-explained, ira-vs-acra-recruiting — **re-open irarowing.com/membership directly before publishing this number; only snippet-verified this pass** |
| **ACRA (American Collegiate Rowing Association)** governs club-level collegiate rowing (men's and women's); founded **2008**; formed after the IRA stopped admitting club teams starting **2007**; hosts the annual ACRA Championship Regatta (Oak Ridge, TN) | americancollegiaterowing.com (official site — root page not directly opened this pass, reached via secondary press coverage quoting it) | 2026-07-29 | governing-bodies-explained, ira-vs-acra-recruiting — **re-open the ACRA site directly before publishing any ACRA-sourced number** |
| ACRA reported **~76 competing collegiate club programs** at its 2024 championship | row2k reporting on the 2024 ACRA Championship Regatta (Tier-2 corroboration; treat as ACRA's own reported figure, not an independently audited count) | 2026-07-29 | governing-bodies-explained — **do not state as a current total program count without a fresher ACRA-sourced figure** |

## C. Women's lightweight rowing — governance hybrid

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Women's lightweight rowing is **NCAA-eligibility-governed but its national championship is contested at the IRA regatta**, not a standalone NCAA championship, because too few schools sponsor it to meet the NCAA's championship-sponsorship threshold | irarowing.com championship pages; individual-program athletics releases referencing the IRA women's lightweight championship (e.g. goprincetontigers.com coverage of a 2025 IRA women's lightweight title) | 2026-07-29 | lightweight-vs-openweight — **re-open irarowing.com directly to confirm the exact eligibility/governance language before publishing this as a precise rule; currently sourced to a program athletics release describing the outcome, not to IRA's own rules text** |

## D. Scholarships / House v. NCAA settlement changes (rowing-specific)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Historically, DI women's rowing was an **equivalency sport** capped at the equivalent of **20 full scholarships**, splittable across a larger roster | NCAA.org DI Board of Directors roster-limits release (ncaa.org/news/2025/6/23/media-center-di-board-of-directors-formally-adopts-changes-to-roster-limits.aspx) references the prior sport-specific-cap structure being replaced | 2026-07-29 | scholarships (womens) |
| Following the **House v. NCAA settlement**, the NCAA DI Board of Directors formally replaced sport-specific scholarship caps with **roster-size caps** for schools that opt in, effective 2025-26; **women's rowing's roster cap is reported at 68**, with opted-in schools able to fund scholarships to any rostered athlete up to that cap | ncaa.org/news/2025/6/23/media-center-di-board-of-directors-formally-adopts-changes-to-roster-limits.aspx (structural change, primary); the specific "68" figure corroborated across row2k and multiple sports-business outlets summarizing the settlement's roster-cap table (Tier-2 corroboration for the exact number — **re-confirm the number 68 against the NCAA's own settlement/roster-limit documentation directly before publishing it as a hard figure**) | 2026-07-29 | scholarships (womens), house-settlement cross-link |
| Opt-in is elective per DI school; **opted-out schools keep the prior structure** (larger rosters, prior scholarship-equivalency cap, no direct revenue sharing) | Same NCAA.org release; corroborated structurally by row2k's school-by-school opt-in tracking piece | 2026-07-29 | scholarships (womens) |

## E. Division II women's rowing — sponsorship/grace-period volatility (must stay current)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| NCAA DII bylaws require a **minimum of 35 member schools sponsoring a sport** to sustain an NCAA championship in that division | NCAA.org Division II Management Council release (ncaa.org/news/2025/7/23/media-center-division-ii-management-council-supports-proposal-for-5-seasons-of-competition.aspx) | 2026-07-29 | governing-bodies-explained, divisions |
| DII women's rowing sponsorship fell to **~11 schools in 2024-25**, well under the 35-program minimum, triggering a mandated grace period before automatic discontinuation | Same NCAA.org DII Management Council release; corroborated by row2k feature on the DII discontinuation risk | 2026-07-29 | governing-bodies-explained, divisions |
| **New legislation exempting women's rowing (and women's field hockey) from the 35-program minimum was approved at the 2026 NCAA convention**, preserving the DII championship | Cal Poly Humboldt Athletics coverage of the vote ("NCAA D2 Rowing Championship To Continue," Feb 2026), consistent with the NCAA.org DII Management Council release above | 2026-07-29 | governing-bodies-explained, divisions — **this is the single most current-events-sensitive fact in this log; re-verify every season it's referenced, since older secondary content elsewhere on the web may still say DII rowing was "about to be discontinued"** |

## F. USRowing / junior pipeline (national governing body, primary)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| USRowing runs annual **Youth National Championships** plus regional Youth Championships, under a defined age-category system (U15/U17/U19) | usrowing.org (National Championships and Youth Series Age Categories pages) | 2026-07-29 | club-and-junior-pathways |
| USRowing runs **National Learn to Row Day**, an official beginner-access program open regardless of prior experience | usrowing.org/national-learn-to-row-day | 2026-07-29 | walk-on-and-novice-recruiting — supports the *structural* existence of a no-experience-required on-ramp; does not by itself establish any specific percentage of college rowers who started this way (see Open Items) |

## G. Novice/walk-on structure — program-level, not centrally governed (illustrative, not universal)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Most collegiate regattas run a distinct **"novice" boat category** specifically so athletes new to the sport (including walk-ons with no prior rowing background) can compete against similarly inexperienced crews | Robert Morris University Athletics, "Novice Rowing Information" (rmucolonials.com, official program page) | 2026-07-29 | walk-on-and-novice-recruiting — **program-level source; illustrative that the novice category exists as a structural feature of the sport, not a claim about what share of any given roster is novice** |
| At least one NCAA program (Ohio State) publishes an official "Walk-On Rowing" recruitment page describing walk-on tryouts as a standard, sanctioned entry path | Ohio State Buckeyes Athletics, "Walk-On Rowing" (ohiostatebuckeyes.com) | 2026-07-29 | walk-on-and-novice-recruiting — same caveat: one program's own description, not a sport-wide statistic |

---

## Explicitly excluded / not fit to publish as sourced fact this pass

- **Any specific "X% of college rowers started with no experience" statistic.** Repeated widely across recruiting-service blogs (excluded sources) with no primary USRowing/NCAA statistical citation found. Do **not** publish a specific percentage. If the point needs making, describe it structurally ("walk-on and novice recruiting is unusually central to how rowing rosters are built" — supported by rows F/G above) without a fabricated-precision number.
- **Any specific erg-time threshold** (e.g., "sub-6:20 2k for top DI men's programs"). Only found in excluded recruiting-service blogs. If a specific threshold is wanted in copy, source it to a **named individual program's own recruiting page** (as done for walk-on culture above) and attribute it explicitly to that program, not to "college rowing" generally.
- **The claim that women's rowing rosters/scholarships exist partly to offset football's Title IX roster size.** Widely repeated in commentary/opinion sources, not found on ncaa.org or in a legal/Title IX primary source this pass. Treat as commentary, not fact — do not state it as an NCAA rationale in RosterWise copy (also cuts against the content guardrail against editorializing on governance disputes).
- **Total program counts** (e.g. "~140-158 NCAA women's rowing programs," "~84 men's varsity + ~150 club programs"). Every number found traces to a secondary aggregator (NCSA, College Transitions, Scholarship Stats) and these sources visibly disagree with each other by 5-15%. The actual authoritative source — NCAA's own Sports Sponsorship and Participation Rates Report PDF (ncaaorg.s3.amazonaws.com/research/sportpart/...) — could not be opened in this sandboxed session (too large / blocked fetch). **Do not publish a specific total program count until that PDF (or IRA's/ACRA's own current membership pages) has been opened and read directly.**

## Open items to re-check before/at publish

- Open `irarowing.com/membership` directly and re-confirm the 64-member figure and its heavyweight/lightweight/women's-lightweight breakdown.
- Open `americancollegiaterowing.com` directly (not just secondary coverage) for ACRA's current program count and founding details.
- Open the NCAA's official Sports Sponsorship and Participation Rates Report PDF for authoritative DI/DII/DIII women's rowing program counts, rather than championship-field sizes (22 DI / 6 DII / 8 DIII teams *competed* at 2024 championships — that is a fixed field size, not the number of programs that sponsor the sport).
- Open the NCAA's 2025-26 "Other Sports" DI Recruiting Calendar PDF directly to confirm exact rowing-specific contact/quiet/dead-period dates before publishing a calendar in the women's `recruiting-timeline` article.
- Confirm directly (e.g. against an Ivy League or other IRA program's own compliance page) whether men's programs "voluntarily follow NCAA-style recruiting dates" — this claim currently traces only to a non-primary recruiting-advisory site and should not be stated as settled practice without that confirmation.
- Re-verify the "68" DI women's rowing roster cap directly against NCAA's own House-settlement documentation, not just secondary summaries.
- Re-run the DII sponsorship-grace-period item (§E) each season — this is the fastest-moving fact in this log.
