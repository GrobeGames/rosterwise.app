# RosterWise Guide — NCAA Age-Based Eligibility ("5 in 5") — Fact Log & Audit Trail

**Purpose:** one row per published claim → primary source → date verified →
article(s) that use it.
Lives in `prototypes/` so it never deploys (build only emits from `src/`).
Before flipping any article to live, check every number/date/rule in its copy
against a row here.

**Verification date for this pass:** 2026-10-08. Every Tier 1 row below was
re-opened and re-read directly on that date (see "Method" below). The
litigation rows (section G–H) are **perishable**: the Tenth Circuit hears oral
argument on 2026-10-13 and any ruling changes them. Re-verify the whole log
after that ruling, and at the 2027 NCAA Convention (Division III).

**Standards violation being corrected (§0.5).** `src/guide/age-based-eligibility.md`
was published with `date: 2026-08-03` and **no fact log**. That is itself a
breach of non-negotiable §0.5 ("NEVER ship without the fact log and the audit
gate"), and it is the control that would have caught the errors corrected in
this pass: a clarification-order date taken from a news story's update stamp
(Aug. 3) instead of the order (Aug. 2); a class definition paraphrased by a
reporter ("high school class of 2022") instead of the court's; a
"waiting for the phase-in" framing that the NCAA's own transition table
contradicts; three Tier 2-only statements about the clarification's effect
presented as fact; and an NCAA quote whose source could not be found again.
This log is built from the claim-by-claim audit in
`research_notes/Fall 2026 sport and eligibility updates/age_based_eligibility.md`
(research date 2026-10-08) and from the author's own re-read of the primaries.

**Method.** NCAA.org pages read through a fetch tool (ncaa.org blocks direct
download). Court orders read in full as PDFs from CourtListener's RECAP mirror
of PACER (Tier 1: the courts' own filed orders): D. Colo. ECF 41 (all 6 pages),
ECF 38 (pp. 1–3 and 47–50 of 50), ECF 56 (pp. 1–2 of 16); Tenth Circuit Dkt. 28
(both pages); JPML Doc. 53 (all 4 pages). Docket entries read through the
CourtListener search API. S. 4668 text read on congress.gov; its action history
read through the Congress.gov API (api.congress.gov), because the congress.gov
actions page returned 403.

**Sourcing rules honored:** primary only for every rule, date and count —
NCAA.org (Eligibility Center "Eligibility 101" page; DI release 2026-06-23; DII
release 2026-08-05; NCAA Convention page), the NCAA Legislative Services
Database (LSDBi), U.S. District Court for the District of Colorado, U.S. Court of
Appeals for the Tenth Circuit, Judicial Panel on Multidistrict Litigation,
Congress.gov, NAIA.org. **One Tier 2 source** supports one attributed statement
(a named official's letter, row G16). NO aggregators and NO recruiting-service
blogs. Deliberately excluded: KBTX (Aug. 2–3) as support for anything the court
order does not say; Yahoo Sports and ESPN's July 31 story (cited by the August
page, not re-located/not opened; superseded by the court orders); state-court
reporting (counts are reporter estimates); member-college NJCAA FAQ pages
(not NJCAA's own rules).

**Article slug key:**
`guide-abe` = `src/guide/age-based-eligibility.md`;
`blog-abe-oct` = `src/blog/five-year-eligibility-rule-october-2026-update.md`.
`rs-wrestling` = the wrestling pages listed in `wrestling-fact-log.md` §K (redshirt wording reworded 2026-10-08).
`rs-volleyball` = the volleyball pages listed in `volleyball-fact-log.md` §N (redshirt and JUCO-eligibility wording reworded 2026-10-08).
`rs-soccer` = the soccer pages listed in `soccer-fact-log.md` §S (redshirt wording reworded 2026-10-08; scholarships pages use only the adoption, redshirt-elimination, five-year-window and fall-2027 rows).

---

## A. What the rule is called

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| The NCAA's name for it is the **age-based eligibility model** (rules page: "Age-Based Eligibility Rules"). | NCAA.org Eligibility Center, "NCAA Division I and II Age-Based Eligibility Rules: Eligibility 101" (undated; ©2026) — `https://www.ncaa.org/eligibility-center/division-i-and-division-ii-age-based-eligibility-rules/`; NCAA.org, "Division I adopts age-based eligibility model" (2026-06-23) | 2026-10-08 | guide-abe, blog-abe-oct |
| The NCAA itself says the "5 for 5" label is wrong: "While some have referred to this as the NCAA "5 for 5" rule, **that is not accurate**." | Eligibility 101 (above) — verbatim | 2026-10-08 | guide-abe |
| The Eligibility 101 page now covers **Division I and Division II** (title: "NCAA Division I and II Age-Based Eligibility Rules: Eligibility 101"). The old `/sports/2026/6/23/…` DI-only URL redirects to it. | Eligibility 101 (above); redirect per research notes | 2026-10-08 | guide-abe |

## B. Adoption

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Before June 2026, under NCAA **Bylaw 12.6**, Division I athletes could compete in **four seasons of competition within five years** of full-time enrollment. | D. Colo. ECF 38, Order (filed 2026-07-31), p. 3 — `https://storage.courtlistener.com/recap/gov.uscourts.cod.256528/gov.uscourts.cod.256528.38.0.pdf` | 2026-10-08 | guide-abe |
| The **Division I Cabinet unanimously** approved the model; NCAA release dated **June 23, 2026** (a Tuesday) says the changes are "not final until the Cabinet meeting concludes Wednesday" (**June 24, 2026**). | NCAA.org, "Division I adopts age-based eligibility model" (Meghan Durham Wright, 2026-06-23) — `https://www.ncaa.org/news/division-i-adopts-age-based-eligibility-model/` | 2026-10-08 | guide-abe, rs-soccer, rs-volleyball, rs-wrestling |
| DI athletes can have **up to five years of eligibility** if they enroll full time no later than the academic year after their 19th birthday; season-of-competition limits are eliminated. | NCAA.org DI release (2026-06-23) | 2026-10-08 | guide-abe |
| **Division II adopted the model.** The DII Executive Board adopted emergency legislation "as recommended by the Management Council in July," **"effective immediately for the 2026-27 academic year."** NCAA.org release dated **Aug. 5, 2026**. The release does **not** state the date of the Board's vote. | NCAA.org, "Division II adopts age-based eligibility model" (Asha Evans, 2026-08-05) — `https://www.ncaa.org/news/division-ii-adopts-age-based-eligibility-model/` | 2026-10-08 | guide-abe, blog-abe-oct, rs-soccer, rs-volleyball, rs-wrestling |
| DII's previous rule was **four seasons of competition within 10 semesters/15 quarters**. | NCAA.org DII release (2026-08-05); Eligibility 101 lists "10 semesters/15 quarters" as eliminated (DII only) | 2026-10-08 | guide-abe, blog-abe-oct |
| The DII Executive Board and Management Council said the change should apply **"going forward, and not retroactively."** | NCAA.org DII release (2026-08-05) — joint statement, no individual named | 2026-10-08 | blog-abe-oct |

## C. When the five-year clock starts

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| The period begins at the **earlier** of (1) the academic term the athlete **first enrolls full time and attends class** at any college or university — the NCAA names **"a domestic institution, international institution or two-year college"** — or (2) the age trigger. | Eligibility 101 (verbatim for the quoted phrase) | 2026-10-08 | guide-abe, blog-abe-oct, rs-soccer, rs-volleyball, rs-wrestling |
| Age trigger: **"The start of the regular academic year immediately following the student-athlete's 19th birthday."** For an athlete who turns 19 **on or after Sept. 1**, "the period of eligibility begins at **the start of the subsequent academic year**," unless the athlete enrolls full time earlier. | Eligibility 101 (verbatim for both quoted phrases) | 2026-10-08 | guide-abe |
| Division II's release likewise names **junior colleges and international institutions** in the enrollment trigger. | NCAA.org DII release (2026-08-05) | 2026-10-08 | guide-abe |
| The period runs continuously. Verbatim fragment confirmed: it "**does not pause because a student-athlete does not compete, transfers, sits out, changes teams or takes time away from participation**" — the source sentence continues after a comma, so copy quotes this fragment and closes the quote before the period. | Eligibility 101 — fragment confirmed word-for-word in two targeted reads (opening words through "or takes"; then "time away from participation" followed by a comma) | 2026-10-08 | guide-abe, rs-soccer, rs-volleyball, rs-wrestling |
| The NCAA says the rule "**does not guarantee five years for all student-athletes, particularly those who delay enrollment**," and that "**Delaying college enrollment beyond age 19 may reduce the amount of eligibility available in Divisions I and II.**" | Eligibility 101 (verbatim) | 2026-10-08 | guide-abe, blog-abe-oct |

## D. What was eliminated

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Eliminated rules: **seasons of competition**; **athletics redshirts**; **delayed enrollment/organized competition**; **sport-specific enrollment timelines**; **academic nonqualifier season limits (DI only)**; **10 semesters/15 quarters (DII only)**. | Eligibility 101 | 2026-10-08 | guide-abe, rs-soccer, rs-volleyball, rs-wrestling |
| Eliminated waivers: **medical hardship**; **extension of eligibility**; **season of competition**; **athletics activity**; **delayed enrollment/organized competition**. | Eligibility 101; DI release (2026-06-23) | 2026-10-08 | guide-abe |
| Athletes who continue under the previous rules "**will not have future waiver opportunities to gain additional eligibility through eliminated waiver categories.**" | Eligibility 101 (verbatim) | 2026-10-08 | guide-abe |
| For current DI athletes under the previous rules, waiver requests based on circumstances during or before 2025-26 were due to the national office by **July 31, 2026**; after that, those waivers are no longer available. | NCAA.org DI release (2026-06-23) | 2026-10-08 | guide-abe |

## E. Exceptions

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Time in **active-duty military service**, on an **official religious mission**, or in "**a similar service commitment**" may be excluded from the five-year period — only if the athlete does not take part in organized competition during that time. | Eligibility 101 (verbatim for quoted phrase); DI release (2026-06-23) for the organized-competition condition | 2026-10-08 | guide-abe |
| **Pregnancy:** a pregnant student-athlete may pause the period for the **actual period she cannot compete**, with **medical documentation** required. | Eligibility 101 | 2026-10-08 | guide-abe |
| The exceptions are administered by the **NCAA Eligibility Center** (DI and DII). | NCAA.org DI release (2026-06-23); DII release (2026-08-05) | 2026-10-08 | guide-abe |

## F. Transition (who is under which rule)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Athletes who **used their final season of competition (under previous rules) during 2025-26: no additional eligibility.** | Eligibility 101 transition table; DI release (2026-06-23); DII release (2026-08-05) ("eligibility ran out under the old rules" → none) | 2026-10-08 | guide-abe, blog-abe-oct |
| **Current athletes with eligibility remaining after 2025-26:** whichever rules are **most beneficial** (previous rules or age-based). | Eligibility 101; DI release | 2026-10-08 | guide-abe, rs-soccer, rs-volleyball, rs-wrestling |
| **Prospects first enrolling full time in 2026-27:** whichever rules are most beneficial. | Eligibility 101; DI release; DII release | 2026-10-08 | guide-abe, rs-soccer, rs-volleyball, rs-wrestling |
| **Prospects first enrolling full time in fall 2027 or later:** age-based model **only**. | Eligibility 101; DI release; DII release | 2026-10-08 | guide-abe, blog-abe-oct, rs-soccer, rs-volleyball, rs-wrestling |

## G. The Wisne case (D. Colo. and Tenth Circuit)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Case: ***Wisne v. NCAA***, No. 1:26-cv-03063-CNS-KAS, U.S. District Court for the District of Colorado, **Judge Charlotte N. Sweeney**; filed 2026-07-08; nature of suit: antitrust. | ECF 38, ECF 41 captions; CourtListener docket metadata (search API) | 2026-10-08 | guide-abe, blog-abe-oct |
| **July 31, 2026:** the court certified a class (ECF 37) and granted the plaintiffs' motion (ECF 38). The motion was styled as one for a temporary restraining order; the court construed it as a preliminary-injunction motion and "ultimately issues a **preliminary injunction** rather than a temporary restraining order" (n.1). | ECF 38, p. 2 n.1 and p. 50 ("DATED this 31st day of July 2026"); docket entries 37 and 38 (2026-07-31) | 2026-10-08 | guide-abe, blog-abe-oct |
| **Class definition (verbatim):** "All persons in the United States who began to play in collegiate sports in the **2022–2023 season**, competed in NCAA Division I sports, and **completed four years of eligibility as defined by the NCAA's prior rules by the conclusion of the 2025–2026 season**, and are therefore barred from playing a fifth season due to the NCAA's adoption and immediate implementation of the Five-Year Eligibility Rule." | ECF 41 (2026-08-02), p. 5, quoting ECF 37 at 17 — `https://storage.courtlistener.com/recap/gov.uscourts.cod.256528/gov.uscourts.cod.256528.41.0.pdf` | 2026-10-08 | guide-abe, blog-abe-oct |
| The claim is under **Section 1 of the Sherman Act** (federal antitrust law). At the preliminary-injunction stage the court found plaintiffs "**are likely to succeed on the merits of their Section 1 claim**" — not a final ruling on the merits. | ECF 38, pp. 2 and 50 (verbatim) | 2026-10-08 | guide-abe, blog-abe-oct |
| **Aug. 1, 2026:** NCAA filed an Emergency Motion to Clarify (ECF 40). **Aug. 2, 2026:** the court granted it (ECF 41, "DATED this 2nd day of August," filed 08/02/26). **The clarification order is dated Aug. 2, not Aug. 3.** | ECF 41 header and signature block; docket entries 40 (2026-08-01) and 41 (2026-08-02) | 2026-10-08 | guide-abe |
| **What ECF 41 says the injunction does not reach:** "The Court's order **does not enjoin any provisions of the House settlement agreement**"; it "does not enjoin, or reach, the House settlement agreement or its terms"; "The Court's order **does not enjoin the operation of transfer rules**"; its summary lists "the House settlement agreement …, **roster caps**, and transfer rules" as things not mentioned "because it did not enjoin them"; and the court did not enjoin "any member school from making eligibility decisions based on whether a student-athlete was **over twenty years of age at the time of their enrollment during the 2022–23 season**." | ECF 41, pp. 3–5 (verbatim) | 2026-10-08 | guide-abe |
| **What ECF 41 says the injunction does:** "the NCAA is enjoined from prohibiting Plaintiffs and Class Members from competing in a **fifth season** of collegiate athletics under the Rule … or any NCAA Bylaw." | ECF 41, pp. 3 and 6 (verbatim) | 2026-10-08 | guide-abe, blog-abe-oct |
| **NEGATIVE FINDING:** ECF 41 does **not** contain the words "revenue-sharing," "professional contract," or "transfer portal window." Revenue-sharing is covered only to the extent it is a House settlement term. | ECF 41, read in full (6 pp.) | 2026-10-08 | guide-abe (copy does not say "revenue-sharing caps") |
| **Aug. 2, 2026:** NCAA filed its **Notice of Appeal** (ECF 42, from ECF 38 and ECF 41) and an **Emergency Motion to Stay** pending appeal (ECF 43). | D. Colo. docket entries 42 and 43, both dated 2026-08-02 (CourtListener search API) | 2026-10-08 | guide-abe, blog-abe-oct |
| **Aug. 10, 2026:** Judge Sweeney **denied** the NCAA's stay motion (ECF 56). | ECF 56, Order (filed 08/10/26), p. 1 ("The motion is DENIED") — `https://storage.courtlistener.com/recap/gov.uscourts.cod.256528/gov.uscourts.cod.256528.56.0.pdf`; docket entry 56 | 2026-10-08 | guide-abe, blog-abe-oct |
| **Aug. 21, 2026:** the **Tenth Circuit** (No. 26-1309; Judges **Tymkovich, Kelly and Rossman**) granted the NCAA's motion and "**stay[ed] the district court's July 31, 2026 injunction pending the disposition of this appeal on the merits, or until further order of this court.**" "**Judge Rossman would deny the stay.**" Per curiam; the panel found the NCAA "satisfied its burden" on each of the four stay factors, including a strong showing of likely success on the merits, without further reasoning. | 10th Cir. Order, Dkt. 28 (filed 2026-08-21), 2 pp. — `https://storage.courtlistener.com/recap/gov.uscourts.ca10.92398/gov.uscourts.ca10.92398.28.0_1.pdf` (verbatim) | 2026-10-08 | guide-abe, blog-abe-oct, rs-soccer, rs-volleyball, rs-wrestling |
| Consequence stated in copy: **while the stay is in place, the fifth season the injunction allowed is not in effect**, and the age-based rules apply to the class as the NCAA adopted them. | Dkt. 28 (above); D. Colo. ECF 64 (2026-08-21) denied plaintiffs' motion to enforce because "the Tenth Circuit has now stayed the Court's July 31, 2026, preliminary injunction"; JPML Doc. 53 p. 2 ("is stayed pending an appeal to the Tenth Circuit") | 2026-10-08 | guide-abe, blog-abe-oct |
| The appeal is **fully briefed**: NCAA opening brief 2026-09-01 (Dkt. 34), appellees' brief 2026-09-08 (Dkt. 36), NCAA reply 2026-09-11 (Dkt. 41). | 10th Cir. docket entries (CourtListener search API) | 2026-10-08 | guide-abe, blog-abe-oct |
| **Oral argument:** "This matter is set for oral argument on **10/13/2026 at 9:00 A.M. Mountain Time** in Zoom" (heard remotely by video conference). | 10th Cir. Dkt. 45, Oral argument notice (2026-09-24) | 2026-10-08 | guide-abe, blog-abe-oct, rs-soccer, rs-volleyball, rs-wrestling |
| **No merits decision** is on the Tenth Circuit docket; the latest entries are calendar acknowledgments dated 2026-09-30 (Dkt. 49–50). | 10th Cir. docket (CourtListener search API, newest-first listing) | 2026-10-08 | guide-abe, blog-abe-oct |
| *(Tier 2, attributed)* In a letter to schools after the stay, NCAA Chief Legal Officer **Scott Bearby** said that, effective immediately, the age-based rules would be implemented "**as the Division I membership intended**." Tier 1 sought: no NCAA.org release on the stay was found. | TSN, "Court halts order, denies extra year of eligibility" (Dan Murphy, 2026-08-22, 2:40 p.m. EDT) — `https://www.tsn.ca/ncaa/article/court-halts-order-denies-extra-year-of-eligibility-n1-49682102/` (opened and read; the article does **not** contain the August page's "We intend to appeal" quote) | 2026-10-08 | guide-abe |

## H. Related federal litigation (JPML)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Oct. 2, 2026:** the Judicial Panel on Multidistrict Litigation **denied** the NCAA's motion to centralize the eligibility lawsuits (MDL No. 3198) in the Middle District of Tennessee, calling it "**a close question**." The litigation consisted of "**seven actions pending in five districts**," and the parties had notified the Panel of "**fifteen related actions pending in nine districts**." Effect: the cases stay in their own courts. | JPML, MDL No. 3198, Doc. 53, Order Denying Transfer (filed 10/02/26), pp. 1–3 — `https://storage.courtlistener.com/recap/gov.uscourts.jpml.1761446/gov.uscourts.jpml.1761446.53.0.pdf` (verbatim) | 2026-10-08 | guide-abe, blog-abe-oct |
| One group of pending federal suits challenges "**the NCAA bylaws that count seasons of competition at junior colleges and schools in the National Association of Intercollegiate Athletics** … against the permitted seasons of eligibility." | JPML Doc. 53, p. 1 (verbatim) | 2026-10-08 | guide-abe, rs-volleyball (juco-pathway) |
| The plaintiffs challenging the age-based rule "argue that it should have been extended to student athletes whose fourth season of eligibility was completed by Spring 2026" — i.e., the group the NCAA transition gives no additional eligibility (row F1). Copy: the court case exists because the transition leaves that group out. | JPML Doc. 53, p. 2 (verbatim); ECF 38, pp. 1–2 (plaintiffs "are not allowed to do so under this rule") | 2026-10-08 | guide-abe |

## I. Division III, NAIA, NJCAA

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Division III has not adopted the model.** A DIII **membership proposal**, "Eligibility – Five-Year Period of Eligibility – Age-Based Eligibility Model," is in the NCAA Legislative Services Database for **Convention Year 2027**: submitted **June 30, 2026**; sources **American Rivers Conference** and **Ohio Athletic Conference**; status "POPL"; "No Convention Record" (no vote). | NCAA LSDBi, proposal id 109408 — `https://web3.ncaa.org/lsdbi/search/proposalView?id=109408` | 2026-10-08 | guide-abe, blog-abe-oct, rs-soccer, rs-volleyball, rs-wrestling |
| The DIII proposal would apply to students who **initially enroll full time in 2027-28 and after**; its intent statement says it would mirror Division I's continuous five-year model; proposed Bylaw 14.2.6: "There shall be **no waivers** of the application of the five-year period of eligibility legislation." | LSDBi 109408 (verbatim for the waiver sentence) | 2026-10-08 | guide-abe, blog-abe-oct |
| The **2027 NCAA Convention** is **Jan. 13–15, 2027**, in Anaheim, Calif., and covers **Divisions II and III** (DI no longer holds in-person governance meetings there); DIII business session Jan. 15. | NCAA.org, Convention page — `https://www.ncaa.org/convention/` (the year appears in registration links; dates listed as "Wednesday, Jan. 13 – Friday, January 15"; Jan. 13, 2027 is a Wednesday) | 2026-10-08 | guide-abe, blog-abe-oct |
| **NAIA: no change found.** NAIA's prospective-student page says a student "can compete in **four 'seasons of competition'** during their **first 10 semesters**" (or equivalent) and does not mention an age-based or five-year model. | NAIA.org, "High School Students" — `https://www.naia.org/student-athletes/prospective/high-school-students/` | 2026-10-08 | guide-abe, blog-abe-oct, rs-soccer, rs-volleyball, rs-wrestling |
| **NJCAA: not verified.** njcaa.org returned no readable content in the research pass; no NJCAA statement on the age-based model was found. Copy says only that we could not verify NJCAA's position. | Research notes Q4 (njcaa.org unreadable); not re-attempted successfully | 2026-10-08 | guide-abe, blog-abe-oct |

## J. Federal legislation (S. 4668)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **S. 4668, the "Protect College Sports Act of 2026,"** passed the Senate on **Sept. 28, 2026** "by Yea-Nay Vote. **77 - 22.** Record Vote Number: 250." It was **received in the House** and "**Held at the desk**" on **Oct. 5, 2026**. It is **not law**. | Congress.gov API, S. 4668 actions (`https://api.congress.gov/v3/bill/119/s/4668/actions`; public page `https://www.congress.gov/bill/119th-congress/senate-bill/4668/all-actions`); short title from Sec. 1(a) of the engrossed text | 2026-10-08 | guide-abe, blog-abe-oct |
| **§113(b)(1)** (Senate-engrossed text): a student athlete may compete for a **Division I or Division II** institution "for **a maximum of 5 calendar years** beginning on, whichever occurs first" — "the beginning of the academic year following the 19th birthday of the student athlete" or "the date the student athlete initially enrolls full time at an institution." Does not cover Division III. | S. 4668 ES — `https://www.congress.gov/119/bills/s4668/BILLS-119s4668es.htm` (verbatim) | 2026-10-08 | guide-abe, blog-abe-oct |
| **§113(b)(2):** the clock would not run during absences for **pregnancy**, **religious missions**, **active-duty military service**, and other absences an association adopts by rule that apply uniformly, which "**may include serious athletic injury or medical condition**." (The NCAA model, by contrast, eliminated medical hardship waivers — rows D2.) | S. 4668 ES (verbatim for quoted phrase) | 2026-10-08 | guide-abe |

## K. Roster limits (context)

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| At Division I schools in the House settlement (members of a defendant conference or schools that opt in), sports have **roster limits** under Bylaw 17.2 (adopted 6/6/25, effective 7/1/25). | 2026-27 NCAA Division I Manual, Bylaw 17.2 "Roster Limitations," via LSDBi (`https://web3.ncaa.org/lsdbi/reports/getReport/90008`) — **row reused from `volleyball-fact-log.md` (verified 2026-08-26); not re-read this pass** | 2026-08-26 (reused) | guide-abe |
| The Aug. 2 clarification says the injunction did not enjoin roster caps or any House settlement provision. | Row G6 (ECF 41) | 2026-10-08 | guide-abe |

## L. Negative findings stated in copy

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| No first-party data quantifies the effect of the rule or the litigation on recruiting volume or roster spots. | Absence: none found in the NCAA, court, or Congress.gov materials above | 2026-10-08 | guide-abe |
| No NCAA.org news release on the Aug. 21 stay was found. | Absence (research notes Q1 gaps; not contradicted this pass) | 2026-10-08 | (not stated in copy; supports the Tier 2 attribution in G16) |

---

## Claims cut for lack of a primary source (or contradicted by one)

From the August 3 version of `guide-abe`:

- **"Athletes who did not enter the transfer portal during the initial window may not transfer"** — KBTX only (Tier 2); not in ECF 41 or ECF 38. Also moot while the injunction is stayed.
- **"Programs cannot exceed revenue-sharing totals to accommodate a returning fifth-year athlete"** — KBTX only; ECF 41 says only that House settlement terms are not enjoined.
- **"Athletes who signed professional contracts are not covered"** — KBTX only; not in ECF 41.
- **"Revenue-sharing caps"** as a quoted scope of the clarification — the order does not use the phrase. Replaced by the order's own scope (transfer rules, roster caps, House settlement terms, the over-20 point).
- **Bearby quote "We intend to appeal the Colorado order and will seek to restore the status quo as soon as possible."** — its cited source (Yahoo Sports) could not be located, and the TSN/ESPN story opened this pass does not contain it. Replaced by the T1 fact of the Aug. 2 appeal and a short attributed Aug. 21 quote (row G16).
- **"The NCAA has argued the ruling creates disruption for athletes and schools that planned around the rules as written"** — sourced to the same unlocated Yahoo story; cut rather than re-sourced.
- **"Rather than waiting for the age-based model to phase in with fall 2027 enrollees"** — contradicted by Tier 1: athletes who used their final season in 2025-26 get no additional eligibility under the transition.
- **"Division I athletes from the high school class of 2022"** — a reporter's paraphrase; replaced by the court's definition (began collegiate competition in 2022-23).
- **"The plaintiffs prevailed"** — overstated; the court found them **likely to succeed** at the preliminary-injunction stage.
- **"August 3, 2026 — a clarification"** — wrong date; the order is dated Aug. 2.

Considered for the October pass and not used:

- **State-court rulings** (a Tennessee chancery injunction for basketball players; Louisiana restraining orders for 32 athletes; "more than 100" seniors suing) — Tier 2 reporting and reporter estimates; no order text opened.
- **Ohio appellate stay / Kentucky appeals ruling** — search snippets only.
- **A DII blanket athletics-aid waiver for 2027-28** — one search result; not in the Aug. 5 release.
- **NAIA president's position on the federal bill's five-year window** (NAIA.org, 2026-06-17) — Tier 1 for NAIA's own view, but not needed for a family-facing "what changed"; omitted to keep the NAIA line to its rule.
- **District-court scheduling (NCAA answer deadline tied to the appeal; scheduling conference moved to Dec. 1, 2026)** — verified (ECF 67, 69) but procedural; omitted from copy.

### Open items to re-check before/at publish

- **Tenth Circuit oral argument, Oct. 13, 2026 (9:00 a.m. MT, Zoom).** After it happens, update the status box and court section of `guide-abe` and the status box of `blog-abe-oct` to say argument was heard; do not characterize it.
- **Any Tenth Circuit ruling** on the merits of the appeal, or any order lifting the stay. Either changes rows G11–G15, the guide's status box, the correction note's "not currently in effect" line, and the blog post. Update every slug in the same commit.
- **District court scheduling conference, Dec. 1, 2026** (ECF 69) and the NCAA's answer deadline (ECF 67) — re-check the docket at that point.
- **Division III proposal (LSDBi 109408):** confirm whether it reaches the 2027 Official Notice, its final proposal number, and the outcome at the Jan. 13–15, 2027 Convention. Copy must not state a vote result until one exists.
- **NJCAA position:** unverified (njcaa.org unreadable). Copy says "could not verify." Re-attempt NJCAA.org before the next re-verification.
- **S. 4668:** House action unknown. Re-check Congress.gov before any edit; copy must keep "not law" until enacted.
- **DII Executive Board vote date** — not stated in the Aug. 5 release; copy uses the release date only.
- **Eligibility 101 is undated** — re-read it at every pass; it changed scope (DI → DI and II) once already.
- **Roster-limit row (K1)** is reused from `volleyball-fact-log.md` (2026-08-26); re-read Bylaw 17.2 at the 2027-28 legislative cycle.
- **Other pages that describe redshirting as a current practice** (e.g., soccer and volleyball goalkeeper/reading-rosters pages, wrestling transfer-portal and methodology pages) describe roster *designations*, not the rule, and were not edited in this pass. Review whether any should note that athletics redshirt rules are eliminated for DI/DII athletes under the age-based model. Not a blocking item for `guide-abe`.
