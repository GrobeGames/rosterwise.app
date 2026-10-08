# Audit Remediation — Claude Code Kickoff Prompts

Five prompts, run one at a time, in this order. Each is self-contained and
paste-ready. Run them from `~/Code/rosterwise/website` unless noted.

**Do not run two of these against the website repo concurrently.** Each opens
its own branch off `main`.

Source of truth for all five: `reports/content-audit-2026-08-25.md` in the
website repo, and the `rosterwise-content-standards` skill.

---

## Prompt 1 — Critical: the Wikipedia contradiction and the competitor mention

> Load the `rosterwise-content-standards` skill and read
> `reports/content-audit-2026-08-25.md` in this repo. You are fixing findings
> **C1 and C2 only**. Do not touch any other finding.
>
> Branch: `fix/audit-c1-c2-tier-x-sources`
>
> **C1.** `src/methodology/data-and-analysis.md:54` publicly states that
> RosterWise does not use Wikipedia for any factual claim on the site.
> Wikipedia is nevertheless cited on five pages — the report lists every
> file and line, including three inside `sources:` front-matter blocks.
>
> For each Wikipedia-sourced claim, exactly one of these outcomes:
> - **Re-source it** to a Tier 1 primary — World Lacrosse, Ontario Lacrosse
>   Association, Lacrosse Canada, CUFLA's own governing body, the
>   Haudenosaunee Nationals' own published materials, NCAA records — and
>   update both the prose and the `sources:` entry to the linked form.
> - **Cut it.**
>
> **Deleting the word "Wikipedia" while leaving the claim standing is not an
> acceptable outcome.** That hides the problem instead of fixing it, and it
> is the specific failure I want you to avoid. If you cannot reach a primary,
> cut the claim and tell me.
>
> One claim I have already judged: the OJLL "most competitive Junior A men's
> box lacrosse league in the world" line (club-pathways.md:248,
> international-recruiting.md:106) is an **evaluative** claim from a tertiary
> source. Cut it outright — do not go looking for a primary that endorses a
> superlative. The factual parts around it (OJLL is sanctioned by the Ontario
> Lacrosse Association, competes for the Minto Cup) can stay if sourced.
>
> **C2.** `src/lacrosse/mens/guide/club-pathways.md:157` names SportsRecruits,
> a competitor recruiting service. §0.4 is absolute. Apply the §5.4
> generic-naming pattern: describe it as the IMLCA's official recruiting
> platform and drop the vendor name entirely.
>
> **Before you commit:**
> - Run the §7.2 Tier 1 greps. The competitor grep and the Wikipedia grep must
>   both return nothing except the policy statement at
>   `methodology/data-and-analysis.md:54` itself.
> - `npm run build` exits 0.
> - Give me the §7.6 sign-off, including an explicit list of every claim you
>   cut and why.
>
> Show me the diff before committing. Do not push.

---

## Prompt 2 — Stale money figures, plus the date-anchor footer site-wide

> Load the `rosterwise-content-standards` skill and read
> `reports/content-audit-2026-08-25.md`. You are fixing **M1 and M2**, and
> then doing one mechanical rollout. Nothing else.
>
> Branch: `fix/audit-m1-m2-date-anchors`
>
> **Part A — research first, before editing anything.**
>
> The site states the House settlement revenue-share cap as $20.5 million and
> presents it as the current figure. That was the **2025-26** cap. It is now
> August 2026 and the settlement escalates the cap roughly 4% per year.
> Commit `ed4bcc1` already refreshed the recruiting calendars to 2026-27, so
> the site currently mixes 2026-27 calendars with 2025-26 money.
>
> Find the **2026-27 cap** from a Tier 1 source — the NCAA's own House
> implementation materials or the settlement documents. If no Tier 1 source
> publishes a specific 2026-27 figure, do not compute one from the escalator
> yourself and do not use a news estimate as if it were the rule. Report back
> and stop; we will decide whether to restate the section structurally
> instead.
>
> Affected locations (verify against the report, do not trust this list alone):
> `src/guide/house-settlement.md:61`, `src/guide/nil-and-revenue-sharing.md:62`
> and `:68`, `src/lacrosse/guide/house-settlement-and-lacrosse.md:63` and `:67`.
>
> **M2:** `src/guide/transfer-portal.md:57` says "As of the 2025-26 academic
> year" and reads as current. Re-verify the framework against NCAA.org and
> re-anchor to 2026-27, or state plainly which season it reflects.
>
> **Part B — the date-anchor footer rollout.**
>
> Every wrestling page carries an italic footer in this shape:
>
> > *This article reflects the 2025-26 season. Verify current standards in the
> > NCAA Wrestling Weight Management Program packets (men's and women's) for
> > the relevant year.*
>
> Nine wrestling pages do this. No soccer, volleyball, or lacrosse page does.
> Add an equivalent footer to every `content.njk` page in
> `src/{soccer,volleyball,lacrosse}/` and `src/guide/` that states a rule,
> limit, count, calendar date, or championship structure.
>
> - Name the actual season the page reflects — do not write 2026-27 on a page
>   whose facts you have not re-verified. An honest "reflects the 2025-26
>   season" is the point of the exercise.
> - Name the specific governing bodies relevant to that page, not a generic
>   list.
> - Skip pages that make no time-sensitive claims (pure process advice,
>   methodology explainers with no figures).
>
> **Do not bump any page's `date:` front matter** unless you actually
> re-verified that page's content. Cosmetic freshness stamps are a trust
> violation under §8.
>
> **Before you commit:** `npm run build` exits 0; §7.6 sign-off; tell me
> exactly which pages got a footer and which you skipped and why.
>
> Show me the diff before committing. Do not push.

---

## Prompt 3 — Program counts and the revenue-share split

> Load the `rosterwise-content-standards` skill and read
> `reports/content-audit-2026-08-25.md`. You are fixing **H2 and H3**. Nothing
> else.
>
> Branch: `fix/audit-h2-h3-counts-and-revshare`
>
> This is a research task first and an editing task second. Do the research
> completely before you change a single file.
>
> **H2 — program and membership counts.** These appear as unsourced
> approximations and are all published by governing bodies:
> - `src/guide/division-differences.md:54, 64, 76, 86` — "Approximately 365 /
>   300 / 450 / 250 active member institutions" for D1/D2/D3/NAIA
> - `src/lacrosse/mens/guide/recruiting-timeline.md:119, 121, 123` —
>   "approximately 458 programs total"; "Approximately 75-80";
>   "Approximately 240+"
> - `src/lacrosse/mens/guide/scholarships-after-house-settlement.md:145` —
>   "approximately 240+ NCAA D3 programs"
> - `src/soccer/guide/d3-recruiting-reality.md:41` — "more than 400
>   institutions"
>
> Note the live contradiction: division-differences says ~450 D3 institutions
> while d3-recruiting-reality says "more than 400." At least one is wrong.
>
> Get current counts from NCAA.org and NAIA.org. State each figure exactly,
> with a season anchor and a linked source. Where a governing body publishes a
> membership count but not a sport-sponsorship count (or vice versa), keep
> those distinct — "NCAA D3 member institutions" and "NCAA D3 programs
> sponsoring men's lacrosse" are different numbers and the current copy blurs
> them.
>
> **H3 — the revenue-share allocation split.**
> `src/guide/nil-and-revenue-sharing.md:76-79` presents a 75 / 15 / 5 / 5
> split (football / men's basketball / women's basketball / everything else)
> as if it were structure. The NCAA does not mandate an allocation. Repeated
> at `src/lacrosse/guide/house-settlement-and-lacrosse.md:151` as "typically
> around 75%."
>
> This is the number a family will use to set money expectations, so it gets
> the strictest treatment. Two acceptable outcomes:
> - **Attribute it precisely** — name the specific source, the date, and the
>   population it describes ("among the N schools that have publicly disclosed
>   allocation plans, per {source}…"), and make clear in the prose that it
>   describes school choices, not a rule.
> - **Replace it with the sourced structure** — the cap is institution-wide,
>   allocation is at each school's discretion — and route families to ask the
>   program directly.
>
> Default to the second if the first requires a source you would not put in a
> `sources:` block.
>
> **Every figure you land on gets logged.** Create
> `prototypes/research/governance-counts-fact-log.md` using
> `prototypes/research/wrestling-fact-log.md` as the format model, with the
> `Articles` column listing every page that uses each figure. Commit it in the
> same commit as the content changes.
>
> **Before you commit:** `npm run build` exits 0; §7.6 sign-off; list every
> figure you could not source and what you did instead.
>
> Show me the diff before committing. Do not push.

---

## Prompt 4 — Compute the roster figures from our own data

> Read `reports/content-audit-2026-08-25.md` in
> `~/Code/rosterwise/website` (findings **M3 and M4**), and load the
> `rosterwise-content-standards` skill.
>
> **Start in the pipeline repo (`~/Code/rosterwise/pipeline`), not the
> website repo.** Orient yourself first: tell me what roster data is
> available, at what granularity, and for which sports and seasons, before
> you compute anything.
>
> The website currently states roster and position heuristics as unsourced
> generalizations — "most programs carry three to four goalkeepers,"
> "midfielders often 8-10," "typically 3-4 middle blockers," "rosters
> typically around 50+ players," "roughly 20-25% international for men's D1
> soccer." The report lists all of them with file:line.
>
> We own the data that answers every one of these. The job is to replace
> guesses with computed, attributable figures.
>
> **Phase 1 — compute, in the pipeline repo.** For each claim in M3 and M4,
> produce the real figure from our roster data. Give me medians and ranges,
> not just averages, and state the season and the population (which
> divisions, which sports, how many programs). Write the results to a CSV or
> markdown table for review. **Stop and show me before touching the website.**
>
> **Phase 2 — only after I approve the numbers.** Branch
> `fix/audit-m3-m4-computed-roster-figures` in the website repo. Replace each
> unsourced generalization with the computed figure, attributed in the prose
> the way `src/soccer/insights/` already does it — naming RosterWise's
> analysis, the season, and the number of programs. Log every figure in a new
> `prototypes/research/roster-data-fact-log.md`.
>
> Two constraints:
> - **If the data does not support a claim, cut the claim.** Do not reshape a
>   computed figure to be closer to what the page currently says.
> - **If a computed figure contradicts what we published**, tell me
>   explicitly rather than quietly correcting it — I want to know what we had
>   wrong.
>
> `npm run build` exits 0 before commit. §7.6 sign-off. Show me the diff. Do
> not push.

---

## Prompt 5 — Retro-build the three fact logs

**Run this last.** Prompts 1–4 will already have produced verified rows you
can seed from; doing this first means researching the same facts twice.

> Load the `rosterwise-content-standards` skill (§2 especially) and read
> `reports/content-audit-2026-08-25.md`, finding **H1**.
>
> Branch: `docs/audit-h1-fact-logs`
>
> `prototypes/research/` currently contains one file:
> `wrestling-fact-log.md`. Soccer, volleyball, and lacrosse — 129 of 156
> pages — have no audit trail. This is the structural gap the rest of the
> audit findings came out of.
>
> Build three logs: `soccer-fact-log.md`, `volleyball-fact-log.md`,
> `lacrosse-fact-log.md`, in `prototypes/research/`, using
> `wrestling-fact-log.md` as the exact format model — header block, lettered
> topic sections, four-column tables (Claim / Primary source / Verified /
> Articles), and an "Open items to re-check before/at publish" section at the
> end.
>
> **Method — one sport at a time, do not interleave:**
> 1. Extract every hard claim from that sport's pages: numbers, dates, rules,
>    structural assertions, named entities tied to facts. §3 defines what
>    counts.
> 2. Group into logical topic sections.
> 3. **One row per claim, not per page.** The `Articles` column lists every
>    page slug using it. That column is the whole point — it is what turns
>    the next rule change into a single targeted edit.
> 4. Seed from work already done: fact logs and verified figures produced by
>    the earlier remediation branches, and the existing `sources:` blocks.
> 5. Verify each claim against a Tier 1 source and record the date **you**
>    read it. Do not backfill a verification date from a page's `date:` field
>    or from a source's publication date.
>
> **Expect to find more problems.** A claim you cannot source is a finding,
> not a blocker. Record it as a pending row per §2.2, add it to Open items,
> and keep going — then give me the full list at the end. That list is the
> most valuable output of this task; do not smooth it over.
>
> **Do not edit any page under `src/` in this branch.** This is a
> documentation branch. Fixes go in follow-up branches so the audit trail and
> the corrections stay separately reviewable.
>
> Deliver: three fact logs, plus a summary telling me how many claims each
> sport carries, how many you verified, how many are pending, and which pages
> carry the most unsourced material.
>
> Show me the files before committing. Do not push.

---

## Notes

- **Order matters for 1, 2, 3, 5.** Prompt 4 is independent and can slot
  anywhere after Prompt 1 — it works in a different repo and touches
  different pages.
- **Prompts 1 and 2 fix things that are wrong on the live site right now.**
  Both should land before any new recruiting content ships.
- Every prompt ends with "show me the diff, do not push" — pushing to `main`
  deploys to production via Cloudflare with no staging gate.
- If a session hits a claim it cannot source, the correct behavior is §10:
  say so and stop. Cutting is always an acceptable outcome; guessing never is.
