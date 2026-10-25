---
layout: content.njk
title: "Average Roster Size in D1, D2, D3, and NAIA Men's College Soccer — 2025 Season Analysis | RosterWise™"
date: 2026-10-24
breadcrumbs:
  - text: Home
    url: /
  - text: Soccer
    url: /soccer/
  - text: Insights
  - text: Men's Roster Size
eleventyComputed:
  description: "How many players are on a men's college soccer roster? Average roster sizes for NCAA D1, D2, D3, and NAIA programs based on RosterWise's analysis of {{ 'soccer.2025-26.m.all.programs' | stat('programs') }} men's soccer programs, 2025 NCAA season."
  summary: "Based on RosterWise™'s analysis of every settled 2025 NCAA season men's college soccer roster across D1, D2, D3, and NAIA — {{ 'soccer.2025-26.m.all.programs' | stat('programs') }} programs and {{ 'soccer.2025-26.m.all.programs' | stat('players') }} players — here is what the data shows about how programs build their rosters. Roster size is one of the most useful signals for recruiting families, and understanding the patterns by division helps calibrate expectations before reaching out to coaches."
  sources:
    - "{{ 'soccer' | statSource('2025-26') | safe }}"
    - '<a href="https://web3.ncaa.org/lsdbi/reports/getReport/90008">2026-27 NCAA Division I Manual</a> — Bylaw 17.2, Roster Limitations (adopted June 6, 2025)'
    - '<a href="https://web3.ncaa.org/lsdbi/reports/getReport/90010">2026-27 NCAA Division II Manual</a> — Bylaw 15.4.2, equivalency limits'
    - '<a href="https://web3.ncaa.org/lsdbi/reports/getReport/90011">2026-27 NCAA Division III Manual</a> — Bylaw 15.01.3, no aid on the basis of athletics'
    - '<a href="https://www.naia.org/wp-content/uploads/2026/07/2026_Official_Handbook.pdf">NAIA Official & Policy Handbook 2026-2027</a> — Section XIII, Institutional Financial Aid Policy'
related:
  - title: "Women's Soccer Roster Sizes"
    url: /soccer/insights/womens-roster-size/
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

## Why roster size matters for recruits

When a family sits down to build a list of target programs, roster size is one of the most telling numbers available — and it is publicly available on every program's athletics website. A D1 program carrying 29 players operates very differently from an NAIA program carrying 36.

Larger rosters can mean more spots available, more walk-on opportunities, and a wider range of talent levels within the team. Smaller rosters can mean every player was specifically recruited, competition for playing time is tighter, and walk-on paths are narrower.

Neither is inherently better. What matters is whether your athlete's profile — their talent level, their position, their development trajectory — fits the reality of how that program builds its roster.

## Average roster sizes by division

Across {% stat "soccer.2025-26.m.all.programs", "programs" %} men's soccer programs with a settled 2025-26 roster:

| Division | Programs | Avg. Roster Size | Median | Min | Max |
|----------|----------|-------------------|--------|-----|-----|
| D1 | {% stat "soccer.2025-26.m.d1.roster_size", "programs" %} | {% stat "soccer.2025-26.m.d1.roster_size", "mean" %} | {% stat "soccer.2025-26.m.d1.roster_size", "median" %} | {% stat "soccer.2025-26.m.d1.roster_size", "min" %} | {% stat "soccer.2025-26.m.d1.roster_size", "max" %} |
| D2 | {% stat "soccer.2025-26.m.d2.roster_size", "programs" %} | {% stat "soccer.2025-26.m.d2.roster_size", "mean" %} | {% stat "soccer.2025-26.m.d2.roster_size", "median" %} | {% stat "soccer.2025-26.m.d2.roster_size", "min" %} | {% stat "soccer.2025-26.m.d2.roster_size", "max" %} |
| D3 | {% stat "soccer.2025-26.m.d3.roster_size", "programs" %} | {% stat "soccer.2025-26.m.d3.roster_size", "mean" %} | {% stat "soccer.2025-26.m.d3.roster_size", "median" %} | {% stat "soccer.2025-26.m.d3.roster_size", "min" %} | {% stat "soccer.2025-26.m.d3.roster_size", "max" %} |
| NAIA | {% stat "soccer.2025-26.m.naia.roster_size", "programs" %} | {% stat "soccer.2025-26.m.naia.roster_size", "mean" %} | {% stat "soccer.2025-26.m.naia.roster_size", "median" %} | {% stat "soccer.2025-26.m.naia.roster_size", "min" %} | {% stat "soccer.2025-26.m.naia.roster_size", "max" %} |

*{% statNote "soccer.2025-26.m.all.roster_size" %}. Managers and staff are left out. Mercyhurst University and the University of New Haven are left out of the D1 figures for 2025-26: both were mid-transition from Division II to Division I that season.*

The range within each division is wide. Some D1 programs carry close to their roster limit; others sit well below it. D2, D3, and NAIA programs show even wider spreads.

### Position breakdown by division

The average men's soccer roster distributes players across four position groups:

| Division | GK | DEF | MID | FWD |
|----------|------|-------|-------|-------|
| D1 | {% stat "soccer.2025-26.m.d1.position_counts", "GK.per_program" %} | {% stat "soccer.2025-26.m.d1.position_counts", "DEF.per_program" %} | {% stat "soccer.2025-26.m.d1.position_counts", "MID.per_program" %} | {% stat "soccer.2025-26.m.d1.position_counts", "FWD.per_program" %} |
| D2 | {% stat "soccer.2025-26.m.d2.position_counts", "GK.per_program" %} | {% stat "soccer.2025-26.m.d2.position_counts", "DEF.per_program" %} | {% stat "soccer.2025-26.m.d2.position_counts", "MID.per_program" %} | {% stat "soccer.2025-26.m.d2.position_counts", "FWD.per_program" %} |
| D3 | {% stat "soccer.2025-26.m.d3.position_counts", "GK.per_program" %} | {% stat "soccer.2025-26.m.d3.position_counts", "DEF.per_program" %} | {% stat "soccer.2025-26.m.d3.position_counts", "MID.per_program" %} | {% stat "soccer.2025-26.m.d3.position_counts", "FWD.per_program" %} |
| NAIA | {% stat "soccer.2025-26.m.naia.position_counts", "GK.per_program" %} | {% stat "soccer.2025-26.m.naia.position_counts", "DEF.per_program" %} | {% stat "soccer.2025-26.m.naia.position_counts", "MID.per_program" %} | {% stat "soccer.2025-26.m.naia.position_counts", "FWD.per_program" %} |

*{% statNote "soccer.2025-26.m.all.position_counts" %}. A player listed at two positions counts at both, so the four columns add up to a little more than the average roster.*

Midfielders make up the largest position group at every division. Goalkeeper averages vary far less across divisions than any other position's.

## What the House settlement changed for D1 roster sizes

The 2025 House v. NCAA settlement introduced a roster limit of 28 for D1 men's soccer programs that opted into the new framework. Before the settlement there was no cap on roster size at all — programs could carry athletes beyond their scholarship allotment as walk-ons. Our roster figures begin with the 2025-26 season, the first played under the new limits, so we cannot say from our own data how large those pre-settlement rosters were.

This is a meaningful shift. The 2025-26 data shows D1 men's programs averaging {% stat "soccer.2025-26.m.d1.roster_size", "mean" %} players with a median of {% stat "soccer.2025-26.m.d1.roster_size", "median" %} — right at the new roster limit. The cap means:

- **Walk-on spots sit under the cap.** A program that once carried players beyond its scholarship allotment now has a hard limit.
- **Every spot counts against the limit.** Each player a coach adds is one of 28.
- **The scholarship picture changed.** Sport-specific scholarship caps were eliminated for opt-in schools, meaning more of those 28 spots can be funded.

The roster limit binds members of the settlement's defendant conferences and any other D1 school that opted in. Families should ask each program directly about their roster limit and scholarship structure.

## D2 and D3: a different landscape

D2 men's soccer programs average {% stat "soccer.2025-26.m.d2.roster_size", "mean" %} players — substantially larger than D1. D2 coaches have athletic scholarship dollars to distribute (men's soccer is an equivalency sport in D2, limited to 9.0 equivalencies). The range extends from {% stat "soccer.2025-26.m.d2.roster_size", "min" %} to {% stat "soccer.2025-26.m.d2.roster_size", "max" %} players.

With no athletic scholarships, D3 programs average {% stat "soccer.2025-26.m.d3.roster_size", "mean" %} players but range from {% stat "soccer.2025-26.m.d3.roster_size", "min" %} to {% stat "soccer.2025-26.m.d3.roster_size", "max" %}. Some carry lean rosters; others carry as many as {% stat "soccer.2025-26.m.d3.roster_size", "max" %}.

For families, this means D3 requires more homework. A program with 45 players may offer a more accessible path to making the team, but the competition for starting spots is still real. A program with 20 players may mean every roster spot was carefully selected.

## NAIA roster sizes

NAIA men's soccer programs average {% stat "soccer.2025-26.m.naia.roster_size", "mean" %} players — the highest average of any division. NAIA programs offer athletic scholarships, and the range extends from {% stat "soccer.2025-26.m.naia.roster_size", "min" %} to {% stat "soccer.2025-26.m.naia.roster_size", "max" %} players. NAIA men's soccer also has the highest international share of any division, {% stat "soccer.2025-26.m.naia.intl_share", "pct" %}.

NAIA programs can be a strong fit, particularly for athletes whose academic profile, geographic preference, or development timeline points that way.

## What roster size tells you (and what it does not)

Roster size is a signal, not a verdict. Here is what it can and cannot tell you:

**Roster size can indicate:**
- How many spots the program is trying to fill each year
- Whether walk-on opportunities are likely to exist
- The general competitive density of the roster
- How the coaching staff thinks about depth and development

**Roster size does not tell you:**
- How many of those players actually see the field
- Whether the program is actively recruiting your athlete's position
- The quality of players on the roster relative to your athlete
- Whether the program's culture and academic environment are a fit

This is why RosterWise goes deeper than roster size alone. Position-specific depth, class-year distribution, and [roster intelligence](/roster-intelligence/) all add context that a single number cannot provide.

## How to use roster size in your search

A practical approach for families:

1. **Start with division-level averages** to calibrate expectations. If a D1 program carries significantly fewer than the {% stat "soccer.2025-26.m.d1.roster_size", "mean" %}-player average, that is worth understanding — it may reflect a roster-limit decision, a coaching philosophy, or a program in transition.
2. **Compare within conferences.** Programs in the same conference often compete for the same recruits. A program carrying 22 players in a conference where the average is 30 may have different needs than its peers.
3. **Look at roster size alongside class-year data.** A program with a large roster but an unusually large senior class may have more spots opening up than a smaller program with a young roster.
4. **Ask the coach directly.** Roster size data gives you the right questions to ask: "How many players do you plan to bring in next year?" and "How does the roster limit affect your recruiting class?" are informed questions.

## Every recruit's journey is different

These are averages across {% stat "soccer.2025-26.m.all.programs", "programs" %} programs. Individual programs vary significantly — the difference between the smallest and largest D1 men's soccer rosters is {% statDiff "soccer.2025-26.m.d1.roster_size", "max", "soccer.2025-26.m.d1.roster_size", "min", "n" %} players ({% stat "soccer.2025-26.m.d1.roster_size", "min" %} to {% stat "soccer.2025-26.m.d1.roster_size", "max" %}, per the table above). In NAIA, the range is {% statDiff "soccer.2025-26.m.naia.roster_size", "max", "soccer.2025-26.m.naia.roster_size", "min", "n" %} players ({% stat "soccer.2025-26.m.naia.roster_size", "min" %} to {% stat "soccer.2025-26.m.naia.roster_size", "max" %}).

Families should treat these averages as a starting point, not a conclusion. Every program's roster tells its own story — and reading that story is exactly what RosterWise is built to help with.

---

*Figures on this page print from RosterWise's roster stats for the 2025-26 season, computed from the rosters in the RosterWise Soccer app's own bundle; each table carries the date its rosters were read. See [methodology](/methodology/data-and-analysis/) for full documentation.*

*Updated October 24, 2026: every figure on this page now comes from that file. Earlier versions used an April–May 2026 capture; most figures moved slightly. Position counts now count a player listed at two positions at both, so they are higher than before.*
