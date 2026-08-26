# RosterWise Lacrosse — Fact Log & Audit Trail

**Purpose:** one row per published claim → primary source → date verified →
article(s) that use it.
Lives in `prototypes/` so it never deploys (build only emits from `src/`).
Before flipping any article to live, check every number/date/rule in its copy
against a row here.

**Verification date for this pass:** 2026-08-26 (re-confirm fast-moving claims
each season).

**Scope:** all 29 pages under `src/lacrosse/`. Built retroactively against
already-published copy in response to finding **H1** of
`reports/content-audit-2026-08-25.md`. Because the copy came first, this is an
**audit of published claims**, not a pre-draft research log.

**Sourcing rules honored:** primary/near-primary only — the **2026-27 NCAA
Division I Manual** as served by the NCAA Legislative Services Database (LSDBi;
the full manuals download as PDFs from
`https://web3.ncaa.org/lsdbi/reports/getReport/90008` (D1), `/90010` (D2) and
`/90011` (D3) — the fastest route to any bylaw, and not known to the earlier
remediation passes),
the NCAA's own 2026-27 men's and women's lacrosse recruiting calendars and House
implementation Q&A on `ncaaorg.s3.amazonaws.com`, NCAA.org's membership and
sport-sponsorship tables, NCAA.org media-center releases, the NAIA Handbook,
NJCAA.org's own published divisional structure, and World Lacrosse's own
releases. NO aggregators and NO recruiting-service blogs were used or read.
**Lacrosse carries by far the most Tier-X and Tier-2 sourcing of the three
sports** — 2aDays on four pages, ScholarshipStats.com on two, USA Lacrosse
*magazine* as the load-bearing support for the settlement's scholarship limits,
plus Sports Illustrated, Sportico, three law firms, equityix.com and a
Wikipedia-titled entry. Those are logged in §H and §I, not relied on here.

**Sibling logs that already carry lacrosse claims** — do not duplicate rows:
`governance-counts-fact-log.md` §C and §E (NCAA lacrosse sponsorship counts, and
the NAIA/NJCAA counts that were cut), `roster-data-fact-log.md` §C (RosterWise
D1 roster-size figures), `audit-c1-c2-fact-log.md` §A–§D (OJLL, Haudenosaunee
Nationals, NCAA amateurism, international women's field), `audit-m1-m2-fact-log.md`
§A–§B (House money figures, D1 transfer windows).

**The headline for lacrosse:** the recruiting-calendar work is outstanding — the
2026-27 men's and women's calendars are reproduced period-for-period without a
single error, and the men's contact-date change is correctly dated to the exact
day the legislation was adopted. Everything downstream of the calendars is
weaker: a bylaw is quoted that does not say what the page says it says, official
visits for women's lacrosse are stated wrong on three pages, and a recruiting
service is cited nineteen times.

---

## VERIFICATION AND REMEDIATION STATUS — updated 2026-08-26

**This log has been through five independent blind verification passes and a
remediation branch.** Each verifier worked without access to this log, to the site
copy, or to any conclusion reached here; each was given a neutral research brief and,
only at the end, asked to adjudicate paired statements presented without labels so it
could not tell which was the published claim and which the proposed correction.

Every correction this log proposed was upheld. The verifiers also overturned several
things this log had asserted or left pending, and those are recorded in the sections
below rather than quietly amended. Where a verifier contradicted this log, the
verifier won.

**Corrections landed on branch `fix/audit-h1-content-corrections`.** Rows below that
describe a published error now describe an error that HAS BEEN FIXED — the row is
kept as the audit trail, per §9's requirement not to quietly rewrite history.



### What the verifiers changed in this log

| Item | This log said | Verifier finding | Action |
| --- | --- | --- | --- |
| **The fabricated bylaw quote** | Flagged as the worst finding in the audit | **Confirmed, in stronger terms.** The verifier called Statement 1 "a fabricated quotation" — 13.12.1.5.1's own title excludes lacrosse and its operative sentence repeats the exclusion. | Both camp pages rewritten with 13.12.1.5.2 and 13.12.1.5.3 quoted in full |
| **Women's lacrosse official visits** | Flagged as January 1 vs September 1 | **Confirmed, with the origin.** January 1 of junior year is both the **women's basketball** date (13.6.2.1.6) and the **Division III** date (13.6.1.1.1) — a cross-sport and cross-division contamination. Lacrosse has never used it. | Three pages corrected |
| **The 2026 divergence** | Logged as adopted 6/29/26 | **Confirmed, plus the reason.** Men's and women's lacrosse were **identical until 1 August 2026** — a single gender-neutral "Exception — Lacrosse" at September 1. The **NCAA D1 Men's Lacrosse Oversight Committee's March 2026 report** introduced the split and gives the rationale in the NCAA's own words. | Report added as a source and a section on two pages |
| **The 2017/2018 history** | Carried "Proposal 2018-93-2, submitted by the ACC" from USA Lacrosse magazine | **Not verifiable** — LSDBi puts proposal records behind a login. But Bylaw 13.1.1.1.7's revision history ("4/26/17 effective 8/1/17, 4/25/18") corroborates the timeline from the Manual itself. | Proposal numbering removed from three pages; bylaw history cited instead |
| **184 Canadians in NCAA D1** | Logged as pending, sourced to a lacrosse media site | **Traced to its origin and refuted as a fact.** A single named blog whose author says "nobody was tracking the information" and who built it by hand; **the same article gives 181 two paragraphs later**. No governing body publishes any such count — the NCAA's demographics database has no nationality dimension, and its international-athlete research covers first-year non-transfers only and does not publish country-by-sport for lacrosse. | **Cut.** Replaced with the NCAA's own figures: D1 men's lacrosse first-year international athletes **41 (2017) → 45 (2022)**, ~7% of first-year players |
| **F-1 visas and NIL** | Logged as pending, sourced to law firms and Sportico | **The published claim misattributed a prohibition to regulation.** F-1 employment rules contain **zero** occurrences of "likeness," "name, image" or "athlete." They bar unauthorized employment; whether NIL is employment has never been decided. The **NCAA** does state a flat prohibition in its International Student-Athlete Handbook — that is the NCAA's reading, not a quotation of federal policy. The NCAA's House guidance mentions visas/immigration/F-1 **zero times**, so there is no published position on revenue sharing at all. | Both pages rewritten to separate NCAA position from government silence |
| **The "September 2025 P-1A ruling"** | Carried as supporting the visa analysis | **A denial of a motion to dismiss.** Procedural only; decided nothing about whether college athletes qualify for P-1A; still pending as of this writing. | Described accurately |
| **Canada's national sport** | Logged as pending — "specifically box lacrosse, per federal legislation" | **Wrong twice.** The National Sports of Canada Act (two sections, quoted in full) names lacrosse the national **SUMMER** sport, and says only "the game commonly known as lacrosse" — no box specificity anywhere. | Corrected, with the Justice Laws Website cited |
| **World Lacrosse "90 federations, doubled from 45"** | Logged as pending | **Genuine WL wording from October 2023, now stale.** Current: **97 member nations across four continental federations** (member map dated April 2026); 45 at end-2008. WL says "all five continental **regions**" — a governance term, not a continent count. | Both pages updated |
| **IMLCA / IWLCA platform figures** | Flagged the duplicate "35,000+" as worth checking | **Proven template copy.** The men's platform page literally names the **IWLCA** in that sentence. Both sites are built on a shared vendor template and the block was cloned. | **Cut** from both pages; IWLCA's own dated figure (nearly 11,000, April 2026) used instead |
| **"750+ coaches" / "1,200+ coaches"** | Logged as pending | **Asymmetric.** 1,200+ is corroborated on the IWLCA's own association site; 750+ appears only on the platform's marketing pages — the IMLCA association site publishes no membership figure. | Both labelled accordingly |
| **2025 D1 championship** | Logged as pending | **Verified**: Cornell (18-1) beat Maryland 13-10 at Gillette Stadium on 26 May 2025, Cornell's first title since 1977 and fourth overall. **MOP is sourced to Cornell Athletics, not the NCAA** — NCAA.com has no MOP field and the NCAA record books 404. | Published with that attribution |
| **LA28** | Carried Olympics.com as a source | **Sixes format, IOC Session approval 16 October 2023 — sourced to World Lacrosse, not the IOC.** The verifier could not reach olympics.com; the IOC session number is therefore **not** published. | Olympics.com removed; WL cited |
| **2022 Women's Championship / Australia titles / Israel 2014** | Logged as pending | **Verified:** USA, Canada, England, Australia. Australia gold 1986 and 2005. Israel 7th in 2014 — though WL's own final-standings table renders broken, so only the Day 9 narrative supports it. | Retained with that caveat |

---

## A. Division I initial contact dates — the lacrosse exception

**All of the following are now verifiable in one place**, which the pages do not
yet cite: the **2026-27 NCAA Division I Manual**, read via NCAA LSDBi
(`https://web3.ncaa.org/lsdbi/reports/getReport/90008`), footer-stamped 8/26/26.
The two recruiting calendars the pages cite for these dates **do not contain
them** — the calendars publish periods only.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Men's lacrosse: off-campus recruiting contacts may not be made before the Wednesday (7 a.m.) immediately following Labor Day at the beginning of junior year.** Quoted: "In men's lacrosse, off-campus recruiting contacts shall not be made with an individual (or the individual's family members) before the Wednesday (7 a.m.) immediately following Labor Day at the beginning of the individual's junior year in high school." **Adopted 6/29/26, effective 8/1/26** — exactly the legislation date the pages state. | **2026-27 NCAA D1 Manual, Bylaw 13.1.1.1.8 "Exception — Men's Lacrosse"** | 2026-08-26 | lacrosse/index, lacrosse/mens/index, lacrosse/guide/september-1-junior-year-rule, lacrosse/mens/guide/recruiting-timeline, lacrosse/mens/guide/international-recruiting, lacrosse/mens/guide/id-camps-and-tournaments, lacrosse/mens/guide/club-pathways |
| **Women's lacrosse: off-campus recruiting contacts may not be made before September 1 (12 p.m. Eastern time) at the beginning of junior year.** | **2026-27 NCAA D1 Manual, Bylaw 13.1.1.1.7 "Exception — Women's Lacrosse"** (Revised 6/29/26 effective 8/1/26) | 2026-08-26 | lacrosse/index, lacrosse/womens/index, lacrosse/guide/september-1-junior-year-rule, lacrosse/womens/guide/recruiting-timeline, lacrosse/womens/guide/international-recruiting, lacrosse/womens/guide/id-camps-and-tournaments |
| **The same two dates gate telephone calls, recruiting materials and electronic correspondence, unofficial visits with athletics-department involvement, and recruiting conversations at institutional camps.** | 2026-27 NCAA D1 Manual, Bylaws **13.1.3.1.2 / 13.1.3.1.3** (telephone calls), **13.4.1.2 / 13.4.1.3** (materials and electronic correspondence), **13.7.1.2 / 13.7.1.3** (unofficial visits), **13.12.1.5.2 / 13.12.1.5.3** (camp conversations) | 2026-08-26 | lacrosse/guide/september-1-junior-year-rule, lacrosse/mens/guide/recruiting-timeline, lacrosse/womens/guide/recruiting-timeline, lacrosse/mens/guide/id-camps-and-tournaments, lacrosse/womens/guide/id-camps-and-tournaments |
| **The "in either direction" point is real and sourced.** A coach may not *receive* a call from a lacrosse prospect before the date either: "In men's lacrosse, an institutional staff member may not receive telephone calls from an individual (or the individual's family members) before the Wednesday (7 a.m.) immediately following Labor Day…" (Adopted 6/29/26 effective 8/1/26); the women's equivalent names September 1, 12 p.m. Eastern. | 2026-27 NCAA D1 Manual, Bylaws **13.1.3.2.7** and **13.1.3.2.6** | 2026-08-26 | lacrosse/guide/september-1-junior-year-rule, lacrosse/mens/guide/recruiting-timeline |
| **The contrast the site draws with other sports is correct.** The D1 **general rules** are: telephone calls not before **June 15 at the conclusion of sophomore year** (Bylaw 13.1.3.1); recruiting materials and electronic correspondence not before the same date (Bylaw 13.4.1); off-campus contacts not before **August 1 at the beginning of junior year** (Bylaw 13.1.1.1). Lacrosse is an explicit exception to all three. | 2026-27 NCAA D1 Manual, Bylaws 13.1.1.1, 13.1.3.1, 13.4.1 | 2026-08-26 | lacrosse/index, lacrosse/mens/index, lacrosse/womens/index, lacrosse/guide/september-1-junior-year-rule, lacrosse/mens/guide/recruiting-timeline, lacrosse/womens/guide/recruiting-timeline |
| **"For the class beginning junior year in fall 2026, the Wednesday after Labor Day is September 9, 2026."** Labor Day 2026 is Monday September 7; the following Wednesday is September 9. Arithmetic on the sourced rule, correctly labelled on-page as derived for one cycle only. | Bylaw 13.1.1.1.8 plus the calendar | 2026-08-26 | lacrosse/guide/september-1-junior-year-rule, lacrosse/mens/guide/recruiting-timeline |
| ❌ **PUBLISHED ERROR — "Official visits [for D1 women's lacrosse] begin January 1 of junior year."** The current bylaw says otherwise: "In baseball and women's lacrosse, a prospective student-athlete may not be provided an expense-paid visit earlier than **September 1 (12 p.m. Eastern time for women's lacrosse)** of the prospective student-athlete's junior year in high school." **January 1 of junior year is the DIVISION III rule** (D3 Bylaw 13.6.1.1.1) — it appears to have been attached to D1 women's lacrosse by mistake. The men's page repeats it as a contrast ("This differs from women's lacrosse, where official visits begin January 1"), and `womens/guide/international-recruiting` attributes it to the 2026-27 women's lacrosse calendar, **which contains no such date**. | **2026-27 NCAA D1 Manual, Bylaw 13.6.2.1.2** (Revised 6/24/26, 6/29/26 effective 8/1/26); D3 Manual Bylaw 13.6.1.1.1 for the January 1 rule it was confused with | 2026-08-26 | lacrosse/womens/guide/recruiting-timeline:10, :153; lacrosse/womens/guide/international-recruiting:51; lacrosse/mens/guide/recruiting-timeline:23, :174 |
| **Men's lacrosse official visits open on the same Wednesday-after-Labor-Day date** — so the men's page's own statement is correct. | 2026-27 NCAA D1 Manual, Bylaw **13.6.2.1.3** (Adopted 6/29/26 effective 8/1/26) | 2026-08-26 | lacrosse/mens/guide/recruiting-timeline |
| **Each institution is limited to seven recruiting opportunities (contacts and evaluations combined) per prospect** in both men's and women's lacrosse. | 2026-27 NCAA D1 Manual, Bylaws **13.1.5.6** (women's) and **13.1.5.7** (men's) | 2026-08-26 | *(not stated in copy — worth adding; the pages describe the contact window but never the contact limit)* |
| ⚠️ **PENDING — "athletes have a cap of 5 official visits across all D1 schools combined."** Stated on both timeline pages "per NCAA rules." The governing provision was not located on this pass. | not located | 2026-08-26 (pending) | lacrosse/mens/guide/recruiting-timeline:193, lacrosse/womens/guide/recruiting-timeline:154 |
| ⚠️ **PENDING — the 2017 and 2018 legislative history.** "In April 2017, the NCAA approved landmark legislation pushing the initial recruiting contact date to September 1 of junior year for men's and women's lacrosse," jointly proposed by the IMLCA and IWLCA; and "men's and women's lacrosse were specifically **exempted**" from the 2018 June 15 reform via **Proposal 2018-93-2**, submitted by the ACC. Attributed on-page to **USA Lacrosse magazine** — Tier 2, supporting a rule and a date, which §1 forbids. NCAA LSDBi holds the proposal records; they were not retrieved. | USA Lacrosse magazine (Tier 2) is the only cited support | 2026-08-26 (Tier 1 not retrieved) | lacrosse/guide/september-1-junior-year-rule, lacrosse/mens/guide/recruiting-timeline, lacrosse/womens/guide/recruiting-timeline |

## B. 2026-27 NCAA Division I Men's Lacrosse Recruiting Calendar

Primary source: **"2026–27 NCAA Recruiting Calendar — Division I Men's
Lacrosse," updated July 30, 2026**
(`https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27D1Rec_MLARecruitingCalendar.pdf`)
— the exact URL the page cites.
**All thirteen rows of the published table reproduce the calendar exactly.**

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Contact **Aug 1–3, 2026**; Quiet **Aug 4–10**; Dead **Aug 11–31** | 2026-27 D1 MLA calendar | 2026-08-26 | lacrosse/mens/guide/recruiting-timeline |
| Contact **Sep 1 – Oct 31, 2026** (calendar note: "*No lacrosse evaluations") | Same | 2026-08-26 | lacrosse/mens/guide/recruiting-timeline |
| Contact **Nov 1–22, 2026** with Dead **Nov 9–12**; Dead **Nov 23–29** | Same | 2026-08-26 | lacrosse/mens/guide/recruiting-timeline |
| Quiet **Nov 30 – Dec 23, 2026** with Dead **Dec 9–13** — "The first official day of the Intercollegiate Men's Lacrosse Coaches Association Convention to 12:01 AM on the day after the adjournment of the convention" | Same | 2026-08-26 | lacrosse/mens/guide/recruiting-timeline |
| Dead **Dec 24, 2026 – Jan 3, 2027**; Contact **Jan 4–18, 2027** (no evaluations); Quiet **Jan 19 – Feb 28, 2027** | Same | 2026-08-26 | lacrosse/mens/guide/recruiting-timeline |
| Contact **Mar 1 – May 27, 2027**; Dead **May 28 – Jun 1 at noon**; Contact **Jun 1 (noon) – Jul 31, 2027** with Dead **Jul 1–10** | Same | 2026-08-26 | lacrosse/mens/guide/recruiting-timeline |
| Calendar detail **not** in copy: the December and July dead periods carry a "†" exception allowing evaluation at showcases and tournaments held in conjunction with the IMLCA Convention and the IMLCA July summer meeting. | Same, footnote legend | 2026-08-26 | *(logged for completeness)* |

## C. 2026-27 NCAA Division I Women's Lacrosse Recruiting Calendar

Primary source: **"2026–27 NCAA Recruiting Calendar — Division I Women's
Lacrosse," updated July 30, 2026**
(`https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27D1Rec_WLARecruitingCalendar.pdf`).
**All eleven rows reproduce the calendar exactly, including the nested
evaluation, dead and shutdown windows.**

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Recruiting Shutdown **Aug 1–14, 2026**; Quiet **Aug 15–27**; Dead **Aug 28 – Sep 3** | 2026-27 D1 WLA calendar | 2026-08-26 | lacrosse/womens/guide/recruiting-timeline |
| Contact **Sep 4 – Nov 30, 2026**, containing Evaluation **Nov 6–8, 13–15 and 20–22** ("5 PM Friday through Sunday" — the three weekends immediately before Thanksgiving), Dead **Nov 9–12**, Dead **Nov 18–20** ("Dead period will end on the 20th when IWLCA Convention adjourns"), and Recruiting Shutdown **Nov 24–29** | Same | 2026-08-26 | lacrosse/womens/guide/recruiting-timeline |
| Contact **Dec 1–30, 2026** with Recruiting Shutdown **Dec 22–26**; Recruiting Shutdown **Dec 31, 2026 – Jan 2, 2027** | Same | 2026-08-26 | lacrosse/womens/guide/recruiting-timeline |
| Contact **Jan 3 – May 27, 2027**; Dead **May 28–30**; Contact **May 31 – Jun 10**; Evaluation **Jun 11 – Jul 31** with Dead **Jul 2–6** | Same | 2026-08-26 | lacrosse/womens/guide/recruiting-timeline |
| The women's calendar carries three references to **Bylaw 13.1.7.3.1 (Evaluations During Contact Periods — Women's Lacrosse)**, which limits contact-period evaluation to regularly scheduled scholastic contests and practices. The `september-1-junior-year-rule` page cites this bylaw in its `sources:` block. | 2026-27 D1 WLA calendar; 2026-27 NCAA D1 Manual Bylaw 13.1.7.3.1 | 2026-08-26 | lacrosse/guide/september-1-junior-year-rule |
| ⚠️ **CALENDAR CONFLICT THE COPY MISSES.** `womens/guide/recruiting-timeline` says that on **September 1 of junior year** "off-campus contact becomes permissible." On the 2026-27 calendar, **August 28 – September 3 is a dead period** — no in-person contact of any kind — and the contact period does not begin until **September 4**. The bylaw date and the calendar period are two separate gates; on this cycle the calendar is the later one. | 2026-27 D1 WLA calendar vs. Bylaw 13.1.1.1.7 | 2026-08-26 | lacrosse/womens/guide/recruiting-timeline:9 |

## D. Other divisions

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **D3 has no recruiting calendar at all** — no contact, evaluation, quiet or dead periods. Verified by full-text search of the D3 Manual: "dead period" and "contact period" appear **zero** times. Its one timing rule is that in-person off-campus contact waits until the prospect has **completed sophomore year** — the page's parenthetical that a common third-party error puts this at junior year is correct. | **2026-27 NCAA Division III Manual, Bylaw 13.1.1.1** and full-text search, via LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90011`) | 2026-08-26 | lacrosse/guide/september-1-junior-year-rule |
| **D3 institutions may not award financial aid on the basis of athletics.** | 2026-27 NCAA D3 Manual, Bylaw **15.01.3** | 2026-08-26 | lacrosse/guide/september-1-junior-year-rule, lacrosse/mens/guide/scholarships-after-house-settlement, lacrosse/womens/guide/scholarships-after-house-settlement, lacrosse/guide/house-settlement-and-lacrosse |
| ⚠️ **PARTIAL — "D2 runs a single recruiting calendar for all sports, and for 2026-27 the whole year is a contact period except for a signing-date dead period."** The single all-sports D2 calendar is confirmed (`ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27D2Rec_RecruitingCalendar_AllSports.pdf`), and it uses three categories — Contact Period, Dead Period and **Signing Date Dead Period**. The published D2 calendar shows **more than one** dead period, so "except for a signing-date dead period" understates it. Also note D2 **does** gate in-person off-campus contact and official visits at "After June 15, immediately preceding a prospective student-athlete's junior year." | **2026-27 D2 Recruiting Calendar (All Sports)** and **Division II Coaches Off-Campus Recruiting Guide 2026–27** (updated 2026-07-30) | 2026-08-26 | lacrosse/guide/september-1-junior-year-rule |
| **The NJCAA's published three-division scholarship structure**, quoted verbatim: D1 "may grant full athletic scholarships (tuition, books, fees, room & board), up to $250 in course required supplies, and transportation costs one time per academic year"; D2 "limited to tuition, books, fees, and up to $250 in course required supplies"; D3 "not permitted to offer any athletic scholarships"; and "Each sport has limits on the number of scholarships that can be granted." | **NJCAA.org, "Divisional Structure"** (`https://www.njcaa.org/member_colleges/Divisional_Structure`). The page is client-rendered and returns an empty body to a plain fetch; read via a rendering browser on the verification date. | 2026-08-26 | lacrosse/womens/guide/scholarships-after-house-settlement, lacrosse/guide/junior-college |
| ⚠️ **PENDING — NJCAA membership, and a three-way disagreement inside RosterWise.** `lacrosse/guide/junior-college` says "**more than 500 member colleges in 44 states**, by its own figures"; `volleyball/guide/juco-pathway` says "over 500"; `soccer/guide/junior-college` says "more than 400." The figure could not be found on NJCAA.org — the About/Overview and `/compete/` paths **404 as of 2026-08-26** (the NJCAA moved to a new platform on 2026-07-01) and the home page carries no membership count. | NJCAA.org searched via a rendering browser 2026-08-26 — count not located, cited paths dead | 2026-08-26 (primary not found) | lacrosse/guide/junior-college:7 — and volleyball/guide/juco-pathway, soccer/guide/junior-college |
| ⚠️ **PENDING — "Per an official NJCAA release dated July 11, 2024, the association discontinued Women's Lacrosse as an NJCAA-sponsored sport."** A dated governing-body action. The release was not retrieved; NJCAA's news archive was not reachable at the cited path. | not retrieved | 2026-08-26 (pending) | lacrosse/guide/junior-college:15 |
| ⚠️ **PENDING — "Adopted by the NCAA Division I Cabinet on June 24, 2026 … a reform lowers the transferable GPA requirement for two-year transfers."** Searched NCAA.org's media centre and legislation index; **not found**. NJCAA's own site carries a July 9, 2026 op-ed on its "#SameGameSameRules" campaign, consistent with the campaign existing but not establishing the Cabinet action or its date. **Same claim as `volleyball/guide/juco-pathway` — fix both together.** | NCAA.org searched 2026-08-26 — action not located | 2026-08-26 (primary not found) | lacrosse/guide/junior-college:40 — and volleyball/guide/juco-pathway |
| ⚠️ **PENDING — "NJCAA.org — Junior college lacrosse scholarship framework, including the 20-scholarship maximum at NJCAA D-I."** The NJCAA publishes that per-sport limits exist but does not publish the numbers; the 20 could not be verified. The audit's governance pass already flagged the body-prose version of this claim ("Per multiple sources, the NJCAA offers 20 men's lacrosse scholarships maximum per team at D-I") as unnamed authority; it now sits in the `sources:` block attributed to NJCAA.org, which is worse — it asserts a source that does not carry it. | NJCAA.org "Divisional Structure" (limits exist, numbers not published) | 2026-08-26 (primary not found) | lacrosse/mens/guide/scholarships-after-house-settlement (`sources:`) |
| ⚠️ **PENDING — NAIA lacrosse.** The pages correctly state that the NAIA sponsors men's lacrosse and publishes no verifiable program count (the §7 fix from the governance pass). For reference, the **NAIA does publish a lacrosse aid limit: 12** — see `governance-counts-fact-log.md` and the NAIA Handbook 2026-2027, Section XIII.H, p.122. No lacrosse page states it. | NAIA Official & Policy Handbook 2026-2027, XIII.H | 2026-08-26 | *(available and unused)* |

## E. House settlement — roster caps and scholarships

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **D1 men's lacrosse roster limit = 48; D1 women's lacrosse roster limit = 38.** | **2026-27 NCAA Division I Manual, Bylaw 17.2 "Roster Limitations," p.194** (Adopted 6/6/25 effective 7/1/25), via LSDBi: "Men's Lacrosse 48 / Women's Lacrosse 38" | 2026-08-26 | lacrosse/guide/house-settlement-and-lacrosse, lacrosse/mens/guide/scholarships-after-house-settlement, lacrosse/womens/guide/scholarships-after-house-settlement, lacrosse/mens/guide/recruiting-timeline, lacrosse/mens/guide/international-recruiting, lacrosse/womens/guide/international-recruiting, lacrosse/methodology/class-year-gaps, lacrosse/methodology/roster-composition, lacrosse/methodology/international-composition, lacrosse/methodology/rosterfit-score |
| **Pre-settlement D1 men's lacrosse = 12.6 equivalencies; D1 women's lacrosse = 12 equivalencies.** Both were equivalency sports; neither was head-count. | **NCAA Division I Board of Directors, "Anticipated Actions Contingent Upon Court Final Approval of the House v. NCAA Settlement" (April 2025), "Bylaw 15 House Settlement Proposal," pp.14-15** — reproduces pre-House Bylaw **15.5.3.1.1** ("Lacrosse 12.6," men's) and **15.5.3.1.2** ("Lacrosse 12," women's) (`ncaaorg.s3.amazonaws.com/governance/d1/legislation/2024-25/APRIL2025D1Gov_Anticipated%20Actions%20Contingent%20Upon%20Court%20Final%20Approval%20of%20the%20House%20v.%20NCAA%20Settlement.pdf`). **Both figures were previously supported only by USA Lacrosse magazine and Sports Illustrated — they now have a Tier 1 source.** | 2026-08-26 | lacrosse/guide/house-settlement-and-lacrosse, lacrosse/mens/guide/scholarships-after-house-settlement, lacrosse/womens/guide/scholarships-after-house-settlement, lacrosse/mens/guide/recruiting-timeline |
| **D2 men's lacrosse = 10.8 equivalencies; D2 women's lacrosse = 9.9 equivalencies.** Division II has no head-count sports. | **2026-27 NCAA Division II Manual, Bylaws 15.4.2.1.1 and 15.4.2.1.2, p.163**, via LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90010`) | 2026-08-26 | ⚠️ **not stated in copy.** Both scholarship pages describe D2 lacrosse as "an equivalency sport with a per-program scholarship cap" **without the number**, and source that framing to ScholarshipStats.com (§H). The real figures are published by the NCAA. |
| **Designated Student-Athlete definition and deadlines.** A DSA is an individual the institution attests "was or would have been removed from the institution's 2025-26 roster due to the implementation of roster limits" and was either certified/squad-listed for 2024-25 **prior to April 7, 2025**, or **recruited prior to April 7, 2025**. Opt-in institutions had to submit a good-faith DSA list **by July 6, 2025** ("30 days after the court granted final approval"), with until **August 5, 2025** to correct errors. A sport may exceed the roster limit by the number of DSAs on its submitted roster. | **NCAA, "Question and Answer: Implementation of the House Settlement," updated 2026-02-11, Question Nos. C11, C12, C15 and C16** (`ncaaorg.s3.amazonaws.com/governance/d1/legislation/Feb2026D1Gov_PhaseSevenSetQuestionandAnswer.pdf`) | 2026-08-26 | lacrosse/guide/house-settlement-and-lacrosse, lacrosse/mens/guide/scholarships-after-house-settlement, lacrosse/womens/guide/scholarships-after-house-settlement |
| ⚠️ **IMPRECISE — "athletes rostered before the settlement's July 6, 2025 implementation."** The **July 6, 2025** DSA-list deadline is correct (row above), but it is not the implementation date — the settlement's roster limits took effect **July 1, 2025**. The page conflates the two, and omits both the April 7, 2025 eligibility criteria and the August 5, 2025 correction window. | NCAA House Q&A C11/C15/C16; NCAA.org, "DI Board formally adopts changes to roster limits" (2025-06-23) for the July 1 effective date | 2026-08-26 | lacrosse/guide/house-settlement-and-lacrosse:130 |
| **Football's roster limit is 105**, so "football scholarship limits expanding to 105 at opt-in schools" and "expanded by 20" (from the pre-House 85 head-count limit) are both consistent with Tier 1. | 2026-27 NCAA D1 Manual Bylaw 17.2 (Football 105); April 2025 Board document (pre-House football 85 head count) | 2026-08-26 | lacrosse/guide/house-settlement-and-lacrosse, lacrosse/womens/guide/scholarships-after-house-settlement |
| **The $20.5M 2025-26 benefits cap is institution-wide and allocation is at each institution's discretion; no 2026-27 figure has been published.** | Already logged — `audit-m1-m2-fact-log.md` §A and `governance-counts-fact-log.md` §D | 2026-08-25 / 2026-08-26 | lacrosse/guide/house-settlement-and-lacrosse |
| ⚠️ **PENDING — the roster-reduction arithmetic.** "The average 2024 D1 men's lacrosse roster was 52.7 players"; "the average 2024 D1 women's lacrosse roster was 34.7"; "an average of 4.7 players per team — approximately 362 players overall — lost the opportunity." Attributed to **USA Lacrosse magazine** (Tier 2 supporting counts). The 362 is the source's own approximation and is attributed, which §7.2 allows; the 52.7 and 34.7 averages are not. RosterWise cannot supply them — its dataset begins with 2025-26, the first season **under** the caps. | USA Lacrosse magazine (Tier 2); `roster-data-fact-log.md` confirms no pre-House rosters exist in the dataset | 2026-08-26 (Tier 1 not sought) | lacrosse/guide/house-settlement-and-lacrosse, lacrosse/mens/guide/scholarships-after-house-settlement, lacrosse/mens/guide/recruiting-timeline |
| ⚠️ **PENDING — "in theory would create more than 2,500 additional Division I men's lacrosse scholarships"; the five-category distribution attributed to Maryland head coach John Tillman; "women's lacrosse moved from 12 to 38 — a potential 216% increase" per a Sports Illustrated Boston College table; Title IX framing.** The named-coach quotes (Tillman, North Carolina's Jenny Levy, IMLCA president J.B. Clarke) are §5.3-compliant attribution of statements. The **counts** around them are not. | USA Lacrosse magazine and Sports Illustrated (Tier 2) | 2026-08-26 (Tier 1 not sought) | lacrosse/mens/guide/scholarships-after-house-settlement, lacrosse/womens/guide/scholarships-after-house-settlement, lacrosse/guide/house-settlement-and-lacrosse |
| ❌ **UNSOURCED — "Where previous D1 programs awarded equivalency scholarships averaging 60-70% of the cap value."** A distributional claim about program funding that nobody publishes. | none | 2026-08-26 | lacrosse/guide/house-settlement-and-lacrosse:85 |

## F. Program counts and championships

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **NCAA men's lacrosse, projected 2025-26: D1 = 77, D2 = 80, D3 = 236, NCAA total = 393**; **NCAA women's lacrosse: D1 = 134, D2 = 112, D3 = 279, total = 525.** The NCAA's own caveat travels with them: "These are projected numbers only; actual numbers may change." | **NCAA.org, "NCAA Membership Composition and Sport Sponsorship" → "2025-26 NCAA Projected Sport Sponsorship: As of September 2025"** — re-read 2026-08-26 and matching `governance-counts-fact-log.md` §C | 2026-08-26 | lacrosse/mens/guide/recruiting-timeline, lacrosse/mens/guide/scholarships-after-house-settlement |
| ❌ **BLAST-RADIUS MISS — the women's scholarship page still carries the pre-correction counts.** It publishes "**111 D2 women's lacrosse programs** … significantly more than the **78 men's** D2 programs," while the two men's pages were corrected to the NCAA's **112** and **80** in the H2 pass. Two live RosterWise pages now give different counts for the same NCAA row. | NCAA projected sport-sponsorship table (112 women's D2, 80 men's D2); `governance-counts-fact-log.md` §C, which lists only the two men's pages in its `Articles` column | 2026-08-26 | lacrosse/womens/guide/scholarships-after-house-settlement:119 (and its `sources:` block, line 55) |
| ❌ **RESIDUAL WIKIPEDIA CITATION — `sources:` entry reading "List of NCAA Division II lacrosse programs — 111 women's D2 programs confirmed as of 2025 NCAA season."** "List of NCAA Division II lacrosse programs" is a Wikipedia article title. The C1 remediation removed Wikipedia from five pages; this one survived because the word "Wikipedia" is not in the string, so the §7.2 grep does not catch it. The site's methodology page still promises families it does not use Wikipedia. | §0, §1 Tier 3; `audit-c1-c2-fact-log.md` | 2026-08-26 | lacrosse/womens/guide/scholarships-after-house-settlement:55 |
| **NAIA and NJCAA men's lacrosse program counts are not published by either body** — the pages correctly say so and state no number. This is the §5.1 structural pattern executed properly and should be kept. | `governance-counts-fact-log.md` §E | 2026-08-26 | lacrosse/mens/guide/scholarships-after-house-settlement, lacrosse/mens/guide/recruiting-timeline |
| **UCLA / National Collegiate men's volleyball title counts** are logged elsewhere; the lacrosse equivalent — **"Cornell defeated Maryland 13-10 at Gillette Stadium in the 2025 D1 Men's Lacrosse Championship (May 26, 2025)"** and "CJ Kirst (Cornell — 2025 D1 Men's Lacrosse MOP)" — is cited to "official NCAA records" with no document named and was **not** verified on this pass. | not verified | 2026-08-26 (pending) | lacrosse/mens/guide/recruiting-timeline |
| ⚠️ **PENDING — "Middlebury, Tufts, RIT and other top D3 programs have produced NCAA D3 men's lacrosse champions"; "Middlebury has won NCAA D3 women's lacrosse championships."** Checkable against NCAA.com championship records; not verified. Note the surrounding framing ("the NESCAC's elite competition (Tufts, Williams, Wesleyan, Middlebury)", "the competitive level at top D3 women's lacrosse programs is genuinely elite") is evaluative under §4.1 regardless of whether the title claims check out. | not verified | 2026-08-26 (pending / §4.1) | lacrosse/mens/guide/scholarships-after-house-settlement:85, :87; lacrosse/womens/guide/scholarships-after-house-settlement:66 |

## G. Rules of the game, international structure, and club pathways

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **International women's field lacrosse is played with ten players per team**, against 12 in the NCAA. | Already logged — `audit-c1-c2-fact-log.md` §D (World Lacrosse, "Women's Field" discipline page, quoted verbatim) | 2026-08-25 | lacrosse/womens/guide/coaches-look-for-by-position |
| **Ontario Junior Lacrosse League sanctioning, the Iroquois Trophy and the Minto Cup; Haudenosaunee Nationals history, sanctioning and 2018/2023 World Championship bronze medals; NCAA amateurism circumstances reviewed.** | Already logged in full — `audit-c1-c2-fact-log.md` §A, §B, §C | 2026-08-25 | lacrosse/mens/guide/club-pathways, lacrosse/mens/guide/international-recruiting |
| ⚠️ **PENDING — NCAA playing rules as stated.** Men's: 10 players (3 attack, 3 midfield, 3 defense, 1 goalie); field 110 × 60 yards; maximum four long poles; offside requiring three players offensive-end and four defensive-end. Women's: 12 players (4 attack, 3 midfield including the center, 4 defense, 1 goalie); college quarters of 15:00 stopped clock, high school 12:00; field maximum 140 × 70, minimum 110 × 60. The women's page cites the **NCAA Women's Lacrosse Rules 2026-2027** with a real S3 path and the USA Lacrosse Girls Rule Book 2026; the men's page cites only "NCAA Men's Lacrosse Rules — Official NCAA rules and statistical definitions" with no document or path. Neither rulebook was read on this pass. | rulebook paths cited but not retrieved | 2026-08-26 (pending) | lacrosse/mens/guide/coaches-look-for-by-position, lacrosse/womens/guide/coaches-look-for-by-position |
| ⚠️ **PENDING — the Canadian pipeline numbers.** "**184 Canadian men competed at NCAA Division I men's lacrosse in 2023**," broken down as Ontario 127, British Columbia 39, Alberta 15, Quebec 2, Manitoba 1. Sourced on-page to **Lacrosse Culture Daily** — a third-party lacrosse media site, not a governing body. §1 permits no Tier 2 source for a count, and this is the load-bearing figure of the page. | Lacrosse Culture Daily (not Tier 1) is the only support | 2026-08-26 | lacrosse/mens/guide/international-recruiting:78 |
| ⚠️ **PENDING — World Lacrosse structural claims.** "the sport is now played on five continents with national federations in 90 countries — doubled from 45"; "Israel finished seventh at the 2014 …"; "Australia has been a top-four nation … for decades" (sourced as "Per multiple verified sources" — unnamed authority, §4.3); the 2022 World Lacrosse Women's Championship final standings (USA 1st, Canada 2nd, England 3rd, Australia 4th); "Australia … winning women's field World Championships in 1986 and 2005." World Lacrosse publishes all of this; none was read here. | worldlacrosse.sport cited but not retrieved | 2026-08-26 (pending) | lacrosse/mens/guide/international-recruiting, lacrosse/womens/guide/international-recruiting |
| ⚠️ **PENDING — "Lacrosse is Canada's national sport (specifically box lacrosse, per Canadian federal legislation)."** A statutory claim (the National Sports of Canada Act). Not verified. | not verified | 2026-08-26 (pending) | lacrosse/methodology/international-composition:17 |
| ⚠️ **PENDING — club-pathway organisation facts.** NLF "Founded in **2015**" with six named founding clubs and a USA Lacrosse partnership "with the 2023-24 club lacrosse season"; "IMLCARecruits has **750+** collegiate men's lacrosse coaches … with **35,000+** student-athletes"; "IWLCA has **1,200+** collegiate women's lacrosse coaches"; "IWLCARecruits … with **35,000+** student-athletes"; IMLCA Winter Players Summit in Orlando and Summer Players Summit "greater Philadelphia area July 9-10 [2026], in partnership with NXTsports and HoganLax." Each body is Tier 1 for its own facts; none of the pages was re-read on this pass. **Note the two coaching associations' platforms are both credited with "35,000+ student-athletes" — check that this is not a copy error.** | organisation sites cited but not retrieved | 2026-08-26 (pending) | lacrosse/mens/guide/club-pathways, lacrosse/womens/guide/club-pathways |
| ❌ **A PROMOTIONAL EXCLUSIVITY CLAIM RELAYED AS FACT** — "with NCAA legislation adopted in October 2023, the IMLCA Players Summit is described by the IMLCA as 'NOW the only event in the country that all…'". Even attributed, relaying a trade body's own "only event in the country" marketing puts an unverified exclusivity claim in front of families, and the October 2023 legislation behind it is not cited. | §4.1; legislation not located | 2026-08-26 | lacrosse/mens/guide/club-pathways:105 |
| ⚠️ **PENDING — the F-1 visa / NIL analysis.** That F-1 status generally bars NIL and revenue-share income is sourced entirely to **two law firms (McCarter & English, Christine Brown & Partners) and Sportico**, plus "a September 2025 federal court ruling on P-1A visas." This is legal-adjacent content under §4.5 — it reports rules that affect a family's decisions and cites no government or NCAA primary. | law firm alerts and Sportico (Tier 2/3) | 2026-08-26 | lacrosse/mens/guide/international-recruiting, lacrosse/womens/guide/international-recruiting |

## H. Banned and non-primary sources in live copy

**This section is the most serious finding in the lacrosse set.** The C1/C2
remediation cleaned Wikipedia and SportsRecruits out of two pages and noted a
single 2aDays reference as "worth a Tier ruling." The full extent is larger.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| ❌ **2aDays is cited 19 times across four live pages** — in every one of those pages' `sources:` blocks and in body prose as "(via 2aDays)" beside quotes from five named college coaches (Mike Pressler, Corinne Desrosiers, Tanya Kotowicz, Bill Gorrow, Danielle Spencer). 2aDays is a recruiting-service platform of exactly the class §0.4 bans "as a source, as a comparison, as a link, or in passing." The coach quotes may be genuine; the vehicle is not usable. Either source each quote to the coach's own institution or published remarks, or cut them. | §0.4, §1 Tier X | 2026-08-26 | lacrosse/mens/guide/coaches-look-for-by-position (4), lacrosse/mens/guide/recruiting-video (6), lacrosse/womens/guide/coaches-look-for-by-position (3), lacrosse/womens/guide/recruiting-video (6) |
| ❌ **ScholarshipStats.com is cited in a `sources:` block and in body prose on two pages** — "Per ScholarshipStats.com's NCAA D2 documentation, D2 men's lacrosse is an equivalency sport…" A scholarship-guide site, Tier X under §1. **It is being used for a fact the NCAA publishes** (D2 men's lacrosse 10.8, women's 9.9 — §E). Flagged as "reported, not changed" in `governance-counts-fact-log.md` §G; still live. | §1 Tier X; NCAA D2 Manual Bylaw 15.4.2.1 supplies the real figures | 2026-08-26 | lacrosse/mens/guide/scholarships-after-house-settlement:60, :134; lacrosse/womens/guide/scholarships-after-house-settlement:113 |
| ❌ **equityix.com is cited as the authority for an NCAA rule** — "per equityix.com citing NCAA…" and "confirmed through equityix.com citing the NCAA Division I Manual Article 13." A third-party site standing in for the Manual, which is freely readable at LSDBi. | §1 Tier 3 | 2026-08-26 | lacrosse/womens/guide/international-recruiting:89, lacrosse/womens/guide/id-camps-and-tournaments:76 |
| ❌ **Unnamed authority** — "Per the verified legal analysis sources" / "Per the same legal analysis sources" / "Per multiple verified sources" / "Per Canadian lacrosse club resources" / "Per multiple recruiting resources" / "Other published guidance suggests" / "Some published recommendations land at." §4.3. | §4.3 | 2026-08-26 | lacrosse/mens/guide/international-recruiting:177, lacrosse/womens/guide/international-recruiting:131, lacrosse/mens/guide/international-recruiting (Australia), lacrosse/womens/guide/scholarships-after-house-settlement:54, lacrosse/mens/guide/recruiting-video:23-24, lacrosse/womens/guide/recruiting-video:23-24 |
| ❌ **USA Lacrosse *magazine* carries the load for rules, limits, counts and dates across seven pages.** USA Lacrosse the governing body is Tier 1 for its own governance; its magazine reporting on NCAA legislation is Tier 2, which §1 bars for exactly this class of claim. Every rule and limit it currently supports on these pages is available from the NCAA — Bylaw 17.2 for the roster caps, the April 2025 Board document for 12.6 and 12 (§E), LSDBi for the 2017/2018 legislative history. | §1 | 2026-08-26 | lacrosse/guide/house-settlement-and-lacrosse, lacrosse/guide/september-1-junior-year-rule, lacrosse/mens/guide/scholarships-after-house-settlement, lacrosse/womens/guide/scholarships-after-house-settlement, lacrosse/mens/guide/recruiting-timeline, lacrosse/womens/guide/recruiting-timeline, lacrosse/mens/guide/international-recruiting |
| ❌ **Other Tier 2/3 entries in `sources:` blocks** — Sports Illustrated (a Boston College scholarship table, two pages), Whiteford Taylor & Preston LLP client alert (two pages), McCarter & English, Christine Brown & Partners, Sportico, NPR, Lacrosse Culture Daily, "The Duke Chronicle," "William Jewell College Athletics," "Publicly available conference-level championship records," and bare `<a href="https://www.ncaa.org">NCAA.org</a>` domain links on eight pages. | §1, §7.3 | 2026-08-26 | across lacrosse/guide/, lacrosse/mens/guide/, lacrosse/womens/guide/ |

## I. A quoted bylaw that does not say what the page says it says

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| ❌ **THE ID-CAMP PAGES QUOTE THE WRONG BYLAW, AND THE QUOTED SENTENCE IS NOT IN IT.** Both pages present a block quote — "In lacrosse, recruiting conversations during an institutional camp or clinic are not permitted between an institution's coach and a participating prospective student-athlete…" — attributed to **NCAA Bylaw 13.12.1.5.1** and described as "verifiable directly from the NCAA's Legislative Services Database at web3.ncaa.org/lsdbi." **Bylaw 13.12.1.5.1 is the exception for "Sports Other Than Baseball, Basketball, Football, Men's Ice Hockey, *Lacrosse*, Softball and Men's Wrestling"** — it explicitly excludes lacrosse, and its date is August 1 of junior year. The lacrosse provisions are **13.12.1.5.2** (women's lacrosse — September 1, 12 p.m. Eastern) and **13.12.1.5.3** (men's lacrosse — the Wednesday, 7 a.m., after Labor Day; Adopted 6/29/26 effective 8/1/26). A family who follows the citation to LSDBi will find a bylaw that names lacrosse only to exclude it. | **2026-27 NCAA D1 Manual, Bylaws 13.12.1.5.1, 13.12.1.5.2 and 13.12.1.5.3**, read in full | 2026-08-26 | lacrosse/mens/guide/id-camps-and-tournaments:19-21, :80; lacrosse/womens/guide/id-camps-and-tournaments:18-20, :77 |
| ❌ **The adoption date attached to it is also wrong** — "This rule is unique to lacrosse — it was adopted in **April 2017** as part of NCAA early recruiting legislation specific to lacrosse." 13.12.1.5.1 is stamped **Adopted 6/9/17 effective 6/12/17** (and it is not the lacrosse rule); the men's lacrosse camp provision, 13.12.1.5.3, is stamped **Adopted 6/29/26 effective 8/1/26**. | Same bylaws' adoption lines | 2026-08-26 | lacrosse/mens/guide/id-camps-and-tournaments:23, lacrosse/womens/guide/id-camps-and-tournaments:22 |
| ⚠️ **PENDING — "Per NCAA published Q&A guidance (referenced through the NCAA's own published documentation)"** introducing a permitted/not-permitted table of ID-camp activities. No Q&A document is named; the women's version adds "confirmed through equityix.com." | not located | 2026-08-26 (pending) | lacrosse/mens/guide/id-camps-and-tournaments:27, lacrosse/womens/guide/id-camps-and-tournaments:24 |
| ⚠️ **PENDING — NCAA Bylaw 13.12.1.3 (Attendance Restriction)** is cited on both pages. The bylaw exists ("In sports other than fencing and men's gymnastics, a member institution's sports camp…") but the pages' summary of it was not checked against the text. | 2026-27 NCAA D1 Manual, Bylaw 13.12.1.3 (exists; content not compared) | 2026-08-26 (pending) | lacrosse/mens/guide/id-camps-and-tournaments:38, lacrosse/womens/guide/id-camps-and-tournaments:35 |

## J. RosterWise roster dataset — lacrosse

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Across **77** D1 men's lacrosse programs, the median roster carried **49** players, IQR **47–53** (mean 49.7, range 34–63) | RosterWise 2025-26 roster dataset — logged in full in `roster-data-fact-log.md` §C | 2026-08-26 | lacrosse/mens/guide/recruiting-timeline, lacrosse/mens/guide/scholarships-after-house-settlement |
| Across **133** D1 women's lacrosse programs, the median roster carried **34** players, IQR **31–37** (mean 34.0, range 20–46); **84%** are at or below the 38-player cap | RosterWise 2025-26 roster dataset — `roster-data-fact-log.md` §C | 2026-08-26 | lacrosse/womens/guide/scholarships-after-house-settlement |
| ⚠️ **No RosterWise position-depth or international figures exist for lacrosse.** `lacrosse/index` and `lacrosse/methodology/*` promise position-depth analysis across the men's (Attack, Midfield, Defense, LSM, FOGO, Goalie) and women's (Attack, Midfield, Defense, Goalie, Draw specialist) taxonomies and Canadian composition, and `methodology/international-composition` states "Some men's D1 programs have rosters with 20% or more Canadian representation" and "a women's program with 10%+ international representation." **None of it is computed.** `roster-data-fact-log.md` covers lacrosse for roster size only. | RosterWise dataset — position depth and international share not computed for lacrosse | 2026-08-26 | lacrosse/index, lacrosse/methodology/international-composition, lacrosse/methodology/roster-composition, lacrosse/methodology/class-year-gaps |
| **Pre-settlement lacrosse roster claims were correctly cut** — `roster-data-fact-log.md` records that "typically 50+ players" (men's) and "typically 30-35+ players" (women's) were removed and replaced with the 2025-26 figures, explicitly labelled post-settlement. That cut held; no lacrosse page still carries the old wording. | `roster-data-fact-log.md`, "Claims cut for lack of supporting data" | 2026-08-26 | *(verified clean)* |
| ⚠️ **UNSOURCED — "Many head coaches have long tenures (15+ years…)"** on the lacrosse coach-tenure methodology page; and "**hundreds** of college ID camps and prospect days are held annually" on both ID-camp pages. Distributional claims RosterWise could compute (it tracks coach tenure) or should cut. | RosterWise tracks coach tenure; not computed | 2026-08-26 | lacrosse/methodology/coach-tenure:13, lacrosse/mens/guide/id-camps-and-tournaments:7, lacrosse/womens/guide/id-camps-and-tournaments:7 |

## K. Sourcing hygiene

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| ❌ **No `sources:` block on `lacrosse/index`, `lacrosse/mens/index`, `lacrosse/womens/index`, `lacrosse/guide/index`, `lacrosse/mens/guide/index`, `lacrosse/womens/guide/index` or `lacrosse/methodology/index`** — and the three hubs carry hard claims (both contact dates, the Labor Day change, the men's/women's D2 program-pool comparison). They also close with "*Last updated June 2026. Author: RosterWise (Grobe Games LLC).*" rather than the date-anchor footer every content page uses. | §7.3 | 2026-08-26 | lacrosse/index, lacrosse/mens/index, lacrosse/womens/index, lacrosse/guide/index, lacrosse/mens/guide/index, lacrosse/womens/guide/index, lacrosse/methodology/index |
| ❌ **`sources:` entries that assert what the cited document does not contain** — three pages cite the 2026-27 lacrosse recruiting calendars as the source of the initial contact dates (the calendars publish periods only, §A); one cites the women's calendar for the January 1 official-visit date (not in it, §A); one cites NJCAA.org for a 20-scholarship maximum (not published, §D); two cite LSDBi for a bylaw quotation that is not in the bylaw named (§I). | §7.3 | 2026-08-26 | lacrosse/guide/september-1-junior-year-rule, lacrosse/mens/guide/recruiting-timeline, lacrosse/womens/guide/recruiting-timeline, lacrosse/womens/guide/international-recruiting, lacrosse/mens/guide/scholarships-after-house-settlement, lacrosse/{mens,womens}/guide/id-camps-and-tournaments |
| **What is working — keep it.** The `september-1-junior-year-rule` page opens by telling families plainly that the page's own earlier version is out of date, names the exact legislation date, warns that the men's date moves every year, and warns that content written before mid-2026 will be wrong. That is §5.5 and §5.6 done better than anywhere else on the site. | §5.5, §5.6 | 2026-08-26 | lacrosse/guide/september-1-junior-year-rule |

---

### Open items to re-check before/at publish

**Must fix before this content set can pass §7 again**

1. **The quoted bylaw on the two ID-camp pages (§I).** A block quote presented as
   verbatim NCAA text, attributed to a bylaw that explicitly excludes lacrosse,
   with a wrong adoption date. This is the single worst sourcing failure found in
   the three-sport audit. Replace with Bylaw 13.12.1.5.2 (women's) and
   13.12.1.5.3 (men's), quoted correctly.
2. **Women's lacrosse official visits (§A).** Three pages say January 1 of junior
   year; Bylaw 13.6.2.1.2 says September 1 at 12 p.m. Eastern. January 1 is the
   Division III rule. One of the three attributes the error to a calendar that
   does not contain it.
3. **2aDays, cited 19 times across four pages (§H).** §0.4 is absolute. Re-source
   the five coaches' quotes to their own institutions or published remarks, or
   cut them.
4. **ScholarshipStats.com on two pages (§H)** — and it is standing in for a
   figure the NCAA publishes (D2 lacrosse 10.8 men's / 9.9 women's, §E).
5. **The residual Wikipedia citation and the stale 111 / 78 counts on the
   women's scholarship page (§F).** The C1 and H2 passes both missed this page.
6. **Re-source the settlement's scholarship limits to the NCAA (§E).** 12.6 and
   12 now have a Tier 1 source — the April 2025 Board document. USA Lacrosse
   magazine should stop carrying them.

**Needs a primary before the number can stay in print**

7. The 184 Canadians in NCAA D1 and the provincial breakdown, currently sourced
   to a lacrosse media site (§G).
8. The 2017 and 2018 legislative history, including Proposal 2018-93-2 — LSDBi
   holds the proposal records (§A).
9. The 52.7 / 34.7 pre-House roster averages and the ~2,500-scholarship figure
   (§E). RosterWise cannot supply these; its data starts after the caps.
10. NJCAA membership — and reconcile "more than 500 in 44 states" against
    volleyball's "over 500" and soccer's "more than 400" (§D).
11. The NJCAA women's lacrosse discontinuation release (July 11, 2024) and the
    NCAA D1 Cabinet's June 24, 2026 two-year-transfer reform (§D).
12. The NJCAA D-I 20-scholarship maximum, currently attributed to a page that
    does not carry it (§D).
13. Men's and women's playing-rule specifics, and the World Lacrosse
    international figures (§G).
14. The five-visit official-visit cap (§A).

**Housekeeping that expires or rots**

15. **The men's contact date moves every year (§A).** For the class starting
    junior year in fall 2026 it is September 9, 2026. It must be recomputed for
    every subsequent class, and every page that names a specific date carries a
    note saying so — keep that note.
16. **Both lacrosse calendars are period-dense and diverge sharply from each
    other** — the men's has thirteen periods and the women's eleven, with
    different categories (the women's uses Recruiting Shutdown three times, the
    men's not at all). They cannot be updated by analogy, and both must be
    replaced wholesale at the next rollover.
17. **The women's September 1 contact date falls inside a dead period on the
    2026-27 calendar (§C).** The bylaw date and the calendar period are separate
    gates and will drift apart again next cycle.
18. **RosterWise has no lacrosse position-depth or international figures (§J)**,
    though `lacrosse/index` and three methodology pages promise both.
19. Re-run every "2026-27 calendar," "2025-26 projected sponsorship," "as of June
    2026" and "House settlement first year" anchor at the next rollover.

### Noted while auditing lacrosse — outside this log's scope

**The wrestling content set is now stale on its own contact date.** NCAA D1
Bylaw **13.1.1.1.9 "Exception — Men's Wrestling"** (Adopted 4/15/26, applicable
to prospects who initially enroll full time on or after 8/1/28) moves men's
wrestling off-campus contact to **June 15 at the conclusion of the individual's
JUNIOR year**. `wrestling-fact-log.md` §C and the wrestling pages state "June 15
after sophomore year" and "official + unofficial visits open Aug 1 before junior
year." Wrestling also now has its own Recruiting Shutdown windows on the 2026-27
Other Division I Sports calendar (Mar 16–21 and Jul 26 – Aug 1), which the
wrestling set does not mention. Worth its own pass.
