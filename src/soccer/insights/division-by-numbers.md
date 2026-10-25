---
layout: content.njk
title: "NCAA Soccer Divisions by the Numbers — 2025 Season Analysis | RosterWise™"
description: "A data-driven comparison of D1, D2, D3, and NAIA college soccer — program counts, roster sizes, international composition, and what the numbers mean for recruiting families. 2025 NCAA season."
date: 2026-10-24
breadcrumbs:
  - text: Home
    url: /
  - text: Soccer
    url: /soccer/
  - text: Insights
  - text: Divisions by the Numbers
eleventyComputed:
  summary: "Based on RosterWise™'s analysis of {{ 'soccer.2025-26.all.all.programs' | stat('programs') }} college soccer programs and {{ 'soccer.2025-26.all.all.programs' | stat('players') }} players for the 2025 NCAA season, here is how D1, D2, D3, and NAIA compare — by the numbers. Program counts, roster sizes, international composition, height profiles, and geographic distribution. No hype, no rankings — just the data that helps families make informed decisions."
  sources:
    - "{{ 'soccer' | statSource('2025-26') | safe }}"
    - '<a href="https://web3.ncaa.org/lsdbi/reports/getReport/90008">2026-27 NCAA Division I Manual</a> — Bylaw 17.2, Roster Limitations (adopted June 6, 2025)'
    - '<a href="https://ncaaorg.s3.amazonaws.com/governance/d1/legislation/2024-25/APRIL2025D1Gov_Anticipated%20Actions%20Contingent%20Upon%20Court%20Final%20Approval%20of%20the%20House%20v.%20NCAA%20Settlement.pdf">NCAA Division I Board of Directors — Anticipated Actions Contingent Upon Court Final Approval of the House v. NCAA Settlement</a> (April 2025), pre-settlement equivalency limits'
    - '<a href="https://web3.ncaa.org/lsdbi/reports/getReport/90010">2026-27 NCAA Division II Manual</a> — Bylaw 15.4.2, equivalency limits'
    - '<a href="https://web3.ncaa.org/lsdbi/reports/getReport/90011">2026-27 NCAA Division III Manual</a> — Bylaw 15.01.3, no aid on the basis of athletics'
    - '<a href="https://www.naia.org/wp-content/uploads/2026/07/2026_Official_Handbook.pdf">NAIA Official & Policy Handbook 2026-2027</a> — Section XIII, Institutional Financial Aid Policy'
related:
  - title: "Men's Soccer Roster Sizes"
    url: /soccer/insights/mens-roster-size/
    status: live
  - title: "Women's Soccer Roster Sizes"
    url: /soccer/insights/womens-roster-size/
    status: live
  - title: "How Men's and Women's Rosters Differ"
    url: /soccer/insights/mens-vs-womens-comparison/
    status: live
  - title: "Division Differences Guide"
    url: /guide/division-differences/
    status: live
cta:
  heading: "RosterWise™ goes beyond division-level averages."
  text: "Division comparisons give you the big picture. RosterWise gives you program-level detail — roster composition, position depth, class-year gaps, and My RosterFit™ scoring for your athlete's specific profile."
  price: "One payment of $39.99. No subscriptions. No ads. Lifetime access."
---

> **Methodology and data sourcing**: See [How RosterWise Builds and Analyzes College Soccer Roster Data](/methodology/data-and-analysis/) for full documentation of our dataset, definitions, and analytical methods.

${toc}

## The landscape at a glance

College soccer in the United States spans four major organizational levels: NCAA Division I, Division II, Division III, and the NAIA. Each operates under different rules, different scholarship structures, and different competitive philosophies. For families, understanding these differences is the foundation of a realistic recruiting strategy.

Across {% stat "soccer.2025-26.all.all.programs", "programs" %} programs and {% stat "soccer.2025-26.all.all.programs", "players" %} players on settled 2025-26 rosters:

| Metric | D1 | D2 | D3 | NAIA |
|--------|----|----|----|----- |
| **Men's programs** | {% stat "soccer.2025-26.m.d1.programs", "programs" %} | {% stat "soccer.2025-26.m.d2.programs", "programs" %} | {% stat "soccer.2025-26.m.d3.programs", "programs" %} | {% stat "soccer.2025-26.m.naia.programs", "programs" %} |
| **Women's programs** | {% stat "soccer.2025-26.w.d1.programs", "programs" %} | {% stat "soccer.2025-26.w.d2.programs", "programs" %} | {% stat "soccer.2025-26.w.d3.programs", "programs" %} | {% stat "soccer.2025-26.w.naia.programs", "programs" %} |
| **Total programs** | {% stat "soccer.2025-26.all.d1.programs", "programs" %} | {% stat "soccer.2025-26.all.d2.programs", "programs" %} | {% stat "soccer.2025-26.all.d3.programs", "programs" %} | {% stat "soccer.2025-26.all.naia.programs", "programs" %} |
| **Men's avg. roster size** | {% stat "soccer.2025-26.m.d1.roster_size", "mean" %} | {% stat "soccer.2025-26.m.d2.roster_size", "mean" %} | {% stat "soccer.2025-26.m.d3.roster_size", "mean" %} | {% stat "soccer.2025-26.m.naia.roster_size", "mean" %} |
| **Women's avg. roster size** | {% stat "soccer.2025-26.w.d1.roster_size", "mean" %} | {% stat "soccer.2025-26.w.d2.roster_size", "mean" %} | {% stat "soccer.2025-26.w.d3.roster_size", "mean" %} | {% stat "soccer.2025-26.w.naia.roster_size", "mean" %} |
| **Men's international %** | {% stat "soccer.2025-26.m.d1.intl_share", "pct" %} | {% stat "soccer.2025-26.m.d2.intl_share", "pct" %} | {% stat "soccer.2025-26.m.d3.intl_share", "pct" %} | {% stat "soccer.2025-26.m.naia.intl_share", "pct" %} |
| **Women's international %** | {% stat "soccer.2025-26.w.d1.intl_share", "pct" %} | {% stat "soccer.2025-26.w.d2.intl_share", "pct" %} | {% stat "soccer.2025-26.w.d3.intl_share", "pct" %} | {% stat "soccer.2025-26.w.naia.intl_share", "pct" %} |
| **Athletic scholarships** | Yes (roster-limited for opt-in) | Yes (equivalency) | No | Yes |

*{% statNote "soccer.2025-26.all.all.programs" %}. Mercyhurst University and the University of New Haven are left out of the D1 figures for 2025-26: both were mid-transition from Division II to Division I that season.*

This table is a starting point. Each row tells a different part of the story, and the rest of this page unpacks what these numbers mean for families.

## Program counts: where the opportunities are

The distribution of programs across divisions:

- **D3 has the most programs** in both men's and women's soccer: {% stat "soccer.2025-26.m.d3.programs", "programs" %} men's and {% stat "soccer.2025-26.w.d3.programs", "programs" %} women's — the largest of the four divisions in this analysis.
- **D1 has {% stat "soccer.2025-26.all.d1.programs", "programs" %} programs** in all — the second-largest division by count.
- **D2 has {% stat "soccer.2025-26.all.d2.programs", "programs" %}** and **NAIA has {% stat "soccer.2025-26.all.naia.programs", "programs" %}** programs.

**What this means for families:** D1 programs are {% statShare "soccer.2025-26.all.d1.programs", "programs", "soccer.2025-26.all.all.programs", "programs" %} of all the college soccer programs in this analysis. A search limited to D1 starts from that share of the landscape.

## Height profiles by division and position

Average listed height by position — heights as rosters list them, not measured. {% stat "soccer.2025-26.m.all.height_by_position", "height_listed_pct" %} of men's and {% stat "soccer.2025-26.w.all.height_by_position", "height_listed_pct" %} of women's player records list one.

### Men's soccer average heights

| Position | D1 | D2 | D3 | NAIA |
|----------|----|----|----|----- |
| Goalkeeper | {% stat "soccer.2025-26.m.d1.height_by_position", "GK.text" %} | {% stat "soccer.2025-26.m.d2.height_by_position", "GK.text" %} | {% stat "soccer.2025-26.m.d3.height_by_position", "GK.text" %} | {% stat "soccer.2025-26.m.naia.height_by_position", "GK.text" %} |
| Defender | {% stat "soccer.2025-26.m.d1.height_by_position", "DEF.text" %} | {% stat "soccer.2025-26.m.d2.height_by_position", "DEF.text" %} | {% stat "soccer.2025-26.m.d3.height_by_position", "DEF.text" %} | {% stat "soccer.2025-26.m.naia.height_by_position", "DEF.text" %} |
| Midfielder | {% stat "soccer.2025-26.m.d1.height_by_position", "MID.text" %} | {% stat "soccer.2025-26.m.d2.height_by_position", "MID.text" %} | {% stat "soccer.2025-26.m.d3.height_by_position", "MID.text" %} | {% stat "soccer.2025-26.m.naia.height_by_position", "MID.text" %} |
| Forward | {% stat "soccer.2025-26.m.d1.height_by_position", "FWD.text" %} | {% stat "soccer.2025-26.m.d2.height_by_position", "FWD.text" %} | {% stat "soccer.2025-26.m.d3.height_by_position", "FWD.text" %} | {% stat "soccer.2025-26.m.naia.height_by_position", "FWD.text" %} |

*{% statNote "soccer.2025-26.m.all.height_by_position" %}. A player listed at two positions counts at both.*

### Women's soccer average heights

| Position | D1 | D2 | D3 | NAIA |
|----------|----|----|----|----- |
| Goalkeeper | {% stat "soccer.2025-26.w.d1.height_by_position", "GK.text" %} | {% stat "soccer.2025-26.w.d2.height_by_position", "GK.text" %} | {% stat "soccer.2025-26.w.d3.height_by_position", "GK.text" %} | {% stat "soccer.2025-26.w.naia.height_by_position", "GK.text" %} |
| Defender | {% stat "soccer.2025-26.w.d1.height_by_position", "DEF.text" %} | {% stat "soccer.2025-26.w.d2.height_by_position", "DEF.text" %} | {% stat "soccer.2025-26.w.d3.height_by_position", "DEF.text" %} | {% stat "soccer.2025-26.w.naia.height_by_position", "DEF.text" %} |
| Midfielder | {% stat "soccer.2025-26.w.d1.height_by_position", "MID.text" %} | {% stat "soccer.2025-26.w.d2.height_by_position", "MID.text" %} | {% stat "soccer.2025-26.w.d3.height_by_position", "MID.text" %} | {% stat "soccer.2025-26.w.naia.height_by_position", "MID.text" %} |
| Forward | {% stat "soccer.2025-26.w.d1.height_by_position", "FWD.text" %} | {% stat "soccer.2025-26.w.d2.height_by_position", "FWD.text" %} | {% stat "soccer.2025-26.w.d3.height_by_position", "FWD.text" %} | {% stat "soccer.2025-26.w.naia.height_by_position", "FWD.text" %} |

*{% statNote "soccer.2025-26.w.all.height_by_position" %}. A player listed at two positions counts at both.*

D1 programs tend to carry taller players — particularly goalkeepers and defenders. The differences are small but consistent. Men's midfielders average the same height in every division.

These are averages. Programs at every division carry players across a range of heights, and size is one factor among many that coaches evaluate.

## Geographic distribution: where college soccer programs are

The states with the most college soccer programs (men's + women's combined):

{% statStateTable "soccer.2025-26.all.all.programs_by_state", 15 %}

*{% statNote "soccer.2025-26.all.all.programs_by_state" %}. A program is counted in the state its school is in.*

{% statStateAt "soccer.2025-26.all.all.programs_by_state", 1 %} and {% statStateAt "soccer.2025-26.all.all.programs_by_state", 2 %} host the most programs. Families in states with high program density have more options for local or regional programs — though geographic diversity in your target list can open opportunities that a local focus might miss.

## Scholarship structures: the financial reality

### D1: the new post-House landscape

Before the House settlement, both D1 men's and D1 women's soccer were equivalency sports — men's capped at 9.9 equivalencies, women's at 14.0 — with the total divisible into partial awards across the roster. Neither was a head-count sport. The settlement changed this for opt-in schools:

- Sport-specific scholarship caps are eliminated
- Roster limits apply (28 for both men's and women's soccer)
- Schools can distribute scholarship dollars however they choose within the roster limit
- Not all schools have opted in — families should ask each program directly

### D2: equivalency for both genders

D2 coaches have a fixed scholarship budget and can split it across players however they choose. Because the limit is set in equivalencies — 9.0 for men's soccer and 9.9 for women's under the 2026-27 Division II Manual — an award can be a fraction of a full scholarship.

### D3: no athletic scholarships

D3 does not offer athletic scholarships. All financial aid is academic and need-based.

### NAIA: its own scholarship model

NAIA programs offer athletic scholarships under the NAIA's own rules. Under the 2026-27 NAIA Official & Policy Handbook, a soccer team's institutional aid is limited to 12 equivalencies — one limit per sport, not per gender — and aid to students who meet the Handbook's academic thresholds can be exempt from that limit.

## International composition: how the divisions compare

International players are a meaningful part of college soccer, but the proportions differ dramatically:

- **NAIA men's soccer** has the highest international composition of any category at **{% stat "soccer.2025-26.m.naia.intl_share", "pct" %}** — nearly half of all players
- **D3 women's soccer** has the lowest at **{% stat "soccer.2025-26.w.d3.intl_share", "pct" %}**
- The men's-women's gap exists at every division level, with men's programs carrying more than twice the women's international share at each one

For domestic recruits, this data helps contextualize the competitive landscape. At divisions and conferences with higher international composition, domestic recruits are competing against a broader global talent pool. At divisions with lower international composition, the domestic club and high school pipeline dominates.

## Common misconceptions

**"D1 is the only level worth playing at."** D3 has the most programs ({% stat "soccer.2025-26.all.d3.programs", "programs" %}) and the most roster spots ({% stat "soccer.2025-26.all.d3.programs", "players" %}).

**"D3 is for players who couldn't play D1."** D3 is a division with its own rules — chiefly, no athletic scholarships — not a ranking of players. Roster data describes who is on a team, not who could have played where.

**"NAIA isn't real college soccer."** NAIA includes {% stat "soccer.2025-26.all.naia.programs", "programs" %} programs in this analysis, and they offer athletic scholarships. Leaving a whole division out narrows the list a family starts from.

**"More scholarships mean a better deal."** A D1 partial scholarship at a high-cost school may leave a family paying more out of pocket than a D3 financial aid package at a school with generous need-based and merit aid.

## Every recruit's journey is different

Division-level averages are useful for understanding structural differences — scholarship rules, program counts, roster construction. But when it comes to evaluating whether a specific program is a good fit for your athlete, you need program-level data.

The ranges inside each division overlap: D1 men's rosters run from {% stat "soccer.2025-26.m.d1.roster_size", "min" %} to {% stat "soccer.2025-26.m.d1.roster_size", "max" %} players, and D2 men's from {% stat "soccer.2025-26.m.d2.roster_size", "min" %} to {% stat "soccer.2025-26.m.d2.roster_size", "max" %}. We do not rank programs or conferences, so we will not say which would beat which — but a family that treats the division label as a proxy for playing level will misjudge a lot of programs in both directions.

Start broad. Understand the structural differences. Then use [roster intelligence](/roster-intelligence/) to evaluate specific programs based on position depth, class-year gaps, international composition, and how your athlete's profile aligns with what each program actually looks like.

---

*Figures on this page print from RosterWise's roster stats for the 2025-26 season, computed from the rosters in the RosterWise Soccer app's own bundle; each table carries the date its rosters were read. See [methodology](/methodology/data-and-analysis/) for full documentation.*

*Updated October 24, 2026: every figure on this page now comes from that file. Earlier versions used an April–May 2026 capture; most figures moved slightly, and the programs-by-state table changed order.*
