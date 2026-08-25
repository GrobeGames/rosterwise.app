# RosterWise — Audit Remediation M1/M2 Fact Log & Audit Trail

**Purpose:** one row per claim verified, re-sourced, or cut while remediating
findings M1 (House settlement money figures a year stale and presented as
current) and M2 (a stale season stated as current on the transfer-portal page)
from `reports/content-audit-2026-08-25.md`, plus the site-wide date-anchor
footer rollout that followed.
Lives in `prototypes/` so it never deploys (build only emits from `src/`).

**Verification date for this pass:** 2026-08-25

**Sourcing rules honored:** Tier 1 only. Every rule, limit, and date below was
read from an NCAA-published document — the NCAA's own House implementation
Q&A and Division I compliance materials on the `ncaaorg.s3.amazonaws.com`
document host, and NCAA.org media-center releases. The court-filed settlement
agreement was read and is cited only for what it actually establishes (see the
Rascher row in section A, which is an expert estimate and was **not** used in
copy). No aggregators, no recruiting-service blogs, no news outlets supporting
any rule, limit, count, or date. Where news reporting was the only thing
available — the 2026-27 cap figure — the claim was **cut**, not attributed
(see section D).

**Commit:** `71a76cc` — *fix(content): re-anchor House money and transfer
windows, add date-anchor footers*

---

## A. House settlement — the benefits pool and the benefits cap

Primary source for this entire section unless noted:
**NCAA, "Question and Answer: Implementation of the House Settlement," updated
February 11, 2026**, Section D (Institutional Benefits and the Benefits Cap) —
`ncaaorg.s3.amazonaws.com/governance/d1/legislation/Feb2026D1Gov_PhaseSevenSetQuestionandAnswer.pdf`.
This is the most recent implementation Q&A published as of the verification
date; the NCAA Division I Legislation and Policy index listed nothing newer on
the benefits cap.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **The 2025-26 benefits cap is $20.5 million.** Stated verbatim in the Q&A. This is the settlement's first year and the most recent year for which the NCAA has published a figure. | NCAA House Q&A (2026-02-11), **Question No. D3** | 2026-08-25 | /guide/house-settlement/, /guide/nil-and-revenue-sharing/, /lacrosse/guide/house-settlement-and-lacrosse/, /lacrosse/mens/guide/international-recruiting/, /lacrosse/womens/guide/international-recruiting/ |
| The benefits cap is the **maximum dollar value of revenue-share payments or benefits** a Participating Institution may provide to its student-athletes during an academic year (**July 1 through June 30**). | NCAA House Q&A (2026-02-11), **Question No. D2** | 2026-08-25 | /guide/house-settlement/, /guide/nil-and-revenue-sharing/ |
| The **benefits pool and the benefits cap are the same value** for each year. | NCAA House Q&A (2026-02-11), **Questions No. D1 and D2** | 2026-08-25 | /guide/house-settlement/ |
| The pool is calculated by totaling **eight Membership Financial Reporting System (MFRS) revenue categories** for each institution of the five defendant conferences plus Notre Dame, dividing by the number of those institutions, and taking **22%** of the result. | NCAA House Q&A (2026-02-11), **Question No. D3** | 2026-08-25 | /guide/house-settlement/, /guide/nil-and-revenue-sharing/, /lacrosse/guide/house-settlement-and-lacrosse/ |
| The eight MFRS categories: ticket sales (excluding donations tied to season tickets); revenue from participation in away games; media rights; NCAA distributions and grants; non-media conference distributions; direct revenue from football bowl participation plus conference distributions of bowl revenue; and department revenue from sponsorships, royalties, licensing and advertising. | NCAA House Q&A (2026-02-11), **Question No. D3** | 2026-08-25 | /guide/house-settlement/ (summarized as "eight NCAA financial-reporting categories") |
| **The pool and cap are recalculated every three years** using the same formula, unless accelerated under a settlement exception. **In the second and third year of each three-year period they increase four percent** from the previous year. | NCAA House Q&A (2026-02-11), **Question No. D4** | 2026-08-25 | /guide/house-settlement/, /guide/nil-and-revenue-sharing/, /lacrosse/guide/house-settlement-and-lacrosse/ |
| Amounts provided **above** the cap in one academic year count against the institution's cap for the **next available** academic year. | NCAA House Q&A (2026-02-11), **Question No. D2** | 2026-08-25 | (not used in copy — logged as context for D2/D4) |
| **NEGATIVE FINDING — no Tier 1 source publishes a 2026-27 cap figure.** Searched and read: the Feb 11 2026 Q&A (states 2025-26 only), the NCAA Division I Legislation and Policy index, NCAA.org media-center House implementation coverage, and the College Sports Commission's own Revenue Sharing and FAQ pages (which carry no dollar figure at all). | Absence confirmed across all four Tier 1 surfaces named | 2026-08-25 | /guide/house-settlement/, /guide/nil-and-revenue-sharing/, /lacrosse/guide/house-settlement-and-lacrosse/, /lacrosse/mens/guide/international-recruiting/, /lacrosse/womens/guide/international-recruiting/ — each now states this explicitly |
| **NOT USED IN COPY.** The settlement filing contains economist Dr. Daniel Rascher's *estimate* that the annual Pool "will start at more than $20 million per school in the 2025-26 school year and grow to $32.9 million per school in 2034-35." This is an expert projection inside a court filing, not a published schedule. Logged so a future pass does not mistake it for one. | Plaintiffs' Motion for Preliminary Settlement Approval, *House v. NCAA*, Case No. 4:20-cv-03919-CW, Doc. 450 (filed 2024-07-26) — `ncaaorg.s3.amazonaws.com/ncaa/legal/NCAALEG_Settlement-July2024.pdf` | 2026-08-25 | none — deliberately excluded |

## B. Division I notification-of-transfer windows (2025-26)

Primary source for this entire section:
**NCAA Division I, Figure 13-1, "Notification of Transfer Windows"** —
`ncaaorg.s3.amazonaws.com/compliance/d1/D1Comp_UndergraduateTransferWindows.pdf`
(table stamped 4.20.26). Cross-checked against the NCAA Eligibility Center's
copy at `fs.ncaa.org/Docs/eligibility_center/Transfer/DIUG_Windows.pdf`, which
carries the same dates.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| Windows are **set per sport and tied to that sport's own championship calendar** — there is no single date applying across Division I. | Figure 13-1, structure of the table | 2026-08-25 | /guide/transfer-portal/ |
| **Men's soccer: November 24 – December 23, 2025** | Figure 13-1 (Fall) | 2026-08-25 | /guide/transfer-portal/ (open date cited) |
| **Women's soccer: November 17 – December 16, 2025** | Figure 13-1 (Fall) | 2026-08-25 | /guide/transfer-portal/ (open date cited) |
| **Women's volleyball: December 7, 2025 – January 5, 2026** | Figure 13-1 (Fall) | 2026-08-25 | /guide/transfer-portal/ (open date cited) |
| **Men's volleyball: May 3 – June 1, 2026** | Figure 13-1 (Spring) | 2026-08-25 | /guide/transfer-portal/ (open date cited) |
| **Lacrosse: May 10 – June 8, 2026** | Figure 13-1 (Spring) | 2026-08-25 | /guide/transfer-portal/ (open date cited) |
| **Football (FBS) and Football (FCS): January 2 – January 16, 2026** — a single window; no separate spring football window appears on the table. | Figure 13-1 (Fall) | 2026-08-25 | /guide/transfer-portal/ |
| **Spring Window for fall sports other than football: May 1 – May 15, 2026** | Figure 13-1 ("Spring Window") | 2026-08-25 | /guide/transfer-portal/ |
| **Fall Window for all spring sports: December 1 – December 15, 2025** | Figure 13-1 ("Fall Window") | 2026-08-25 | /guide/transfer-portal/ |
| Window lengths on the 2025-26 table run roughly **15 to 30 days** depending on sport. | Figure 13-1, computed across the table | 2026-08-25 | /guide/transfer-portal/ ("generally 15 to 30 days long") |
| **NEGATIVE FINDING — the NCAA has not published a 2026-27 window table.** Both live Tier 1 tables cover 2025-26 (windows running November 2025 through June 2026). A third S3 document, `.../eligibility/transfers/D1_Undergraduate_Transfer_Windows.pdf`, is an older amended 2022-23 table still online — do not mistake it for current. | Absence confirmed on both live tables; third table read and dated | 2026-08-25 | /guide/transfer-portal/ — states this explicitly |

## C. Division I Cabinet transfer-window changes, January 14, 2026

Primary source: **NCAA.org media center, "Division I Cabinet adopts new
transfer windows in several sports," January 14, 2026** —
`www.ncaa.org/media-center-division-i-cabinet-adopts-new-transfer-windows-in-several-sports/`.

| Claim | Primary source | Verified | Articles |
| --- | --- | --- | --- |
| **Men's and women's basketball:** a **15-day window opening the day after the championship game** of the respective NCAA tournament, plus an **additional 15-day period opening five days after a head coaching change**; effective immediately. | NCAA.org media center (2026-01-14) | 2026-08-25 | /guide/transfer-portal/ |
| **Men's wrestling:** **30 days beginning April 1 each year**, reduced from the previous 45-day period that started after championship selections. (Consistent with Figure 13-1, which lists men's wrestling April 1 – April 30, 2026.) | NCAA.org media center (2026-01-14); corroborated by Figure 13-1 | 2026-08-25 | /guide/transfer-portal/ |
| **Men's ice hockey:** a **15-day window starting the Monday after the Division I Men's Ice Hockey Championship final**, plus an additional 15-day period following a head coaching change. | NCAA.org media center (2026-01-14) | 2026-08-25 | /guide/transfer-portal/ |
| **Track and field:** the **post-indoor-season window is eliminated**; athletes retain the **30-day window opening the day after selections** for the Division I Men's and Women's Outdoor Track and Field Championships. | NCAA.org media center (2026-01-14) | 2026-08-25 | /guide/transfer-portal/ |

## D. Claims cut for lack of a Tier 1 source

| Claim considered | Why it was cut | Verified | Where it would have gone |
| --- | --- | --- | --- |
| **"$21.3 million" as the 2026-27 benefits cap.** Widely reported by news outlets, and arithmetically just $20.5M × 1.04. | Tier 2 reporting of an inference, supporting a **limit**. §1 forbids Tier 2 for a rule, limit, count, or date. Not computed from the escalator either — §0.1 forbids inventing a figure, and D4 shows the escalator does not apply uniformly across the term anyway. **Replaced with the sourced structure plus an explicit statement that no figure has been published.** | 2026-08-25 | would have been /guide/house-settlement/, /guide/nil-and-revenue-sharing/, /lacrosse/guide/house-settlement-and-lacrosse/ |
| **"A program with a $20.5M revenue-share pool and one with $8M…"** — the $8M comparison figure. | No source of any tier. Removed and rewritten structurally as "a program sharing at the cap and one sharing a fraction of it." | 2026-08-25 | was at /guide/nil-and-revenue-sharing/ |
| **"The cap increases approximately 4% per year."** Previously published on three pages as if it were the rule. | Contradicted by Tier 1. Q&A D4 establishes a three-year recalculation with 4% rises only in years two and three of each block. **Corrected, not merely re-anchored** — this was a factual error, not a staleness problem. | 2026-08-25 | corrected at /guide/house-settlement/, /guide/nil-and-revenue-sharing/, /lacrosse/guide/house-settlement-and-lacrosse/ |

## E. Date-anchor footer rollout — what the anchors rest on

75 pages across `src/{guide,soccer,volleyball,lacrosse}/` received a footer
naming the season or month that page reflects. **These anchors are not new
verification.** Each was derived from evidence already in the page:

| Anchor type | Derived from | Pages |
| --- | --- | --- |
| A named season (e.g. "reflects the **2026-27** NCAA Division I Other Sports Recruiting Calendar") | The season token in that page's own `sources:` block — for the recruiting-calendar pages, the 2026-27 calendars introduced by commit `ed4bcc1` | recruiting-timeline pages (soccer M/W, volleyball M/W), ncaa-recruiting-rules, recruiting-questionnaires, lacrosse club-pathways / id-camps / recruiting-video / international-recruiting |
| A named season from a cited manual or cycle (e.g. "**2025-26**") | The season token in that page's `sources:` block | athletic-scholarships, walk-on-types, verbal-commitment-vs-nli, division-differences, recruiting-timeline (guide), late-bloomers, official-vs-unofficial-visits, njcaa-juco-explained, ncaa-eligibility-center, contacting-coaches, juco/junior-college pages |
| A month and year ("reflects the landscape as of **April 2026**") | That page's `date:` front matter — the site's public last-updated stamp, which under §8 is bumped only on actual re-verification | most soccer and volleyball guide pages, which carry no season token in their sources |
| A verified-today anchor | This pass | /guide/transfer-portal/, /guide/nil-and-revenue-sharing/, /guide/house-settlement/, /lacrosse/guide/house-settlement-and-lacrosse/ |

**`date:` front matter was bumped on exactly two pages** — `transfer-portal`
and `nil-and-revenue-sharing` — both of which had load-bearing content
re-verified against a primary on 2026-08-25. No other page's stamp was touched.
A month-anchored footer is a statement about what the page already claimed, not
a claim that it was re-checked today, and the footer wording says so ("reflects
the landscape as of…").

---

### Open items to re-check before/at publish

- **The 2026-27 benefits cap.** Re-check the NCAA House implementation Q&A and
  the College Sports Commission at each update. The moment a Tier 1 figure is
  published, five pages need the same edit — they are listed in the section A
  Articles columns. Until then the copy must keep saying no figure exists;
  do not let a news number in.
- **The 2026-27 Division I transfer-window table.** Not published as of
  2026-08-25; the 2026-27 fall windows do not open until November 2026. When it
  appears, /guide/transfer-portal/ needs its whole window list replaced, not
  patched — and the stale 2022-23 amended table still living on the S3 host is
  a live trap for whoever does it.
- **The three-year recalculation.** 2025-26 was year one. Under D4 the first
  recalculation year is due after year three — that is a formula rerun, not a
  4% step, and the resulting figure could move in either direction. Flag it now
  so nobody extrapolates.
- **Section E's month-based anchors are the weakest rows in this log.** They are
  honest about what they assert, but they rest on `date:` stamps rather than on
  a re-read of each page's sources. The permanent fix is audit finding H1 —
  retro-building soccer, volleyball, and lacrosse fact logs — after which every
  one of those footers can name a season instead of a month.
- This log covers **only** the claims that commit `71a76cc` introduced or
  corrected. It is **not** a fact log for the 129 pages in those three sports.
  Findings H1, H2, H3, M3, M4, L1, and L4 from
  `reports/content-audit-2026-08-25.md` remain open, and two of them — L1's
  prediction clause and H3's allocation split — sit on
  /lacrosse/guide/house-settlement-and-lacrosse/, a page this commit edited.
