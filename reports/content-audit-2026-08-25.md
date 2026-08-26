# rosterwise.app — Content Accuracy Audit

**Date:** 2026-08-25
**Scope:** all 156 pages under `src/` (129 `content.njk`, 25 `hub.njk`, 2 blog, 2 product)
**Standard applied:** `rosterwise-content-standards` §7 pre-publish audit gate
**Status:** findings only — no files changed

---

## Summary

| Severity | Count | Meaning |
| --- | --- | --- |
| Critical | 2 | Published content contradicts the site's own stated policy, or names a banned source |
| High | 3 | Hard numbers in family-facing copy with no traceable source |
| Medium | 4 | Stale-as-current figures, unattributed heuristics |
| Low | 4 | Prediction, evaluative language, inconsistent attribution |
| Infrastructure | 1 | Consistency, not accuracy |
| Deferred | 1 | Could not run in this session |

**Clean:** fabricated-authority grep, affirmative-guarantee grep (all hits negated/legitimate), sources-block coverage (129/129), Tier X sources in `sources:` blocks (none), app price consistency (151/151 at $39.99), stale `cta.button_url` on sport pages (none).

**The headline:** the site's accuracy is broadly strong. The problems cluster in **lacrosse** and in **sport-agnostic `/guide/` pages built before the process tightened**. Wrestling — the most recent build — is exemplary and is the model for everything else.

---

## CRITICAL

### C1. The site publicly promises not to use Wikipedia, then cites it on five pages

`src/methodology/data-and-analysis.md:54` states:

> RosterWise does not use crowd-sourced data, Wikipedia, or unverified aggregators for any factual claims published on this site.

Wikipedia is cited as a source on:

| File | Line | Where |
| --- | --- | --- |
| `lacrosse/mens/guide/club-pathways.md` | 42 | inside the `sources:` block |
| `lacrosse/mens/guide/club-pathways.md` | 248 | body prose |
| `lacrosse/mens/guide/international-recruiting.md` | 106, 143, 147, 199 | body prose |
| `lacrosse/womens/guide/coaches-look-for-by-position.md` | 50 | inside the `sources:` block |
| `lacrosse/womens/guide/coaches-look-for-by-position.md` | 70 | body prose |
| `volleyball/mens/guide/national-collegiate-championship.md` | 34 | inside the `sources:` block |

**Why this is the worst finding on the list:** it is not a subtle sourcing question. Any family who reads the methodology page and then reads a lacrosse guide finds RosterWise doing the exact thing it promised not to do. That is the specific failure mode the whole standard exists to prevent.

**Fix:** for each claim, either reach the primary (World Lacrosse, Ontario Lacrosse Association, Lacrosse Canada, CUFLA, Haudenosaunee Nationals' own materials, NCAA records) and re-cite it, or cut the claim. The OJLL "most competitive Junior A league in the world" quote is an *evaluative* claim from a Tier 3 source — that one should be cut outright, not re-sourced.

### C2. A competitor recruiting service is named in body prose

`src/lacrosse/mens/guide/club-pathways.md:157`

> IMLCARecruits is the IMLCA's official recruiting platform, powered by SportsRecruits since the 2023 partnership.

Factually true, but §0.4 is absolute: no competitor recruiting service is named, in any context. Apply the §5.4 generic-naming pattern — "the IMLCA's official recruiting platform" — and drop the vendor.

---

## HIGH

### H1. Three of four sports have no fact log

`prototypes/research/` contains exactly one file: `wrestling-fact-log.md`.

Soccer, volleyball, and lacrosse — **129 of 156 pages** — have no audit trail. Every number on those pages is currently unverifiable against a source of record, and when a rule changes there is no index telling you which pages carry the affected claim.

This is the structural finding. C1, H2, H3, and most of the Mediums below are downstream of it — they are what happens without a log.

**Fix:** retro-build three fact logs. This is the largest piece of work on the list and the one that pays for itself: after it exists, the next NCAA rule change is a grep and a targeted edit instead of a re-read of 129 pages.

### H2. Program counts stated as approximations with no source

| File | Line | Claim |
| --- | --- | --- |
| `guide/division-differences.md` | 54, 64, 76, 86 | "Approximately 365 / 300 / 450 / 250 active member institutions" (D1/D2/D3/NAIA) |
| `lacrosse/mens/guide/recruiting-timeline.md` | 119, 121, 123 | "approximately 458 programs total"; "Approximately 75-80"; "Approximately 240+" |
| `lacrosse/mens/guide/scholarships-after-house-settlement.md` | 145 | "approximately 240+ NCAA D3 programs" |
| `soccer/guide/d3-recruiting-reality.md` | 41 | "more than 400 institutions" |

Every one of these is published by NCAA.org / NAIA.org and is therefore fully verifiable — they are approximations only because nobody looked them up. §3's dangerous-middle rule applies: the hedge does not make an unsourced number safe.

Note the internal inconsistency this produces: `division-differences.md` says ~450 D3 institutions while `d3-recruiting-reality.md` says "more than 400."

**Fix:** pull current membership counts from NCAA.org and NAIA.org, log them, state them exactly with a season anchor.

### H3. Revenue-share allocation percentages presented as fact

`guide/nil-and-revenue-sharing.md:76-79`

> Football: approximately 75% of the revenue-share pool
> Men's basketball: approximately 15%
> Women's basketball: approximately 5%
> All other sports combined: approximately 5%

The NCAA does not publish a mandated allocation. These are widely-circulated *estimates* of what schools have chosen to do, presented here as if they were the structure. Repeated at `lacrosse/guide/house-settlement-and-lacrosse.md:151` as "typically around 75%."

**Why this one matters commercially:** this is the number a lacrosse or volleyball family will use to set expectations about money. Getting it wrong, or stating a market estimate as a rule, is exactly the kind of error that gets caught and shared.

**Fix:** either attribute it explicitly and precisely ("per {named source}, among schools that have publicly disclosed allocation plans…"), or replace it with the sourced structure — that the $20.5M cap is institution-wide and allocation is at each school's discretion — and tell families to ask the program directly.

---

## MEDIUM

### M1. House settlement money figures are a year stale and presented as current

The $20.5M cap is stated as the current-year figure at `guide/house-settlement.md:61`, `guide/nil-and-revenue-sharing.md:62` and `:68`, and `lacrosse/guide/house-settlement-and-lacrosse.md:63` and `:67`. That was the **2025-26** cap; the settlement escalates it roughly 4% per year and 2026-27 has begun.

Compounding this: commit `ed4bcc1` refreshed the **recruiting calendars** to 2026-27 across all four sports. So the site currently mixes 2026-27 calendars with 2025-26 money. A reader has no way to tell which pages are which.

**Fix:** verify the 2026-27 cap, update all four locations, and add the wrestling-style date-anchor footer (see "What's working" below) to every House/NIL page.

### M2. A stale season stated as current

`guide/transfer-portal.md:57` — "**As of the 2025-26 academic year**, the general framework includes:" — reads as current and is not. Re-verify against NCAA.org and re-anchor to 2026-27.

### M3. Roster and position heuristics with no attribution

| File | Line | Claim |
| --- | --- | --- |
| `soccer/mens/guide/goalkeeper-recruiting.md` | 42 | "most programs carry three to four goalkeepers… midfielders often 8-10, defenders 6-8" |
| `soccer/womens/guide/goalkeeper-recruiting.md` | 42 | same pattern |
| `blog/how-to-read-a-college-volleyball-roster.md` | 56, 57, 59 | "typically 3-4 on the roster" etc. |
| `lacrosse/mens/guide/recruiting-timeline.md` | 135 | rosters "typically around 50+ players" |
| `lacrosse/mens/guide/scholarships-after-house-settlement.md` | 72 | "typically 50+ players" |
| `lacrosse/womens/guide/scholarships-after-house-settlement.md` | 69 | "typically 30-35+ players" |
| `guide/late-bloomers.md` | 95 | "usually 4 to 8 athletes" graduate per class |
| `guide/house-settlement.md` | 137 | "might carry 30 players — meaning roughly 20 walk-ons" |

**These are the easiest fixes on the list, because you already own the data.** RosterWise has every roster in the country. Compute the real figure and attribute it: "across the D1 men's soccer rosters RosterWise analyzed for the 2025 season, programs carried a median of N goalkeepers." That converts a guess into a differentiator.

### M4. Soccer international percentages unattributed

`soccer/guide/recruiting-myths.md:88` — "the national average for men's D1 soccer is roughly 20-25% international."

Same fix as M3, and same upside: `soccer/insights/` already publishes exactly this kind of figure with attribution to the RosterWise dataset. This page just doesn't do it.

---

## LOW

### L1. Prediction

`lacrosse/guide/house-settlement-and-lacrosse.md:151` — "Lacrosse — like most non-revenue sports — **is likely to receive a much smaller share**." §4.2. Cut the clause; the sourced facts around it stand on their own.

### L2. Evaluative recommendation

`wrestling/womens/guide/freestyle-and-the-olympic-pathway.md:63` — "the offseason freestyle circuit … **is the best way** to build the style." §4.1. Rewrite structurally: NCAA women wrestle freestyle; the offseason circuit is where freestyle reps are available.

### L3. Inconsistent attribution of the same claim

"MLS Next is the top tier of boys' youth soccer" appears unsourced at `soccer/mens/guide/club-pathways.md:56` and `soccer/mens/index.md:68`, but is properly attributed ("Per the MLS NEXT official site") at `soccer/mens/guide/youth-soccer-pathways-evolution.md:89` and `:105`. Bring the first two up to the third's standard.

Related: `youth-soccer-pathways-evolution.md` cites "the MLS NEXT official site" repeatedly but no MLS NEXT URL appears anywhere in the repo's external links. The citation is unverifiable as written.

### L4. Unsourced superlative

`wrestling/womens/guide/ncaa-championship.md:41` — "It's the fastest-growing sport in college athletics." The *growth numbers* in that same answer are properly logged and sourced to the NCAA media center; the superlative on top of them is not. Either source the ranking or let the numbers speak.

---

## INFRASTRUCTURE

### I1. 82 of 129 pages use legacy plain-string sources

47 pages use the current linked form (`'<a href="…">NCAA.org — document title</a> (date)'`). 82 still use plain strings with no link, so a reader cannot check them without searching.

Not an accuracy failure — a verifiability one. Upgrade opportunistically as pages are touched, per the build skill §9.

---

## DEFERRED

### D1. External link verification could not run

56 unique external URLs appear across the content. All are Tier 1 or Tier 2 domains — **no banned source appears anywhere in the link set**, which is a real pass.

Whether they still resolve could not be checked: network egress is blocked from this session in both directions. The last link audit was `reports/link-audit-2026-08-04.md` (three weeks ago), which found five broken.

Run locally:

```bash
cd ~/Code/rosterwise/website
grep -rhoE 'https?://[a-zA-Z0-9./_%#?=&+-]+' src/ --include=*.md \
  | sed 's/[.,)"]*$//' | sort -u \
  | while read -r u; do
      printf '%s  %s\n' "$(curl -sS -o /dev/null -w '%{http_code}' -L --max-time 20 "$u")" "$u"
    done
```

---

## What's working — keep doing this

**Wrestling is the model.** It is the only sport with a fact log, and it is the only content set where every page carries an explicit date-anchor footer:

> *This article reflects the 2025-26 season. Verify current standards in the NCAA Wrestling Weight Management Program packets (men's and women's) for the relevant year.*

Nine wrestling pages do this. No soccer, volleyball, or lacrosse page does. **Adopting that footer site-wide would neutralize most of the Medium findings on this list** — a dated claim that says it is dated is not a trust violation.

**Honest uncertainty, done right.** `volleyball/mens/guide/national-collegiate-championship.md:104`:

> As of 2026, no separate D2 championship has been launched. The status of any such proposal in the coming years is not yet clear from public NCAA documentation.

That is §5.6 executed exactly.

**Sources coverage is complete.** Every one of the 129 `content.njk` pages carries a `sources:` block. Whatever else is true, no page makes claims with nothing behind it.

---

## Recommended order of work

1. **C1 + C2** — five pages, one afternoon. The site is currently contradicting itself in public.
2. **M1 + M2** — House/NIL figures and the transfer-portal anchor. Small edits, high exposure, and they are wrong *right now*.
3. **The date-anchor footer, site-wide** — mechanical, and it defuses M1/M2-class problems permanently.
4. **H2** — program counts. A few hours against NCAA.org and NAIA.org.
5. **H3** — the revenue-share split. Decide attribute-or-restructure.
6. **M3 + M4** — compute from your own dataset. This is the one that makes the site *better*, not just safer.
7. **H1** — retro-build the three fact logs. Biggest job, largest long-term payoff.
8. **L1–L4, I1** — opportunistic.

Items 1 and 2 should land before any new recruiting content ships.
