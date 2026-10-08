# RosterWise Remediation — launch prompts

Four phases. Run them in order, each in its own Claude Code session in
`~/Code/rosterwise/website`. Phase 1 is the one that matters tonight.

Install the amended `rosterwise-content-standards` skill (v2.0.0) **before**
Phase 1 — the phases reference sections that only exist in v2.

---

## PHASE 1 — Ship the confirmed corrections

Paste this into a fresh Claude Code session in `~/Code/rosterwise/website`.

---

Load the `rosterwise-content-standards` skill (v2.0.0) and follow it as written.

An independent audit on 2026-08-28 found 19 confirmed factual errors live on
rosterwise.app. Each item below was verified against the primary source named.
Your job is to correct them, correct the corresponding fact-log rows, and trace
the blast radius per §9.2 — which now means grep, not just the `Articles`
column.

Work on branch `fix/audit-2026-08-28-p0`. Do not add content. Do not
"improve" anything not listed. Where an item says cut, cut — do not rewrite it
into a hedged version of the same claim.

**Before you start:** run the §7.2 grep block from the skill and save the
output. Several of these errors appear on more pages than the ones I name.

### 1. Women's minimum body-fat floor — wrong number, health and safety

`src/wrestling/guide/weight-management-and-safety.md` lines 32, 68, 84 publish
"5% for men and 12% for women."

The NCAA Women's Wrestling Weight Management Program packet says **17 percent**:
"The American College of Sports Medicine has chosen 17 percent as the essential
fat level in collegiate female athletes and the lower limit for safe and normal
growth in this group." LAW1 = fat-free weight ÷ 0.83. Source:
`ncaaorg.s3.amazonaws.com/championships/sports/wrestling/rules/womens/2025PRWWR_WeightManagementProgramPacket.pdf`
The men's 5% is correct and stays.

Correct all three instances. Correct fact-log row §E in
`prototypes/research/wrestling-fact-log.md` — the row was marked verified
against the document that contradicts it. Then grep `src/` and the app repos
for `12%` near "body fat" in case it propagated. Per §9.6 the commit message
says plainly that a health-and-safety figure was wrong.

Note for context, do not publish without sourcing it yourself: NFHS raised the
high-school female minimum from 12% to 19% effective 2026-27, so 12% is now
wrong in both regimes.

### 2. Eligibility Center — a test-score regime that no longer exists

`src/guide/ncaa-eligibility-center.md` lines 4, 12, 68, 72, 91–100, 114, 121, 150.

NCAA.org's current Division I initial-eligibility page (modified 2026-08-21,
`ncaa.org/eligibility-center/initial-eligibility-requirements/division-i/`)
gives the complete requirements as: graduate high school; 16 NCAA-approved
core courses; 10 core courses (7 in English/math/science) completed before the
seventh semester; minimum **2.3** core GPA. Division II
(`.../division-ii/`) is 16 core courses and a minimum **2.2** core GPA.

**SAT/ACT, the sliding scale, and academic-redshirt status appear nowhere on
either page.** Delete:
- the "GPA and test score sliding scale" section and both D1/D2 references to it
- the academic-redshirt certification outcome
- the "send standardized test scores using code 9999" step and the matching
  pitfall entry
- the "the NCAA Eligibility Center still requires a standardized test score for
  D1 and D2 certification" note
- the sliding-scale language in `description:` and `summary:`

Also line 44–45: the page says D3 athletes "does not need to register with the
NCAA Eligibility Center." NCAA.org: "All incoming Division III student-athletes
must register with the NCAA Eligibility Center" — domestic students create a
Profile Page, international students need an Athletics Certification account.
Rewrite the who-registers block around the three account types.

Anchor the rewritten requirements to 2026-27. Add rows to
`prototypes/research/guide-fact-log.md` (create it if Phase 3 hasn't run yet).

### 3. The NLI — Division II still uses it

`src/guide/verbal-commitment-vs-nli.md` lines 12, 86, 115; and
`src/guide/nil-and-revenue-sharing.md` line 55.

NCAA.org, `ncaa.org/student-athletes/scholarships-and-financial-aid/`:
"Division I eliminated the National Letter of Intent in 2024; Division II
schools may still use it."

Scope the elimination to Division I throughout. Fix the D2 section, which
currently describes a "similar Written Offer of Athletics Aid process."

Second problem on the same page, lines 97 and 102: it asserts the athlete
"commits to attending that institution" and that "the binding nature is
similar." The October 9, 2024 D1 Council action
(`ncaa.org/media-center-di-council-approves-changes-to-notification-of-transfer-windows-in-basketball-football/`)
states only that after a prospect signs a written offer, *other schools* are
prohibited from recruiting communications. Nothing in it binds the athlete to
enrol. Cut both assertions; state only what the NCAA states.

Also fix the `sources:` entry, which cites an NCAA.org release titled
"National Letter of Intent program ends, October 2024" — no release by that
title was locatable. Cite the Council action above.

### 4. NAIA women's lacrosse — described as not existing

`src/lacrosse/womens/guide/scholarships-after-house-settlement.md` line 136.

NAIA.org (`naia.org/sports/wlax/index`): "NAIA Women's Lacrosse, first
recognized as an official association sport in 2016…" with a national
championship, most recently won back-to-back by Benedictine (Kan.).

Cut the paragraph entirely and rewrite from naia.org. Three separate failures
in it: the structural fact is backwards; the cited "National Women's Lacrosse
League (NWLL)" is a defunct professional league, not a governing body (Tier X);
and the WCLA is the non-varsity *club* organization, not an NAIA framework.
State the NAIA aid limit only if you can source it from the NAIA Handbook.

### 5. Wrestling "one class up" — not a rule

`src/wrestling/guide/understanding-wrestling-weight-classes.md` lines 37, 86;
`src/wrestling/guide/what-college-coaches-evaluate.md` lines 38, 64;
`src/wrestling/mens/guide/mens-college-wrestling-landscape.md` line 69.

All four attribute a one-class ceiling to the rules book. NCAA Men's Wrestling
Rules Book, Rule 3.7: "A competitor who weighs in for one weight class may be
shifted to **any higher weight class**, with the possible exception of
heavyweight, where any wrestler competing in the heavyweight class must weigh a
minimum of 183 pounds."

Restate as "any higher weight class." Note the descent-plan condition from the
weight-management packet (competing up requires following the weight-loss
descent plan to become eligible for the lower class again). Stop calling it a
named rule. Fix the `sources:` entry that describes "the one-class-up
competition rule."

### 6. Men's soccer — a quiet period that belongs to women's ice hockey

`src/soccer/mens/index.md` line 88; `src/soccer/mens/guide/recruiting-timeline.md`
line 90. Both publish "a quiet period December 23–25, 2026."

The 2026-27 NCAA Recruiting Calendar — Other Division I Sports (updated
2026-08-04) gives men's soccer exactly two entries, both dead periods: Nov 9–12
and Dec 11–14. Men's soccer has **no quiet period**. The only Dec 23–25 in the
document is under women's ice hockey.

Delete the line from both pages. Change "three exceptions" to "two" on
`index.md`. Remove "quiet periods" from that page's `sources:` entry for the
calendar. Correct soccer-fact-log §G, which claims the date came from the
"MEN'S SOCCER (CONT.)" block — it did not, which makes that row a fabricated
verification under §2.

### 7. Volleyball roster change — direction inverted

`src/volleyball/guide/juco-pathway.md` lines 184, 226, 237 say the settlement
"increased the NCAA D-I women's volleyball roster cap from the previous
12-scholarship head count structure to an 18-player equivalency roster."

Division I had **no roster cap** before the settlement. The 12 was a financial
aid limit, not a roster limit — the NCAA House Q&A treats it purely as aid
("more than 12 women's volleyball student-athletes… provided the value does not
exceed the value of 12 full financial aid awards"), and the June 23, 2025
release describes roster limits as newly created. Rosters shrank against a new
ceiling.

Rewrite all three. Delete the inference that depends on the error: "may
increase transfer opportunities as D-I programs have more roster spots to
fill." Line 99 of the same page already states it correctly — match that.
This is open item #6 in the volleyball fact log; close the row.

### 8. Lacrosse — the five-tier analysis is attributed to the wrong coach

`src/lacrosse/guide/house-settlement-and-lacrosse.md` line 108;
`src/lacrosse/mens/guide/scholarships-after-house-settlement.md` lines 42, 85, 190;
`src/lacrosse/mens/guide/recruiting-timeline.md` line 149;
`src/lacrosse/womens/guide/scholarships-after-house-settlement.md` lines 46, 174.

USA Lacrosse magazine attributes the five-category breakdown to **Bill
Tierney** — former Denver head coach and IMLCA president — not John Tillman.
Tillman's only quotes in that coverage are the "scuttlebutt… I just don't see
that happening" line about 48 scholarships and an unrelated remark about
institutional tiering.

Reattribute to Tierney with his stated title on the three men's pages. **Cut
both women's-page instances entirely** — they take a men's-side quote about
scholarship counts and repurpose it into a women's-page prediction that
programs may eliminate the sport, which is §4.2 as well as §4.6.

While in these files, two more items from the same audit:
- The 362-player figure is USA Lacrosse's **forecast** ("will lose"), published
  the day the settlement was approved. Restore the source's tense — "USA
  Lacrosse estimated in June 2025 that roughly 362 players would lose D1
  opportunities" — rather than stating it as a completed outcome.
- "North Carolina aims to sustain 38 scholarships" and the appended sentence
  "That's a positive change." inside the Jenny Levy quote were not found in the
  cited articles. Cut both.

### 9. Corrections that were applied to sport pages and left on the guide pages

These are the §9.2 blast-radius failures. The site currently corrects itself on
one page and repeats the error on another.

**a. Women's lacrosse official visits.** `src/guide/ncaa-recruiting-rules.md:138`
and `src/guide/official-vs-unofficial-visits.md:50` say they "begin January 1 of
junior year." That is the **Division III** rule (D3 Bylaw 13.6.1.1.1). D1 Bylaw
13.6.2.1.2 sets it at September 1, 12 p.m. Eastern. Three lacrosse pages were
already corrected and one carries a visible correction notice saying so. Fix
both guide pages and add them to the lacrosse-fact-log §A `Articles` column.

**b. The D2 June 15 gate.** `src/guide/division-differences.md:72` and
`src/guide/ncaa-recruiting-rules.md:165` say D2 has "no 'June 15' or junior-year
restriction." The 2026-27 D2 Coaches Off-Campus Recruiting Guide (updated
2026-07-30) permits materials and calls at any time but gates **in-person
off-campus contact** at "after June 15, immediately preceding a prospective
student-athlete's junior year." `soccer/womens/guide/recruiting-timeline.md:164`
already states this correctly with four bylaw cites — match it.

**c. D2 dead periods.** Five pages say the 2026-27 D2 calendar is a contact
period all year except one signing-date dead period Nov 9–11:
`guide/ncaa-recruiting-rules.md:168`, `guide/contacting-coaches.md:82`,
`guide/division-differences.md:72`, `wrestling/guide/recruiting-timeline.md:105`,
`volleyball/mens/guide/recruiting-timeline.md:61`. The all-sports calendar
carries at least six: Nov 9–11, Nov 30–Dec 2, Dec 22–Jan 1 2027, Feb 1–3,
Feb 15–17, May 29–31. The December window bars campus visits over winter break.

**Do not transcribe these from a text extraction** — the PDF is a two-column
grid (DII FOOTBALL / ALL OTHER SPORTS) and three independent extractions
disagreed on the column split. Open it visually, or describe the calendar
structurally and link it.

### 10. Completed events described in the future tense

**NJCAA men's volleyball.** `volleyball/mens/guide/national-collegiate-championship.md:138`,
`volleyball/mens/index.md:69`, `volleyball/mens/guide/recruiting-timeline.md:144`
all say the championship "becomes" official in 2026 and describe the bracket in
the future. It was played in April 2026 at College of DuPage; Finger Lakes CC
won the inaugural title over Ocean County 3-1 after upsetting the top seed.
Past-tense it and report the result. Verify the final date and score yourself —
the AVCA event listing (Apr 23–25) and the reported final (Apr 27) disagree,
and njcaa.org returns an empty body to fetchers (use the
`njcaa2025.prestosports.com` mirror).

**The D2 championship question.** The same page line 106 says "the status of any
such proposal in the coming years is not yet clear from public NCAA
documentation." The NCAA release of **2026-08-06** — the same release
`volleyball/mens/index.md:64` already quotes for its "36 schools" figure —
states the D2 board sponsored legislation for the 2027 Convention to establish
a Division II Men's Volleyball Championship, with a first championship
projected for spring 2029. §4.2 expressly permits reporting what is scheduled
and sourced. Rewrite lines 98 and 106. The volleyball fact log praises the
current wording as "§5.6 done right — keep this wording"; that instruction is
now stale, so update the row too.

**Men's lacrosse champion.** `lacrosse/mens/guide/recruiting-timeline.md:137`
opens "The 2025-26 season has been particularly significant" and then describes
Cornell's May 2025 win, which concluded **2024-25**. Relabel it, and add the
2026 result — Princeton reportedly won, its first since 2001. **Verify the
2026 champion, opponent, score and date against NCAA.com before publishing it**;
I could not open the release.

### 11. Arithmetic that fails against the pages' own tables

**a.** `src/guide/house-settlement.md:165`: "Approximately 319 of the roughly
364 Division I schools opted in — about 82%." 319 ÷ 364 = 87.6%. The sentence
cannot be internally true. Worse: `governance-counts-fact-log.md` §A establishes
**361** active D1 institutions from the NCAA membership table and that figure is
published on `guide/division-differences.md`, so the site gives two D1 counts.
No fact-log row exists for 319, 364 or 82%, and the only source carrying
"319 (82%)" is a sports-business blog, which §1 bars from supporting a count.

It is also stale: the NCAA's May 2026 Q&A confirms opt-in is an **annual**
election, and thirteen FCS schools that opted out for 2025-26 opted in for
2026-27. **Cut the numbers.** State structurally that opt-in is voluntary and
re-elected annually, and route families to ask the program.

Same line: "All Power Five conference schools opted in" and the service-academy
opt-out with its stated cause are both unsourced. The correct framing is the
five **defendant** conferences (ACC, Big Ten, Big 12, Pac-12, SEC) plus Notre
Dame, which are *bound as defendants*, not opted in. Six pages across the site
name only four conferences; fix them together.

**b.** `src/soccer/insights/mens-roster-size.md:132`: "the difference between
the smallest and largest D1 men's soccer rosters is 29 players." The page's own
table gives D1 min 15, max 42 — a range of **27**. The NAIA figure in the same
sentence (82 − 14 = 68) is correct.

**c.** `src/methodology/data-and-analysis.md:118–138`: three coverage cells do
not reconcile with the exclusion list beneath them. D1 men's should be
211/213 = **99.1%** (published 98.1%); D1 women's 347/349 = **99.4%**
(published 99.1%); D3 women's 416/419 = **99.3%** (published 99.5%). The other
cells and the 2,235/2,246 = 99.5% total are correct. `roster-data-fact-log.md`
§E independently states 213 D1 men's programs, which is what makes 98.1%
impossible.

**d.** Same file, lines 50 and 110: "the 2024 conference realignment (Pac-12
dissolution, ACC expansion, Big 12 expansion)." The Pac-12 did not dissolve —
Oregon State and Washington State remained members continuously and the
conference relaunched with seven new full members on 2026-07-01. No fact-log
row supports any of the three realignment claims. Cut the parenthetical or
replace with the sourced fact (ten members departed effective August 2024).

**e.** `src/guide/nil-and-revenue-sharing.md:117`: "According to NCAA data
analyzed by McCarter & English, approximately 34% of D1 men's soccer players
are international." The McCarter & English article says "over 30% in ice hockey
and soccer" — 34% does not appear in it, and it says "soccer," not "men's
soccer." The 34% traces to NCAA research (September 2023) describing
**first-year** student-athletes from **2022** data, not all rostered players.
RosterWise's own dataset computes **33.8%** across 213 D1 men's programs for
2025-26. Use the first-party figure with its season anchor, and drop the law
firm.

### 12. Deploy fixes

**a.** `https://rosterwise.app/volleyball/guide/junior-college/` is live and
serves the JUCO volleyball page byte-for-byte, with **no source file and no
build output** — `src/volleyball/guide/` has only `juco-pathway.md`. This is a
rename whose old Cloudflare Pages output was never purged, and the live
volleyball hub links to both URLs. Purge the stale output and add a 301 to
`/volleyball/guide/juco-pathway/`.

**b.** `src/soccer/methodology/coach-tenure.md` is `date: 2026-08-26` in source
and says "long-tenured coaches (8+ years), the same threshold we use across the
site," but the live page shows April 26, 2026 and says "5+ years" — so the live
page contradicts itself. Redeploy. (I re-checked three other pages flagged as
stale and all three are current; this is one page, not a partial deploy.)

**c.** Broken hub links. `src/lacrosse/mens/index.md` points at
`/lacrosse/mens/guide/scholarships/`, `/canadian-recruiting/` and
`/what-coaches-look-for/`; the real slugs are `scholarships-after-house-settlement`,
`international-recruiting` and `coaches-look-for-by-position`. Three live guides
are missing from the hub, and the body says the guides "are in development" over
seven published pages. Same class of problem on `lacrosse/womens/index.md`,
`soccer/mens/index.md` and `soccer/womens/index.md` — 15 dead targets across 8
pages. `faq/index.njk` also links to `/takedown/`, which does not exist. Fix
them all and run the §7.5 link check.

### Before you commit

Run the full §7 gate including the new open-items leak check and the
self-consistency arithmetic check. Report to me per §7.6, and list explicitly:
what you corrected, what you cut, which fact-log rows changed, and any source
you could not open.

---

## PHASE 2 — The human PDF read

**This one is mine, not Claude's — but Claude can drive it.** Roughly 40
unverified claims all trace to four documents no automated fetch could open.
Download these locally, then paste the prompt below.

Documents to download to `~/Downloads/ncaa-2026-27/`:
1. 2026-27 NCAA Division I Manual — Bylaw 17.2 (Roster Limitations) and
   Article 13 (Recruiting), from LSDBi
2. 2026-27 NCAA Division II Manual — Article 13 and Bylaw 15.4
3. 2026-27 NCAA Division III Manual — Article 13 and Bylaw 15.01.3
4. 2026-27 NCAA Division II Recruiting Calendar (All Sports) — the two-column
   grid, opened visually
5. NAIA 2026-27 Official Handbook — Section XIII (financial aid limits)

---

Load the `rosterwise-content-standards` skill (v2.0.0).

I've downloaded the current NCAA and NAIA manuals to `~/Downloads/ncaa-2026-27/`.
Read them locally and close out the claims that no web fetch could verify.
Branch `fix/audit-2026-08-28-p1-bylaws`.

For each of the following, find the governing provision, quote it, log a
fact-log row citing document + article/page + date read, and then grep `src/`
for every page carrying the claim and confirm the copy matches:

1. **Bylaw 17.2 roster limits** — the full per-sport table. The site publishes
   soccer 28, volleyball 18, men's lacrosse 48, women's lacrosse 38, wrestling
   30, plus basketball 15/15, baseball 34, softball 25 on
   `guide/house-settlement.md`. None has ever been verified against the bylaw.
   Note also the scope condition: the limit applies to defendant-conference
   institutions and opt-in institutions only.
   **Several pages currently cite the House Q&A for these numbers. Multiple
   independent reads confirmed the Q&A contains no per-sport roster table —
   only football's 105. Re-point every citation to Bylaw 17.2 and log that
   negative finding.**

2. **Article 13 contact architecture** — Bylaws 13.1.1.1, 13.1.3.1, 13.4.1,
   13.6.2.1.1, 13.7.1.1, 13.12.1.5.1, and the lacrosse exceptions 13.1.1.1.7
   (women's, Sept 1 12pm ET) and 13.1.1.1.8 (men's, Wednesday after Labor Day,
   effective 2026-08-01). Confirm the June 15 / August 1 split and the
   athletics-involved unofficial-visit gate.

3. **Bylaw 13.6.2.2 — official visit limits.** This is currently published four
   different ways across the site: "five total across all D1 schools" on two
   guide pages and two lacrosse pages, and "unlimited, one per school" on the
   wrestling timeline. The lacrosse fact log marks it "the governing provision
   was not located" and it is published as a hard number anyway. The
   legislative record found in the audit (D1 Proposal 2022-32, effective
   2023-07-01) reads: "a maximum of five expense-paid visits to Division I
   institutions before October 15 following completion of high school and five
   beginning October 15 following completion of high school." **If that stands,
   all four framings on the site are wrong.** Settle it from the Manual and fix
   every carrier in one commit.

4. **Pre-House equivalencies** — men's soccer 9.9, women's soccer 14.0, D2
   soccer 9.0/9.9, men's volleyball 4.5, D2 volleyball 8.0, men's lacrosse
   12.6, women's lacrosse 12, D2 lacrosse 10.8, D2 wrestling 9.0. The D2
   wrestling 9.0 is an explicit open item published as a hard number on two
   pages — §2.3 build failure.

5. **D3 provisions** — no recruiting calendar; off-campus contact after
   sophomore year; official visits from January 1 of junior year; Bylaw
   15.01.3 (no athletically-related aid).

6. **NAIA Section XIII** — the per-sport equivalency limits (soccer 12,
   volleyball 8, wrestling), and the academic exemptions (3.60 GPA / top 10%
   not counting against the limit; 3.30–3.59 / top 11–25% counting half). The
   soccer scholarships page states 12 as a flat ceiling without the exemptions.

7. **The 2026-27 D2 Recruiting Calendar** — open the two-column PDF visually
   and transcribe the ALL OTHER SPORTS column exactly. Three text extractions
   disagreed on the column split. This resolves Phase 1 item 9c.

Report which claims are now verified, which changed, and which you still could
not find. Anything you cannot find gets phrased structurally per §5.1, not
shipped on the old number.

---

## PHASE 3 — Close the structural hole

---

Load the `rosterwise-content-standards` skill (v2.0.0). Branch
`fix/audit-2026-08-28-p2-traceability`.

The audit found that 192 of 576 distinct numbers in published copy trace to no
fact-log row, and that 14 of the 23 pages under `src/guide/` appear in no
`Articles` column of any fact log. Four of the confirmed P0 errors were
corrections that landed on sport pages and were never traced to the guide
pages, because no sport log had a reason to name them.

1. **Build `prototypes/research/guide-fact-log.md`** per §2.1 and §2.2. Back-fill
   a row for every hard claim on all 23 pages under `src/guide/`, plus
   `src/methodology/data-and-analysis.md`, `src/roster-intelligence/index.md`,
   both blog posts, `src/faq/index.njk` and `src/app/index.njk`. Where a claim
   already has a row in a sport log, add the guide page to that row's `Articles`
   column instead of duplicating it.

2. **Fix the incomplete `Articles` columns** in the existing logs. The audit
   identified nine rows with omitted carriers — the roster caps, the wrestling
   30, the lacrosse 48/38, the NJCAA membership figure, the June 30 opt-in, and
   the January-1 lacrosse visit row.

3. **Add `sources:` blocks** to the six pages that carry hard claims without
   one: `wrestling/index.md`, `wrestling/mens/index.md`, `wrestling/womens/index.md`,
   both blog posts, and `faq/index.njk`. The 13 pure navigation hubs do not need
   one — confirm each carries no facts before leaving it alone.

4. **Audit the existing `sources:` blocks** against §7.3 as amended: entries must
   name the document and its date, and must support a claim the page actually
   makes. About ten pages have blocks that are bare domain names, and several
   cite documents the copy never uses.

5. **Reconcile the `date:` stamps.** Roughly two dozen pages carry
   `date: 2026-08-26` with a footer reading "reflects the landscape as of April
   2026" — §8 as amended requires these to agree. Separately,
   `guide/ncaa-recruiting-rules.md` is stamped 2026-04-26 while citing the
   2026-27 Manuals and describing an August 2026 rule change; the stamp
   understates by four months. And 51 pages have no date-anchor footer at all,
   including all seven `soccer/insights/` pages, all four `soccer/methodology/`
   pages, and `methodology/data-and-analysis.md`.

6. **Re-anchor for 2026-27.** Every footer reading "2025-26," every `sources:`
   entry citing the 2025-26 Manuals, and — importantly — the House Q&A
   citations. Three money pages cite the Phase Seven Q&A of 2026-02-11 and
   assert it is the most recent; a **Phase Eight Q&A dated 2026-05-29** is
   linked from the NCAA's Legislation and Policy index. The substantive money
   claims survive it (the $20.5M cap and the absence of a 2026-27 figure both
   hold), so this is a citation fix, not a content fix — but the fact-log row
   asserting nothing newer exists is false and must be corrected.

7. **Close the wrestling gap.** `wrestling/guide/recruiting-timeline.md` carries
   a cohort-gated set of D1 men's wrestling recruiting dates "adopted in April
   2026," gated to prospects enrolling on or after 2028-08-01, with April 1 /
   June 15 / August 15 dates, plus 2026-27 shutdown windows. **No fact-log row
   exists for any of it and no NCAA governance document supporting it was
   found.** This is the largest block of unsourced rule content on the site.
   Either produce the NCAA Council or Board action, or cut the section. The
   wrestling fact log is stamped 2026-07-07 and predates the content it is
   supposed to cover.

Report per §7.6 with counts: rows added, `Articles` columns corrected, pages
re-anchored, claims cut for want of a source.

---

## PHASE 4 — The §4 sweep

---

Load the `rosterwise-content-standards` skill (v2.0.0). Branch
`fix/audit-2026-08-28-p3-banned-content`.

The audit flagged roughly 180 §4 violations. Work **by category across the whole
site**, not page by page — the same shape recurs on a dozen pages and fixing it
once per category is faster and more consistent.

Run the amended §7.2 grep block first and triage every hit.

1. **§4.1 evaluation of third parties.** Named programs characterized as "top"
   or "elite" (men's volleyball, lacrosse, D3 soccer, NAIA "frequently
   underrated"); club platforms "roughly ordered by visibility to D1 college
   coaches" on pages that elsewhere explicitly refuse to rank them; organizers'
   own promotional superlatives relayed as fact ("the only event in the country
   that all NCAA coaches can attend" — which also misquotes IMLCA by dropping
   "that weekend"). `guide/recruiting-red-flags.md` needs the heaviest work:
   nearly every "why it's a red flag" block is a verdict about a coach's
   character. Convert each to an observation plus the question to ask — the
   "what to do" blocks already do this well.

2. **§3 dangerous middle.** Commitment-timing windows presented as measured
   ("Most D1 commitments: sophomore through junior year") when RosterWise holds
   rosters, not commitment dates. Coach-email volumes stated three mutually
   inconsistent ways on one page ("dozens per week," "hundreds per month,"
   "hundreds"). Position-depth bands the logs record as never computed. Note
   that spelled-out quantities ("two to three goalies") evade the grep — the
   amended §7.2 has a second pattern for them.

3. **§4.3 fabricated specificity.** "Most coaches report that they make an
   initial assessment within the first 30-60 seconds"; "Most get less than two
   minutes of attention," which survives in a page *summary* four lines above
   the body's own disclaimer that no such data exists. Also the front-matter
   promises: two lacrosse pages advertise "direct quotes from named college
   coaches" and name none, left behind when the 2aDays citations were removed.
   One page still has a dangling "Coach Gorrow" reference with no antecedent.

4. **§4.5 advice.** `stacking-financial-aid.md` answering "Should I file the
   FAFSA?" with "Yes… the downside of filing is zero," and its grade-by-grade
   action prescriptions. `what-college-coaches-evaluate.md` telling families
   which weight to "build around," on a page with no health framing and no
   medical deferral. `international-student-athletes.md:93` stating that NIL
   participation is prohibited for F-1 holders under federal regulations, citing
   no regulation — the strongest violation in the set, on the topic where being
   wrong costs a student their status. Rewrite it structurally per §4.5.

5. **§4.4 outcome implication.** "Stacks the odds in your favor" on two wrestling
   methodology pages; "significantly more effective than either alone" on the
   questionnaires page; "every program" coverage claims on four pages against a
   methodology page publishing 99.5% coverage and an exclusion list.

6. **§5.6 refusals that don't refuse.** `lacrosse/mens/guide/international-recruiting.md`
   says "We are not going to print it as a fact" and prints "roughly 180" in the
   same sentence. Either the structural point with no figure, or nothing.

7. **Named events and camps (§8).** Every camp, showcase and tournament on the
   lacrosse and volleyball pages needs its date, size, location and organizer
   re-verified for 2026-27 — several describe July 2026 events in the present
   tense, and several attribute figures and quotes to organizer sites that do
   not carry them (the Lake Placid team count and founder, the NXT "512 coaches"
   figure, the Adrenaline "USA Lacrosse-sanctioned" claim, the NLF founding
   year).

8. **§6 voice.** "Elite" as a hype adjective across five page sets; mixed British
   spellings ("favourable," "analysed," "organisation") across the soccer set;
   fear framing ("you're invisible to the system").

Report per §7.6.
