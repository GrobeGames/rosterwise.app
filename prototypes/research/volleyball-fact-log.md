# RosterWise Volleyball — Fact Log & Audit Trail

**Purpose:** one row per published claim → primary source → date verified →
article(s) that use it.
Lives in `prototypes/` so it never deploys (build only emits from `src/`).
Before flipping any article to live, check every number/date/rule in its copy
against a row here.

**Verification date for this pass:** 2026-08-26 (re-confirm fast-moving claims
each season).

**Scope:** all 31 pages under `src/volleyball/` plus
`src/blog/how-to-read-a-college-volleyball-roster.md`. Built retroactively
against already-published copy in response to finding **H1** of
`reports/content-audit-2026-08-25.md`. Because the copy came first, this is an
**audit of published claims**, not a pre-draft research log.

**Sourcing rules honored:** primary/near-primary only — the 2026-27 NCAA
Division I, II and III Manuals as served by the NCAA Legislative Services
Database (LSDBi; the full manuals download as PDFs from
`https://web3.ncaa.org/lsdbi/reports/getReport/90008` (D1), `/90010` (D2) and
`/90011` (D3) — the fastest route to any bylaw, and not known to the earlier
remediation passes), NCAA compliance and recruiting documents on
`ncaaorg.s3.amazonaws.com`, NCAA.org media-center releases, NCAA.org's own
membership and sport-sponsorship tables, the NAIA Official & Policy Handbook on
NAIA.org, NJCAA.org's own published divisional structure, USA Volleyball's own
site, and the NFHS participation survey release. NO aggregators and NO
recruiting-service blogs were used or read. **Yahoo Sports appears in a live
`sources:` block on this content set** supporting roster limits — logged as a
Tier violation in §K, not relied on here.

**Sibling logs that already carry volleyball claims** — do not duplicate rows:
`roster-data-fact-log.md` §B (RosterWise position-depth figures),
`audit-c1-c2-fact-log.md` §E (the UCLA championship-title correction),
`audit-m1-m2-fact-log.md` §B (D1 transfer windows),
`governance-counts-fact-log.md` (NCAA/NAIA membership method).

**Volleyball is, on the whole, the strongest of the three sports audited.** The
women's recruiting calendar is reproduced from the NCAA's own 2026-27 document
without a single error; the men's "all other sports" calendar reasoning is
correct and unusually careful; `volleyball/mens/guide/national-collegiate-championship`
executes §5.6 honest-uncertainty exactly. The problems cluster in three places:
program counts, position-depth bands that were corrected on one page and left
standing on four others, and three women's pages whose entire `sources:` block
is an unnamed synthesis.

---

## A. NCAA Division I roster limits and pre-settlement scholarship structure

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **D1 men's volleyball roster limit = 18; D1 women's volleyball roster limit = 18.** Applies to a D1 institution "that is a member of a defendant conference or opts in to the House settlement." | **2026-27 NCAA Division I Manual, Bylaw 17.2 "Roster Limitations," p.194** (Adopted 6/6/25 effective 7/1/25), read via NCAA LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90008`): "Men's Volleyball 18 / Women's Volleyball 18" | 2026-08-26 | volleyball/index, volleyball/mens/index, volleyball/womens/index, volleyball/guide/evaluating-programs, volleyball/guide/reading-rosters, volleyball/guide/walk-on-pathways, volleyball/guide/juco-pathway, volleyball/mens/guide/scholarships, volleyball/womens/guide/scholarships, volleyball/mens/guide/recruiting-timeline, volleyball/womens/guide/recruiting-timeline, volleyball/mens/guide/position-specific-recruiting, volleyball/mens/guide/international-recruiting, volleyball/womens/guide/international-recruiting, volleyball/methodology/roster-composition, blog/how-to-read-a-college-volleyball-roster |
| **D1 women's volleyball WAS a head-count sport, limited to 12 full scholarships.** Verified — unlike the equivalent soccer claim, this one is correct. | **NCAA Division I Board of Directors, "Anticipated Actions Contingent Upon Court Final Approval of the House v. NCAA Settlement" (April 2025), "Bylaw 15 House Settlement Proposal," p.13** — reproduces pre-House Bylaw **15.5.2.1 Head-Count Sports Other Than Football and Basketball**: "Women's Gymnastics 12 / Women's Tennis 8 / **Women's Volleyball 12**." Corroborated by the **2025-26 NCAA Division I Squad Lists and Instructions (Form 25-2), p.2**, which routes women's volleyball to the head-count form 25-2c | 2026-08-26 | volleyball/index, volleyball/womens/index, volleyball/guide/evaluating-programs, volleyball/guide/walk-on-pathways, volleyball/guide/juco-pathway, volleyball/womens/guide/scholarships, volleyball/womens/guide/recruiting-timeline, volleyball/mens/guide/scholarships |
| **D1 men's volleyball was an equivalency sport limited to 4.5 equivalencies.** | Same document, **p.14**, Bylaw **15.5.3.1.1 Equivalency Sports — Men's Sports**: "Volleyball 4.5" | 2026-08-26 | volleyball/index, volleyball/mens/index, volleyball/mens/guide/scholarships |
| ❌ **PROPAGATED SOCCER ERROR — `volleyball/womens/guide/scholarships.md:45` lists "women's soccer" among head-count sports.** Women's soccer was an equivalency sport at 14.0. The complete head-count list is women's gymnastics, women's tennis, women's volleyball (plus football and basketball). See `soccer-fact-log.md` §B. | Refuted by NCAA D1 Bylaws 15.5.2.1 and 15.5.3.1.2 | 2026-08-26 | volleyball/womens/guide/scholarships:45 |
| **INDEPENDENT VERIFICATION (2026-08-26).** Volleyball's head-count claim was re-checked by a separate researcher working blind — no access to this log, the site copy, or any conclusion reached here — and asked to adjudicate two candidate statements without being told which was which. It independently confirmed **women's volleyball = head count, 12; men's volleyball = equivalency, 4.5**, and rejected the alternative that both were equivalency. The volleyball copy on this point was correct and stands. | Blind primary-source verification pass, 2026-08-26 | 2026-08-26 | *(methodology row)* |
| **REFINEMENT — no bylaw required a full award in a head-count sport.** The cap counted **athletes, not dollars**: under Bylaw 15.02.3 any athlete receiving countable aid was a "counter," so a partial award still consumed a whole slot. That is why head-count awards were in practice full — it was never a rule. Copy reading "each scholarship was a full scholarship" has been rewritten to say what the bylaw actually does. | 2026-27 and 2021-22 NCAA D1 Manuals, Bylaw 15.02.3 | 2026-08-26 | volleyball/womens/guide/scholarships, volleyball/womens/guide/recruiting-timeline |
| **REFINEMENT — the complete D1 head-count list is six sports:** FBS football (85), men's basketball (13), women's basketball (15), women's gymnastics (12), women's tennis (8), women's volleyball (12). FCS football was an **equivalency** sport (63 equivalencies alongside an 85-counter limit, Bylaw 15.5.6.2). | 2021-22 NCAA D1 Manual, Bylaws 15.5.2.1, 15.5.5.1-2, 15.5.6.1-2 | 2026-08-26 | volleyball/womens/guide/scholarships |
| **REFINEMENT — what governs a non-opt-in school.** NCAA House Q&A **B2**: "the Division I Manual no longer includes institutional financial aid limits for any sport," and non-participating institutions are directed to the 2024-25 Manual. **B4**: such a school "may provide up to the value of institutional financial aid limit provided by the 2024-25 legislation (as measured in equivalencies) in head count sports without triggering opting in" — so in a former head-count sport the old 12 is now a **value** threshold that can be spread across more athletes as partials, not a count of full rides. **A11** confirms the removal is division-wide. **A16**: roster size at a non-opt-in school is a conference or institutional matter, not national legislation. | NCAA House Settlement Q&A, Questions B2, B4, A11, A16 | 2026-08-26 | volleyball/womens/guide/scholarships, volleyball/mens/guide/scholarships, volleyball/guide/walk-on-pathways, volleyball/guide/evaluating-programs |
| **A better primary is available:** the **2021-22 NCAA Division I Manual** is still posted at `https://ncaaorg.s3.amazonaws.com/compliance/sar/d1/2021-22D1_NCAA-Manual.pdf` with Bylaw 15.5 in force, matching the April 2025 struck text number-for-number. The 2024-25 Manual itself 404s on that host. | 2021-22 NCAA D1 Manual | 2026-08-26 | *(sourcing note)* |
| **As of the 2026-27 D1 Manual there are no sport-specific financial-aid limits in Division I at all** — former Bylaw 15.5 is gone entirely; Article 15 now ends at 15.3. | 2026-27 NCAA D1 Manual, Article 15 TOC and full-text search, read via LSDBi | 2026-08-26 | ⚠️ **not reflected in copy.** Five volleyball pages state that non-opt-in D1 programs "still operate with 12 head count scholarships." See Open items. |
| Designated Student-Athletes: athletes on a 2024-25 roster or recruited before **April 7, 2025** may be exempted from the roster limit for their remaining eligibility. | 2026-27 NCAA D1 Manual, Bylaw 17.2.2.2; NCAA House Q&A (2026-02-11); NCAA.org, "DI Board formally adopts changes to roster limits" (2025-06-23) | 2026-08-26 | volleyball/mens/guide/scholarships |
| ⚠️ **PENDING — "Schools from the five defendant conferences (the ACC, Big Ten, Big 12, Pac-12, and SEC) are automatically bound"; "Power conference schools (SEC, Big Ten, ACC, Big 12) opted in. Other D1 conferences had until June 30, 2025 to decide."** Neither House Q&A carries the June 30 date or the conference list; both were read in full. Note the two pages also name **different** conference sets (one includes the Pac-12, the other does not). | Absence confirmed in the June 2025 and February 2026 House Q&A documents | 2026-08-26 (primary not found) | volleyball/mens/guide/scholarships, volleyball/womens/guide/scholarships, volleyball/womens/guide/recruiting-timeline |

## B. NCAA Division II, Division III, NAIA and NJCAA scholarship rules

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **D2 women's volleyball = 8.0 equivalencies.** | **2026-27 NCAA Division II Manual, Bylaw 15.4.2.1.2, p.163**, via LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90010`): "Volleyball 8.0" | 2026-08-26 | volleyball/guide/evaluating-programs, volleyball/guide/walk-on-pathways, volleyball/womens/guide/scholarships, volleyball/womens/guide/recruiting-timeline, volleyball/womens/guide/international-recruiting |
| **D2 men's volleyball = 4.5 equivalencies.** | Same Manual, Bylaw **15.4.2.1.1, p.163**: "Volleyball 4.5" | 2026-08-26 | volleyball/mens/guide/scholarships |
| **Division II has no head-count sports** — every D2 sport is equivalency. | 2026-27 NCAA D2 Manual, Bylaw 15.4.2 | 2026-08-26 | volleyball/mens/guide/scholarships, volleyball/womens/guide/scholarships |
| **D3 institutions may not award financial aid on the basis of athletics.** | **2026-27 NCAA Division III Manual, Bylaw 15.01.3**, via LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90011`): "A member institution shall not award financial aid to any student on the basis of athletics leadership, ability, participation or performance." | 2026-08-26 | volleyball/guide/recruiting-myths, volleyball/guide/walk-on-pathways, volleyball/mens/guide/national-collegiate-championship, volleyball/mens/guide/scholarships, volleyball/womens/guide/scholarships, volleyball/womens/guide/recruiting-timeline, volleyball/womens/guide/international-recruiting |
| **D3 official visits may not occur earlier than January 1 of junior year.** | 2026-27 NCAA D3 Manual, Bylaw **13.6.1.1.1** | 2026-08-26 | volleyball/womens/guide/recruiting-timeline |
| **D3 in-person off-campus contact waits until the prospect completes sophomore year; Division III legislates no recruiting calendar** (the D3 Manual contains zero instances of "dead period" or "contact period"). | 2026-27 NCAA D3 Manual, Bylaw 13.1.1.1 and full-text search | 2026-08-26 | volleyball/mens/guide/recruiting-timeline, volleyball/womens/guide/recruiting-timeline |
| **NAIA volleyball: upper limit of 8 institutional aid equivalencies per team.** The NAIA table is not split by gender. | **NAIA Official & Policy Handbook 2026-2027, Section XIII.H "Upper Limits for Institutional Aid," p.122** (`https://www.naia.org/wp-content/uploads/2026/07/2026_Official_Handbook.pdf`): "Volleyball 8" | 2026-08-26 | volleyball/guide/evaluating-programs, volleyball/guide/walk-on-pathways, volleyball/womens/guide/scholarships, volleyball/womens/guide/recruiting-timeline |
| ❌ **CONTRADICTED BY THE NAIA'S OWN HANDBOOK — "NAIA: NAIA schools may offer athletic scholarships. Scholarship limits vary by institution and conference."** They do not vary. The NAIA publishes one fixed upper limit per sport, and for volleyball it is **8**. Four other volleyball pages state the 8 correctly; this page tells families no fixed limit exists. | NAIA Handbook 2026-2027, XIII.H | 2026-08-26 | volleyball/mens/guide/scholarships:65 |
| **The NAIA imposes no roster limit:** "No limit will be placed on the number of student-athletes on any varsity roster, nor on the combined total number of all varsity and junior varsity athletes." | NAIA Handbook 2026-2027, Section XIII.D, p.120 | 2026-08-26 | *(not stated in copy)* |
| **NAIA aid limits carry academic exemptions:** aid to continuing students with a 3.60 cumulative GPA or in the top 10% of their class does not count against the limit; 3.30-3.59 or top 11-25% counts half; entering freshmen earn exemptions on SAT/ACT, GPA or class-rank thresholds. | NAIA Handbook 2026-2027, Section XIII.G, pp.121-122 | 2026-08-26 | ⚠️ **not in copy** on any page that states the 8 |
| **NJCAA scholarship structure by division**, quoted verbatim from the NJCAA: **Division I** — "Colleges may grant full athletic scholarships (tuition, books, fees, room & board), up to $250 in course required supplies, and transportation costs one time per academic year to and from the college by direct route. Each sport has limits on the number of scholarships that can be granted." **Division II** — "Colleges may grant athletic scholarships, but scholarships are limited to tuition, books, fees, and up to $250 in course required supplies." **Division III** — "Colleges are not permitted to offer any athletic scholarships." Plus: "If a sport does not have the numbers to break into separate divisions, it operates under the Division I scholarship guidelines." | **NJCAA.org, "Divisional Structure" (`https://www.njcaa.org/member_colleges/Divisional_Structure`)**, "DIVISION SCHOLARSHIP GUIDELINES" table. The page is client-rendered and returns an empty body to a plain fetch; read via a rendering browser on the verification date. | 2026-08-26 | volleyball/guide/juco-pathway — **and it also settles `soccer/guide/junior-college`'s three-tier claim** |
| ❌ **CONTRADICTED — "NJCAA: Junior college men's volleyball programs may offer scholarships at the discretion of the institution. NJCAA scholarship structures are less standardized than NCAA divisions."** The NJCAA publishes a fixed three-division structure with per-sport scholarship limits (row above). The site's own JUCO page describes that structure correctly. | NJCAA.org, "Divisional Structure" | 2026-08-26 | volleyball/mens/guide/scholarships:67 |
| ⚠️ **PENDING — "the NJCAA governs athletics at over 500 two-year community and junior colleges nationwide," attributed "Per NJCAA.org."** The figure could not be found on NJCAA.org: its About/Overview paths 404 and the home page carries no membership count. **`soccer/guide/junior-college` publishes "more than 400" for the same body** — a live contradiction between two RosterWise pages, neither sourced. | NJCAA.org searched 2026-08-26 — count not located | 2026-08-26 (primary not found) | volleyball/guide/juco-pathway:7 — and soccer/guide/junior-college |

## C. 2026-27 NCAA Division I recruiting calendar — women's volleyball

Primary source for this entire section: **"2026–27 NCAA Recruiting Calendar,
Division I Women's Volleyball," updated July 30, 2026**
(`https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27D1Rec_WVBRecruitingCalendar.pdf`)
— the exact URL the page already cites. **Every date on the page reproduces the
calendar exactly. No discrepancies.**

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Quiet Period August 1–31, 2026** | 2026-27 D1 WVB calendar | 2026-08-26 | volleyball/womens/guide/recruiting-timeline |
| **Contact Period September 1 – November 30, 2026**, containing a **Dead Period November 9–12, 2026** | Same | 2026-08-26 | volleyball/womens/guide/recruiting-timeline |
| **Quiet Period December 1, 2026 – January 14, 2027**, containing a **Dead Period December 17, 2026 – January 1, 2027** — "Thursday of the NCAA Division I Women's Volleyball Championship through the Sunday immediately following the championship" | Same | 2026-08-26 | volleyball/womens/guide/recruiting-timeline |
| **Contact Period January 15 – July 31, 2027**, interrupted by **Quiet Periods March 1–4, March 8–11, March 15–18, March 22–25, March 29 – April 1, April 5–8, and May 1 – June 3, 2027** | Same — all seven quiet periods present and correct | 2026-08-26 | volleyball/womens/guide/recruiting-timeline |
| Calendar detail **not** in copy: during the Dec 1 – Jan 14 quiet period, "Coaches attending the American Volleyball Coaches Association annual awards banquet may have incidental contact with prospective collegiate student-athletes being honored at the banquet, provided no recruiting conversation occurs." The championship dead period also caps evaluation at one day and one event within a 30-mile radius. | Same | 2026-08-26 | *(logged for completeness)* |

## D. 2026-27 NCAA Division I recruiting calendar — men's volleyball

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Men's volleyball is not named separately on the NCAA's Division I recruiting calendar — it falls into the residual "all other sports" bucket. For 2026-27 that means a single dead period, November 9–12, 2026.** Verified: men's volleyball has no block of its own on the calendar, and the ALL OTHER SPORTS block carries exactly one entry — "Dead Period NOV 9–12 … Monday through Thursday of the initial week for the fall signing date for athletics aid agreements." **This is the most carefully reasoned rule statement in the three-sport set.** | **"2026–27 NCAA Recruiting Calendar — Other Division I Sports," updated August 4, 2026** (`https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026%E2%80%9327D1Rec_OtherRecruitingCalendar.pdf`). **Trap:** that filename uses an **en dash**; the hyphenated URL 404s. | 2026-08-26 | volleyball/mens/guide/recruiting-timeline, volleyball/mens/index |
| **Only football and basketball have an early signing period; all other Division I and II sports have a single signing window** whose final date is "based on institutional policy for awarding scholarships." | **NCAA Signing Dates PDF** at the 2026-27 path (`ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27Rec_SigningDates.pdf`) | 2026-08-26 | volleyball/womens/guide/recruiting-timeline |
| ⚠️ **PARTIAL — the women's volleyball signing period "begins on the second Wednesday in November."** Consistent with two Tier 1 documents but the rule text was not found; and **the NCAA has published the 2025-26 signing-dates table at the 2026-27 URL** (the file is titled "2025-26 NCAA SIGNING DATES"). | Signing Dates PDF + Other D1 Sports calendar | 2026-08-26 (rule text pending) | volleyball/womens/guide/recruiting-timeline |
| **D1 coaches may not make telephone calls to a volleyball prospect, or send recruiting materials or electronic correspondence, before June 15 at the conclusion of sophomore year; in-person off-campus contact and official (expense-paid) visits open August 1 at the beginning of junior year.** Volleyball appears in none of the sport-specific exception lists, so all four general rules apply. | **2026-27 NCAA Division I Manual**, via NCAA LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90008`): **Bylaw 13.1.3.1** (telephone calls — "may not be made before June 15 at the conclusion of the individual's sophomore year in high school"), **Bylaw 13.4.1** (recruiting materials and electronic correspondence — same date), **Bylaw 13.1.1.1** (off-campus contacts — "before August 1 at the beginning of the individual's junior year in high school"), **Bylaw 13.6.2.1.1** (expense-paid visits — August 1 of junior year) | 2026-08-26 | volleyball/index, volleyball/mens/index, volleyball/mens/guide/recruiting-timeline, volleyball/womens/guide/recruiting-timeline, volleyball/mens/guide/id-camps, volleyball/womens/guide/id-camps, volleyball/mens/guide/international-recruiting, volleyball/mens/guide/club-pathways |
| ⚠️ **IMPRECISE — "D2 coaches can contact prospective student-athletes at any time … no June 15 restriction."** Division II does have a June 15 gate: recruiting materials may be sent to freshmen/sophomores "at anytime," but official visits and "in-person, off-campus recruiting contacts" are keyed to "After June 15, immediately preceding a prospective student-athlete's junior year in high school." | **"Division II Coaches Off-Campus Recruiting Guide 2026–27," updated July 30, 2026** (`ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27D2REC_RecGuide.pdf`) | 2026-08-26 | volleyball/womens/guide/recruiting-timeline (D2 section) |
| **The NLI was eliminated in October 2024 and replaced by the Written Offer of Athletics Aid.** | Carried from `wrestling-fact-log.md` §C (NCAA D1 Council action, Oct 2024). **Not independently re-verified on this pass.** | 2026-08-26 (primary re-read pending) | volleyball/guide/recruiting-myths, volleyball/mens/guide/recruiting-timeline, volleyball/womens/guide/recruiting-timeline, volleyball/womens/guide/scholarships |

## E. Program counts and sport sponsorship

Primary source for this section: **NCAA.org, "NCAA Membership Composition and
Sport Sponsorship" → "2025-26 NCAA Projected Sport Sponsorship: As of September
2025"** (`https://www.ncaa.org/about-us/membership-directory/membership-composition-and-sport-sponsorship/`).
The NCAA's own caveat travels with every figure: *"These are projected numbers
only; actual numbers may change."*

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **NCAA men's volleyball, projected 2025-26: D1 = 31, D2 = 43, D3 = 132, NCAA total = 206.** | NCAA.org projected sport-sponsorship table, "Volleyball" row, Men's Teams columns | 2026-08-26 | contradicts the counts published on volleyball/mens/index — see the next three rows |
| **NCAA women's volleyball, projected 2025-26: D1 = 348, D2 = 288, D3 = 419, NCAA total = 1,055.** | Same table, Women's Teams columns | 2026-08-26 | volleyball/index, volleyball/mens/index |
| ❌ **PUBLISHED COUNT CONTRADICTED — "NCAA Division II: Roughly 33 programs."** The NCAA projects **43** D2 men's volleyball teams for 2025-26 — about 30% more. The error has a downstream consequence: the page frames D2 men's volleyball as "closer to the threshold for a separate D2 championship than it has been historically," when at 43 it is already **above** the 35-school threshold (see §F). | NCAA.org projected sport-sponsorship table | 2026-08-26 | volleyball/mens/index (program-counts list), volleyball/mens/guide/national-collegiate-championship |
| ❌ **PUBLISHED COUNT CONTRADICTED — "roughly 200 men's college volleyball programs across NCAA D1, D2, D3, NAIA and NJCAA."** The NCAA alone projects **206**; add the NAIA (~40-50 per the same page) and NJCAA (~18 per the same page) and the true total is materially higher. "Roughly 200" is repeated as a load-bearing framing device — "the math is tight," "fewer than 200 college men's volleyball programs" — across five pages. | NCAA.org projected sport-sponsorship table | 2026-08-26 | volleyball/index, volleyball/mens/index (×3), volleyball/mens/guide/recruiting-timeline, volleyball/mens/guide/international-recruiting, volleyball/mens/guide/recruiting-video (×2) |
| ⚠️ **"NCAA Division I: 32 programs in 2026 (up from 29 in 2023-2025)."** The NCAA's 2025-26 projection is **31**. The site's 32 may be a later count, but it is unsourced and it disagrees with the only Tier 1 figure available. | NCAA.org projected sport-sponsorship table (31) | 2026-08-26 (site figure unsourced) | volleyball/mens/index, volleyball/mens/guide/national-collegiate-championship |
| ⚠️ **"roughly 340 D1 [women's] programs"** — the NCAA projects **348**. | NCAA.org projected sport-sponsorship table | 2026-08-26 | volleyball/mens/index |
| ⚠️ **PENDING — "more than 1,700 women's college volleyball programs in the United States across NCAA D1, D2, D3, NAIA, and NJCAA."** NCAA total is 1,055; the NAIA and NJCAA components were not sourced. Plausible, unsourced. | NCAA table covers the NCAA share only | 2026-08-26 (unsourced) | volleyball/index, volleyball/mens/index (×2) |
| ⚠️ **PENDING — "NAIA: approximately 40-50 programs"; "NJCAA: approximately 18 programs, primarily in the Northeast"; "D3: the 2026 D3 championship featured a 21-team field, expanded from 19 in 2025."** Neither governing body publishes a men's volleyball sponsorship count that this pass could reach (the same gap `governance-counts-fact-log.md` §E records for NAIA/NJCAA lacrosse). | NAIA.org and NJCAA.org — per-sport sponsorship counts not published | 2026-08-26 (primary not found) | volleyball/mens/index, volleyball/mens/guide/national-collegiate-championship |
| ⚠️ **PENDING — "From 1986 to 2021, the number of D1 schools sponsoring men's volleyball fluctuated between 20 and 24. Since 2022 … 26 in 2022, 29 in 2023-2025, and 32 in 2026."** A 40-year sponsorship series. The NCAA publishes a Sport Sponsorship and Participation Rates Report that could support it; it was not used. | not sourced on the page or here | 2026-08-26 (primary not found) | volleyball/mens/index |

## F. Championship structure — men's volleyball

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **A 2024-25 NCAA rule change reduced the minimum number of D2 sponsoring schools required to establish or maintain a D2 championship from 50 to 35.** Stated verbatim: delegates approved a proposal "to amend the number of sponsoring schools needed to establish and/or maintain a Division II championship to 35 for both men's and women's sports, effective Aug. 1. Currently, the minimum sports sponsorship requirement is 50 for men's sports and 40 for women's sports," with a **three-year grace period** for a sport that falls below 35. | **NCAA.org, "Division II approves football scheduling proposal, pair of championship changes," January 13, 2024** (`https://www.ncaa.org/media-center-division-ii-approves-football-scheduling-proposal-pair-of-championship-changes/`) | 2026-08-26 | volleyball/mens/index, volleyball/mens/guide/national-collegiate-championship |
| ❌ **CONSEQUENCE THE COPY GETS WRONG.** Both pages say men's volleyball is "now closer to the threshold for a separate D2 championship than it has been historically." With the NCAA projecting **43** D2 men's volleyball teams against a threshold of **35**, D2 men's volleyball already clears it. The framing follows from the "roughly 33" count error in §E. | NCAA projected sponsorship (43) vs. NCAA D2 threshold (35) | 2026-08-26 | volleyball/mens/index, volleyball/mens/guide/national-collegiate-championship |
| **UCLA holds 21 National Collegiate men's volleyball titles — more than any other program — 19 of them under head coach Al Scates.** | Already logged in full — `audit-c1-c2-fact-log.md` §E (NCAA.com, "NC Men's Volleyball Championship History," full year-by-year table read 2026-08-25) | 2026-08-25 | volleyball/mens/guide/national-collegiate-championship |
| ⚠️ **PENDING — the whole combined-championship history.** "The arrangement has been in place since the inception of the men's volleyball championship in 1970"; "Division III men's volleyball has had its own separate championship since 2012"; "the 50-school threshold for D1 championships still applying under standard rules"; "Men's volleyball has not had 50 D1 programs at any point in the modern era." Each is a Tier 1-checkable structural or historical claim; none was verified on this pass beyond the 1970 start date implied by the NCAA.com championship history already logged. | partially implied by NCAA.com championship history; not directly sourced | 2026-08-26 (pending) | volleyball/mens/guide/national-collegiate-championship, volleyball/mens/index |
| ⚠️ **PENDING — the 2025 and 2026 championship fields.** "2025 tournament: nine-team field … opening round at Penn State's Rec Hall on May 2, 2025"; "2026: expanded to a 12-team field … seven automatic bids plus five at-large"; "Both the Big West and the MPSF received three total bids in 2026; the MIVA received two." | NCAA.com championship documentation cited on the page but not re-read here | 2026-08-26 (pending) | volleyball/mens/guide/national-collegiate-championship, volleyball/mens/index |
| ⚠️ **PENDING — conference membership rosters.** Seven conferences are named with their member institutions (Big West, MPSF, EIVA, MIVA, NEC, Conference Carolinas, SIAC), plus "the Big West became the first NCAA men's volleyball league composed entirely of D-I members," "Northern Kentucky joins in 2026," and "UMES — the first Division I historically Black institution to sponsor men's volleyball — joined in 2026." Each conference's own site is Tier 1 for its membership; none was checked. The two "first" claims are historical superlatives needing a primary. | not verified | 2026-08-26 (pending) | volleyball/mens/index, volleyball/mens/guide/national-collegiate-championship |
| ⚠️ **PENDING / LIKELY IMPRECISE — "The NAIA Men's Volleyball Championship was first held in 2019."** The NAIA's own history says men's volleyball was on its championship calendar **1969-80**: "Wrestling (1958), soccer (1959), bowling (1962-78), gymnastics (1964-84), indoor track and field (1966) and **men's volleyball (1969-80)** were later additions." The modern championship may date to 2019, but "first held" contradicts the NAIA's own record. *(The companion claim "in its 7th annual edition in 2026" is arithmetically consistent with a 2019 start and a cancelled 2020.)* | **NAIA Official & Policy Handbook 2026-2027, association history section** | 2026-08-26 | volleyball/mens/index, volleyball/mens/guide/national-collegiate-championship, volleyball/mens/guide/recruiting-timeline |
| ⚠️ **PENDING — NAIA and NJCAA 2026 championship detail.** NAIA "April 28-May 2, 2026 at the Alliant Energy PowerHouse in Cedar Rapids, Iowa … 12 teams (8 automatic bids + 3 at-large + 1 host berth) … 2026 champion Park (Mo.) … The Master's (Calif.) 2025 champion … Grand View has the most titles with 2"; NJCAA "8-team double-elimination … College of DuPage hosts in 2026 and 2028; Finger Lakes Community College in 2027 and 2029." Named results and venues; not verified here. | NAIA.org / NJCAA.org championship pages, cited on the page but not re-read | 2026-08-26 (pending) | volleyball/mens/guide/national-collegiate-championship, volleyball/mens/index |
| **§5.6 done right — keep this wording.** "As of 2026, no separate D2 championship has been launched. The status of any such proposal in the coming years is not yet clear from public NCAA documentation." This is the honest-uncertainty pattern executed exactly, and the audit singled it out. | §5.6 | 2026-08-26 | volleyball/mens/guide/national-collegiate-championship:61 |

## G. USA Volleyball and the club pathway

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **USA Volleyball is the National Governing Body for volleyball in the United States, recognized by the FIVB and the USOPC**, and it supports **forty (40) USA Volleyball Regions (RVAs)**. Quoted: "USA Volleyball is the National Governing Body (NGB) for the sport of volleyball in the United States and is recognized as such by the International Volleyball Federation (FIVB) and the United States Olympic and Paralympic Committee (USOPC)." | **USA Volleyball, "About" (`https://usavolleyball.org/about/`)**, read 2026-08-26 | 2026-08-26 | volleyball/index, volleyball/womens/index, volleyball/mens/guide/club-pathways, volleyball/womens/guide/club-pathways, volleyball/womens/guide/recruiting-timeline |
| **2026 Boys Junior National Championship: July 8-11, 2026, Phoenix Convention Center; age divisions 12U through 18U; Open, USA, American and Club (non-bid) divisions; the event includes a coaches welcome reception, a coaches lounge, a college recruiting panel and the National Team Development Program (NTDP) Experience.** Every element reproduces USA Volleyball's own event page. | **USA Volleyball, "2026 USA Volleyball Boys Junior National Championship presented by Credit Union 1" (`https://usavolleyball.org/event/2026-usa-volleyball-boys-junior-national-championship/`)** | 2026-08-26 | volleyball/mens/index, volleyball/mens/guide/club-pathways, volleyball/mens/guide/recruiting-timeline |
| ⚠️ **PENDING — GJNC structure.** "the seven competitive divisions at GJNC (Open, National, Liberty, USA, American, Freedom, Patriot)" and "GJNC … is the largest volleyball event in the world." The division list is checkable at usavolleyball.org; the "largest in the world" superlative needs a source or a cut (§4.1). | not verified this pass | 2026-08-26 (pending) | volleyball/womens/index, volleyball/womens/guide/club-pathways |
| ⚠️ **PENDING — "USA Volleyball holds significantly fewer Boys National Qualifiers (BNQs) than … Girls National Qualifiers each year"; "A region that has 40 girls' teams at the 16U age may have a handful of boys' teams."** The first is checkable against USAV's own event calendar; the second is an invented illustrative ratio. | not verified | 2026-08-26 (pending / §4.3) | volleyball/mens/guide/club-pathways |

## H. High school participation

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Boys' high school volleyball participation rose from 66,487 to 95,972; boys' volleyball is now the No. 11 most-played boys' high school sport; 25 state associations conduct state volleyball championships for boys.** Quoted: "the number of boys playing volleyball has jumped from 66,487 to 95,972 – and the sport now is No. 11 on the list of top sports. In addition, 25 state associations are now conducting state volleyball championships for boys." | **NFHS, "Record Participation Numbers Indicate Importance of High School Sports in Students' Lives," Dr. Karissa Niehoff, August 22, 2025** (`https://nfhs.org/stories/record-participation-numbers-indicate-importance-of-high-school-sports-in-students-lives`), reporting the 2024-25 NFHS High School Athletics Participation Survey | 2026-08-26 | volleyball/mens/index |
| ⚠️ **The year labels are RosterWise's inference, not the NFHS's.** The page says "from 66,487 **in 2021-22** to 95,972 **in 2024-25** — a jump of more than 44 percent in three years." The NFHS release says only "in the past three years." The arithmetic checks (95,972 ÷ 66,487 = 1.4435, i.e. 44.4%), but the two season labels are supplied by RosterWise. | NFHS release wording | 2026-08-26 | volleyball/mens/index |
| **"The U.S. has fewer than 100,000 boys playing high school volleyball"** — consistent with the sourced 95,972. | NFHS release above | 2026-08-26 | volleyball/mens/guide/international-recruiting |

## I. RosterWise roster dataset — volleyball position depth

Every figure here is logged in full, with its dataset definition and method, in
**`roster-data-fact-log.md` §B**.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Across **1,412** women's volleyball programs that list a position for every rostered player: median **5 outside hitters** (IQR 4–6), **4 middle blockers** (3–5), **3 setters** (2–3) | RosterWise 2025-26 roster dataset — `roster-data-fact-log.md` §B | 2026-08-26 | blog/how-to-read-a-college-volleyball-roster |
| The **opposite/right side** label is applied unevenly — **22%** of those programs list nobody as an opposite — so **no single figure is published** for the position | Same | 2026-08-26 | blog/how-to-read-a-college-volleyball-roster |
| Libero and defensive specialist are **not separable**: of 1,412 rosters, **766** list anyone as a libero while **1,068** list a defensive specialist; counted as one back-row group the middle half of programs carry **three or four** | Same | 2026-08-26 | blog/how-to-read-a-college-volleyball-roster |
| Across **238** men's volleyball programs the position mix is broadly similar but the labelling is reversed: **209** name a libero and only **90** name a defensive specialist | Same | 2026-08-26 | blog/how-to-read-a-college-volleyball-roster |
| ❌ **BLAST-RADIUS MISS — the corrected position-depth bands were applied to ONE page and left standing on FOUR others.** The M3 remediation replaced "3-5 outside hitters" / "typically 2-3 opposites" with the computed figures on `blog/how-to-read-a-college-volleyball-roster` and nowhere else. The **same unsourced bands — 3-5 OH, 3-4 MB, 2-3 S, 1-2 L, 2-3 RS, 1-3 DS — are still published** on four live pages. Against the verified data, "3-5 OH" understates a median of 5 with an IQR of 4–6, and the separate libero count (1-2) is the labelling artifact the log says cannot be published. | `roster-data-fact-log.md` §B and §G | 2026-08-26 | volleyball/methodology/position-depth:15, :28, :41, :54, :67, :80; volleyball/methodology/roster-composition:31-36; volleyball/guide/reading-rosters:13-17; volleyball/womens/guide/position-specific-recruiting:27, :42, :55 |
| ⚠️ **Men's position depth is entirely unsourced** — "Most programs carry 4-6 outside hitters," "3-4 middle blockers," "2-3 setters," "2-3 opposites," "1-2 liberos." `roster-data-fact-log.md` §B computed **no** men's medians, only the libero/DS labelling counts. | RosterWise dataset — men's medians not computed | 2026-08-26 (computation pending) | volleyball/mens/guide/position-specific-recruiting:22, :40, :58, :77, :95 |
| ⚠️ **PENDING — roster-size bands.** "Total roster sizes range from 14-18 at D1 programs … to 16-24 at D2, D3, and NAIA"; "Most D2 rosters carry 16-22 players"; "many programs carried 16-20 players"; "D3 programs carry 16-20 … others 20-30"; NAIA "rosters that typically range from 16-22." RosterWise **owns** this data — `roster-data-fact-log.md` §D publishes median 18 for men's volleyball and 17 for women's — and none of these bands is computed from it. | RosterWise dataset (available, uncomputed for these cuts) | 2026-08-26 | volleyball/methodology/roster-composition:38, volleyball/guide/reading-rosters:63, volleyball/guide/walk-on-pathways:18, :28, :48, :52, volleyball/womens/guide/scholarships:20, :64, :87, volleyball/womens/guide/recruiting-timeline:20, :62, blog/how-to-read-a-college-volleyball-roster:103 |
| ⚠️ **PENDING — pre-House roster sizes.** "Men's D1 volleyball typically had 20-25 players sharing 4.5 scholarships"; "programs that previously carried 22-25"; "D1 women's volleyball programs … carried 16-20 players (12 on scholarship plus walk-ons)." `roster-data-fact-log.md` cut this exact class of claim from soccer and lacrosse pages on the ground that **RosterWise holds no pre-House rosters** — the volleyball instances were not traced. | `roster-data-fact-log.md`, "Claims cut for lack of supporting data" | 2026-08-26 | volleyball/mens/index, volleyball/mens/guide/scholarships (×3), volleyball/womens/index, volleyball/womens/guide/scholarships, volleyball/womens/guide/recruiting-timeline, volleyball/guide/walk-on-pathways |

## J. NJCAA and 3C2A junior-college structure

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| NJCAA three-division scholarship structure | Verified — see §B, NJCAA.org "Divisional Structure" | 2026-08-26 | volleyball/guide/juco-pathway |
| ⚠️ **PENDING — 3C2A (California Community College Athletic Association).** "3C2A governs athletics at **109** California community colleges"; "over **26,000** student-athletes annually"; "sponsors **24** men's and women's sports"; "**3C2A institutions cannot offer athletic scholarships**" (cited to Bylaw 2.11). Attributed on-page to cccaasports.org and to individual college athletic pages (Citrus College, College of San Mateo). Not re-read on this pass; note that a member college's page is Tier 1 for that college, not for 3C2A's rules. | cccaasports.org cited on-page; not verified here | 2026-08-26 (pending) | volleyball/guide/juco-pathway |
| ⚠️ **PENDING — "Adopted by the NCAA Division I Cabinet on June 24, 2026 — the product of an NJCAA advocacy campaign — a reform lowers the transferable GPA requirement for two-year transfers."** A precisely dated legislative action. **Searched NCAA.org's media centre and legislation index; not found.** The NJCAA's own site carries a July 9, 2026 op-ed on its "#SameGameSameRules" campaign, which is consistent with the campaign existing but does not establish the Cabinet action or its date. | NCAA.org searched 2026-08-26 — action not located | 2026-08-26 (primary not found) | volleyball/guide/juco-pathway:132 |
| ⚠️ **PENDING — NJCAA championship results.** "The 2025 [D-I Volleyball] championship was held November 19-22, 2025 at the Dunn Center, Austin Peay State University, in Clarksville, Tennessee"; "Cowley County Community College won the 2024 D-II title — its second consecutive championship with an undefeated season." | njcaa.org championship pages cited on-page; not re-read | 2026-08-26 (pending) | volleyball/guide/juco-pathway |
| ❌ **IMPRECISE — "The 2025 House v. NCAA settlement increased the NCAA D-I women's volleyball roster cap from the previous 12-scholarship head count structure to an 18-player equivalency roster."** There was **no** roster cap before the settlement; 12 was a scholarship limit, not a roster limit. Describing 12 as a "roster cap" tells families the roster grew from 12 to 18, when in fact rosters shrank against a new ceiling. | 2026-27 D1 Manual Bylaw 17.2 (adopted 6/6/25 — no prior roster limitation) | 2026-08-26 | volleyball/guide/juco-pathway:128, :181, :234 |

## K. Sourcing hygiene and unnamed authority

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| ❌ **THREE LIVE PAGES ARE SOURCED ENTIRELY TO AN UNNAMED SYNTHESIS.** Their whole `sources:` block reads: *"Guidance synthesized from publicly available coaching staff recruiting pages and published interviews with college volleyball coaches"* — no page, no coach, no publication, no date. Under §4.3 that is fabricated authority; under §7.3 it is not a source at all. One of the three also publishes position-depth bands (see §I). | §4.3, §7.3 | 2026-08-26 | volleyball/womens/guide/position-specific-recruiting, volleyball/womens/guide/what-coaches-look-for, volleyball/womens/guide/recruiting-video |
| ❌ **TIER 2 IN A `sources:` BLOCK SUPPORTING A LIMIT — "Yahoo Sports reporting on House Settlement roster limits (including statements from John Speraw, USA Volleyball CEO)."** §1 permits a Tier 2 source for a named official's on-record statement (and the page does attribute Speraw correctly under §5.3) but **never for a limit**. The 18-player cap is in NCAA D1 Bylaw 17.2, which the page does not cite. | §1 | 2026-08-26 | volleyball/mens/guide/scholarships (`sources:`) |
| ❌ **"Multiple coaching and recruiting sources describe men's college volleyball recruiting as moving more slowly than women's."** Unnamed authority, §4.3. | §4.3 | 2026-08-26 | volleyball/mens/index |
| ❌ **`sources:` entries naming an organisation but no document.** "American Volleyball Coaches Association (AVCA) — Position-specific recruiting documentation"; "AVCA — College Prep Combine and avcaVPI™ database"; "AVCA — General recruiting guidance"; "USA Volleyball — General volleyball position descriptions and standards"; "FIVB — Junior international competition documentation"; "Publicly available conference-level championship records"; "Publicly available institutional academic profile data." §7.3 requires the document and its date. | §7.3 | 2026-08-26 | volleyball/mens/guide/position-specific-recruiting, volleyball/mens/guide/id-camps, volleyball/mens/guide/what-coaches-look-for, volleyball/mens/guide/recruiting-video, volleyball/mens/guide/international-recruiting, volleyball/mens/guide/national-collegiate-championship |
| ❌ **Bare-domain `sources:` links.** `<a href="https://njcaa.org">…</a>`, `<a href="https://www.ncaa.org">NCAA.org</a> — Transfer rules and Division I-III governance`. The rule each supports is not reachable from the domain root. | §7.3 | 2026-08-26 | volleyball/guide/juco-pathway |
| ❌ **No `sources:` block on the volleyball hub pages** (`volleyball/index`, `volleyball/mens/index`, `volleyball/womens/index`, `volleyball/guide/index`, `volleyball/methodology/index`) or on `blog/how-to-read-a-college-volleyball-roster` — yet `volleyball/mens/index` is the **densest page of hard claims in the entire volleyball set** (program counts by division, a 40-year sponsorship series, conference membership rosters, NFHS participation figures, BJNC details, championship history). | §7.3 | 2026-08-26 | volleyball/index, volleyball/mens/index, volleyball/womens/index, volleyball/guide/index, volleyball/methodology/index, blog/how-to-read-a-college-volleyball-roster |

## L. Claims with no source of any tier

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| ❌ **ID camp prices, and the two pages disagree.** Men's: "typically **$200 to $700+**." Women's: "typically range from **$150 to $500** per camp," with a worked example ("A $300 camp…"). Two live RosterWise pages, two dollar ranges, neither sourced. | none | 2026-08-26 | volleyball/mens/guide/id-camps:16, volleyball/womens/guide/id-camps:33, :35 |
| ❌ **"Setters at the D1 level are typically taller than 6'0"."** A height threshold. | none | 2026-08-26 | volleyball/mens/guide/position-specific-recruiting:67 |
| ❌ **Divisional characterisations of what coaches weight** — "D1: generally the highest physical-profile thresholds"; "D2 … slightly below D1 averages, but the gap is smaller than the labels suggest"; "D1 Power Four programs tend to prioritize athleticism … D1 mid-major programs often emphasize volleyball IQ." Unsourced generalisations about coach evaluation, one of them on a page whose only source is the unnamed synthesis (§K). | none | 2026-08-26 | volleyball/mens/guide/what-coaches-look-for:101-105, volleyball/womens/guide/what-coaches-look-for:97-100 |
| ❌ **Named programs offered as evidence of competitive level** — "Top NAIA programs (Park, Grand View, The Master's, Benedictine Mesa, Georgetown KY, Saint Xavier IL, and others) compete at levels that overlap with NCAA…"; "Top D3 programs (Springfield, Carthage, NYU, Southern Virginia, Loras, Messiah, SUNY New Paltz, Cal Lutheran, and others) recruit competitively and play at levels…"; "Concordia–Irvine, BYU-Hawaii (historically), and other D2 … have competed at the top." Named programs plus a quality judgment — §4.1. | n/a — §4.1 bans it regardless of tier | 2026-08-26 | volleyball/mens/guide/what-coaches-look-for:104, volleyball/mens/guide/national-collegiate-championship:69, :83 |
| ❌ **"GJNC … is the largest volleyball event in the world."** Superlative. | none | 2026-08-26 | volleyball/womens/guide/club-pathways:51 |
| ❌ **"Women's volleyball is one of the fastest-moving recruiting sports in college athletics"; "JNQs are one of the highest-concentration coach evaluation environments in any sport"; "College coach attendance at JNQs and GJNC is extraordinary."** Cross-sport superlatives about attendance nobody measures. | none | 2026-08-26 | volleyball/womens/index, volleyball/womens/guide/recruiting-timeline, volleyball/womens/guide/club-pathways |
| ❌ **"Before the NCAA imposed the June 15 contact rule, it was not uncommon for volleyball coaches to extend verbal offers to 8th graders."** A claim about historical practice. | none | 2026-08-26 | volleyball/womens/guide/recruiting-timeline:23 |
| ❌ **Recruiting-video behavioural model and filming specifications, which the two pages contradict.** Men's: "camera height approximately **5-6 feet** off the ground is ideal." Women's: "elevated above the court (**10-15 feet** high if possible)." Also "a clear, focused 5-minute video can convey what would take 30 minutes of live observation"; "if the coach is not interested after 30 seconds, they are unlikely to keep watching." | none | 2026-08-26 | volleyball/mens/guide/recruiting-video:58, volleyball/womens/guide/recruiting-video:57, :76 |
| ❌ **"Women's college volleyball has historically pulled heavily from Türkiye, Canada, Puerto Rico, and Italy. Men's … pulls more from continental Europe (Italy, Poland, Czech Republic, Serbia, Germany, France, Belgium, Bulgaria, Netherlands, Denmark, Montenegro) and South America (Brazil, Cuba, Argentina)."** Two named country lists presented as observed pipelines. **RosterWise's dataset can produce exactly this** — it resolves country codes for flagged international players (`roster-data-fact-log.md` §F) — and it was not used. | RosterWise dataset (available, uncomputed) | 2026-08-26 | volleyball/mens/index |
| ⚠️ **"Most D1 and D2 programs run ID camps"; "programs with very high international concentration (50%+ international rosters)"; "a program that consistently carries 4-5 international players."** Distributional claims about program practice, none computed. | none | 2026-08-26 | volleyball/mens/guide/id-camps, volleyball/mens/guide/international-recruiting, volleyball/womens/guide/international-recruiting |
| ⚠️ **No RosterWise international figures exist for volleyball at all.** Both international-recruiting pages, `volleyball/mens/index` and the blog page describe international composition qualitatively. `roster-data-fact-log.md` computed international share for **soccer only**. The volleyball equivalent has never been produced, which is why these pages are all adjective and no number. | RosterWise dataset — not computed for volleyball | 2026-08-26 | volleyball/mens/index, volleyball/mens/guide/international-recruiting, volleyball/womens/guide/international-recruiting, blog/how-to-read-a-college-volleyball-roster |

## M. Internal consistency

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| ❌ **NJCAA membership: "over 500" (volleyball) vs. "more than 400" (soccer).** Same governing body, two live figures, neither sourced. | §F of this log; `soccer-fact-log.md` §F | 2026-08-26 | volleyball/guide/juco-pathway vs soccer/guide/junior-college |
| ❌ **NJCAA scholarship structure: a published three-division table (juco-pathway) vs. "at the discretion of the institution … less standardized than NCAA divisions" (mens scholarships).** | NJCAA.org "Divisional Structure" settles it | 2026-08-26 | volleyball/guide/juco-pathway vs volleyball/mens/guide/scholarships |
| ❌ **NAIA volleyball limit: "up to 8" (four pages) vs. "limits vary by institution and conference" (one page).** | NAIA Handbook XIII.H settles it at 8 | 2026-08-26 | volleyball/mens/guide/scholarships vs the rest |
| ❌ **ID camp cost ranges disagree** ($200-$700+ vs $150-$500) and **recruiting-video camera height disagrees** (5-6 ft vs 10-15 ft) between the men's and women's versions of the same guide. | §L | 2026-08-26 | volleyball/{mens,womens}/guide/id-camps, volleyball/{mens,womens}/guide/recruiting-video |
| ⚠️ **Coach-tenure thresholds differ across sports.** `volleyball/methodology/coach-tenure` uses "long tenure (8+ years) / medium (3-7) / short (1-2)"; `soccer/methodology/coach-tenure` says "established coaches (5+ years)." Neither is sourced or explained as a RosterWise definition. | internal | 2026-08-26 | volleyball/methodology/coach-tenure, soccer/methodology/coach-tenure |
| **Beach volleyball scope statement is consistent and correct across pages** — "The NCAA sponsors women's beach volleyball as a championship sport but does not sponsor men's beach volleyball"; RosterWise covers indoor only. *(The NCAA's projected sponsorship table does list Women's Beach Volleyball and no men's equivalent, consistent with the claim.)* | NCAA.org projected sport-sponsorship table | 2026-08-26 | volleyball/index, volleyball/mens/index |

---

### Open items to re-check before/at publish

**Must fix before this content set can pass §7 again**

1. **The men's volleyball program counts (§E).** "Roughly 33" D2 programs against
   an NCAA projection of **43**, and "roughly 200" total against an NCAA-only
   total of **206**. The D2 error propagates into the championship-threshold
   analysis on two pages (§F), which currently tells families D2 men's
   volleyball is approaching a threshold it has already cleared.
2. **The position-depth blast-radius miss (§I).** The M3 pass corrected the blog
   page and left the same unsourced bands on `methodology/position-depth`,
   `methodology/roster-composition`, `guide/reading-rosters` and
   `womens/guide/position-specific-recruiting`. Fix all four in one commit and
   add them to `roster-data-fact-log.md` §B's `Articles` column.
3. **The three unnamed-synthesis `sources:` blocks (§K).** Three live women's
   pages cite nothing checkable. Either name real documents or state plainly
   that the guidance is RosterWise's own editorial framing.
4. **The propagated women's-soccer head-count error (§A).**
   `volleyball/womens/guide/scholarships:45` names women's soccer as a
   head-count sport. Fix it in the same commit as the soccer pages.
5. **The unofficial-visit rules were never stated on any volleyball page.**
   Bylaw 13.7.1.1 gates an unofficial visit *with athletics-department
   involvement* at August 1 of junior year — a real constraint on campus visits
   that the volleyball timeline pages do not mention at all.
6. **"The 12-scholarship head count structure" described as a roster cap (§J).**
   Three occurrences on one page, and it inverts the direction of the change.
   Still open — juco-pathway has not been touched yet.

**Needs a primary before the number can stay in print**

7. NJCAA membership count — and reconcile "over 500" against soccer's "more
   than 400" (§B, §M).
8. NAIA and NJCAA men's volleyball sponsorship counts, the D3 championship field
   sizes, and the 1986-2026 D1 sponsorship series (§E).
9. The combined-championship history — 1970 inception, D3's separate
   championship since 2012, the D1 50-school threshold (§F).
10. Conference membership rosters and the two "first" superlatives — the Big
    West as the first all-D1 men's volleyball league, UMES as the first D1 HBCU
    to sponsor men's volleyball (§F).
11. **"The NAIA Men's Volleyball Championship was first held in 2019"** — the
    NAIA's own handbook records men's volleyball on its championship calendar
    from **1969 to 1980** (§F).
12. The NCAA D1 Cabinet's June 24, 2026 two-year-transfer GPA reform — searched
    NCAA.org and not found (§J).
13. 3C2A's 109 colleges / 26,000 athletes / 24 sports / Bylaw 2.11 (§J).
14. GJNC's seven divisions, and a source or a cut for "largest volleyball event
    in the world" (§G).

**Housekeeping that expires or rots**

15. **Volleyball has no RosterWise international-composition figures at all
    (§L).** Four pages describe international composition in adjectives because
    the numbers were never computed. Soccer got this treatment in the M4 pass;
    volleyball did not.
16. **Men's volleyball position medians were never computed (§I)** — only the
    libero/DS labelling counts. Five position bands on
    `mens/guide/position-specific-recruiting` rest on nothing.
17. **Roster-size bands (§I)** are published on eleven pages and RosterWise owns
    the data to replace every one of them.
18. **The NCAA is serving the 2025-26 signing-dates table at the 2026-27 URL,
    and the 2026-27 "Other Division I Sports" calendar filename uses an en dash**
    (§D). Both pages tell families to verify at `ncaaorg.s3.amazonaws.com`;
    neither trap is flagged for them.
19. Re-run every "2026-27 calendar," "as of June 2026," "as of May 2026" and
    "2025-26 projected" anchor at the next season rollover. The women's
    volleyball calendar is sport-specific and dense (four period types, seven
    March–June quiet windows); the men's is a single line in a residual bucket.
    They cannot be updated by analogy.
