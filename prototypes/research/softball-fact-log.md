# RosterWise Softball — Fact Log & Audit Trail

**Purpose:** one row per published claim → primary source → date verified → article(s) that use it.
Lives in `prototypes/` so it never deploys (build only emits from `src/`). Before flipping any article to
live, check every number/date/rule in its copy against a row here.

**Verification date for this pass:** 2026-10-29 (W1, the governing-body guides). Re-confirm the calendar,
championship and count rows each season (standards §8).

**Sourcing rules honored:** primary/near-primary only: the NCAA Division I, II and III Manuals (2026-27,
printed 10/26/26) and the NCAA's own PDFs on `ncaaorg.s3.amazonaws.com`; the NCAA directory API on
`web3.ncaa.org`; NCAA Legislative Services Database (LSDBi) proposal pages; NCAA.org; the NAIA 2026-27
Official & Policy Handbook and 2026-27 Softball Coaches Manual on `naia.org`; the NJCAA 2026-27 Bylaws and
Sport Codes and the NJCAA's own 2026-27 team roll; the CCCAA and NWAC softball pages; the travel-ball
organizations' own pages (USA Softball, The Alliance Fastpitch, PGF Nationals, USSSA Nationals, Triple Crown
Sports) for statements about themselves only. NO aggregators and NO recruiting-service blogs as sources. The
research behind this build (`shared/plans/softball-research/landscape-seo.md`) surfaced a recruiting service's
scholarship page, recruiting-service and vendor blogs, Wikipedia, softball media and ranking sites, and
content farms; none of them is cited for anything, and none is named on any page.

**How sources were read.** Every source below was read once more for this pass through the pipeline's
`rosterwise.fetch` (`fetch_url`, `fetch_binary_url` + `pdf_to_text`, `fetch_pages_url` via
`njcaa_directory.fetch_team_roll`): robots.txt, the honest User-Agent, per-domain pacing, the disk cache. Most
came from that cache, which holds the copies the softball plan's research fetched earlier the same day (the
Manuals carry the print stamp 10/26/26). The LSDBi proposal page, the travel-ball pages and the two Cloudflare
documentation pages were fetched over the network on 2026-10-29. No fetch was refused or retried; WebSearch
was used only to find where the travel-ball organizations' own pages live. The D1 softball recruiting
calendar's right rail has no reliable text layer, so it was rendered (`pdftoppm`, 110 dpi crops) and read as an
image, every period checked.

Verdicts: **verified** (the source says it), **verified (derived)** (arithmetic or a date the source's own rule
yields, working shown), **pending** (not stated on any page until resolved).

### Article slugs

| Slug | URL |
| --- | --- |
| `hub` | `/softball/` |
| `scholarships` | `/softball/guide/scholarships-and-the-house-settlement/` |
| `timeline` | `/softball/guide/recruiting-timeline/` |
| `camps` | `/softball/guide/camps-before-junior-year/` |
| `naia` | `/softball/guide/naia-softball/` |
| `juco` | `/softball/guide/junior-college/` |
| `travel` | `/softball/guide/travel-ball-and-college-recruiting/` |

`/softball/guide/` (the guides hub) states no facts.

### Sources

| Id | Document | URL | Stamp |
| --- | --- | --- | --- |
| S1 | NCAA Division I Manual 2026-27 | https://web3.ncaa.org/lsdbi/reports/getReport/90008 | printed 10/26/26 |
| S2 | NCAA Division II Manual 2026-27 | https://web3.ncaa.org/lsdbi/reports/getReport/90010 | printed 10/26/26 |
| S3 | NCAA Division III Manual 2026-27 | https://web3.ncaa.org/lsdbi/reports/getReport/90011 | printed 10/26/26 |
| S8 | 2026-27 NCAA Division II Recruiting Calendar, all sports | https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27D2Rec_RecruitingCalendar_AllSports.pdf | Updated July 30, 2026 |
| S11 | NCAA, "Q&A: Implementation of the House Settlement" | https://ncaaorg.s3.amazonaws.com/governance/d1/legislation/May2026D1Gov_PhaseEightSetQuestionandAnswer.pdf | Updated May 29, 2026 |
| S12 | NCAA Division I Bylaw 15, 2024-25 (archived by the NCAA) | https://ncaaorg.s3.amazonaws.com/governance/d1/legislation/2026-27/2024-25D1GMS_Bylaw15.pdf | 2024-25 |
| S13 | NAIA Official & Policy Handbook 2026-2027 | https://www.naia.org/wp-content/uploads/2026/07/2026_Official_Handbook.pdf | 2026-27 |
| S14 | NJCAA Handbook, Bylaws 2026-27 | https://media.ardorsportshub.com/files/404933495157163011/6b815aea7cf842719e5deeefd7dc9310-NJCAA-Handbook---Bylaws---2026-27-9-9-26.pdf | 9-9-26 |
| S15 | NJCAA Handbook, Sport Codes | https://media.ardorsportshub.com/files/404933495157163011/0cf650c00ce14f37b778323691d5ab75-NJCAA-Handbook---Sport-Codes-9-9-26.pdf | 9-9-26 |
| S16 | NCAA Guide for Two-Year Transfers 2025-26 | https://media.ardorsportshub.com/_assets/site-documents/f35932596c625b7e-TwoYearGuide.pdf | 2025-26 |
| SB1 | 2026-27 NCAA Recruiting Calendar, Division I Softball | https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2026-27/2026-27D1Rec_WSBRecruitingCalendar.pdf | Updated July 30, 2026 |
| SB6 | NCAA.org, Division I Softball championship page | https://www.ncaa.org/championship/division-i/softball/ | read 2026-10-29 |
| SB15 | NCAA Sports Sponsorship and Participation Rates spreadsheet, 2000-01 to 2025-26 | https://ncaaorg.s3.amazonaws.com/research/sportpart/RES_SportsSponsorshipParticipationRatesReport.xlsx | "published in October 2026" |
| SB16 | NCAA.org, Scholarships & Financial Aid | https://www.ncaa.org/student-athletes/scholarships-and-financial-aid/ | modified 2026-10-28 |
| SB17 | NAIA 2026-27 Softball Coaches Manual | https://www.naia.org/wp-content/uploads/2026/08/2026.27-Coaches-Manual-Softball-Combined.pdf | 2026-27 |
| SB18 | CCCAA (3C2A) softball Championships page | https://www.cccaasports.org/sports/sball/Championships | read 2026-10-29 |
| SB19 | NWAC, "NWAC Softball Championship Begins Thursday at Delta Park" | https://www.nwacsports.org/sports/sball/2025-26/releases/202605130jk32r | May 2026 |
| D1 | NCAA directory API, Division I/II/III, sport code WSB | https://web3.ncaa.org/directory/api/directory/memberList?type=12&division=I&sportCode=WSB (and `II`, `III`) | every entry `academicYear: 2027` (= 2026-27) |
| N1 | NJCAA 2026-27 softball team roll (all 18 pages) | `njcaa_directory.teams_url("sball")` on njcaa.org | season 2026-27, "of 360" |
| P1 | NCAA LSDBi, Division I Proposal 2026-16 | https://web3.ncaa.org/lsdbi/search/proposalView?id=109236 | Adopted Final June 24, 2026 |
| T1 | USA Softball, "About USA Softball" | https://www.usasoftball.com/about/ | read 2026-10-29 |
| T2 | USA Softball, "Junior Olympic Program" | https://www.usasoftball.com/play-usa-softball/youth-junior-olympic/ | read 2026-10-29 |
| T3 | The Alliance Fastpitch, "Our Story" | https://thealliancefastpitch.com/our-story/ | read 2026-10-29 |
| T4 | The Alliance Fastpitch, "Alliance Fastpitch Championship Series" | https://thealliancefastpitch.com/afcs/ | read 2026-10-29 |
| T5 | PGF Nationals home page | https://pgfnationals.com/ | read 2026-10-29 |
| T6 | USSSA Nationals (fastpitch) home page | https://nationals.usssa.com/ | read 2026-10-29 |
| T7 | Triple Crown Sports home page | https://www.triplecrownsports.com/ | read 2026-10-29 |
| CF1 | Cloudflare Pages docs, "Headers" | https://developers.cloudflare.com/pages/configuration/headers/ | read 2026-10-29 (site fix, not page copy) |
| CF2 | Cloudflare Pages docs, "Preview deployments" | https://developers.cloudflare.com/pages/configuration/preview-deployments/ | read 2026-10-29 (site fix, not page copy) |

---

## A. How many programs (2026-27)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| The NCAA directory lists **308** Division I, **274** Division II and **395** Division III softball programs for **2026-27**: **977** in all | D1 — the three responses hold 308, 274 and 395 entries, every one stamped `academicYear: 2027`. 308 + 274 + 395 = 977 | 2026-10-29 | hub |
| Division I softball programs play in **32** conferences; Division II in **23** conferences plus **one** independent; Division III in **43** conferences plus **one** independent | D1 — distinct `conferenceName` values: 32 (I), 24 incl. "Independent" (II), 44 incl. "Independent" (III); one entry each under "Independent" | 2026-10-29 | hub |
| The NJCAA's own 2026-27 softball roll lists **360** teams: **136** in Division I, **160** in Division II, **60** in Division III, and **4** with no division on the roll | N1 — all 18 pages read, the page's own "of 360" total reproduced, `complete: True`; division counts from each link's `division` value (div1 136, div2 160, div3 60, none 4) | 2026-10-29 | hub, juco |
| The NJCAA roll places its softball teams in **24** regions | N1 — 24 distinct region tables | 2026-10-29 | juco |
| The NJCAA's own postseason document counts **140** Division I and **166** Division II softball teams, with no date given for the count | S15 "NJCAA Division I and II Softball and Baseball Postseason Model, Effective Spring 2028": "Division I Softball Summary • Total Teams: 140"; "Division II Softball Summary • Total Teams: 166" | 2026-10-29 | hub, juco |
| The NCAA's sponsorship report counts **968** NCAA softball teams in **2025-26**: **308** Division I, **270** Division II, **390** Division III | SB15 sheet "4. Women's Sports -Teams", last softball row (2025-26): "308 / 270 / 390 / 968" | 2026-10-29 | hub |
| The report counts **21,933** NCAA softball players in 2025-26 | SB15 sheet "8. Women's Sports -Participants", 2025-26 softball row: 7,229 / 6,376 / 8,328 / 21,933 | 2026-10-29 | hub |
| The report includes **only active NCAA members**, and the NCAA says its 2025-26 figures **may not be directly comparable** with earlier years | SB15 Intro: "Only active NCAA member institutions are included"; "data beginning with 2025-26 may not be directly comparable to figures published in earlier reports" | 2026-10-29 | hub |
| **No NAIA document we read states how many NAIA schools sponsor softball** | S13 and SB17 searched; no count. (The NAIA's statistics site sits behind a bot challenge and is never fetched.) | 2026-10-29 | hub, naia |
| **NAIA softball count for 2026-27** | **PENDING.** The softball M1 session counted **190** teams in **19** conferences from the conferences' own pages (`shared/plans/softball-research/naia_softball_notes.md`, softball board tab `sb-m1`): **84** on a 2026-27 conference page, **106** from 2025-26 (spring 2026) standings of schools still on their conference's member list, **5** held until their conference confirms them (an open question to Scott on `sb-m1`), Cal Pac **0** (its softball page stops at 2024-25), independents **not counted**. Because 106 rest on last season's standings and 5 await his answer, **no number is printed** until he marks the wording (W1 board tab, question 1); the hub and NAIA page say the count is not yet published here | 2026-10-29 (M1 notes read; counts not re-derived here) | hub, naia |
| California's community colleges play softball in the **CCCAA** (3C2A), which ran a 2026 state championship | SB18: "3C2A SOFTBALL STATE CHAMPIONSHIPS"; "STATE CHAMPION - Palomar" | 2026-10-29 | hub, juco |
| Northwest two-year colleges play softball in the **NWAC**, which ran a 2026 softball championship | SB19: "NWAC Softball Championship commences on Thursday, May 14 at Delta Park" (2026 release) | 2026-10-29 | hub, juco |

## B. NCAA Division I: the 1 p.m. Central rule

All in S1 (2026-27 D1 Manual, printed 10/26/26), each stamped "(Adopted: 6/24/26)".

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| A D1 softball coach may not **call** a recruit (or her family) before **1 p.m. Central time on September 1 at the beginning of her junior year**; after that, calls are at the school's discretion | S1 **13.1.3.1.4**: "may not be made before 1 p.m. Central time September 1 at the beginning of the individual's junior year in high school … Thereafter, an institution may make telephone calls to the prospective student-athlete at its discretion" | 2026-10-29 | timeline, hub |
| …may not **send recruiting materials or electronic correspondence** (texts, email, messages) before that moment | S1 **13.4.1.4**: "shall not provide recruiting materials … or send electronic correspondence … until 1 p.m. Central time September 1 at the beginning of the individual's junior year" | 2026-10-29 | timeline |
| …may not make **off-campus, in-person contact** before that moment | S1 **13.1.1.1.2**: "off-campus recruiting contacts shall not be made … before 1 p.m. Central time September 1 at the beginning of the individual's junior year" | 2026-10-29 | timeline |
| …may not **pay for an official visit** before that moment | S1 **13.6.2.1.4**: "may not be provided an expense-paid visit earlier than 1 p.m. Central time September 1 of the individual's junior year" | 2026-10-29 | timeline |
| …may not host an **unofficial visit with athletics involvement** (contact with athletics staff, an athletics-specific tour, free admission) before that moment | S1 **13.7.1.4**: "an unofficial visit with athletics department involvement (e.g., contact with athletics department staff, athletics-specific tour, complimentary admission) shall not occur … before 1 p.m. Central time September 1" | 2026-10-29 | timeline |
| A D1 softball staff member may not **take a call from** a recruit (or her family) before that moment | S1 **13.1.3.2.8**: "an institutional staff member may not receive telephone calls from an individual … before 1 p.m. Central time September 1" | 2026-10-29 | timeline |
| No **recruiting conversations at a school's own camp or clinic** between its coach (or off-campus recruiter) and a participant before that moment, including camps for players not yet prospects | S1 **13.12.1.5.4**: "recruiting conversations during an institutional camp or clinic (including a camp or clinic that involves only individuals who are not yet prospective student-athletes) are not permitted between an institution's coach or off-campus recruiter and a participating individual before 1 p.m. Central time September 1" | 2026-10-29 | timeline, camps |
| A recruit at a school on a **non-traditional calendar** (e.g. the Southern Hemisphere): **1 p.m. Central on the opening day of classes of junior year** (calls, materials, visits) | S1 13.1.3.1.4, 13.4.1.4, 13.6.2.1.4, 13.7.1.4: "1 p.m. Central time the opening day of classes of the individual's junior year" | 2026-10-29 | timeline |
| Each school has **seven recruiting opportunities** (contacts and evaluations combined) per recruit per year; from 1 p.m. Central on Sept. 1 of junior year, **no more than three** may be off-campus contacts. Contacts on official or unofficial visits don't count | S1 **13.1.5.9**: "limited to seven recruiting opportunities (contacts and evaluations combined) … not more than three of the seven opportunities may be off-campus contacts each year … A contact made during an official visit … or an unofficial visit … does not count" | 2026-10-29 | timeline |
| The time was set by **NCAA Division I Proposal 2026-16**, sponsored by the **D1 Softball Oversight Committee**, **adopted final June 24, 2026** and **effective immediately** | P1: "Proposal - 2026-16 … Status: Adopted Final"; "Source: NCAA Division I Softball Oversight Committee"; "Effective Date: Immediate"; History "Jun 24, 2026: Adopted Final. No Cabinet action." | 2026-10-29 | timeline, camps |
| Before the proposal, the softball rules named **September 1 of junior year with no time** | P1 bylaw text shows the prior shared provisions, e.g. 13.1.3.1.2 "Exception -- Lacrosse and Softball … may not be made before September 1 at the beginning of the individual's junior year", with softball moved to new provisions that add "1 p.m. Central time"; P1 Rationale: "Current softball legislation does not specify a time on the initial day" | 2026-10-29 | timeline |
| The proposal's stated reason: a uniform start time **"prohibits disruptive recruiting activities during the overnight hours"** | P1 Rationale (quoted, 8 words) | 2026-10-29 | timeline |
| 1 p.m. Central on September 1 is **2 p.m. Eastern and 11 a.m. Pacific** | Derived: September 1 falls in daylight time; CDT = UTC−5, EDT = UTC−4, PDT = UTC−7 | 2026-10-29 | timeline |
| The students who began junior year in fall 2026 (high-school **class of 2028**) reached the moment on **Sept. 1, 2026**; the **class of 2029** reaches it on **Sept. 1, 2027** | Derived: junior year 2026-27 → graduation spring 2028; the rule runs from September 1 at the beginning of junior year | 2026-10-29 | timeline, camps |
| The general D1 rule opens calls and electronic correspondence on **June 15 after sophomore year** and off-campus contact on **August 1** of junior year; softball is an exception to both | S1 13.1.3.1 ("may not be made before June 15 at the conclusion of the individual's sophomore year … (subject to the exceptions below)"), 13.4.1 (same date), 13.1.1.1 ("before August 1 at the beginning of the individual's junior year"); the softball provisions are titled "Exception -- Softball" | 2026-10-29 | timeline |

## C. 2026-27 Division I softball recruiting calendar (SB1, updated July 30, 2026; rail read as an image)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Contact period **Aug. 1–9, 2026** | SB1 rail "Contact Period AUG 1–9" | 2026-10-29 | timeline |
| Evaluation period **Aug. 10–Nov. 22, 2026**, for **high-school (scholastic)** practice and competition only | SB1 rail "‡ Evaluation Period AUG 10 – NOV 22"; ‡ = "scholastic practice and competition activities only" | 2026-10-29 | timeline, travel |
| Dead periods **Aug. 28–Sept. 3**, **Nov. 9–12** and **Dec. 9–12, 2026**, and **June 1–11, 2027** | SB1 rail "Dead Period AUG 28 – SEP 3", "NOV 9–12", "DEC 9–12", "JUN 1–11*" | 2026-10-29 | timeline, camps |
| Evaluation on **six fall weekends** at **high-school and non-scholastic (travel-ball)** events: **Oct. 17–18, Oct. 24–25, Oct. 31–Nov. 1, Nov. 7–8, Nov. 14–15, Nov. 21–22, 2026** | SB1 rail "Evaluation Period OCT 17–18, 24–25, OCT 31 – NOV 1, NOV 7–8, 14–15, 21–22 (For scholastic and nonscholastic practice or competition activities)" | 2026-10-29 | timeline, travel |
| Quiet period **Nov. 23, 2026–Jan. 2, 2027** | SB1 rail "Quiet Period NOV 23 – JAN 2, 2027" | 2026-10-29 | timeline |
| Recruiting shutdowns **Nov. 25–29**, **Dec. 22–26** and **Dec. 31, 2026–Jan. 2, 2027** | SB1 rail "Recruiting Shutdown NOV 25–29", "DEC 22–26", "DEC 31 – JAN 2, 2027" | 2026-10-29 | timeline, camps |
| Evaluation period **Jan. 3–May 31, 2027**, high-school practice and competition only | SB1 rail "‡ Evaluation Period JAN 3 – MAY 31 (For scholastic practice and competition activities only)" | 2026-10-29 | timeline, travel |
| Contact period **June 12–July 31, 2027**; the June dead period and this start date move with the Women's College World Series | SB1 rail "Contact Period JUN 12* – JUL 31"; footnote *: "Dates are based on the Women's College World Series … If the WCWS dates are delayed, the dead period continues through the day of the final championship game" | 2026-10-29 | timeline, travel |
| Evaluation is also allowed at **state high-school regional and championship** play outside dead periods | SB1 rail: "Evaluation Period During high school regional and state championship competition that does not occur during a dead period" | 2026-10-29 | timeline |
| The NCAA's definitions: **contact period** — in-person off-campus contacts **and evaluations** allowed; **evaluation period** — evaluation only, no in-person off-campus contact; **quiet period** — in-person contact on the school's campus only; **dead period** — no in-person contact or evaluation and no visits; **recruiting shutdown** — no form of recruiting, calls and correspondence included | SB1 legend, e.g. "A contact period is that period of time when it is permissible for authorized athletics department staff members to make in-person, off-campus recruiting contacts and evaluations"; "A recruiting shutdown is a period of time when no form of recruiting (e.g., contacts, evaluations, official or unofficial visits, correspondence or making or receiving telephone calls) is permissible" | 2026-10-29 | timeline, travel |
| The **2027 Women's College World Series** is **June 3–11, 2027**, at Devon Park in Oklahoma City | SB6: "June 3 – 11, 2027 / Devon Park" | 2026-10-29 | timeline |

## D. Other divisions and bodies: when contact opens

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **NCAA D2:** calls, texts and email from a coach are allowed **at any time** | S2 **13.1.3.1**: "Communication with a prospective student-athlete … shall be made at any time" | 2026-10-29 | timeline |
| **NCAA D2:** in-person contact and the first paid (official) visit wait until **June 15 before junior year** | S2 **13.1.1.1**: "Contact shall not be made … before June 15 immediately preceding the prospective student-athlete's junior year"; **13.3.1.2**: "may not be provided an expense-paid visit earlier than June 15 immediately preceding … junior year" | 2026-10-29 | timeline |
| **NCAA D2 2026-27 calendar:** for softball ("all other sports") the listed restriction is a **signing dead period, Nov. 9 (7 a.m.)–Nov. 11 (7 a.m.), 2026** | S8 "ALL OTHER SPORTS … Signing Date Dead Period NOV 9 @ 7 AM – NOV 11 @ 7 AM" | 2026-10-29 | timeline |
| **NCAA D3:** no restriction on the timing of calls, texts or email | S3 **13.02.10.1**: "There are no restrictions on the timing for electronic communication (e.g., telephone call, electronic mail, Instant Messenger, text messages …)" | 2026-10-29 | timeline |
| **NCAA D3:** in-person, off-campus contact only **after sophomore year** | S3 **13.1.1.1**: "shall not be made … until the prospective student-athlete has completed their sophomore year in high school" | 2026-10-29 | timeline |
| **NCAA D3:** **one** paid visit per school, not before **January 1 of junior year** | S3 **13.6.1.1**: "may finance only one visit to its campus"; **13.6.1.1.1**: "earlier than January 1 of the prospective student-athlete's junior year" | 2026-10-29 | timeline |
| **NCAA D3:** a school **may not use a letter of intent**; once a recruit has been **accepted for admission**, it may use only a **nonbinding celebratory signing form** | S3 **13.9.1**: "An institution shall not use any form of a letter of intent or similar form of commitment"; **13.9.1.1**: "may use a standard, nonbinding athletics celebratory signing form after a prospective student-athlete has been accepted for enrollment" | 2026-10-29 | timeline |
| **NAIA:** the Handbook sets no national first-contact date; recruiting must follow the school's own accepted practices, and conference recruiting rules apply | S13 Constitution, "9. STUDENT RECRUITING: All student recruiting for athletic purposes shall be in harmony with recommended and acceptable practices of the institution … Where conferences exist, all conference rules regarding recruiting must be observed"; no first-contact date found in the Handbook | 2026-10-29 | timeline, naia |
| **NJCAA:** a recruit may take an **official visit from June 1 before junior year**; a college may pay for **one** official visit per recruit per recruiting year, **up to 48 hours**, for the recruit plus **two guests** | S14 Art. VI §4 B.1.a: "starting on June 1 prior to their junior year in high school"; B.1.b: "may pay for one official visit … per recruiting year"; B.1.c: "may not exceed 48 hours"; B.1.e: "plus two guests" | 2026-10-29 | timeline, juco |

## E. Signing

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Division I no longer uses the National Letter of Intent** (eliminated in 2024); a D1 or D2 scholarship comes with a **financial aid agreement** to sign | SB16 (modified 2026-10-28): "you will be asked to sign a financial aid agreement … Division I eliminated the National Letter of Intent in 2024"; S1 13.02.13 is titled "Athletics Aid Agreement and Settlement Related Benefits Agreement Signing Dates" | 2026-10-29 | timeline, scholarships |
| Softball has **no early or late signing period** in D1: the early and later periods in 13.02.13.1 are basketball's and football's only | S1 13.02.13.1 (a)–(e): "Basketball Early Signing Period", "First Date for Basketball Regular Signing", "Football Early Signing Period", "First Date for Football Midyear Two-Year College Transfers", "First Date for Football Regular Signing"; (f) "First Date for All Other Sports" | 2026-10-29 | timeline |
| D1 and D2 softball signing opens **7 a.m. on the second Wednesday in November: Nov. 11, 2026**; the last day is set by each school | S1 13.02.13.1(f): "First Date for All Other Sports. The second Wednesday (7 a.m.) in November"; S1 Figure 13-2: "All Other Division I and II Sports — November 11, 2026 — Final date based on institutional policy"; S2 13.02.10.1(c): "The second Wednesday in November" | 2026-10-29 | timeline |
| A D1 school may put an offer of aid **in writing from August 1 of senior year** (not before) | S1 13.9.3.1: "before August 1 of an individual's senior year in high school, an institution shall not … provide a written offer of athletically related financial aid … On or after August 1 … may indicate in writing" | 2026-10-29 | timeline, camps |
| **NJCAA Letter of Intent:** signable only after the recruit **has completed junior year**; each sport's earliest date is on the NJCAA Sports Procedures Chart | S14 Art. VI §3 A.2: "A student must have completed their junior year of high school to sign an NJCAA Letter of Intent for the subsequent year"; A.2.a: dates "listed on the NJCAA Sports Procedures Chart" | 2026-10-29 | juco, timeline |

## F. Athletic aid and roster limits

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| D1 schools in the five **defendant conferences** (ACC, Big Ten, Big 12, Pac-12, SEC) and schools that **opt in** to the House settlement have a softball **roster limit of 25** | S1 **17.2**: "Each sport of a Division I institution that is a member of a defendant conference or opts in to the House settlement must comply with the roster limits"; table "Softball 25". S11 p.1 names the defendant conferences: "Atlantic Coast Conference, Big Ten Conference, Big 12 Conference, Pac-12 Conference and Southeastern Conference" | 2026-10-29 | scholarships, hub |
| At those schools there is **no limit on the number of athletic scholarships** up to the roster limit | S1 **16.13.1.5**: "there is no limit on the number of new athletics scholarships that may be awarded consistent with the roster limit for a particular sport" (Revised 5/5/26) | 2026-10-29 | scholarships |
| D1 aid may be **full or partial**; no sport requires full scholarships | S11 B3: "Athletics aid financial aid may be provided in any amount (full or partial)" | 2026-10-29 | scholarships |
| The D1 Manual **no longer sets an aid limit for any sport** | S11 B2: "The Division I Manual no longer includes institutional financial aid limits for any sport." | 2026-10-29 | scholarships |
| In **2024-25**, before the settlement, D1 softball's limit was **12** (an equivalency limit: a limit on the value of aid, which could be split) | S12 15.5.3.1.2: "There shall be a limit on the value (equivalency) of financial aid awards"; table "Softball 12" | 2026-10-29 | scholarships |
| A D1 school **outside** the settlement has **no national roster limit** (its conference or the school may set one) | S11 A16: "If an institution does not opt in, roster sizes may be governed by the conference or institution and not legislated at the national level." | 2026-10-29 | scholarships |
| A school that stayed out **may opt in for a later academic year** during the settlement's **ten-year** term | S11 A9: "An institution may make a decision to opt in to the settlement … for the next academic year during the ten-year term of the settlement." | 2026-10-29 | scholarships |
| …but if it gives aid **above the 2024-25 limits** (12 in softball), it becomes **subject to the settlement, roster limits included** | S11 A11 / A16: "if an institution or conference provides athletically related financial aid above the current Division I institutional financial aid limits in the 2024-25 Division I Manual, the institution(s) are subject to the terms of the settlement including roster limits"; S12 softball 12 | 2026-10-29 | scholarships |
| A conference may set a **lower** roster limit, but **not below 12** in softball (its 2024-25 scholarship limit) | S11 A15: "the roster limit may not be lower than that sport's Division I scholarship limit in the 2024-25 Division I Manual"; S12 softball 12 | 2026-10-29 (derived from A15 + S12) | scholarships |
| At schools paying above the 2024-25 limit, aid beyond it counts against the settlement's **benefits cap** (up to $2.5 million across sports) | S1 16.13.1.5: "The full cost of attendance value of up to $2.5 million in incremental athletics scholarships … in excess of the 2024-25 academic year team scholarship limit … must be counted against the benefits cap" | 2026-10-29 | scholarships |
| **NCAA D2 softball: 7.2** (an equivalency limit) | S2 15.4.2.1.2 table "Softball 7.2" | 2026-10-29 | scholarships |
| **NCAA D3: no athletics aid** | S3 15.01.3: "shall not award financial aid to any student on the basis of athletics leadership, ability, participation or performance" | 2026-10-29 | scholarships |
| **NCAA D2, D3: no NCAA roster limit** | S2, S3: "roster limit" appears in neither Manual (and S1 17.2 binds D1 only) | 2026-10-29 | scholarships |
| **NAIA softball: an upper limit of 10** on institutional aid | S13 Council of Presidents policy XIII.H "Upper Limits for Institutional Aid": "Softball 10" | 2026-10-29 | scholarships, naia |
| NAIA countable aid includes **academic, leadership and performance scholarships**, **outside scholarships the school administers** and **room or meal credits**, not only athletic awards | S13 XIII.B: "Countable aid includes institutional athletic grants or scholarships, academic scholarships, leadership and/or performance scholarships; outside scholarships administered by the institution; institutional benefits, room credits, or meal credits …" | 2026-10-29 | scholarships, naia |
| NAIA non-countable aid includes **Pell and other federal or state grants**, **loans the school doesn't control** and **campus employment** | S13 XIII.C: "Non-countable aid includes Pell, SEO, federal or state grants … loans not controlled by institutions; campus employment" | 2026-10-29 | naia |
| A player's aid counts toward the NAIA team limit once she plays in **more than 20%** of the maximum varsity contests, or in NAIA postseason | S13 XIII.D: "Any student-athlete who participates in more than 20% of the maximum allowable number of varsity contests in a particular sport, or participates in NAIA-approved postseason, must count towards the team's upper limit" | 2026-10-29 | naia |
| **NAIA: no roster limit** | S13: "No limit will be placed on the number of student-athletes on any varsity roster" | 2026-10-29 | scholarships, naia |
| **NJCAA Division I** may cover tuition and course fees, room and board, course books, up to **$250** of required supplies, and **one** round trip home a year | S14 Art. VI §2 B.1.b(1)–(5) | 2026-10-29 | scholarships, juco |
| **NJCAA Division II** may cover tuition and course-related fees, books and up to **$250** of required supplies, and **not** travel | S14 B.1.c(1)–(4): "Division II programs may not provide transportation costs to student-athletes" | 2026-10-29 | scholarships, juco |
| **NJCAA Division III: no athletic scholarships** | S14 B.1.d: "Division III programs may not provide any athletic scholarship of any kind." | 2026-10-29 | scholarships, juco |
| NJCAA **division is set by sport**, not by college | S14 B.1: "Divisional play is designated by sport, not by school or Athletic Department." | 2026-10-29 | juco |
| The **number** of NJCAA softball scholarships and Letters of Intent per team is on the **Sports Procedures Chart** | S14 §3 A.1: "shall not exceed the total number of Letters of Intent and scholarships allowed for each NJCAA sport as listed on the NJCAA Sports Procedures Chart" | 2026-10-29 | scholarships, juco |

## G. Camps (D1)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| A D1 school's softball camp must be **open to any and all entrants**, limited only by number, age, grade level and/or gender | S1 **13.12.1.3**: "a member institution's sports camp or clinic shall be open to any and all entrants (limited only by number, age, grade level and/or gender)" | 2026-10-29 | camps |
| Interaction between campers and the **coaches employed at a camp** is generally **not subject to the recruiting calendar** | S1 13.12.1.5: "Generally, the interaction during sports camps and clinics between prospective student-athletes and those coaches employed by the camp or clinic is not subject to the recruiting calendar restrictions." | 2026-10-29 | camps |
| A school's staff member working a camp **may not recruit** any prospect while the camp runs (from check-in to the end of all camp activities), and that includes **written offers of aid** | S1 **13.12.1.5**: "an institutional staff member employed at any camp or clinic … is prohibited from recruiting any prospective student-athlete during the time period that the camp or clinic is conducted … The prohibition against recruiting includes extending written offers of financial aid" | 2026-10-29 | camps |
| Coaches who attend a camp **as observers** must follow the contact and evaluation periods | S1 13.12.1.5: "Other coaches who attend the camp or clinic as observers must comply with appropriate recruiting contact and evaluation periods" | 2026-10-29 | camps |
| A school's camp **may not be held during a dead period or a recruiting shutdown** | S1 13.12.1.5: "institutional camps or clinics may not be conducted during a dead period or a recruiting shutdown" | 2026-10-29 | camps |
| The softball camp-conversation rule is **Bylaw 13.12.1.5.4** in the 2026-27 Manual (see §L) | S1 13.12.1.5.4 heading "Exception -- Recruiting Conversations -- Softball" | 2026-10-29 | camps |
| A D1 softball coach may work a **privately owned or another non-school camp** only while **evaluation at non-scholastic (travel-ball) events is allowed**, and only if it runs under the same rules as a school camp (open to all, publicly advertised at least **14 days** ahead, no free or reduced admission for award winners) | S1 **13.12.2.2.8**: "may be employed … in a noninstitutional, privately owned camp or clinic, provided the camp or clinic is operated in accordance with restrictions applicable to an institutional camp or clinic (e.g., open to any and all entrants, no free or reduced admission to or employment of athletics award winners, publicly advertised at least 14 days before the first date …). Employment in such a camp or clinic is limited to periods when evaluation at nonscholastic practice or competition activities is permissible" | 2026-10-29 | camps, travel |
| Outside those periods, a D1 softball coach may work only at **school camps** held on a college campus or at a college's regular practice or competition facility | S1 **13.12.1.2.4**: "during periods when it is not permissible to evaluate at nonscholastic practice or competition activities, an institution's staff member with responsibilities specific to softball may be employed … only at institutional (the individual's institution or another institution's) camps or clinics that occur on any institution's campus or at a facility regularly used by the institution for practice or competition" (Revised 6/24/26) | 2026-10-29 | camps |
| The D1 softball calendar's camp note cites "Bylaws 13.12.2.3.6"; the 10/26/26 Manual numbers that rule **13.12.2.2.8** | SB1 note vs S1. Pages cite the Manual's number | 2026-10-29 | camps (citation only) |

## H. NAIA

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| NAIA softball allows **50 contests** a season | S13 Bylaws Art. I §H: "Softball 50 contests" | 2026-10-29 | naia |
| NAIA softball practice may start **Sept. 1** or the start of the fall term, whichever is earlier; **fall games from Sept. 1, 2026**; games after winter break from **Thursday, Jan. 28, 2027** | S13 first-dates table, Softball row: "September 1 or the start of the institution's fall term, whichever is earlier" / "Fall Games: Tuesday, Sept. 1, 2026 / Post-Winter Break: Thursday, Jan. 28, 2027" | 2026-10-29 | naia |
| An NAIA player has **four seasons** in one sport within **10 semesters** (12 trimesters, 15 quarters) | S13 Art. V: "A student may participate four seasons in one sport in 10 semesters, 12 trimesters or 15 quarters of attendance" | 2026-10-29 | naia |
| In NAIA softball, playing in **11 contests** in the 24-week season uses a season of competition | S13 Art. V: "A student who participates in the following number of contests or dates during the 24-week season will be charged a season of competition … Softball 11 contests" | 2026-10-29 | naia |
| A first-time NAIA athlete needs an **eligible determination from the NAIA Eligibility Center** before competing | S13: "Any student competing in a sport recognized by the NAIA who is a first-time NAIA participant must receive an eligible determination from the NAIA Eligibility Center prior to representing an NAIA institution in competition" | 2026-10-29 | naia |
| **2027 NAIA Softball National Championship: 48 teams**, opening at **eight** six-team, double-elimination sites (**new for 2026-27**) | SB17: "a 48-team double-elimination tournament, consisting of 8 Opening Round sites"; "Opening Round brackets are a six-team, double-elimination format"; "NEW for 2026-2027 – NAIA Softball Championship Opening Round will be held at eight sites" | 2026-10-29 | naia, hub |
| The **NAIA World Series** is **eight teams**, double elimination, ending in a **best-of-three** final (**new for 2026-27**) | SB17: "NEW for 2026-2027 – The NAIA World Series is an eight-team, double-elimination format, concluding in a best-of-three championship" | 2026-10-29 | naia |
| 2027 dates: opening rounds **May 17–20**, World Series **May 27–June 2, 2027**; host site **to be decided** | S13 "2026-2027 NAIA Conference Tournament Deadlines": "Softball May 10, 2027 (Mon) May 17-20, 2027 … May 27-June 2, 2027"; SB17: "The NAIA World Series will be played at TBD, from May 27 – June 2, 2027" | 2026-10-29 | naia |
| A conference with **six** teams competing gets **one** automatic berth; a conference with **10 or more** gets **two** | SB17: "Each Conference/Continental Athletic Conference (CAC) … with six teams competing shall automatically qualify one representative … Conferences with 10 or more teams shall automatically qualify two representatives" | 2026-10-29 | naia |
| The NAIA championship roster is **22** players | SB17: "the official roster of 22 players" | 2026-10-29 | naia |

## I. NJCAA

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| The NJCAA runs **Division I, II and III** softball championships | S15 contents: "Softball - DI", "Softball - DII", "Softball - DIII" | 2026-10-29 | juco |
| **2027 NJCAA DI World Series: May 24–29, 2027, Choccolocco Park, Oxford, Ala.; 20 teams** (16 district representatives + 4 at-large) | S15 §24: "May 24-29, 2027 at Choccolocco Park; Oxford, AL"; "The World Series shall consist of 16 District Representatives with 4 At-Larges" | 2026-10-29 | juco |
| **2027 NJCAA DII World Series:** **20 teams** (16 + 4) at **Choccolocco Park, Oxford, Ala.** | S15 §25: "16 District Representatives with 4 At-Larges"; "at Choccolocco Park; Oxford, AL" | 2026-10-29 | juco |
| **2027 NJCAA DIII World Series: May 26–29, 2027, Carrier Park, East Syracuse, N.Y.** | S15 Softball – Division III: "May 26-29, 2027 at Carrier Park; East Syracuse, NY" | 2026-10-29 | juco |
| From **spring 2028**, NJCAA DI and DII softball each move to a **32-team** postseason with **eight** four-team super regionals before the World Series | S15 "Postseason Model, Effective Spring 2028": "32 total teams"; "8 Super Regional sites"; "4 teams per site" | 2026-10-29 | juco |
| An NJCAA athlete has **two seasons** per sport, at any intercollegiate level | S14 Art. V: "A student-athlete may participate in a maximum of two seasons per NJCAA-recognized sport at any intercollegiate level (varsity, JV or club), regardless of a student-athlete's length of college attendance" | 2026-10-29 | juco |
| A softball player who **transfers from a two-year college to a D1 school and enrolls after its first term** may not compete until the **next academic year** | S1 (2026-27) **14.5.4.1.1** (two-year transfer who was a qualifier) and **14.5.4.2.4** (one who was not): "initially enrolls at the certifying institution as a full-time student after the conclusion of the institution's first term of the academic year, shall not be eligible for competition until the ensuing academic year". Consistent with S16 (2025-26): "you may not compete until the fall term" | 2026-10-29 | juco |

## J. Travel-ball organizations (their own pages; statements about themselves, attributed)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **USA Softball** is the **national governing body** of softball in the United States, **formerly the Amateur Softball Association (ASA)**, named NGB under the **Amateur Sports Act of 1978**; it dates from **1933** | T1: "Formerly the Amateur Softball Association (ASA), USA Softball has many important responsibilities as the National Governing Body of softball in the United States"; "When USA Softball entered the picture in 1933"; "name ASA/USA Softball the National Governing Body of Softball in the United States, pursuant to the Amateur Sports Act of 1978" | 2026-10-29 | travel |
| USA Softball **says** it has grown to **over 120,000 teams** and a membership of **more than one million** | T1: "to over 120,000 teams today, representing a membership of more than one million" (attributed in copy) | 2026-10-29 | travel |
| USA Softball's youth program is the **Junior Olympic (JO)** program; it runs girls' fast-pitch national championships from **10-under to 18-under**, and its **GOLD National Championships** are its top level for **16-under and 18-under** | T2: "The USA Softball youth program, also known as the Junior Olympic (JO) program"; "National Championships for Girls' Fast Pitch 10-Under to 18-Under in the Class A division in addition to the GOLD National Championships — the highest level of Championship Play for the 16-Under and 18-Under divisions" | 2026-10-29 | travel |
| **The Alliance Fastpitch** calls itself **"a national organizing body for travel softball"**, formed in **summer 2020**, with play starting in regional leagues and leading to a national event | T3: "The Alliance Fastpitch is a national organizing body for travel softball. Our national competition structure provides a clear pathway to your season, starting with regional play that leads to a national event"; "officially formed in the summer of 2020" | 2026-10-29 | travel |
| The Alliance lists **nine** regional member leagues | T3/T4 site menu "Member Leagues": Atlantic Coast, Central, Heart of America, Northeast, Northwest, Pacific Coast, Rocky Mountains, Southeast, Texas (9) | 2026-10-29 | travel |
| Its national championship, the **Alliance Fastpitch Championship Series (AFCS)**, follows a format the Alliance says **emulates the NCAA softball postseason**; a seeding committee places the **top 32** teams in regionals for **14U–18U** | T4: "emulating NCAA Softball's postseason format"; "The AFCS Seeding Committee reviews each team's resume and then places the top 32 teams in Regionals for 14U-18U divisions" | 2026-10-29 | travel |
| **PGF** (Premier Girls Fastpitch) runs **PGF Nationals** and announces the **2027** dates: week one **July 23–31**, week two **Aug. 1–8, 2027** | T5: "2027 PGF DATES ANNOUNCED! WEEK ONE: JULY 23rd-JULY 31st WEEK TWO: AUG. 1st - AUG. 8th"; footer "Copyright Premier Girls Fastpitch, Inc." | 2026-10-29 | travel |
| **USSSA** lists **regional national-championship** fastpitch events (e.g. a Southeast national championship, a "C" Eastern national championships, a Great Lakes national championship) | T6 event list: "SE National Championship 'Music City USA'", "USSSA 'C' Eastern National Championships", "USSSA Great Lakes - Gem City National Championship" | 2026-10-29 | travel |
| **Triple Crown Sports** runs **fastpitch** events alongside baseball, volleyball and pickleball | T7 sports menu: "fastpitch baseball volleyball pickleball" | 2026-10-29 | travel |

## K. Pages linked rather than restated

| Topic | Linked page | Articles |
| --- | --- | --- |
| House settlement mechanics (revenue sharing, DSAs, roster exceptions, opting in) | `/guide/house-settlement/` (fact rows in `guide-fact-log.md`) | scholarships, hub |
| Stacking academic and athletic aid | `/guide/stacking-financial-aid/` | scholarships, naia |
| Walk-on types | `/guide/walk-on-types/` | scholarships |
| NJCAA and the junior-college route in general | `/guide/njcaa-juco-explained/` | juco |
| Official vs. unofficial visits; verbal commitments vs. written offers | `/guide/official-vs-unofficial-visits/`, `/guide/verbal-commitment-vs-nli/` | timeline |
| Contacting coaches; questionnaires | `/guide/contacting-coaches/`, `/guide/recruiting-questionnaires/` | timeline, camps |
| Division differences | `/guide/division-differences/` | naia, hub |
| Eligibility Center | `/guide/ncaa-eligibility-center/` | timeline |

## L. Site fix: Bylaw 13.12.1.5.3 (Scott's "fix" mark, softball board, 2026-10-29)

| Finding | Source | Verified | Pages |
| --- | --- | --- | --- |
| In the **2026-27 D1 Manual (printed 10/26/26)**, **13.12.1.5.3 is men's lacrosse** ("Exception -- Men's Lacrosse … before the Wednesday (7 a.m.) immediately following Labor Day", Adopted 6/29/26 effective 8/1/26) and **13.12.1.5.4 is softball** ("Exception -- Recruiting Conversations -- Softball … before 1 p.m. Central time September 1", Adopted 6/24/26). 13.12.1.5.2 is baseball and women's lacrosse | S1 pp. 110–111 | 2026-10-29 | — |
| **Why the LSDBi summary said 13.12.1.5.3 for softball:** Proposal 2026-16's own text (adopted June 24, 2026) inserted the softball rule **as 13.12.1.5.3** and renumbered the old 13.12.1.5.3–.7 as .4–.8. The men's lacrosse legislation adopted **five days later** (June 29, 2026, effective Aug. 1) put men's lacrosse at 13.12.1.5.3, and the softball rule now sits at **13.12.1.5.4**. The proposal page keeps the numbering it had when adopted | P1 bylaw text: "13.12.1.5.3 Exception -- Recruiting Conversations -- Softball … [13.12.1.5.3 through 13.12.1.5.7 renumbered as 13.12.1.5.4 through 13.12.1.5.8, unchanged.]"; S1 as above | 2026-10-29 | — |
| **Verdict: the site's lacrosse pages are correct; no page was wrong.** `lacrosse/womens/guide/id-camps-and-tournaments`, `lacrosse/mens/guide/id-camps-and-tournaments`, `lacrosse/guide/september-1-junior-year-rule` and `lacrosse/mens/guide/recruiting-timeline` cite 13.12.1.5.2 (women's) and 13.12.1.5.3 (men's), matching the Manual. The softball pages cite **13.12.1.5.4**. A row recording this check was added to `lacrosse-fact-log.md` | — | 2026-10-29 | camps, timeline |
| Most of the other softball provisions also moved after adoption. Manual vs proposal text: off-campus contact 13.1.1.1.2 (unchanged); calls 13.1.3.1.4 (proposal 13.1.3.1.3); calls received 13.1.3.2.8 (13.1.3.2.7); materials and electronic correspondence 13.4.1.4 (13.4.1.3); official visits 13.6.2.1.4 (13.6.2.1.3); unofficial visits 13.7.1.4 (13.7.1.3); recruiting opportunities 13.1.5.9 (13.1.5.7). **Pages cite the Manual's numbers only** | S1 vs P1 | 2026-10-29 | timeline |

## L2. Site fix: `noindex` on the pages.dev host (Scott's "fix" mark, softball board, 2026-10-29)

| Finding | Source | Verified |
| --- | --- | --- |
| `https://rosterwise-app.pages.dev/` serves the production build (HTTP 200, the homepage title, canonical `https://rosterwise.app`), and search results surfaced its pages in place of rosterwise.app's | `rosterwise.fetch` read of the host; `landscape-seo.md` §7 item 3 | 2026-10-29 |
| A `_headers` rule whose URL names a host applies to that host only; Cloudflare's own example adds `X-Robots-Tag: noindex` to `https://myproject.pages.dev/*` and shows a custom-domain request receiving none of it | CF1, "Attach a header" table and "Prevent your … URLs showing in search results" | 2026-10-29 |
| Preview deployments already send `X-Robots-Tag: noindex` by default, so only the production pages.dev host needs the rule | CF2: "By default, every preview deployment generated by Cloudflare Pages includes the X-Robots-Tag: noindex HTTP response header" | 2026-10-29 |
| Fix: `src/_headers` gains `https://rosterwise-app.pages.dev/*` → `X-Robots-Tag: noindex`. A redirect would need Cloudflare's dashboard (Bulk Redirects), not a file in this repo | `src/_headers` | 2026-10-29 |

## M. Common claims that are wrong or stale (seen in the search survey; none is repeated on our pages)

| Claim | What the governing body says | Pages that correct it |
| --- | --- | --- |
| "D1 softball has 12 scholarships" (shown as current) | 12 was the 2024-25 equivalency limit (S12). The D1 Manual sets no aid limit now (S11 B2); settlement schools have a 25-player roster limit and no limit on the number of scholarships (S1 17.2, 16.13.1.5) | scholarships |
| "D1 softball contact opens Sept. 1 of junior year" (no time) | 1 p.m. Central time, Sept. 1 of junior year, for calls both ways, correspondence, off-campus contact, visits and camp conversations (S1) | timeline, camps |
| "D1 coaches can call from June 15 after sophomore year" (applied to softball) | The general rule; softball is an exception (S1 13.1.3.1.4) | timeline |
| "Coaches can evaluate travel ball all fall" (D1) | Six fall weekends only; the rest of the fall and all of spring are high-school-only evaluation (SB1) | timeline, travel |
| "D2 coaches can't text until June 15" | D2 communication is allowed at any time; in-person contact and official visits wait for June 15 before junior year (S2) | timeline |
| "Softball signs a National Letter of Intent with early and regular periods" | D1 no longer uses the NLI (SB16); D1 and D2 softball have one first signing date, Nov. 11, 2026, and a school-set last day (S1 Fig. 13-2) | timeline |
| "D1 has 286 / 297 / 309 / 335 softball programs" | The NCAA directory lists 308 for 2026-27 (D1); the NCAA's 2025-26 report also says 308 (SB15) | hub |
| "NAIA World Series: 10 teams" | 2026-27: eight six-team opening rounds and an eight-team World Series (SB17, "NEW for 2026-2027") | naia |
| "NJCAA softball: 24 scholarships per team" | The per-team number is on the NJCAA Sports Procedures Chart, which we could not reach (S14 §3 A.1) | juco (states only that the chart sets it) |

---

### Claims cut for lack of a primary source (reported to Scott)

- **How many NAIA schools sponsor softball** — pending from the M1 session (§A). No estimate is printed.
- **NJCAA per-team softball scholarships, Letter of Intent date, game limit and roster limit** — on the NJCAA Sports
  Procedures Chart, which was not reachable in the plan's research pass (njcaa.org's handbook index is
  client-rendered and came back "unavailable"). Not re-attempted.
- **NJCAA DII World Series dates** — the Sport Codes print "May 31-June 5, 2027" and, in the same section,
  "held during the fourth week in May", which that date is not. Site and field size printed; dates cut.
- **NCAA D3 2027 championship field size** — the NCAA's 2025-26 manual says 64 and its 2027-28 bid specs say "currently
  … 62". Not mentioned.
- **The NCAA early-recruiting research** (share of D1 softball players contacted in 9th grade or earlier) — known
  only through a coaches' association page citing it; the NCAA original was unreadable. Not mentioned.
- **How much travel ball costs, how many college coaches attend any event, how many committed players any database
  lists** — vendor and media figures only. Not mentioned.
- **Whether CCCAA colleges give athletic scholarships** — the CCCAA's 2026-27 bylaw PDFs returned 0 bytes. Not
  mentioned.
- **D1 roster deadline as "Dec. 1" for softball** — derivable from Bylaw 17.2.1 only by assuming fall games are not
  "used for championship selections". Not printed; the scholarships page links the House guide instead.

### Open items to re-check before/at publish

- **NAIA count** (§A): fill the hub's NAIA row and the NAIA page's count section, dated, in the wording Scott marks on
  the W1 board tab, after his answer on M1's five held teams. Until then both pages say the count is not yet published here.
- **After deploy (site fix §L2):** confirm a request to `https://rosterwise-app.pages.dev/` returns `X-Robots-Tag: noindex`
  and a request to `https://rosterwise.app/` returns no `X-Robots-Tag`.
- **Navigation:** the softball pages are linked from nothing outside `/softball/` until the six-sport navigation commit
  (rowing session) adds the sidebar, header and homepage entries and sets `apps.json` `hub`. The sitemap picks them up
  through its catch-all on the next build.
- **2027-28 rollover (Aug. 2027):** the 2027-28 D1 softball calendar replaces §C; the class sentence in §B moves to
  the class of 2029; re-read Bylaw 13 for any further softball change (the softball committee's January 2026 report
  shows it was still discussing the definition of a prospect and transfer dates).
- **2026-27 NCAA prechampionship manuals** were not posted at this pass; no NCAA championship field sizes are printed.
- **NAIA World Series host** is "TBD" in SB17; re-check before naming one.
- **House settlement Q&A** (S11) is updated periodically; re-read A11/A15/A16/B2/B3 on any NCAA announcement.
- **Travel-ball pages** (§J) describe organizations as they describe themselves on 2026-10-29; re-read each season.
- **Lacrosse proposal-login caveat (not this build's page):** `lacrosse/guide/september-1-junior-year-rule` says
  LSDBi "puts its proposal records behind a login". Proposal 2026-16's page (P1) opened without a login on
  2026-10-29. A follow-up for the lacrosse pages, not changed here.
