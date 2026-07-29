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

**2026-07-29, second pass (comparison against primary pages):** re-checked this fact log's claims and open items
via a second, independent round of web-search triangulation, specifically aimed at the rows flagged for direct
primary-document confirmation. Confirmed the network block is a genuine org-level egress policy denial (proxy
status endpoint recorded `connect_rejected` — "gateway answered 403 to CONNECT (policy denial or upstream
failure)" — for `www.ncaa.org:443`), not a fixable client/TLS issue, so a true "open the page and read it"
verification still could not be done this pass either. Results of the second triangulation are folded into the
rows below and the "Open items" list is updated to reflect what tightened vs. what's still unresolved.

**2026-07-29, third pass (deeper search push, still no direct fetch access):** pushed harder on program-count and
IRA-detail queries specifically. This surfaced richer IRA event/selection detail (folded into §B) but also
**widened, not narrowed, the spread on total program counts** — see the revised "Explicitly excluded" section.
Treat the third pass as confirming that these particular numbers cannot be responsibly resolved by search alone;
they need a direct primary-document read, not more searching.

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
| IRA has **64 member institutions** (per two independent searches quoting irarowing.com/membership) — but a **third, separately-worded search returned "65 member schools"** instead, competing at the Division I or Division III level in men's heavyweight, men's lightweight, or women's lightweight rowing | irarowing.com/membership — **unresolved 64-vs-65 discrepancy, one integer apart, most likely either a stale-vs-current snapshot or a rounding/wording difference in two different search-engine summaries of the same page** — do not publish either number as confirmed until the page itself is read | 2026-07-29 (3 passes, discrepant) | governing-bodies-explained, ira-vs-acra-recruiting — **re-open irarowing.com/membership directly; do not pick 64 or 65 without reading the page** |
| IRA's championship structure, per its own selection-criteria/general-info page: **heavyweight men's national champions crowned across 4 events; lightweight men's champions across 3 events; women's lightweight rowing added to the IRA regatta in 1997 with 3 events; an IRA Division III championship added in 2022 with 2 events.** For the 2026 championship specifically: 24 member institutions contest the Men's Varsity Heavyweight Eight, 10 contest Men's Varsity Lightweight, 8 contest Men's Division III, and 8 contest Women's Varsity Lightweight; automatic heavyweight-men qualifiers named include Boston University, Columbia, Cornell, Georgetown, Holy Cross, Navy, Syracuse, and Wisconsin | irarowing.com/general-information ("Selection criteria, team points, and general info") — search-engine summary of this specific IRA page, corroborated by row2k's "IRA Confirms Bids for 2026 National Championships" coverage of the same selection process; richer and more specific than the membership-count row above, but still not independently opened and read in full | 2026-07-29 (3rd pass) | governing-bodies-explained, understanding-boat-classes, ira-vs-acra-recruiting — confirms the 1997 start date for the women's-lightweight/IRA hybrid referenced in §C |
| **ACRA (American Collegiate Rowing Association)** governs club-level collegiate rowing (men's and women's); founded **2008** by then-Michigan men's rowing head coach Gregg Hartsuff, under the General Not for Profit Association Act of 1986; formed after the IRA stopped admitting club teams starting **2007**; hosts the annual ACRA Championship Regatta (Oak Ridge, TN); governance structure includes a board with a president/secretary/treasurer and six geographic-region reps (Great Lakes, Mid-Atlantic, Northeast, Plains, South, West Coast) | americancollegiaterowing.com (official site — root page still not directly opened; the founding/legal/board-structure detail traces to Wikipedia and row2k's "ACRA Enters a New Era" history feature, both describing but not quoting ACRA's own site) | 2026-07-29 (2 passes) | governing-bodies-explained, ira-vs-acra-recruiting — **re-open the ACRA site directly before publishing any ACRA-sourced number or the legal/board detail as a quoted fact** |
| ACRA's total club-program membership is reported as **"over 140 college club programs nationwide"** (a broader, standing-membership figure), distinct from **"~76 competing collegiate club programs"** specifically reported as the field size at the **2024 ACRA Championship Regatta** (a single event's turnout, not total membership) | Membership figure: Wikipedia's ACRA article (cross-check only, not independently confirmed against ACRA's own site). Event-field figure: row2k reporting on the 2024 ACRA Championship Regatta | 2026-07-29 (2 passes) | governing-bodies-explained — **these are two different metrics and must not be conflated in copy ("140+ member programs" vs. "76 programs entered the 2024 championship"); neither is confirmed against ACRA's own site yet** |

## C. Women's lightweight rowing — governance hybrid

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Women's lightweight rowing is **NCAA-eligibility-governed but its national championship is contested at the IRA regatta**, not a standalone NCAA championship, because too few schools sponsor it to meet the NCAA's championship-sponsorship threshold | irarowing.com championship pages; individual-program athletics releases referencing the IRA women's lightweight championship (e.g. goprincetontigers.com coverage of a 2025 IRA women's lightweight title) | 2026-07-29 | lightweight-vs-openweight — **re-open irarowing.com directly to confirm the exact eligibility/governance language before publishing this as a precise rule; currently sourced to a program athletics release describing the outcome, not to IRA's own rules text** |

## D. Women's rowing NCAA recruiting calendar (2025-26)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Rowing has no sport-specific NCAA DI recruiting calendar; it falls under the **"Other Sports" recruiting calendar**, 2025-26 edition: recruiting period **Aug 1, 2025 – July 31, 2026**; **dead period Dec 22, 2025 – Jan 2, 2026**; **fall National Letter of Intent/signing period Nov 10–13, 2025** | Primary PDF exists at `ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2025-26/2025-26D1Rec_OtherSportsRecruitingCalendar.pdf`, confirmed as a real, correctly-titled document via two independent search passes; the specific dates above were returned by search-engine summarization that draws on (among other results) an NCSA recruiting-rules page describing that PDF's contents — **NCSA is on this log's excluded-source list for facts, so these exact dates are corroborated-but-not-primary-sourced**; the same Dec 22–Jan 2 dead-period date range was also independently reported in the first research pass via a different secondary site (XFactor Admissions), which is a second independent convergence but still not a primary read | 2026-07-29 (2 independent secondary sources converge, PDF itself not yet opened) | recruiting-timeline (womens) — **do not publish these exact dates as directly NCAA-sourced until the PDF itself has been opened and read; until then, phrase the article as "the NCAA's Other Sports recruiting calendar governs rowing" without stating the dates as independently confirmed, or open the PDF first** |

## E. Scholarships / House v. NCAA settlement changes (rowing-specific)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Historically, DI women's rowing was an **equivalency sport** capped at the equivalent of **20 full scholarships**, splittable across a larger roster | NCAA.org DI Board of Directors roster-limits release (ncaa.org/news/2025/6/23/media-center-di-board-of-directors-formally-adopts-changes-to-roster-limits.aspx) references the prior sport-specific-cap structure being replaced | 2026-07-29 | scholarships (womens) |
| Following the **House v. NCAA settlement**, the NCAA DI Board of Directors formally replaced sport-specific scholarship caps with **roster-size caps** for schools that opt in, effective 2025-26; **women's rowing's roster cap is reported at 68**, with opted-in schools able to fund scholarships to any rostered athlete up to that cap | ncaa.org/news/2025/6/23/media-center-di-board-of-directors-formally-adopts-changes-to-roster-limits.aspx (structural change, primary); the specific "68" figure corroborated across row2k and multiple sports-business outlets summarizing the settlement's roster-cap table (Tier-2 corroboration for the exact number — **re-confirm the number 68 against the NCAA's own settlement/roster-limit documentation directly before publishing it as a hard figure**) | 2026-07-29 | scholarships (womens), house-settlement cross-link |
| Opt-in is elective per DI school; **opted-out schools keep the prior structure** (larger rosters, prior scholarship-equivalency cap, no direct revenue sharing) | Same NCAA.org release; corroborated structurally by row2k's school-by-school opt-in tracking piece | 2026-07-29 | scholarships (womens) |

## F. Division II women's rowing — sponsorship/grace-period volatility (must stay current)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| NCAA DII bylaws require a **minimum of 35 member schools sponsoring a sport** to sustain an NCAA championship in that division | NCAA.org Division II Management Council release (ncaa.org/news/2025/7/23/media-center-division-ii-management-council-supports-proposal-for-5-seasons-of-competition.aspx) | 2026-07-29 | governing-bodies-explained, divisions |
| DII women's rowing sponsorship fell to **~11 schools in 2024-25**, well under the 35-program minimum, triggering a mandated grace period before automatic discontinuation | Same NCAA.org DII Management Council release; corroborated by row2k feature on the DII discontinuation risk; **independently returned a third time, unchanged, in the 2026-07-29 comparison pass** — this is now the most consistently corroborated number in the entire log | 2026-07-29 (3 passes) | governing-bodies-explained, divisions |
| **New legislation exempting women's rowing (and women's field hockey) from the 35-program minimum was approved at the 2026 NCAA convention**, preserving the DII championship | Cal Poly Humboldt Athletics coverage of the vote ("NCAA D2 Rowing Championship To Continue," Feb 2026), consistent with the NCAA.org DII Management Council release above | 2026-07-29 | governing-bodies-explained, divisions — **this is the single most current-events-sensitive fact in this log; re-verify every season it's referenced, since older secondary content elsewhere on the web may still say DII rowing was "about to be discontinued"** |

## G. USRowing / junior pipeline (national governing body, primary)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| USRowing runs annual **Youth National Championships** plus regional Youth Championships, under a defined age-category system (U15/U17/U19) | usrowing.org (National Championships and Youth Series Age Categories pages) | 2026-07-29 | club-and-junior-pathways |
| USRowing runs **National Learn to Row Day**, an official beginner-access program open regardless of prior experience | usrowing.org/national-learn-to-row-day | 2026-07-29 | walk-on-and-novice-recruiting — supports the *structural* existence of a no-experience-required on-ramp; does not by itself establish any specific percentage of college rowers who started this way (see Open Items) |

## H. Novice/walk-on structure — program-level, not centrally governed (illustrative, not universal)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Most collegiate regattas run a distinct **"novice" boat category** specifically so athletes new to the sport (including walk-ons with no prior rowing background) can compete against similarly inexperienced crews | Robert Morris University Athletics, "Novice Rowing Information" (rmucolonials.com, official program page) | 2026-07-29 | walk-on-and-novice-recruiting — **program-level source; illustrative that the novice category exists as a structural feature of the sport, not a claim about what share of any given roster is novice** |
| At least one NCAA program (Ohio State) publishes an official "Walk-On Rowing" recruitment page describing walk-on tryouts as a standard, sanctioned entry path | Ohio State Buckeyes Athletics, "Walk-On Rowing" (ohiostatebuckeyes.com) | 2026-07-29 | walk-on-and-novice-recruiting — same caveat: one program's own description, not a sport-wide statistic |

---

## Explicitly excluded / not fit to publish as sourced fact this pass

- **Any specific "X% of college rowers started with no experience" statistic.** Repeated widely across recruiting-service blogs (excluded sources) with no primary USRowing/NCAA statistical citation found. Do **not** publish a specific percentage. If the point needs making, describe it structurally ("walk-on and novice recruiting is unusually central to how rowing rosters are built" — supported by rows F/G above) without a fabricated-precision number.
- **Any specific erg-time threshold** (e.g., "sub-6:20 2k for top DI men's programs"). Only found in excluded recruiting-service blogs. If a specific threshold is wanted in copy, source it to a **named individual program's own recruiting page** (as done for walk-on culture above) and attribute it explicitly to that program, not to "college rowing" generally.
- **The claim that women's rowing rosters/scholarships exist partly to offset football's Title IX roster size.** Widely repeated in commentary/opinion sources, not found on ncaa.org or in a legal/Title IX primary source this pass. Treat as commentary, not fact — do not state it as an NCAA rationale in RosterWise copy (also cuts against the content guardrail against editorializing on governance disputes).
- **Total program counts** — after three search passes this is worse, not better, and needs to be reported as an unresolved spread rather than a single number:
  - **DI women's rowing sponsoring institutions**: "89" (one search-summarized source) vs. "96 Universities... in 33 Conferences" (a different search-summarized source) — 7-program gap, no way to tell which (if either) is current from search alone.
  - **Total across all NCAA divisions**: "more than 140 colleges" (2025, one phrasing) vs. "approximately 156-158" (a different phrasing) vs. an explicit "~158" figure that on closer read **spans NCAA Division I/II/III *plus* NAIA *and* junior-college levels** — i.e. not even the same universe as a pure-NCAA count, and easy to mis-cite as "158 NCAA programs" if the NAIA/JUCO inclusion isn't caught.
  - Every one of these numbers traces to a secondary aggregator (NCSA, College Transitions, Scholarship Stats, Productive Recruit, or unattributed search-engine synthesis) and they visibly disagree with each other by 5-20% — and, worse, don't always agree on what population they're even counting. The actual authoritative source — NCAA's own Sports Sponsorship and Participation Rates Report PDF (`ncaaorg.s3.amazonaws.com/research/sportpart/...`) — could not be opened in this sandboxed session across three passes. **Do not publish any specific total program count, for any division or combination of divisions, until that PDF has been opened and read directly.** If a rough sense of scale is needed in copy before then, describe it qualitatively ("dozens of DI programs, a smaller number in DII, a comparable number in DIII") rather than citing a number this log can't stand behind.

## Open items to re-check before/at publish

**Blocked, not just unfinished:** this environment's egress policy denies outbound connections to ncaa.org,
irarowing.com, americancollegiaterowing.com, and usrowing.org outright (confirmed via the proxy's own status
endpoint — `connect_rejected`, "policy denial or upstream failure" — not a certificate/timeout/tooling problem).
A second independent web-search triangulation pass (2026-07-29) was run against every item below instead; results
are folded into the sections above. **None of the items below can be closed from this environment** — they need
either a session with an unrestricted egress policy, or manual verification by a human opening the URL directly.

- **Highest priority — worse after three passes, not better:** the NCAA's official Sports Sponsorship and
  Participation Rates Report PDF (`ncaaorg.s3.amazonaws.com/research/sportpart/...`) for authoritative DI/DII/DIII
  women's rowing program *sponsorship* counts. Three search passes found only championship-*field* sizes (22 DI /
  6 DII / 8 DIII teams competed at 2024 championships — a fixed field size, not the number of programs that
  sponsor the sport), mutually-inconsistent secondary totals (DI: 89 vs. 96; all-division: "140+" vs. "~158"), and
  one figure that turned out to silently include NAIA/JUCO alongside NCAA. **This one has stopped improving with
  more searching — it needs the PDF opened directly, not another query.**
- Open `irarowing.com/membership` directly — now a **64-vs-65 discrepancy** across three passes (see §B), on top
  of the heavyweight/lightweight/women's-lightweight breakdown still not found. A third pass did surface good
  detail from `irarowing.com/general-information` (event counts, 2026 qualifier counts per event) — that page is
  worth opening too, alongside `/membership`.
- Open `americancollegiaterowing.com` directly — the second pass surfaced a **discrepancy needing resolution, not
  just confirmation**: "140+ total club programs" (membership) vs. "~76 programs" (2024 championship field) are
  different metrics that got conflated in some secondary sources. Confirm ACRA's own current total membership
  figure and use the *event* figure only when specifically describing that one event.
- Open the NCAA's 2025-26 "Other Sports" DI Recruiting Calendar PDF directly — two independent secondary sources
  now converge on the same dates (recruiting period Aug 1, 2025–July 31, 2026; dead period Dec 22–Jan 2; fall
  signing Nov 10–13, 2025), raising confidence, but one of those sources is NCSA, which this log otherwise treats
  as an excluded source — the dates should still be read from the primary PDF before being stated as NCAA-sourced
  in copy.
- Confirm directly (e.g. against an Ivy League or other IRA program's own compliance page) whether men's programs
  "voluntarily follow NCAA-style recruiting dates" — still traces only to a non-primary recruiting-advisory site
  after two passes; do not state as settled practice without that confirmation.
- Re-verify the "68" DI women's rowing roster cap directly against NCAA's own House-settlement documentation —
  unchanged after the second pass, still only secondary-summary corroborated.
- Re-run the DII sponsorship-grace-period item (§F) each season — this is the fastest-moving fact in this log,
  though it's now the *most* consistently corroborated number here (identical across three independent searches).
