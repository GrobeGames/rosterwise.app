# RosterWise Soccer — Fact Log & Audit Trail

**Purpose:** one row per published claim → primary source → date verified →
article(s) that use it.
Lives in `prototypes/` so it never deploys (build only emits from `src/`).
Before flipping any article to live, check every number/date/rule in its copy
against a row here.

**Verification date for this pass:** 2026-08-26 (re-confirm fast-moving claims
each season).

**Scope:** all 42 pages under `src/soccer/` plus
`src/blog/how-to-read-a-college-soccer-roster.md`. Built retroactively against
already-published copy in response to finding **H1** of
`reports/content-audit-2026-08-25.md` ("three of four sports have no fact log").
Because the copy came first, this log is an **audit of published claims**, not a
pre-draft research log — every row records whether the published wording
survives contact with a primary, and the rows that do not are the point.

**Sourcing rules honored:** primary/near-primary only — the 2026-27 NCAA
Division I, II and III Manuals as served by the NCAA Legislative Services
Database (LSDBi; the full manuals download as PDFs from
`https://web3.ncaa.org/lsdbi/reports/getReport/90008` (D1), `/90010` (D2) and
`/90011` (D3) — the fastest route to any bylaw, and not known to the earlier
remediation passes), NCAA compliance and recruiting documents on
`ncaaorg.s3.amazonaws.com`, NCAA.org media-center releases, the NAIA Official &
Policy Handbook on NAIA.org, U.S. Soccer's own announcements on ussoccer.com,
MLS's own MLS NEXT pages on mlssoccer.com, and RosterWise's own roster dataset.
NO aggregators and NO recruiting-service blogs were used or read. Where the only
support for a claim was a news outlet (Sports Illustrated, ESPN, Yahoo Sports —
all three appear in live `sources:` blocks on this content set), the claim is
logged as **pending**, because §1 bars Tier 2 from supporting a rule, limit,
count or date.

**Sibling logs that already carry soccer claims** — do not duplicate rows here:
`governance-counts-fact-log.md` (NCAA/NAIA membership and sport-sponsorship
counts), `roster-data-fact-log.md` (RosterWise dataset figures for position
depth and international share), `audit-m1-m2-fact-log.md` (House money figures
and D1 transfer windows). This log cross-references them rather than restating
them.

---

## A. NCAA Division I roster limits under the House settlement

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **D1 men's soccer roster limit = 28; D1 women's soccer roster limit = 28.** Applies to a D1 institution "that is a member of a defendant conference or opts in to the House settlement." | **2026-27 NCAA Division I Manual, Bylaw 17.2 "Roster Limitations," p.194** (Adopted 6/6/25 effective 7/1/25), read via NCAA LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90008`). Both rows read directly off the table: "Men's Soccer 28 / Women's Soccer 28" | 2026-08-26 | soccer/index, soccer/mens/index, soccer/womens/index, soccer/guide/evaluating-programs, soccer/guide/walk-on-pathways, soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline, soccer/mens/guide/scholarships, soccer/womens/guide/scholarships, soccer/mens/guide/international-recruiting, soccer/womens/guide/international-recruiting, soccer/insights/mens-roster-size, soccer/insights/womens-roster-size, soccer/insights/division-by-numbers, soccer/insights/mens-vs-womens-comparison, soccer/methodology/class-year-gaps |
| Before the settlement there was **no NCAA cap on Division I roster size** — programs could carry athletes beyond their scholarship limit. Verified structurally: Bylaw 17.2 is stamped "Adopted: 6/6/25," so no roster limitation existed in Division I before that date. | 2026-27 NCAA D1 Manual, Bylaw 17.2 adoption line | 2026-08-26 | soccer/guide/walk-on-pathways, soccer/insights/mens-roster-size, soccer/mens/guide/scholarships |
| An institution must submit its roster **no later than the calendar day before the first contest used for championship selections, or December 1, whichever is earlier**; a "designated student-athlete" is exempted from the sport's roster limit. | 2026-27 NCAA D1 Manual, Bylaws **17.2.1** (Adopted 6/23/25 eff. 7/1/25) and **17.2.2.2**; NCAA.org, "DI Board of Directors formally adopts changes to roster limits" (2025-06-23) — designated athletes "will not count toward that school's roster limits for the duration of their eligibility" | 2026-08-26 | *(logged as context; not stated in soccer copy — the soccer set never explains designated student-athletes, unlike the wrestling set)* |
| A Division I **conference may set a roster limit lower** than the settlement's, but not lower than that sport's Division I scholarship limit. | NCAA, "Question and Answer: Implementation of the House Settlement," updated 2026-02-11, **Question No. A15** (`ncaaorg.s3.amazonaws.com/governance/d1/legislation/Feb2026D1Gov_PhaseSevenSetQuestionandAnswer.pdf`) | 2026-08-26 | *(not used in copy)* |
| **NEGATIVE FINDING — the House implementation Q&A contains no per-sport roster limits and never mentions soccer.** The full 2,098-line February 2026 Q&A was read and searched. Six live soccer pages cite "NCAA.org, Question and Answer: Implementation of the House Settlement (June 13, 2025)" in their `sources:` block as support for the 28-player limit. That document does not carry it; **Bylaw 17.2 does.** | Absence confirmed across the complete Feb 2026 Q&A; the June 2025 Phase Three Q&A (`.../June2025D1Gov_PhaseThreeInstSetQuestionandAnswer.pdf`) likewise carries no sport table | 2026-08-26 | soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline, soccer/mens/guide/scholarships, soccer/womens/guide/scholarships — each should cite Bylaw 17.2 instead |

## B. Pre-settlement NCAA Division I scholarship structure — head count vs. equivalency

**This section carries the most serious finding in this log. Read it before
editing any women's soccer page.**

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **D1 men's soccer was an equivalency sport limited to 9.9 equivalencies**, divisible into partial awards. | **NCAA Division I Board of Directors, "Anticipated Actions Contingent Upon Court Final Approval of the House v. NCAA Settlement" (April 2025), "Bylaw 15 House Settlement Proposal," p.14** — reproduces the pre-House Bylaw **15.5.3.1.1 Equivalency Sports — Men's Sports** table verbatim: "Soccer 9.9." (`ncaaorg.s3.amazonaws.com/governance/d1/legislation/2024-25/APRIL2025D1Gov_Anticipated%20Actions%20Contingent%20Upon%20Court%20Final%20Approval%20of%20the%20House%20v.%20NCAA%20Settlement.pdf`) | 2026-08-26 | soccer/index, soccer/mens/index, soccer/guide/walk-on-pathways, soccer/mens/guide/recruiting-timeline, soccer/mens/guide/scholarships, soccer/womens/guide/scholarships, soccer/womens/guide/recruiting-timeline, soccer/insights/division-by-numbers, soccer/insights/mens-vs-womens-comparison |
| **D1 women's soccer was an EQUIVALENCY sport limited to 14.0 equivalencies — not a head-count sport.** The 14 could be, and routinely was, divided into partial awards exactly as men's 9.9 was. | Same document, **p.15**, Bylaw **15.5.3.1.2 Equivalency Sports — Women's Sports**: "Soccer 14." | 2026-08-26 | **CONTRADICTED BY LIVE COPY — see the row below** |
| **The complete list of D1 head-count sports other than football and basketball was: women's gymnastics (12), women's tennis (8), women's volleyball (12).** Women's soccer does not appear. | Same document, **p.13**, Bylaw **15.5.2.1 Head-Count Sports Other Than Football and Basketball — Maximum Limits** (the full table, quoted). Independently corroborated by the **2025-26 NCAA Division I Squad Lists and Instructions (Form 25-2), p.2**, which routes "Head-count sports other than football (men's and women's basketball, women's gymnastics, women's tennis, women's volleyball)" to Form 25-2c and every other sport to the equivalency form 25-2d (`ncaaorg.s3.amazonaws.com/compliance/d1/2025-26/2025-26D1Comp_Form25-2NCAADivisionISquadLists_and_Instructions.pdf`) | 2026-08-26 | contradicted by the pages listed in the next row |
| ❌ **PUBLISHED ERROR — "Women's soccer is a 'head count' sport in NCAA D1 — each scholarship is a full scholarship."** Two Tier 1 sources say otherwise (rows above). The **number 14 is correct; the structure is wrong**, and the structure is the load-bearing half: it is what tells a family whether a D1 women's soccer offer means a full ride. `soccer/womens/guide/scholarships` states outright that "pre-settlement D1 women's soccer players who received an athletic scholarship received a full scholarship" — that is materially misleading to a recruiting family. **Do not publish any of this wording again.** | Refuted by NCAA D1 Bylaws 15.5.2.1 and 15.5.3.1.2 (rows above) | 2026-08-26 | soccer/index:59; soccer/womens/index:22, :72, :78; soccer/womens/guide/scholarships:4, :15, :44, :46, :48, :61, :63, :67, :165, :174; soccer/womens/guide/recruiting-timeline:63, :105; soccer/insights/division-by-numbers:120; soccer/insights/mens-vs-womens-comparison:110; soccer/insights/womens-roster-size:73, :77, :85 — **and volleyball/womens/guide/scholarships:45**, which repeats the soccer error inside a volleyball page |
| Corroborating internal contradiction: `guide/athletic-scholarships` (sport-agnostic, outside this log's scope) publishes the head-count list **correctly** and does not include women's soccer. The site therefore contradicts itself in public. | `src/guide/athletic-scholarships.md:56-60`, read 2026-08-26 | 2026-08-26 | *(diagnostic row)* |
| **INDEPENDENT VERIFICATION (2026-08-26).** The head-count / equivalency finding below was re-checked by a separate researcher working blind — no access to this log, to the site copy, or to any conclusion reached here — and asked to adjudicate the two candidate statements without being told which was which. It independently reached the same answer, and added three refinements now carried in the copy and in the rows below. | Blind primary-source verification pass, 2026-08-26 | 2026-08-26 | *(methodology row)* |
| **A better primary than the struck-text document: the 2021-22 NCAA Division I Manual is still posted** at `https://ncaaorg.s3.amazonaws.com/compliance/sar/d1/2021-22D1_NCAA-Manual.pdf` and carries Bylaw 15.5 in force. It matches the April 2025 Board document number-for-number on every sport in this log. **The 2024-25 Manual itself is NOT retrievable** — 2022-23, 2023-24 and 2024-25 all 404 on that host — so the April 2025 struck text remains the only source for the final pre-House wording, corroborated by the 2021-22 Manual. | 2021-22 NCAA Division I Manual (Bylaw 15.5) | 2026-08-26 | *(sourcing note for every row in this section)* |
| **REFINEMENT — no bylaw ever required a full award in a head-count sport.** The cap counted **athletes, not dollars**: under Bylaw 15.02.3 a "counter" is any athlete receiving countable aid, so a partial award still consumed a whole slot. That is *why* head-count awards were in practice full — it was never a rule that they must be. Copy that says head-count means "each scholarship must be a full scholarship" is a shorthand that overstates the bylaw, and has been rewritten on the soccer and volleyball pages accordingly. | 2026-27 and 2021-22 NCAA D1 Manuals, Bylaw 15.02.3; absence of any full-award requirement confirmed by search | 2026-08-26 | soccer/womens/guide/scholarships, soccer/womens/index, volleyball/womens/guide/scholarships, volleyball/womens/guide/recruiting-timeline |
| **REFINEMENT — the complete D1 head-count list is six sports, and FCS football is not one of them.** FBS football (85, Bylaw 15.5.6.1), men's basketball (13, 15.5.5.1), women's basketball (15, 15.5.5.2), women's gymnastics (12), women's tennis (8), women's volleyball (12) (all 15.5.2.1). **FCS football was an equivalency sport** — Bylaw 15.5.6.2 sets 63 equivalencies alongside an 85-counter limit. | 2021-22 NCAA D1 Manual, Bylaws 15.5.2.1, 15.5.5.1, 15.5.5.2, 15.5.6.1, 15.5.6.2 | 2026-08-26 | soccer/womens/guide/scholarships, soccer/womens/index, volleyball/womens/guide/scholarships |
| **REFINEMENT — what actually governs a non-opt-in school, stated by the NCAA itself.** House Q&A **Question No. B2**: *"Have the financial aid limits been eliminated from the Division I Manual? Answer: Yes. The Division I Manual no longer includes institutional financial aid limits for any sport. Nonparticipating Institutions that do not opt in should refer to the financial aid legislation in the 2024-25 Division I Manual."* **Question No. A11** confirms the removal applies division-wide, not only to opt-ins. **Question No. B4** is the operative point for families: a non-participating institution *"may provide up to the value of institutional financial aid limit provided by the 2024-25 legislation (as measured in equivalencies) in head count sports without triggering opting in."* So the old number survives as a **value threshold that triggers settlement obligations if exceeded**, not as an enforced cap — and in a former head-count sport it can now be spread across more athletes as partial awards. **Question No. A16**: at a non-opt-in school roster size "may be governed by the conference or institution and not legislated at the national level." | NCAA, "Question and Answer: Implementation of the House Settlement," Questions B2, B4, A11, A16 | 2026-08-26 | soccer/mens/guide/scholarships, soccer/womens/guide/scholarships, volleyball/womens/guide/scholarships, volleyball/mens/guide/scholarships, volleyball/guide/walk-on-pathways, volleyball/guide/evaluating-programs |
| The removal was effected by **Division I Proposal No. 2025-09 (Financial Aid)** and **No. 2025-11 (Playing and Practice Seasons — Roster Limitations)**. | NCAA House Q&A, Question No. B9 | 2026-08-26 | *(logged for traceability)* |
| **As of the 2026-27 Division I Manual there are no sport-specific financial-aid limits in Division I at all.** Article 15 (Financial Aid) now runs 15.01, 15.02, 15.1, 15.2, 15.3 and stops; the whole of former Bylaw 15.5 is gone. A stale cross-reference survives at Bylaw 20.6.4-(b) ("see Bylaw 15.5"). | 2026-27 NCAA D1 Manual, Article 15 table of contents (pp.156-162) and full-text search, read via LSDBi | 2026-08-26 | ⚠️ **not reflected in copy.** Five soccer pages tell families that non-opt-in D1 programs "still operate under the old 9.9-scholarship equivalency model" / "the 14 head count scholarships remain in effect." That is no longer supported by the Manual. See Open items. |

## C. NCAA Division II scholarship limits

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **D2 men's soccer = 9.0 equivalencies.** | **2026-27 NCAA Division II Manual, Bylaw 15.4.2.1.1 "Maximum Equivalency Limits — Men's Sports," p.163**, read via LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90010`): "Soccer 9.0" | 2026-08-26 | soccer/mens/guide/scholarships, soccer/insights/mens-roster-size, soccer/insights/division-by-numbers |
| **D2 women's soccer = 9.9 equivalencies.** | Same Manual, Bylaw **15.4.2.1.2 "Maximum Equivalency Limits — Women's Sports," p.163**: "Soccer 9.9" | 2026-08-26 | soccer/womens/guide/scholarships, soccer/insights/womens-roster-size, soccer/insights/division-by-numbers |
| **Division II has no head-count sports — every D2 sport is an equivalency sport.** Bylaw 15.4.2 covers all of them; there is no D2 analogue to the D1 head-count bylaw. | 2026-27 NCAA D2 Manual, Bylaw 15.4.2, full section | 2026-08-26 | soccer/insights/division-by-numbers ("D2: equivalency for both genders") |
| D2 carries an **overall limit of 60 total equivalencies across all men's sports other than football and basketball.** *(A D2 proposal to eliminate this limit effective 8/1/27 is pending — do not state the 60 without the date anchor.)* | 2026-27 NCAA D2 Manual, Bylaw **15.4.2.1.1.1**; pending proposal read at NCAA LSDBi report 90005 | 2026-08-26 | *(not used in copy — logged so a future D2 page does not miss it)* |

## D. NCAA Division III rules

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **D3 institutions may not award financial aid on the basis of athletics** — i.e. no athletic scholarships. | **2026-27 NCAA Division III Manual, Bylaw 15.01.3 "Criteria for Institutional Financial Aid"**, read via LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90011`): "A member institution shall not award financial aid to any student on the basis of athletics leadership, ability, participation or performance." | 2026-08-26 | soccer/guide/d3-recruiting-reality, soccer/guide/recruiting-myths, soccer/mens/index, soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline, soccer/mens/guide/scholarships, soccer/womens/guide/scholarships, soccer/insights/division-by-numbers |
| **D3 in-person, off-campus recruiting contact may not occur until the prospect has completed SOPHOMORE year of high school** (not junior year). | 2026-27 NCAA D3 Manual, Bylaw **13.1.1.1 "High School Prospective Student-Athletes"**: "In-person, off-campus recruiting contacts shall not be made with a prospective student-athlete or the prospective student-athlete's relatives or guardian(s) until the prospective student-athlete has completed their sophomore year in high school." | 2026-08-26 | soccer/guide/d3-recruiting-reality, soccer/mens/index, soccer/mens/guide/recruiting-timeline |
| **D3 official visits may not occur earlier than January 1 of the prospect's junior year.** | 2026-27 NCAA D3 Manual, Bylaw **13.6.1.1.1 "First Opportunity to Visit"**: "A prospective student-athlete may not be provided an official visit earlier than January 1 of the prospective student-athlete's junior year in high school." | 2026-08-26 | soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline |
| **Division III publishes no recruiting calendar — there are no contact, evaluation, quiet or dead periods in D3.** Verified by full-text search of the D3 Manual: the terms "dead period" and "contact period" appear **zero** times. | 2026-27 NCAA D3 Manual, full-text search | 2026-08-26 | soccer/guide/d3-recruiting-reality, soccer/mens/index |
| ⚠️ **PENDING — "the time commitment is typically 15-20 hours per week during the season" (D3).** No NCAA source supports a 15-20 band. The NCAA legislates a 20-hour weekly maximum on countable athletically related activity; 15 is unsourced and the sentence reads as a measured average rather than a legislated ceiling. | NCAA D3 Manual Bylaw 17 (weekly hour limitation) read; **no source found for the 15-20 range** | 2026-08-26 (primary for the range not found) | soccer/guide/d3-recruiting-reality:226 |

## E. NAIA

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **NAIA soccer: upper limit of 12 institutional aid equivalencies per team.** The NAIA table is **not split by gender** — one limit per sport per institution. | **NAIA Official & Policy Handbook 2026-2027, Section XIII "Institutional Financial Aid Policy," item H "Upper Limits for Institutional Aid," p.122** (`https://www.naia.org/wp-content/uploads/2026/07/2026_Official_Handbook.pdf`, linked from NAIA.org → Membership → Legislative and Policy → Official and Policy Handbook): "Soccer 12" | 2026-08-26 | soccer/mens/guide/scholarships, soccer/womens/guide/scholarships, soccer/womens/guide/recruiting-timeline, soccer/insights/mens-roster-size, soccer/insights/womens-roster-size |
| **The NAIA imposes no roster limit.** Stated verbatim: "No limit will be placed on the number of student-athletes on any varsity roster, nor on the combined total number of all varsity and junior varsity athletes." | NAIA Handbook 2026-2027, Section XIII item D, p.120 | 2026-08-26 | *(not stated in copy — worth adding; several pages contrast NAIA roster sizes with D1's cap without saying NAIA has none)* |
| **NAIA aid limits carry academic exemptions the site never mentions:** aid to continuing students with a 3.60 cumulative GPA or in the top 10% of their class does **not** count against the limit; 3.30-3.59 or top 11-25% counts half; entering freshmen earn half or full exemptions on SAT/ACT, GPA or class rank thresholds. | NAIA Handbook 2026-2027, Section XIII item G, pp.121-122 | 2026-08-26 | ⚠️ **not in copy.** Every soccer page that says "NAIA allows up to 12" states a ceiling that a strong student can sit above. See Open items. |
| NAIA coaches may contact prospects at any time during high school; NAIA runs its own eligibility centre. | NAIA.org — *structural claim carried from existing copy; the specific NAIA recruiting-contact provision was **not** located in the 2026-27 Handbook on this pass* | 2026-08-26 (primary not located — pending) | soccer/mens/index, soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline, soccer/guide/junior-college |
| **250 NAIA member institutions in 20 conferences.** | Already logged — see `governance-counts-fact-log.md` §B (NAIA.org, "NAIA Schools") | 2026-08-26 | *(cross-reference; no soccer page states it)* |

## F. NJCAA

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **The NJCAA's three-division scholarship structure, quoted verbatim:** D1 — "Colleges may grant full athletic scholarships (tuition, books, fees, room & board), up to **$250** in course required supplies, and transportation costs one time per academic year to and from the college by direct route. Each sport has limits on the number of scholarships that can be granted." D2 — "Colleges may grant athletic scholarships, but scholarships are limited to tuition, books, fees, and up to $250 in course required supplies." D3 — "Colleges are not permitted to offer any athletic scholarships." Plus: "If a sport does not have the numbers to break into separate divisions, it operates under the Division I scholarship guidelines." | **NJCAA.org, "Divisional Structure"** (`https://www.njcaa.org/member_colleges/Divisional_Structure`), "DIVISION SCHOLARSHIP GUIDELINES" table. The page is client-rendered and returns an empty body to a plain fetch; read via a rendering browser on the verification date. | 2026-08-26 | soccer/guide/junior-college:309-311 |
| ⚠️ **The published wording is close but incomplete.** The page says D1 covers "course-related supplies" without the **$250** cap and omits the transportation allowance; it says D2 is "tuition, fees, and books **only**," omitting the $250 supplies allowance. It also omits the NJCAA's note that a sport without divisional numbers runs under D1 guidelines. | NJCAA.org, "Divisional Structure" | 2026-08-26 | soccer/guide/junior-college:309-311 |
| ❌ **PUBLISHED CONTRADICTION — "NJCAA programs are spread across more than 400 member colleges nationally."** `volleyball/guide/juco-pathway` states **"over 500"** for the same body. Two live pages, two numbers, neither sourced. | No primary read for either figure. Already flagged in `governance-counts-fact-log.md` §G as needing its own pass; recorded here because the soccer page is one of the two carriers. | 2026-08-26 (unsourced) | soccer/guide/junior-college:313 — and volleyball/guide/juco-pathway |
| ⚠️ **PENDING — the "two-year clock": a player has two seasons of NJCAA eligibility before transferring.** | NJCAA.org — primary not reached this pass | 2026-08-26 (primary re-check pending) | soccer/guide/junior-college:340 |

## G. 2026-27 NCAA Division I recruiting calendar — men's soccer

Primary source for this entire section: **"2026–27 NCAA Recruiting Calendar —
Other Division I Sports," updated August 4, 2026**
(`https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026%E2%80%9327D1Rec_OtherRecruitingCalendar.pdf`).
**Trap for the next person:** that filename uses an **en dash** ("2026–27"),
unlike every other file in the same S3 folder. The hyphenated URL 404s.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Men's soccer dead period: November 9–12, 2026** — "Monday through Thursday of the initial week for the fall signing date for athletics aid agreements." | 2026-27 Other D1 Sports calendar, MEN'S SOCCER block | 2026-08-26 | soccer/mens/index, soccer/mens/guide/recruiting-timeline |
| **Men's soccer dead period: December 11–14, 2026** — "Friday through Monday of the NCAA Division I Men's Soccer Championship. A coaching staff member may attend an event conducted in conjunction with and in the host city of the championship." | Same, MEN'S SOCCER block | 2026-08-26 | soccer/mens/index, soccer/mens/guide/recruiting-timeline |
| **Men's soccer quiet period: December 23–25, 2026.** | Same, MEN'S SOCCER (CONT.) block | 2026-08-26 | soccer/mens/index, soccer/mens/guide/recruiting-timeline |
| All other time on the men's soccer calendar is a contact period — the calendar lists only exceptions, and men's soccer has exactly the three above. | Same, structure of the document | 2026-08-26 | soccer/mens/index, soccer/mens/guide/recruiting-timeline |

## H. 2026-27 NCAA Division I recruiting calendar — women's soccer

Same primary source as §G.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Women's soccer dead periods, 2026-27: August 1–11, 2026; November 9–12, 2026; December 16, 2026 – January 6, 2027; July 28–31, 2027.** | 2026-27 Other D1 Sports calendar, WOMEN'S SOCCER block (all four listed) | 2026-08-26 | soccer/womens/guide/recruiting-timeline |
| **The 2026-27 women's soccer calendar has no quiet periods** — the four dead periods above are its only entries. | Same, WOMEN'S SOCCER block | 2026-08-26 | soccer/womens/guide/recruiting-timeline |
| Consequence stated in copy: because August 1–11 is a dead period, **the first practical official-visit day is August 12, 2026.** Arithmetic on the sourced dead period, not an outside assertion. | Same | 2026-08-26 | soccer/womens/guide/recruiting-timeline |
| Context worth knowing: the 2026-27 calendar introduces a **third category, "Recruiting Shutdown"** ("no form of recruiting … is permissible"), distinct from a dead period. Neither soccer sport has one; men's and women's wrestling and swimming do. | Same, definitions panel | 2026-08-26 | *(not in copy — a soccer family reading a wrestling or swimming calendar will meet this term)* |

## I. Division I contact dates, visits and signing

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **D1 coaches may not initiate telephone calls to a soccer prospect, or send recruiting materials or electronic correspondence, before June 15 at the conclusion of the prospect's sophomore year of high school.** Quoted: "Telephone calls to an individual (or the individual's family members) may not be made before June 15 at the conclusion of the individual's sophomore year in high school (subject to the exceptions below)." The materials rule uses the same date. **Soccer is not among the listed exceptions**, so it falls under both general rules. | **2026-27 NCAA Division I Manual, Bylaw 13.1.3.1 "Time Period for Telephone Calls — General Rule"** and **Bylaw 13.4.1 "Recruiting Materials and Electronic Correspondence — General Rule"**, read via NCAA LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90008`) | 2026-08-26 | soccer/index, soccer/mens/index, soccer/womens/index, soccer/guide/recruiting-myths, soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline, soccer/mens/guide/id-camps, soccer/womens/guide/id-camps, soccer/mens/guide/recruiting-video, soccer/womens/guide/recruiting-video, soccer/insights/mens-vs-womens-comparison |
| **In-person, off-campus recruiting contact and official (expense-paid) visits open August 1 at the beginning of junior year.** Quoted: "Off-campus recruiting contacts shall not be made with an individual (or the individual's family members) before August 1 at the beginning of the individual's junior year in high school"; and for visits, "In sports other than baseball, basketball, football, lacrosse[,] softball and men's wrestling, a prospective student-athlete may not be provided an expense-paid visit earlier than August 1 of the prospective student-athlete's junior year in high school." | **2026-27 NCAA D1 Manual, Bylaw 13.1.1.1 "Time Period for Off-Campus Contacts — General Rule"** and **Bylaw 13.6.2.1.1** | 2026-08-26 | same page list as the row above |
| ❌ **PUBLISHED ERROR — "Athletes can take unofficial visits to campus at any time."** Not for a visit with athletics-department involvement. Quoted: "In sports other than baseball, basketball, football, men's ice hockey, lacrosse, softball and men's wrestling, an unofficial visit with athletics department involvement (e.g., contact with athletics department staff, athletics-specific tour, complimentary admission) shall not occur with an individual (or the individual's family members) before **August 1 at the beginning of the individual's junior year in high school**." A family can walk a campus any time; they cannot meet the coaching staff, take an athletics tour, or receive complimentary admission before August 1 of junior year. | **2026-27 NCAA D1 Manual, Bylaw 13.7.1.1** (Adopted 4/25/18, Revised 8/8/18, 5/1/19, 4/15/26) | 2026-08-26 | soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline |
| ❌ **PUBLISHED ERROR — "recruits cannot take unofficial visits during July unless they have signed a written offer of athletics aid or made a financial deposit."** **That is a basketball-only rule.** It appears at Bylaw **13.7.2.1** (men’s basketball) and **13.7.2.2** (women’s basketball, and there only during the July evaluation periods). The general rule, Bylaw 13.7.2, is the opposite: "A prospective student-athlete may visit a member institution’s campus at the prospective student-athlete’s own expense an unlimited number of times." The signed-offer/deposit condition does not apply to soccer at all. | **2026-27 NCAA D1 Manual, Bylaws 13.7.2, 13.7.2.1 and 13.7.2.2** | 2026-08-26 | soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline |
| ⚠️ **The real late-July constraint is the calendar, and only for women’s soccer.** A dead period bars unofficial visits by definition — the NCAA’s own calendar legend reads "not permissible … to permit official or unofficial visits by prospective student-athletes to the institution’s campus." Women’s soccer has a dead period **July 28–31, 2027** on the 2026-27 calendar (§H); men’s soccer has none in July. So there *is* a July restriction on the women’s side — a different one, from a different instrument, in a different week — and neither page states it. | 2026-27 Other D1 Sports calendar, WOMEN’S SOCCER block and definitions panel | 2026-08-26 | soccer/womens/guide/recruiting-timeline |
| **Only football and basketball have an early signing period. All other Division I and II sports have a single signing window** whose final date is "based on institutional policy for awarding scholarships." | **NCAA Signing Dates PDF** at the 2026-27 path (`ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27Rec_SigningDates.pdf`) — table rows: "All Other Division I and II Sports … November 12, 2025 … Final date based on institutional policy" | 2026-08-26 | soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline |
| ⚠️ **PARTIAL — the soccer signing period "begins on the second Wednesday in November."** Consistent with Tier 1 but the rule *text* was not found. Nov 12 2025 (the published 2025-26 initial date) **is** the second Wednesday of November 2025; the 2026-27 calendar's Nov 9–12 dead period is defined as "Mon–Thu of the initial week for the fall signing date," and Wed Nov 11 2026 is the second Wednesday. Two independent Tier 1 documents are consistent with the rule as stated — neither states it. | Signing Dates PDF + 2026-27 Other D1 Sports calendar | 2026-08-26 (rule text pending) | soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline |
| ❌ **NEGATIVE FINDING — the NCAA has published the 2025-26 signing-dates table at the 2026-27 URL.** The file served from the `2026-27/` folder is titled "**2025-26** NCAA SIGNING DATES." No 2026-27 signing-date table was published as of the verification date. Anyone re-verifying signing dates will be handed last year's table by the current-year path. | Document title read in full | 2026-08-26 | soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline |
| ⚠️ **IMPRECISE — "D2 has no initial-contact date" / "D2 coaches can contact prospective student-athletes at any time … no June 15 restriction."** Division II **does** have a June 15 gate. Tier 1: recruiting materials may be sent to freshmen/sophomores "at anytime," but official visits and "in-person, off-campus recruiting contacts" are keyed to "**After June 15, immediately preceding a prospective student-athlete's junior year in high school.**" The guide states no start date for telephone calls, so the copy's narrower phone/text/email claim is neither confirmed nor refuted. | **"Division II Coaches Off-Campus Recruiting Guide 2026–27," updated July 30, 2026** (`ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27D2REC_RecGuide.pdf`) | 2026-08-26 | soccer/mens/index:~86, soccer/mens/guide/recruiting-timeline (D2 section), soccer/womens/guide/recruiting-timeline (D2 section) |
| ⚠️ **PENDING — recruits cannot take unofficial visits during July unless they have signed a written offer of athletics aid or made a financial deposit.** | Primary not located this pass | 2026-08-26 (pending) | soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline |
| ⚠️ **PENDING — recruiting questionnaires are exempt from contact-date restrictions.** | Primary not located this pass | 2026-08-26 (pending) | soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline |
| ⚠️ **PENDING — "basketball and women's lacrosse use September 1 of junior year; men's lacrosse uses the Wednesday after Labor Day of junior year."** Cross-sport contrast used to stop families applying lacrosse dates to soccer. See the lacrosse log §D for the men's-lacrosse half; the basketball and women's-lacrosse halves are unsourced here. | Primary not located this pass | 2026-08-26 (pending) | soccer/mens/guide/recruiting-timeline:~junior year |
| **The NCAA eliminated the National Letter of Intent in October 2024; it is replaced by the Written Offer of Athletics Aid, binding when signed.** | NCAA Division I Council action, October 2024 — already logged in `wrestling-fact-log.md` §C ("NLI eliminated by D1 Council Oct 9, 2024, effective immediately"). **Not independently re-verified against the Council action on this pass.** | 2026-08-26 (carried from the wrestling log; primary re-read pending) | soccer/guide/recruiting-myths, soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline, soccer/mens/guide/scholarships, soccer/womens/guide/scholarships, soccer/guide/d3-recruiting-reality |
| ⚠️ **PENDING — "the NCAA's 2018 rule change pushed initial D1 contact to June 15 after sophomore year for both genders."** A dated legislative claim; the 2018 action was not read from a primary. | Primary not located this pass | 2026-08-26 (pending) | soccer/womens/index, soccer/womens/guide/recruiting-timeline, soccer/mens/guide/recruiting-timeline, soccer/insights/mens-vs-womens-comparison |

## J. House settlement — dates, opt-in and money

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Roster-limit legislation was **adopted June 6, 2025, effective July 1, 2025**; NCAA rules for D1 "will no longer include sport-specific scholarship limits." | 2026-27 NCAA D1 Manual, Bylaw 17.2 adoption line; NCAA.org, "DI Board of Directors formally adopts changes to roster limits" (2025-06-23) | 2026-08-26 | soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline, soccer/guide/walk-on-pathways, soccer/mens/guide/scholarships, soccer/womens/guide/scholarships |
| ⚠️ **PENDING — "Power conference schools (SEC, Big Ten, ACC, Big 12) opted in. Other D1 conferences had until June 30, 2025 to decide."** A hard date plus a factual assertion about named conferences. Neither the June 2025 nor the February 2026 House Q&A carries the June 30 deadline or the conference list; both were read in full. | Absence confirmed in both Q&A documents | 2026-08-26 (primary not found) | soccer/mens/index, soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline, soccer/mens/guide/scholarships, soccer/womens/guide/scholarships, soccer/insights/mens-roster-size |
| The $20.5M 2025-26 benefits cap, the three-year recalculation, and the absence of a published 2026-27 cap | Already logged — see `audit-m1-m2-fact-log.md` §A and `governance-counts-fact-log.md` §D | 2026-08-25 / 2026-08-26 | *(no soccer page carries a House money figure — verified by grep. Good.)* |
| D1 notification-of-transfer windows (men's soccer Nov 24 – Dec 23 2025; women's soccer Nov 17 – Dec 16 2025) | Already logged — see `audit-m1-m2-fact-log.md` §B | 2026-08-25 | *(carried on `/guide/transfer-portal/`, not on a soccer page)* |

## K. Membership and program counts

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **422 active D3 / 361 D1 / 292 D2 NCAA member institutions** (2025-26 breakdown, as of September 2025); **407 D3 men's soccer teams and 419 D3 women's soccer teams** (NCAA projected 2025-26 sport sponsorship, carrying the NCAA's own "actual numbers may change" caveat) | Already logged in full — see `governance-counts-fact-log.md` §A and §C | 2026-08-26 | soccer/guide/d3-recruiting-reality |
| ⚠️ **PENDING — "There are more than 1,600 college soccer programs in the United States across NCAA Division I, Division II, Division III, and the NAIA."** No source, on a hub page with no `sources:` block. It also **contradicts RosterWise's own dataset**, which counts 1,012 men's + 1,223 women's = **2,235** soccer programs. "More than 1,600" is true but so understated as to mislead. | RosterWise 2025-26 roster dataset (see §M); no external primary sought because the internal figure already contradicts it | 2026-08-26 | soccer/index:54 |
| ⚠️ **PENDING — "Women's soccer is the largest women's college sport by number of programs in the United States."** A cross-sport superlative. NCAA projected 2025-26 sponsorship has D3 women's soccer (419) **tied** with basketball (419) and volleyball (419); the all-division, all-governing-body comparison the sentence makes is not published by anyone. | NCAA projected sport-sponsorship table (`governance-counts-fact-log.md` §C) does not support the superlative | 2026-08-26 (unsourceable as written) | soccer/insights/womens-roster-size:9 |

## L. RosterWise roster dataset — position depth (already logged)

Every figure in this section is logged in full, with its dataset definition and
method, in **`roster-data-fact-log.md` §A**. Rows here exist only to attach the
`Articles` column and to record what that log does **not** cover.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Of **204** D1 men's programs listing a position for every player, **91.7%** carried three or four goalkeepers, median **3**; median **10** midfielders (IQR 8–12), **9** defenders (8–10), **6** forwards (5–8) | RosterWise 2025-26 roster dataset — `roster-data-fact-log.md` §A | 2026-08-26 | soccer/mens/guide/goalkeeper-recruiting |
| Of **339** D1 women's programs on the same filter, median **3** goalkeepers and **64.0%** carried exactly three; median **9** midfielders (7–10), **8** defenders (7–10), **7** forwards (6–9) | RosterWise 2025-26 roster dataset — `roster-data-fact-log.md` §A | 2026-08-26 | soccer/womens/guide/goalkeeper-recruiting |
| ⚠️ **PENDING — "Most D2 programs carry 3-4 GKs" and "D3 and NAIA programs carry 2-3 GKs" (men's); "Most D2 programs carry 3" and "D3 and NAIA carry 2-3" (women's).** The M3 remediation computed **D1 only**. These D2/D3/NAIA goalkeeper counts appear in the same bullet list as the sourced D1 figure and read as equally computed. They are not in `roster-data-fact-log.md` and no figure exists behind them. | RosterWise dataset — **not computed for D2/D3/NAIA** | 2026-08-26 (computation pending) | soccer/mens/guide/goalkeeper-recruiting:87-88, soccer/womens/guide/goalkeeper-recruiting:87-88 |
| ❌ **INVENTED SPECIFICITY — "A strong field player might have 20-30 realistic D1 options. A strong GK might have 10-15."** No dataset, no source, presented as a count. §4.3. | none | 2026-08-26 (unsourceable) | soccer/mens/guide/goalkeeper-recruiting:122, soccer/womens/guide/goalkeeper-recruiting:122 |

## M. RosterWise roster dataset — roster size, class year, height, geography

**These figures come from an OLDER capture than §L and §N.** The
`soccer/insights/` pages state "RosterWise 2025 roster dataset … captured
April–May 2026"; the goalkeeper, myths and men's-international-conferences
pages state "2025-26 … captured April–August 2026." `roster-data-fact-log.md`
records that only `mens-international-conferences` was regenerated, and that
"its sister page `mens-roster-size` and the other five `soccer/insights/` pages
have not been regenerated." **The site therefore publishes two vintages of the
same statistics simultaneously.** Every row below is flagged accordingly.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| ⚠️ Men's soccer roster size by division (programs / mean / median / min / max): **D1 211 / 28.9 / 28 / 15 / 42; D2 205 / 35.4 / 33 / 16 / 76; D3 406 / 31.9 / 31 / 16 / 58; NAIA 190 / 35.5 / 33 / 14 / 82.** Mercyhurst and New Haven excluded from D1 as mid-transition D2→D1. | RosterWise **April–May 2026** capture, as stated on the page. `roster-data-fact-log.md` confirms the 211 / 28.9 / 15–42 D1 row reproduces exactly on the current dataset — the rest of the table has **not** been re-verified. | 2026-08-26 (D1 row reproduced; D2/D3/NAIA rows carried from the old capture) | soccer/insights/mens-roster-size, soccer/insights/division-by-numbers, soccer/insights/mens-vs-womens-comparison |
| ⚠️ Women's soccer roster size by division: **D1 347 / 27.6 / 28 / 17 / 44; D2 263 / 29.6 / 29 / 14 / 53; D3 416 / 27.2 / 28 / 13 / 44; NAIA 197 / 26.0 / 25 / 12 / 55.** | RosterWise April–May 2026 capture | 2026-08-26 (not re-verified against the current dataset) | soccer/insights/womens-roster-size, soccer/insights/division-by-numbers, soccer/insights/mens-vs-womens-comparison |
| ⚠️ **Population figures conflict across live pages.** Women's total is **1,223** on `insights/womens-roster-size` and `insights/mens-vs-womens-comparison`, but **1,221** in the `sources:` block of `guide/recruiting-myths`; D1 women's programs are **347** on the insights pages and **349** in the body of `guide/recruiting-myths`. Men's total is 1,012 everywhere and matches `roster-data-fact-log.md`. | RosterWise dataset, two captures | 2026-08-26 (unreconciled) | soccer/insights/womens-roster-size, soccer/insights/mens-vs-womens-comparison, soccer/insights/division-by-numbers, soccer/guide/recruiting-myths |
| ⚠️ **2,235 programs and 66,888 players**; total roster spots **33,057 men's / 33,831 women's**; D3 roster spots **24,283**; **D1 = 25.0% of all college soccer programs** | RosterWise April–May 2026 capture | 2026-08-26 (arithmetic internally consistent; not re-verified) | soccer/insights/division-by-numbers, soccer/insights/mens-vs-womens-comparison |
| ⚠️ Average position counts per roster by division (GK/DEF/MID/FWD), men's **D1 3.5/8.9/10.1/6.5**, D2 3.9/10.9/12.4/7.8, D3 3.4/10.0/11.1/7.1, NAIA 3.7/10.7/11.9/7.6; women's **D1 3.1/8.4/8.7/7.4**, D2 3.1/9.2/9.9/7.2, D3 2.8/8.5/9.2/6.2, NAIA 2.6/8.0/8.6/5.9 | RosterWise April–May 2026 capture — **not in `roster-data-fact-log.md`, which reports medians and IQRs for D1 only** | 2026-08-26 (not re-verified) | soccer/insights/mens-roster-size, soccer/insights/womens-roster-size, soccer/insights/mens-vs-womens-comparison |
| ⚠️ Class-year distribution table (D1/D3 × men's/women's × Fr/So/Jr/Sr/Grad, e.g. D1 men's graduate students **7.7%** vs D1 women's **4.2%**) | RosterWise April–May 2026 capture | 2026-08-26 (not re-verified) | soccer/insights/mens-vs-womens-comparison |
| ⚠️ Average height by position and division (men's GK 6'2" at D1 …; women's GK 5'8" at D1 …), based on the **88.7%** of player records that publish height | RosterWise April–May 2026 capture | 2026-08-26 (not re-verified) | soccer/insights/division-by-numbers |
| ❌ **DATA-PRESENTATION ERROR — the men's height table publishes "5'12"" as the D2 defender average.** 5'12" is 6'0". A published figure in an impossible format. | Arithmetic | 2026-08-26 | soccer/insights/division-by-numbers:43 |
| ⚠️ Programs by state table (Pennsylvania 188, New York 184, California 131, Texas 107, Massachusetts 100, Illinois 90, Ohio 87, North Carolina 76, Indiana 72, Virginia 67, Florida 66, Georgia 64, Missouri 60, Wisconsin 56, Tennessee 55) | RosterWise April–May 2026 capture | 2026-08-26 (not re-verified) | soccer/insights/division-by-numbers |

## N. RosterWise roster dataset — international composition

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| D1 men's **33.8%** (2,099 of 6,203 across 213 programs); **56.3%** of D1 men's and **63.9%** of D2 men's programs at or above 30%; women's D1 **12.4%**, D2 **11.3%**, D3 **2.1%**, NAIA **20.0%** | RosterWise 2025-26 dataset — logged in full in `roster-data-fact-log.md` §F | 2026-08-26 | soccer/guide/recruiting-myths |
| D1 men's **33.6%** across 211 programs (excluding Mercyhurst and New Haven), 2,050 of 6,099; all 22 D1 conference rows machine-verified against the database with 0 mismatches; division totals D2 **37.3%**, D3 **11.2%**, NAIA **48.2%** | RosterWise 2025-26 dataset — `roster-data-fact-log.md` §F | 2026-08-26 | soccer/insights/mens-international-conferences |
| ❌ **PUBLISHED CONTRADICTION — three live pages state different values for the same statistic.** `insights/mens-international-conferences` (regenerated 2026-08-26) publishes men's D2 **37.3%** and NAIA **48.2%**; `insights/division-by-numbers`, `insights/mens-vs-womens-comparison` and `insights/womens-international-conferences` publish **37.4%** and **48.1%**. Women's NAIA is **20.0%** on the verified figures and **19.5%** on the three insights pages; women's D1 is **12.4%** vs **12.5%**. | RosterWise dataset, two captures | 2026-08-26 | soccer/insights/division-by-numbers, soccer/insights/mens-vs-womens-comparison, soccer/insights/womens-international-conferences vs soccer/insights/mens-international-conferences and soccer/guide/recruiting-myths |
| ❌ **PUBLISHED CLAIM CONTRADICTED BY ROSTERWISE'S OWN DATA — "D1: the highest concentration of international players in men's college soccer" and "D2 … is generally less prevalent than D1."** The dataset says the opposite: men's D2 is **37.3%** and NAIA **48.2%**, both **above** D1's 33.8%. The same inversion appears on the women's page (NAIA 20.0% is the highest women's division, not D1) and in `methodology/international-composition` ("international composition tends to be highest at D1 and D2 men's programs"). Note `insights/mens-international-conferences` states the correct ordering — so the site contradicts itself. | RosterWise 2025-26 dataset — `roster-data-fact-log.md` §F | 2026-08-26 | soccer/mens/guide/international-recruiting:42-48, soccer/womens/guide/international-recruiting:53-59, soccer/methodology/international-composition:83 |
| ⚠️ Women's D1 conference international table (22+ conference rows, Sun Belt 33.4% high, Big Sky 2.5% low) | RosterWise April–May 2026 capture. Its sister men's page was regenerated and machine-verified row by row; **this page was not**, and it still carries the pre-normalization conference names ("NEC", "CAA") the men's page fixed. | 2026-08-26 (not re-verified) | soccer/insights/womens-international-conferences |
| ⚠️ **PENDING — "Men's college soccer has a higher percentage of international players than most other NCAA sports."** A cross-sport comparative. RosterWise's dataset covers four sports; the NCAA publishes participation data that would settle it. Neither was used. | none | 2026-08-26 (unsourced) | soccer/mens/guide/international-recruiting:5 |
| ⚠️ **PENDING — the `sources:` blocks of both international-recruiting pages cite only "NCAA.org, international student-athlete eligibility requirements" and "NCAA Eligibility Center, international student guidelines."** Neither page cites the RosterWise dataset, although both make roster-composition claims (40%+, 30-40%, "fewer than 10%"). `guide/recruiting-myths` cites the dataset for the same class of claim. | §7.3 | 2026-08-26 | soccer/mens/guide/international-recruiting, soccer/womens/guide/international-recruiting |

## O. Youth soccer pathways

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **U.S. Soccer ended the Development Academy on April 15, 2020, effective immediately**, citing pandemic-driven finances: "It is with profound disappointment that we have made the determination to end the operation of the U.S. Soccer Development Academy, effective immediately." | **U.S. Soccer, "A Letter to Development Academy Clubs," April 15, 2020** (`https://www.ussoccer.com/stories/2020/04/a-letter-to-development-academy-clubs`), read in full | 2026-08-26 | soccer/guide/odp, soccer/mens/guide/club-pathways, soccer/womens/guide/club-pathways, soccer/mens/guide/youth-soccer-pathways-evolution, soccer/womens/guide/youth-soccer-pathways-evolution |
| ⚠️ **PENDING — the USDA "was created by the United States Soccer Federation in 2007" / "the Development Academy (2007–2020)."** U.S. Soccer's own closure letter does **not** state a founding year (it says only "a program that has been with U.S. Soccer for many years"). The pages attribute 2007 to MLSSoccer.com and Sports Illustrated. | US Soccer letter read in full — founding year absent. **No U.S. Soccer primary located for 2007.** | 2026-08-26 (primary not found) | soccer/guide/odp, soccer/mens/guide/youth-soccer-pathways-evolution, soccer/womens/guide/youth-soccer-pathways-evolution |
| ⚠️ **PENDING — USDA "over 160 member clubs and approximately 20,000 youth players" by 2019; "projected to lose nearly $7 million in fiscal 2020 and over $8 million in 2021."** The dollar figures are attributed on-page to **Sports Illustrated**. §1 bars Tier 2 from supporting a count or a dollar figure. | Sports Illustrated (Tier 2) is the only support | 2026-08-26 (Tier 1 not sought/found) | soccer/mens/guide/youth-soccer-pathways-evolution, soccer/womens/guide/youth-soccer-pathways-evolution |
| **MLS NEXT structure** — MLS NEXT covers U-13 through U-19; the Allstate Homegrown Division is the top tier and includes all 30 MLS club academy teams; the Academy Division launched in 2025-26 with approximately 230 clubs and 25,000 players; Homegrown Division players generally may not play high school soccer, Academy Division players may. | MLS NEXT official pages, all confirmed live and reachable on 2026-08-26: `mlssoccer.com/mlsnext/about/homegrown-division`, `mlssoccer.com/mlsnext/academy-division`, `mlssoccer.com/mlsnext/resources`; MLS NEXT Pro at `mlsnextpro.com`. **URLs confirmed; the individual figures were not re-read off each page on this pass.** | 2026-08-26 (URLs verified; figures pending re-read) | soccer/mens/guide/youth-soccer-pathways-evolution, soccer/mens/guide/club-pathways |
| ❌ **DEAD SOURCE — `mlsnext.mlssoccer.com`.** Cited verbatim in the `sources:` block of `soccer/mens/guide/club-pathways` as "MLS Next official site." **The hostname does not resolve** (DNS failure, tested 2026-08-26). MLS NEXT lives at `mlssoccer.com/mlsnext/`. | DNS + HTTP tested 2026-08-26 | 2026-08-26 | soccer/mens/guide/club-pathways (`sources:`) |
| ❌ **DEAD SOURCE — `boys.ecnlsoccer.com`.** Cited in the same `sources:` block as "ECNL Boys official site." **The hostname does not resolve.** | DNS + HTTP tested 2026-08-26 | 2026-08-26 | soccer/mens/guide/club-pathways (`sources:`) |
| ❌ **WRONG SOURCE — `ecnlsoccer.com` now redirects to an unrelated site.** Cited in `soccer/womens/guide/club-pathways` as "ECNL Girls official site: ecnlsoccer.com." Both `ecnlsoccer.com` and `www.ecnlsoccer.com` 301 to **`lilysoccer.com`, titled "Lily Beagles Soccer"** — a high-school team page. ECNL's actual site is **`theecnl.com`**, which the two youth-pathways-evolution pages already cite correctly. A family following the citation lands somewhere else entirely. | Fetched and title-read 2026-08-26 | 2026-08-26 | soccer/womens/guide/club-pathways (`sources:`) |
| ❌ **PUBLISHED CONTRADICTION — when Girls Academy was founded.** `soccer/womens/guide/club-pathways` says GA "was created in **2017** when the US Soccer Development Academy added girls' programming." `soccer/womens/guide/youth-soccer-pathways-evolution` says GA was "Founded in **2020** in the immediate aftermath of the USDA shutdown." These describe two different organisations being conflated: U.S. Soccer's girls' Development Academy (2017) and the Girls Academy League. | Contradiction between two live pages | 2026-08-26 | soccer/womens/guide/club-pathways vs soccer/womens/guide/youth-soccer-pathways-evolution |
| ⚠️ **PENDING — GA founding history generally.** `youth-soccer-pathways-evolution` attributes "Founded in 2020," "In October 2020, announced a strategic partnership with MLS and U.S. Youth Soccer," and "In February 2024, approved as a U.S. Soccer National Affiliate" to "Girls Academy's official site (girlsacademyleague.com)." **GA's About page carries no founding year and no history** (read in full 2026-08-26); `/history/` and `/about-ga/` both 404. The GA site does state "over 120 member clubs" in U13–U19. | girlsacademyleague.com/about read 2026-08-26 — history absent | 2026-08-26 (primary not found) | soccer/womens/guide/club-pathways, soccer/womens/guide/youth-soccer-pathways-evolution |
| ⚠️ **PENDING — ECNL founding history.** "Founded in March 2009 by a group of 40 girls' clubs"; "52 clubs by 2010, 66 by 2011, 94 girls' clubs by 2019"; grew "from 94 clubs in 2019 to 113"; "ECNL Boys launched in 2017 with 57 founding clubs." All attributed to "ECNL official communications — theecnl.com." **No about/history page was found on theecnl.com** (`/about` 404s; the site's link index carries no history page). | theecnl.com crawled 2026-08-26 — history page not found | 2026-08-26 (primary not found) | soccer/womens/guide/club-pathways, soccer/mens/guide/club-pathways, soccer/mens/guide/youth-soccer-pathways-evolution, soccer/womens/guide/youth-soccer-pathways-evolution |
| ⚠️ **PENDING — ODP: "established in 1977" by US Youth Soccer; four regions (East, Midwest, South, West); U-12 through U-17/U-18.** The page's `sources:` block names ussoccer.com and usyouthsoccer.org but no document. Not verified against either. | Primary not reached this pass | 2026-08-26 (pending) | soccer/guide/odp |
| ⚠️ **PENDING — "The Homegrown Player Rule was created by MLS in 2008"; MLS NEXT Pro "launched in 2022 … 30 teams, 27 MLS-affiliated and 3 independent"; "all 30 MLS clubs participate (after San Diego FC joined in 2025)"; NWSL "founded in 2012"; "the NWSL Draft eliminated effective 2025."** Sourced on-page to MLS Player Development Guidelines and MLS NEXT Pro's site (Tier 1 for MLS) but not re-read on this pass; the NWSL claims have no NWSL citation at all. | not re-verified | 2026-08-26 (pending) | soccer/mens/guide/youth-soccer-pathways-evolution, soccer/womens/guide/youth-soccer-pathways-evolution |
| ⚠️ **PENDING — "the U.S. Soccer Federation granted Division 1 sanctioning to the USL Super League."** Attributed on-page to **ESPN** (February 2024). §1 bars Tier 2 from supporting a governing-body decision of this kind; U.S. Soccer publishes its own sanctioning decisions. | ESPN (Tier 2) is the only cited support | 2026-08-26 (Tier 1 not sought) | soccer/womens/guide/youth-soccer-pathways-evolution |

## P. Claims with no source of any tier

Every row here is a hard claim under §3 that carries no source, and in most
cases could not have one — it is an assertion about coach behaviour, market
prices, or program practice that nobody publishes. Each needs a rewrite or a
cut, not a citation hunt.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| ❌ **"Industry surveys suggest most D1 men's soccer coaches begin evaluating talent during a player's sophomore year."** Unnamed authority, §4.3. Appears twice on the page. The nearest thing to a named source anywhere in the set is "United Soccer Coaches Annual Survey Data" in a **different** page's `sources:` block, supporting nothing on that page. | none | 2026-08-26 | soccer/mens/guide/recruiting-timeline (×2) |
| ❌ **Pre-House roster sizes: "many D1 soccer programs carried rosters of 30 or more players … 20-25 recruited players, plus 5-10 walk-ons"; "many programs carried 30+ players including walk-ons"; "Rosters often exceeded 30 players"; "Programs typically carried 28-32 players: 14 on full scholarship."** The M3/M4 pass **cut this exact class of claim** from `guide/house-settlement` and `soccer/insights/mens-roster-size` on the stated ground that RosterWise holds no pre-House rosters — and **missed these four pages.** Incomplete blast-radius trace. | `roster-data-fact-log.md` "Claims cut for lack of supporting data" | 2026-08-26 | soccer/guide/walk-on-pathways:~50, soccer/mens/index:~72, soccer/mens/guide/recruiting-timeline, soccer/mens/guide/scholarships, soccer/womens/guide/scholarships, soccer/womens/guide/recruiting-timeline |
| ❌ **"At a private D1 school [cost of attendance] can exceed $70,000 per year."** A dollar figure with no source. | none | 2026-08-26 | soccer/guide/walk-on-pathways |
| ❌ **"A D2 men's/women's soccer scholarship offer might cover 20-50% of the cost of attendance."** A distributional claim about awards nobody publishes. | none | 2026-08-26 | soccer/mens/guide/scholarships, soccer/womens/guide/scholarships |
| ❌ **"D2 rosters are often 25-35 players"; NAIA "typical rosters of 25-30 players."** RosterWise **owns** these figures — its own insights pages publish D2 men's mean 35.4 and NAIA men's 35.5, which the 25-35 and 25-30 bands both understate. The site contradicts itself. | RosterWise dataset (§M) | 2026-08-26 | soccer/mens/guide/scholarships, soccer/womens/guide/scholarships |
| ❌ **"Many men's soccer players take five years to graduate (a common pattern…)."** A distributional claim about graduation. | none | 2026-08-26 | soccer/mens/guide/scholarships (and a softened "Some" on the women's page) |
| ❌ **ID camp prices: "$75 to $300 for a day camp, $200 to $500+ for overnight camps."** Dollar ranges, stated twice per page, with a worked example ("If you're paying $400…"). | none | 2026-08-26 | soccer/mens/guide/id-camps, soccer/womens/guide/id-camps |
| ❌ **"Professional editing services … can be worth the investment ($100-$500 typically)."** | none | 2026-08-26 | soccer/mens/guide/recruiting-video, soccer/womens/guide/recruiting-video |
| ❌ **The coach video-watching model: "Watches the first 15-30 seconds… If not interested, closes within 30 seconds," "Target length: 3-5 minutes… almost none want more than 5 minutes."** A quantified behavioural model presented as observed fact. The page's only source is "NCAA.org, recruiting rules and permissible recruiting materials," which supports none of it. | none | 2026-08-26 | soccer/mens/guide/recruiting-video, soccer/womens/guide/recruiting-video |
| ❌ **"Most D1 and D2 men's/women's soccer programs run at least one ID camp per year."** A distributional claim about program practice. | none | 2026-08-26 | soccer/mens/guide/id-camps, soccer/womens/guide/id-camps |
| ❌ **"Some D3 schools with large endowments meet 100% of demonstrated financial need."** | none | 2026-08-26 | soccer/guide/recruiting-myths |
| ⚠️ **"Some D1 programs carry 30-40% international players"; "40% or more … fewer than 10%."** Supportable from the RosterWise dataset but not computed as a range and not cited on those pages. | RosterWise dataset (not computed as stated) | 2026-08-26 | soccer/mens/index, soccer/mens/guide/international-recruiting, soccer/womens/guide/international-recruiting, soccer/methodology/international-composition |
| ⚠️ **"The typical D1 verbal commitment window for men's soccer is spring of junior year through fall of senior year"** and the whole per-division "typical commitment window" quick-reference on both timeline pages. Presented as observed centres of mass; no commitment-timing dataset exists behind them. RosterWise's data cannot produce them (it holds rosters, not commitment dates). | none | 2026-08-26 | soccer/mens/index, soccer/mens/guide/recruiting-timeline, soccer/womens/guide/recruiting-timeline |
| ⚠️ **Division-by-division characterisations of what coaches weight ("D1: physical attributes carry more weight … D3: technical quality, tactical intelligence and character tend to be weighted more heavily").** Unsourced generalisations about coach evaluation, cited to "United Soccer Coaches coaching education materials" with no document named. | none named | 2026-08-26 | soccer/mens/guide/what-coaches-look-for, soccer/womens/guide/what-coaches-look-for |

## Q. Evaluative and ranking claims (§4.1)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| ❌ **"The best D3 men's soccer programs would compete with mid-tier D1 programs" / "The best D3 programs would compete with mid-tier D1 programs."** A comparative quality judgment about programs. | n/a — §4.1 bans it regardless of tier | 2026-08-26 | soccer/guide/recruiting-myths, soccer/insights/division-by-numbers:124 |
| ❌ **"A strong D3 conference like the UAA or NESCAC fields players who could roster at many D1 programs."** Named conferences, evaluative. | n/a — §4.1 | 2026-08-26 | soccer/guide/recruiting-myths |
| ❌ **"The Atlantic Coast Conference and the Big Ten have historically been among the strongest in men's and women's soccer."** Named conferences, evaluative. | n/a — §4.1 | 2026-08-26 | soccer/guide/evaluating-programs |
| ❌ **"MLS Next is the top tier of boys' youth soccer"** (unsourced) — but the same claim is attributed ("Per the MLS NEXT official site…") on the youth-pathways page. Audit finding L3, still open. | inconsistent attribution of one claim | 2026-08-26 | soccer/mens/guide/club-pathways:~56, soccer/mens/index:68 — vs soccer/mens/guide/youth-soccer-pathways-evolution:89, :105 |
| ❌ **Platform rankings — "roughly ordered by visibility to D1 college coaches"; "MLS Next showcases … attract the highest concentration of D1 college coaches"; "ECNL Boys … the second-most-visible boys' platform nationally"; "ECNL national events … attract the highest concentration of college coaches evaluating women's soccer recruits."** Ranked league quality by an unmeasured proxy. | n/a — §4.1 | 2026-08-26 | soccer/mens/guide/club-pathways, soccer/womens/guide/club-pathways |
| ❌ **"NAIA men's soccer programs average 35.5 players — the highest average of any division. The higher average partly reflects the significant international recruiting…"** The average is data; the causal explanation is not. | n/a | 2026-08-26 | soccer/insights/mens-roster-size:61 |

## R. Internal consistency and citation hygiene

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| ❌ **Two different coach-tenure thresholds published for the same concept.** `guide/evaluating-programs` defines "long-tenured coaches (8+ years)"; `methodology/coach-tenure` says "prioritize programs with established coaches (5+ years)." Neither threshold is sourced or explained. | internal contradiction | 2026-08-26 | soccer/guide/evaluating-programs, soccer/methodology/coach-tenure |
| ❌ **Stale `status: coming-soon` on links to pages that are live.** `mens/guide/scholarships` ends "here's the women's version (coming soon)" — that page is live; `mens/guide/club-pathways` says the same of the live women's club-pathways page; `mens/guide/recruiting-timeline` and `mens/guide/scholarships` mark `/guide/athletic-scholarships/` and `/soccer/womens/guide/scholarships/` coming-soon in `related:`. | build check 2026-08-26 | 2026-08-26 | soccer/mens/guide/scholarships, soccer/mens/guide/club-pathways, soccer/mens/guide/recruiting-timeline |
| ❌ **`sources:` entries that support nothing on the page.** "United Soccer Coaches Annual Survey Data" (`guide/recruiting-myths`); "U.S. Department of Education IPEDS" (`insights/division-by-numbers`, `methodology/rosterfit-score` — no IPEDS-derived figure appears); "NCAA.org — Academic Success Rate data" (`guide/d3-recruiting-reality` — no ASR figure appears). | §7.3 | 2026-08-26 | soccer/guide/recruiting-myths, soccer/insights/division-by-numbers, soccer/guide/d3-recruiting-reality, soccer/methodology/rosterfit-score |
| ❌ **Bare-domain `sources:` links.** Four insights pages cite `<a href="https://www.ncaa.org">NCAA.org</a> — House v. NCAA Settlement Implementation (June 2025)` and `<a href="https://naia.org">NAIA.org</a>`. §7.3 requires the document, not the domain — and the roster limit these pages state lives in Bylaw 17.2, which the link does not reach. | §7.3 | 2026-08-26 | soccer/insights/mens-roster-size, soccer/insights/womens-roster-size, soccer/insights/division-by-numbers, soccer/insights/mens-vs-womens-comparison, soccer/insights/mens-international-conferences, soccer/insights/womens-international-conferences |
| ❌ **No date-anchor footer on `soccer/guide/reading-rosters`.** Every other soccer guide page carries one after the M1/M2 rollout. | build check 2026-08-26 | 2026-08-26 | soccer/guide/reading-rosters |
| ❌ **No `sources:` block on the four soccer hub pages** (`soccer/index`, `soccer/mens/index`, `soccer/womens/index`, `soccer/guide/index`) or on `blog/how-to-read-a-college-soccer-roster`, yet `soccer/index` and `soccer/mens/index` carry hard claims (the 1,600-program count, the head-count error, the 2026-27 calendar dates, 9.9, 28). The audit's "sources coverage is complete (129/129)" counted `content.njk` pages only; the hubs were never in that denominator. | §7.3 | 2026-08-26 | soccer/index, soccer/mens/index, soccer/womens/index, soccer/guide/index, blog/how-to-read-a-college-soccer-roster |

---

### Open items to re-check before/at publish

**Must fix before this content set can pass §7 again**

1. **The head-count error (§B).** D1 women's soccer was an equivalency sport at
   14.0, not a head-count sport. Eight soccer pages and one volleyball page carry
   the wrong structure, and `soccer/womens/guide/scholarships` is built on it
   end to end. This is a §9 correction, not an edit: fix the page and this log
   in the same commit, and check the App Store description and in-app copy for
   the same wording.
2. **The two unofficial-visit errors (§I).** "Athletes can take unofficial
   visits to campus at any time" is wrong for any visit with athletics-department
   involvement (Bylaw 13.7.1.1 gates those at August 1 of junior year), and the
   July restriction the pages state is a **basketball-only** rule (Bylaws 13.7.2.1
   and 13.7.2.2). Both appear in the same bullet pair on both timeline pages.
3. ~~**The "non-opt-in schools keep the old limits" sentences.**~~ **Resolved
   2026-08-26.** The NCAA's own House Q&A (B2, B4, A11, A16) settles it: the aid
   limits are gone division-wide, the old figure survives only as a value
   threshold measured in equivalencies, and roster size at a non-opt-in school is
   a conference or institutional matter. All affected soccer and volleyball pages
   now say this.
4. **Pre-House roster-size claims (§P, row 2).** The M3/M4 pass cut exactly this
   claim elsewhere and missed four soccer pages plus two more. Finish the trace.
5. **The international-composition inversion (§N).** Three pages tell families
   D1 has the highest international share; RosterWise's own verified data says
   D2 and NAIA are higher. Fix the pages, not the data.

**Needs a primary before the number can stay in print**

6. **NJCAA membership** — "more than 400 member colleges" here, "over 500" on
   `volleyball/guide/juco-pathway`, "more than 500 in 44 states" on
   `lacrosse/guide/junior-college`. The figure could not be found on NJCAA.org
   (its About/Overview paths 404 since the site moved platforms on 2026-07-01).
   Three live pages, two numbers, no source (§F).
7. The June 30, 2025 opt-in deadline and the named power-conference opt-in (§J).
8. ODP's 1977 founding, four-region structure and age groups (§O).
9. ECNL and Girls Academy founding histories — neither body appears to publish
   them, and the two GA dates on the site contradict each other (§O).
10. The USDA's 2007 founding year, its club/player counts, and the SI-sourced
    loss figures (§O).
11. D2/D3/NAIA goalkeeper counts — RosterWise can compute these; it hasn't (§L).

**Housekeeping that expires or rots**

12. **Two vintages of RosterWise data are live at once (§M, §N).** Five
    `soccer/insights/` pages sit at the April–May 2026 capture while the
    goalkeeper, myths and men's-international-conferences pages sit at
    April–August 2026, and the two disagree in the first decimal place.
    Regenerate the five together, in one commit, as
    `roster-data-fact-log.md` already recommends.
13. **Population counts disagree across live pages** — women's total 1,221 vs
    1,223, D1 women's 347 vs 349 (§M).
14. **Three dead or wrong source URLs (§O):** `mlsnext.mlssoccer.com` and
    `boys.ecnlsoccer.com` do not resolve; `ecnlsoccer.com` redirects to an
    unrelated high-school team site. Replace with `mlssoccer.com/mlsnext/` and
    `theecnl.com`.
15. **The NCAA is serving the 2025-26 signing-dates table at the 2026-27 URL
    (§I).** Whoever re-verifies signing dates next will be handed last year's
    document by the current-year path.
16. **The 2026-27 "Other Division I Sports" recruiting calendar filename uses an
    en dash** (§G). The hyphenated URL 404s. Both timeline pages tell families
    to "verify the current calendar at `ncaaorg.s3.amazonaws.com`" — they will
    not find it by guessing.
17. **`5'12"` is published as a height average** (§M).
18. Re-run every "2026-27 calendar," "2025-26 breakdown," and "as of April 2026"
    anchor at the next season rollover. The men's and women's soccer calendars
    diverge sharply — men's has three periods, women's has four, and neither
    resembles the other — so they cannot be updated by analogy.
