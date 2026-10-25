---
layout: content.njk
title: "Average Roster Size in D1, D2, D3, and NAIA Women's College Soccer — 2025 Season Analysis | RosterWise™"
date: 2026-10-24
breadcrumbs:
  - text: Home
    url: /
  - text: Soccer
    url: /soccer/
  - text: Insights
  - text: Women's Roster Size
eleventyComputed:
  description: "How many players are on a women's college soccer roster? Average roster sizes for NCAA D1, D2, D3, and NAIA programs based on RosterWise's analysis of {{ 'soccer.2025-26.w.all.programs' | stat('programs') }} women's soccer programs, 2025 NCAA season."
  summary: "Based on RosterWise™'s analysis of every settled 2025 NCAA season women's college soccer roster across D1, D2, D3, and NAIA — {{ 'soccer.2025-26.w.all.programs' | stat('programs') }} programs and {{ 'soccer.2025-26.w.all.programs' | stat('players') }} players — here is what the data shows about roster construction across women's college soccer. Roster size patterns differ meaningfully from men's programs."
  sources:
    - "{{ 'soccer' | statSource('2025-26') | safe }}"
    - '<a href="https://ncaaorg.s3.amazonaws.com/governance/d1/legislation/2024-25/APRIL2025D1Gov_Anticipated%20Actions%20Contingent%20Upon%20Court%20Final%20Approval%20of%20the%20House%20v.%20NCAA%20Settlement.pdf">NCAA Division I Board of Directors — Anticipated Actions Contingent Upon Court Final Approval of the House v. NCAA Settlement</a> (April 2025), pre-settlement Bylaws 15.5.2.1 and 15.5.3.1'
    - '<a href="https://web3.ncaa.org/lsdbi/reports/getReport/90008">2026-27 NCAA Division I Manual</a> — Bylaw 17.2, Roster Limitations (adopted June 6, 2025); Article 15, no sport-specific aid limits'
    - '<a href="https://web3.ncaa.org/lsdbi/reports/getReport/90010">2026-27 NCAA Division II Manual</a> — Bylaw 15.4.2, equivalency limits'
    - '<a href="https://web3.ncaa.org/lsdbi/reports/getReport/90011">2026-27 NCAA Division III Manual</a> — Bylaw 15.01.3, no aid on the basis of athletics'
    - '<a href="https://www.naia.org/wp-content/uploads/2026/07/2026_Official_Handbook.pdf">NAIA Official & Policy Handbook 2026-2027</a> — Section XIII, Institutional Financial Aid Policy'
related:
  - title: "Men's Soccer Roster Sizes"
    url: /soccer/insights/mens-roster-size/
    status: live
  - title: "How Men's and Women's Rosters Differ"
    url: /soccer/insights/mens-vs-womens-comparison/
    status: live
  - title: "NCAA Soccer Divisions by the Numbers"
    url: /soccer/insights/division-by-numbers/
    status: live
  - title: "How RosterWise Analyzes Roster Composition"
    url: /soccer/methodology/roster-composition/
    status: live
cta:
  heading: "RosterWise™ gives you roster size data for every program."
  text: "See exactly how many players each program carries, broken down by position, class year, and recruiting pathway — so you can find the programs where your athlete has the best chance of earning a spot and playing time."
  price: "One payment of $39.99. No subscriptions. No ads. Lifetime access."
---

> **Methodology and data sourcing**: See [How RosterWise Builds and Analyzes College Soccer Roster Data](/methodology/data-and-analysis/) for full documentation of our dataset, definitions, and analytical methods.

${toc}

## Why roster size matters for women's soccer recruits

For families navigating women's college soccer recruiting, roster size is one of the most straightforward — and most useful — data points available. It tells you, in plain terms, how many players a program is carrying right now.

That number has direct implications for your athlete. A D1 program carrying 28 players has a different recruiting calculus than a D3 program with 27. The number of available spots, the walk-on landscape, the competition for playing time — roster size shapes all of it.

Counting the NAIA alongside the NCAA, {% stat "soccer.2025-26.w.all.programs", "programs" %} women's soccer programs have a settled 2025-26 roster in RosterWise's figures. Understanding roster size patterns by division helps narrow the search to programs where the fit is realistic.

## Average roster sizes by division

Across {% stat "soccer.2025-26.w.all.programs", "programs" %} women's soccer programs with a settled 2025-26 roster:

| Division | Programs | Avg. Roster Size | Median | Min | Max |
|----------|----------|-------------------|--------|-----|-----|
| D1 | {% stat "soccer.2025-26.w.d1.roster_size", "programs" %} | {% stat "soccer.2025-26.w.d1.roster_size", "mean" %} | {% stat "soccer.2025-26.w.d1.roster_size", "median" %} | {% stat "soccer.2025-26.w.d1.roster_size", "min" %} | {% stat "soccer.2025-26.w.d1.roster_size", "max" %} |
| D2 | {% stat "soccer.2025-26.w.d2.roster_size", "programs" %} | {% stat "soccer.2025-26.w.d2.roster_size", "mean" %} | {% stat "soccer.2025-26.w.d2.roster_size", "median" %} | {% stat "soccer.2025-26.w.d2.roster_size", "min" %} | {% stat "soccer.2025-26.w.d2.roster_size", "max" %} |
| D3 | {% stat "soccer.2025-26.w.d3.roster_size", "programs" %} | {% stat "soccer.2025-26.w.d3.roster_size", "mean" %} | {% stat "soccer.2025-26.w.d3.roster_size", "median" %} | {% stat "soccer.2025-26.w.d3.roster_size", "min" %} | {% stat "soccer.2025-26.w.d3.roster_size", "max" %} |
| NAIA | {% stat "soccer.2025-26.w.naia.roster_size", "programs" %} | {% stat "soccer.2025-26.w.naia.roster_size", "mean" %} | {% stat "soccer.2025-26.w.naia.roster_size", "median" %} | {% stat "soccer.2025-26.w.naia.roster_size", "min" %} | {% stat "soccer.2025-26.w.naia.roster_size", "max" %} |

*{% statNote "soccer.2025-26.w.all.roster_size" %}. Managers and staff are left out. Mercyhurst University and the University of New Haven are left out of the D1 figures for 2025-26: both were mid-transition from Division II to Division I that season.*

Women's soccer rosters are smaller than men's in every division. D2 women's programs carry the largest rosters on average ({% stat "soccer.2025-26.w.d2.roster_size", "mean" %}), while NAIA women's carry the smallest ({% stat "soccer.2025-26.w.naia.roster_size", "mean" %}). The range within every division is substantial — D2 alone spans from {% stat "soccer.2025-26.w.d2.roster_size", "min" %} to {% stat "soccer.2025-26.w.d2.roster_size", "max" %} players.

### Position breakdown by division

| Division | GK | DEF | MID | FWD |
|----------|------|-------|-------|-------|
| D1 | {% stat "soccer.2025-26.w.d1.position_counts", "GK.per_program" %} | {% stat "soccer.2025-26.w.d1.position_counts", "DEF.per_program" %} | {% stat "soccer.2025-26.w.d1.position_counts", "MID.per_program" %} | {% stat "soccer.2025-26.w.d1.position_counts", "FWD.per_program" %} |
| D2 | {% stat "soccer.2025-26.w.d2.position_counts", "GK.per_program" %} | {% stat "soccer.2025-26.w.d2.position_counts", "DEF.per_program" %} | {% stat "soccer.2025-26.w.d2.position_counts", "MID.per_program" %} | {% stat "soccer.2025-26.w.d2.position_counts", "FWD.per_program" %} |
| D3 | {% stat "soccer.2025-26.w.d3.position_counts", "GK.per_program" %} | {% stat "soccer.2025-26.w.d3.position_counts", "DEF.per_program" %} | {% stat "soccer.2025-26.w.d3.position_counts", "MID.per_program" %} | {% stat "soccer.2025-26.w.d3.position_counts", "FWD.per_program" %} |
| NAIA | {% stat "soccer.2025-26.w.naia.position_counts", "GK.per_program" %} | {% stat "soccer.2025-26.w.naia.position_counts", "DEF.per_program" %} | {% stat "soccer.2025-26.w.naia.position_counts", "MID.per_program" %} | {% stat "soccer.2025-26.w.naia.position_counts", "FWD.per_program" %} |

*{% statNote "soccer.2025-26.w.all.position_counts" %}. A player listed at two positions counts at both, so the four columns add up to a little more than the average roster.*

In every division, women's rosters carry midfielders and forwards in more even numbers than men's, and they average fewer goalkeepers than men's.

## The scholarship context: an equivalency sport, capped at 14

How scholarships work in D1 soccer shapes roster size — and the structure is the same for women and men.

Women's D1 soccer was an **equivalency** sport before the House settlement, limited to **14.0 equivalencies** per program. An equivalency is one full scholarship's worth of money, and a coach could divide the total into partial awards in any combination. Men's D1 soccer worked the same way at 9.9. Neither was a head-count sport: the Division I head-count sports other than football and basketball were women's gymnastics, women's tennis and women's volleyball.

Because the total was capped well below roster size, coaches spread partial awards across the roster and filled the remainder with walk-ons and institutional aid.

The 2025 House v. NCAA settlement changed the framework for opt-in schools, introducing a roster limit of 28 and eliminating sport-specific scholarship caps.

**What this means for families:**
- Programs that opted into the settlement have a defined roster cap of 28
- More scholarship flexibility exists within that cap — the 14-equivalency ceiling no longer applies
- Walk-on opportunities may be more limited at opt-in schools
- For programs that did not opt in, ask directly: the 2026-27 NCAA Division I Manual no longer publishes sport-specific aid limits for any Division I institution

The 2025-26 data shows D1 women's programs averaging {% stat "soccer.2025-26.w.d1.roster_size", "mean" %} players with a median of {% stat "soccer.2025-26.w.d1.roster_size", "median" %} — closely aligned with the new roster limit. Families should ask each D1 program whether they opted into the settlement, as this directly affects how many spots are available and how they are funded.

## D2 women's soccer: the middle ground

D2 women's soccer programs average {% stat "soccer.2025-26.w.d2.roster_size", "mean" %} players — the highest average of any women's division. Women's soccer in D2 is an equivalency sport, limited to 9.9 equivalencies, meaning coaches can divide scholarship dollars across more players rather than awarding only full scholarships.

For families, D2 represents a middle ground: athletic scholarships, under an equivalency limit. The range of {% stat "soccer.2025-26.w.d2.roster_size", "min" %} to {% stat "soccer.2025-26.w.d2.roster_size", "max" %} players across D2 shows how varied these programs can be.

## D3 women's soccer: participation and competition

D3 women's soccer programs average {% stat "soccer.2025-26.w.d3.roster_size", "mean" %} players with a range from {% stat "soccer.2025-26.w.d3.roster_size", "min" %} to {% stat "soccer.2025-26.w.d3.roster_size", "max" %}. Without athletic scholarships, D3 programs build their rosters based on institutional goals, coaching philosophy, and the applicant pool.

For families evaluating D3 programs, roster size is a starting point for important questions:
- A large roster may mean a more accessible path to making the team — but also more competition for starting spots
- A small roster may mean every player was carefully chosen — but also that spots are harder to come by
- The program's track record of developing players and providing meaningful playing time matters more than the raw number

D3 is the largest division for women's soccer by number of programs — {% stat "soccer.2025-26.w.d3.programs", "programs" %} programs in our figures — which means more options but also more homework.

## NAIA women's soccer

NAIA women's soccer programs average {% stat "soccer.2025-26.w.naia.roster_size", "mean" %} players — the smallest average of any division. NAIA programs do offer athletic scholarships, and rosters range from {% stat "soccer.2025-26.w.naia.roster_size", "min" %} to {% stat "soccer.2025-26.w.naia.roster_size", "max" %} players.

{% stat "soccer.2025-26.w.naia.programs", "programs" %} NAIA women's soccer programs have a settled 2025-26 roster in our figures, a substantial part of the college soccer landscape. Families who focus exclusively on NCAA programs may be leaving NAIA options off their list — particularly for athletes whose academic or geographic preferences align with NAIA institutions.

## Reading between the numbers

Roster size data becomes more powerful when combined with other information:

- **Class-year distribution.** A program with 30 players might have 10 seniors graduating. That program likely needs to bring in a large incoming class, creating more opportunity.
- **Position depth.** A 28-player roster with only 2 goalkeepers has different needs than one with 4. RosterWise breaks down roster composition by position so families can see where the gaps are.
- **International composition.** Programs with higher international percentages may recruit differently than programs that primarily draw from domestic club soccer. Understanding this pattern helps families assess where their athlete fits.
- **Division context.** A 25-player roster is below average in D2 ({% stat "soccer.2025-26.w.d2.roster_size", "mean" %} average) and close to the NAIA average ({% stat "soccer.2025-26.w.naia.roster_size", "mean" %}). Context matters.

## Practical advice for families

1. **Do not assume bigger is better.** A large roster does not guarantee playing time, and a small roster does not mean there is no room for your athlete.
2. **Compare within peer groups.** Compare roster sizes among programs your athlete is seriously considering, not across the entire division.
3. **Ask coaches about their roster philosophy.** One coach might say, "We carry 28 and everyone competes for a starting spot"; another, "We carry 35 because we value depth and development." Both are valid — but they create different experiences.
4. **Use roster size as a filter, not a verdict.** It is one piece of a larger picture that includes position fit, academic match, geographic preference, and culture.

## Every recruit's journey is different

These are averages across {% stat "soccer.2025-26.w.all.programs", "programs" %} programs. Individual programs vary significantly — the difference between the smallest and largest D1 women's soccer rosters is {% statDiff "soccer.2025-26.w.d1.roster_size", "max", "soccer.2025-26.w.d1.roster_size", "min", "n" %} players. In NAIA, the range is {% statDiff "soccer.2025-26.w.naia.roster_size", "max", "soccer.2025-26.w.naia.roster_size", "min", "n" %} players.

No two athletes follow the same path. A walk-on opportunity at a D3 program with 35 players may be a better fit than a scholarship at a D1 program where your daughter would be the 28th player on a 28-player roster. The numbers provide context — the decisions are yours.

---

*Figures on this page print from RosterWise's roster stats for the 2025-26 season, computed from the rosters in the RosterWise Soccer app's own bundle; each table carries the date its rosters were read. See [methodology](/methodology/data-and-analysis/) for full documentation.*

*Updated October 24, 2026: every figure on this page now comes from that file. Earlier versions used an April–May 2026 capture; most figures moved slightly. Position counts now count a player listed at two positions at both, so they are higher than before.*
