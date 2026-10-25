---
layout: content.njk
title: "RosterWise™ Data and Analysis Methodology — How We Build College Soccer Roster Intelligence"
description: "RosterWise™ analyzes every settled 2025-26 college soccer roster — D1, D2, D3, NAIA, men's and women's. Methodology, definitions, coverage, and data sourcing for transparent recruiting intelligence."
date: 2026-10-24
breadcrumbs:
  - text: Home
    url: /
  - text: Methodology
  - text: Data and Analysis
summary: "RosterWise™ analyzes every settled college soccer roster across D1, D2, D3, and NAIA — men's and women's — and uses that analysis to produce both the RosterWise Soccer app and the publicly available aggregate insights on this site. This page documents how we do it: our data sources, capture process, definitions, coverage, and analytical methods."
related:
  - title: "Men's Soccer Roster Sizes by Division"
    url: /soccer/insights/mens-roster-size/
    status: live
  - title: "Women's Soccer Roster Sizes by Division"
    url: /soccer/insights/womens-roster-size/
    status: live
  - title: "Men's International Composition by Conference"
    url: /soccer/insights/mens-international-conferences/
    status: live
  - title: "Women's International Composition by Conference"
    url: /soccer/insights/womens-international-conferences/
    status: live
  - title: "Men's vs. Women's Roster Comparison"
    url: /soccer/insights/mens-vs-womens-comparison/
    status: live
  - title: "Divisions by the Numbers"
    url: /soccer/insights/division-by-numbers/
    status: live
eleventyComputed:
  sources:
    - "{{ 'soccer' | statSource('2025-26') | safe }}"
    - '<a href="https://www.ncaa.org">NCAA.org</a> — Division membership, program listings, and eligibility rules'
    - '<a href="https://naia.org">NAIA.org</a> — NAIA membership and program information'
    - '<a href="https://nces.ed.gov/ipeds/">U.S. Department of Education IPEDS</a> — Institutional data (enrollment, location, academic profiles)'
cta:
  heading: "See this analysis for every program — in the app"
  text: "RosterWise Soccer gives you program-by-program roster intelligence across every D1, D2, D3, and NAIA men's and women's program. Position depth, class-year gaps, international composition, recruiting pathways, coach tenure, and personalized My RosterFit scoring."
  price: "One payment of $39.99. No subscriptions. No ads. Lifetime access."
---

${toc}

## Our data sources

RosterWise's 2025 college soccer analysis draws from four categories of authoritative sources. We do not use data from third-party recruiting services, aggregator sites, or unverified databases.

**Roster data** comes directly from the official athletics websites of every NCAA and NAIA college soccer program in the United States. These are the same roster pages that coaches, athletes, and families access publicly on each program's athletics site. RosterWise captures the full published roster for every program — every player, every position, every class year, every hometown — from the source of record.

**Division and conference data** comes from [NCAA.org](https://www.ncaa.org) and [NAIA.org](https://naia.org), which maintain the authoritative membership lists for their respective associations. Conference assignments in our dataset reflect the 2025 NCAA season membership as those bodies published it, including the conference moves that took effect for that season.

**Institutional data** — school enrollment, location, academic profiles, and other characteristics — comes from the [U.S. Department of Education's IPEDS database](https://nces.ed.gov/ipeds/), the federal government's comprehensive source for postsecondary institution data.

**Historical context** — such as NCAA championship records — comes from official NCAA and NAIA sources. RosterWise does not use crowd-sourced data, Wikipedia, or unverified aggregators for any factual claims published on this site.

## What we capture

For every player on every roster, RosterWise captures the data published on the program's official athletics website:

- **Position** — the player's listed position (e.g., Midfielder, Defender, Forward, Goalkeeper)
- **Height** — where published by the program
- **Class year** — as designated by the program (Freshman, Sophomore, Junior, Senior, Graduate, Redshirt)
- **Hometown** — the player's listed hometown and state or country
- **Previous school or club** — the high school, club team, or academy listed on the roster entry
- **Jersey number** — where published

Player names are captured for internal data integrity but are not published in any aggregate analysis on this site. RosterWise does not download, store, or publish player photographs. Individual player data is not shared with third parties.

## Capture date and dataset vintage

The figures on this site's soccer pages are computed from the rosters the RosterWise Soccer app ships — the app's own bundle, **{% statBundle "soccer" %}** — for the **2025-26 season** (the 2025 NCAA season). Those rosters were read from official athletics websites between **{% statRead "soccer", "2025-26", "from" %}** and **{% statRead "soccer", "2025-26", "to" %}**. Each figure carries the date its latest roster was read, printed as "Rosters as of …", and the figures are recomputed when the app ships new rosters.

College rosters are living documents. Players commit, transfer, graduate, and depart throughout the academic year. Our analysis represents each program's roster as it stood when it was read. This is a point-in-time snapshot — not a continuously updated feed.

**Settled rosters only.** A program's roster counts once the program has published its roster for the season in full; a provisional roster is left out until it settles. A season is used for a gender only once 95% of that gender's programs have a settled roster in it.

Players who had entered the transfer portal and been removed from the program's published roster when it was read are not included. Incoming recruits who had committed but did not yet appear on the published roster are not included. The data reflects what was published, as published.

## How we define key terms

Clear definitions matter when publishing aggregate statistics. Here's how RosterWise defines the key terms used throughout our analysis.

### Roster member

A roster member is any player listed on the program's official athletics website roster when it was read. This includes active players, redshirt players, and players listed as injured — as long as they appear on the published roster. It excludes coaching staff, support staff, managers, and committed recruits not yet listed.

### International vs. domestic

A player is classified as **international** if their hometown, as listed on the official athletics roster, is outside the United States and its territories.

**Domestic** includes players from the 50 U.S. states, the District of Columbia, Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa, and the Northern Mariana Islands.

Classification is based on the hometown information published on the roster. When a roster lists only a country name (common for international players), that country is used for classification. When a roster lists a city and U.S. state abbreviation, the player is classified as domestic.

### Class year

Class years use the program's published designation. For aggregate analysis, RosterWise normalizes class years into five primary categories: Freshman, Sophomore, Junior, Senior, and Graduate. Redshirt designations (e.g., Redshirt Freshman, Redshirt Sophomore) are grouped with their base class year in most aggregate statistics unless the analysis specifically addresses redshirt distribution.

### Position groups

For soccer, positions are normalized into four groups:

- **Goalkeeper (GK)** — goalkeepers, goal keepers
- **Defender (DEF)** — defenders, center backs, fullbacks, wing backs
- **Midfielder (MID)** — midfielders, central midfielders, attacking midfielders, defensive midfielders
- **Forward (FWD)** — forwards, strikers, attackers, wingers

Players listed at more than one position (e.g., "M/F" or "Midfielder/Forward") count at each position listed, as the RosterWise Soccer app counts them, so position counts add up to a little more than the roster.

### Conference assignment

Each figure uses the division and conference a program held in the figure's season, so a program that changed conferences between the 2024 and 2025 seasons is counted under its 2025-26 conference.

## Coverage and completeness

RosterWise's 2025-26 soccer figures count **{% stat "soccer.2025-26.all.all.programs", "programs" %} programs** with a settled roster, out of {% stat "soccer.2025-26.all.all.programs", "coverage.in_scope" %} in scope — {% statShare "soccer.2025-26.all.all.programs", "coverage.counted", "soccer.2025-26.all.all.programs", "coverage.in_scope" %} — and **{% stat "soccer.2025-26.all.all.programs", "players" %} players**. Men's coverage is {% statShare "soccer.2025-26.m.all.programs", "coverage.counted", "soccer.2025-26.m.all.programs", "coverage.in_scope" %} and women's {% statShare "soccer.2025-26.w.all.programs", "coverage.counted", "soccer.2025-26.w.all.programs", "coverage.in_scope" %}.

### Coverage by division and gender

Programs with a settled 2025-26 roster, and what share of the programs in scope that is:

| Division | Men's Programs | Women's Programs | Total |
|----------|---------------|-----------------|-------|
| D1 | {% stat "soccer.2025-26.m.d1.programs", "programs" %} ({% statShare "soccer.2025-26.m.d1.programs", "coverage.counted", "soccer.2025-26.m.d1.programs", "coverage.in_scope" %}) | {% stat "soccer.2025-26.w.d1.programs", "programs" %} ({% statShare "soccer.2025-26.w.d1.programs", "coverage.counted", "soccer.2025-26.w.d1.programs", "coverage.in_scope" %}) | {% stat "soccer.2025-26.all.d1.programs", "programs" %} |
| D2 | {% stat "soccer.2025-26.m.d2.programs", "programs" %} ({% statShare "soccer.2025-26.m.d2.programs", "coverage.counted", "soccer.2025-26.m.d2.programs", "coverage.in_scope" %}) | {% stat "soccer.2025-26.w.d2.programs", "programs" %} ({% statShare "soccer.2025-26.w.d2.programs", "coverage.counted", "soccer.2025-26.w.d2.programs", "coverage.in_scope" %}) | {% stat "soccer.2025-26.all.d2.programs", "programs" %} |
| D3 | {% stat "soccer.2025-26.m.d3.programs", "programs" %} ({% statShare "soccer.2025-26.m.d3.programs", "coverage.counted", "soccer.2025-26.m.d3.programs", "coverage.in_scope" %}) | {% stat "soccer.2025-26.w.d3.programs", "programs" %} ({% statShare "soccer.2025-26.w.d3.programs", "coverage.counted", "soccer.2025-26.w.d3.programs", "coverage.in_scope" %}) | {% stat "soccer.2025-26.all.d3.programs", "programs" %} |
| NAIA | {% stat "soccer.2025-26.m.naia.programs", "programs" %} ({% statShare "soccer.2025-26.m.naia.programs", "coverage.counted", "soccer.2025-26.m.naia.programs", "coverage.in_scope" %}) | {% stat "soccer.2025-26.w.naia.programs", "programs" %} ({% statShare "soccer.2025-26.w.naia.programs", "coverage.counted", "soccer.2025-26.w.naia.programs", "coverage.in_scope" %}) | {% stat "soccer.2025-26.all.naia.programs", "programs" %} |
| **Total** | **{% stat "soccer.2025-26.m.all.programs", "programs" %}** | **{% stat "soccer.2025-26.w.all.programs", "programs" %}** | **{% stat "soccer.2025-26.all.all.programs", "programs" %}** |

*{% statNote "soccer.2025-26.all.all.programs" %}.*

### Programs left out of the 2025-26 figures

{% statLeftOut "soccer", "2025-26" %}

### Data completeness per field

Not every program publishes every data point for every player. Here is how many players on settled 2025-26 rosters are missing each field the figures use:

| Field | Men's players without it | Women's players without it |
|-------|----------------------|----------|
| Position | {% stat "soccer.2025-26.m.all.position_counts", "aside[no position listed].count" %} | {% stat "soccer.2025-26.w.all.position_counts", "aside[no position listed].count" %} |
| Height | {% stat "soccer.2025-26.m.all.height_by_position", "aside[no height listed].count" %} | {% stat "soccer.2025-26.w.all.height_by_position", "aside[no height listed].count" %} |
| Class year | {% stat "soccer.2025-26.m.all.class_year_mix", "aside[no class year listed].count" %} | {% stat "soccer.2025-26.w.all.class_year_mix", "aside[no class year listed].count" %} |

Out of {% stat "soccer.2025-26.m.all.programs", "players" %} men's and {% stat "soccer.2025-26.w.all.programs", "players" %} women's players. Every player is classified as international or domestic. Height is the least complete field — listed for {% stat "soccer.2025-26.m.all.height_by_position", "height_listed_pct" %} of men's and {% stat "soccer.2025-26.w.all.height_by_position", "height_listed_pct" %} of women's players — because some programs don't publish heights. Height averages are computed only from players whose height is listed.

## How we compute aggregate statistics

RosterWise computes aggregate statistics through a three-step process designed for accuracy and reproducibility.

**Step 1: The players behind a figure.** For each season, division and gender, RosterWise selects the players on settled rosters, leaving out managers and staff and the programs listed above.

**Step 2: The figure.** Each figure — a program count, a roster-size distribution with its median and range, a share, a conference table — is computed from those players by one stored query. Shares are rounded to one decimal, and the counts behind each share are kept.

**Step 3: The record.** Every figure is written to a dated file with its id, value, sample size, the dates its rosters were read, its query and the app bundle it came from. The query runs as-is against that bundle and returns the players the figure was computed from. When the app ships new rosters, the figures are recomputed, and any figure a page cites that moved is listed for review before the page changes.

Every figure on the Insights pages prints from that file by its id, so a page cannot show a number the file does not hold.

## What we don't do

Transparency about our methods includes being clear about what we don't do:

- **We don't estimate or interpolate.** If data is missing — for example, if a program doesn't publish player heights — we leave those players out of height averages rather than guessing. Missing data is documented, not filled in.
- **We don't publish strict rankings where the differences are too small to be meaningful.** When conferences are separated by less than two percentage points in international composition, we describe them as a group rather than ranking them 1st, 2nd, 3rd. A 0.2% gap between two conferences doesn't mean one meaningfully recruits more internationally than the other.
- **We don't publish individual player data.** Aggregate insights on this site describe patterns across programs. Individual player names, hometowns, and other details appear only within the RosterWise app, where they come from publicly available roster pages.
- **We don't share data with third parties.** RosterWise does not sell, license, or share individual player data or program-level data with other companies, recruiting services, or data brokers.

## Limitations and honest caveats

Every dataset has limitations. Here are ours:

- **Roster data reflects what programs publish.** Programs that publish incomplete rosters — for example, listing some players without a position or without a height — have incomplete data in our dataset. We work with what's published.
- **Hometown data is sometimes limited.** Some programs list international players with only a country name rather than a city and country. This is sufficient for international/domestic classification but limits geographic analysis within countries.
- **Graduate students include redshirts and fifth-year players.** The "Graduate" class year category captures a range of situations — true graduate students, fifth-year seniors, and players using additional eligibility. Programs don't always distinguish between these on their roster pages.
- **Transfer portal timing.** A player who entered the transfer portal after their roster was read would still appear on the program's roster in our data. A player who entered the portal and was removed before it was read would not appear. This is inherent to point-in-time data.
- **This is a snapshot, not a continuous feed.** Our analysis represents the 2025-26 season rosters as they stood when they were read, between {% statRead "soccer", "2025-26", "from" %} and {% statRead "soccer", "2025-26", "to" %}. Rosters before and after may differ.

## Every recruit's journey is different

Aggregate statistics describe patterns across programs. They tell you that, on average, D1 men's soccer rosters carry {% stat "soccer.2025-26.m.d1.roster_size", "mean" %} players, or that NAIA men's programs have the highest international percentage of any division. These are real patterns based on real data.

But they don't determine outcomes for any individual recruit.

A program with a higher-than-average international percentage may still be the perfect fit for a domestic recruit. A program with a smaller-than-average roster may offer more playing time. A D3 program with no athletic scholarships may provide a better overall experience than a D1 program with a partial scholarship.

The numbers provide context. The decisions are yours. RosterWise gives families the data to ask better questions and make more informed choices — but no aggregate statistic can replace the personal research, campus visits, coach conversations, and honest self-assessment that every recruiting family needs to do.

## How RosterWise uses this data

RosterWise uses its 2025-26 soccer data in two ways:

**Aggregate insights published on this site.** The [Insights pages](/soccer/insights/mens-roster-size/) present aggregate statistics — roster sizes, international composition, class-year distributions, conference-level comparisons — drawn from the full dataset. These are free, publicly available, and documented with the methodology described on this page.

**Program-by-program analysis in the RosterWise™ Soccer app.** The app provides the same roster intelligence at the individual program level — position depth, class-year gaps, international composition, recruiting pathways, coach tenure, and personalized My RosterFit™ scoring for every D1, D2, D3, and NAIA men's and women's soccer program. The app costs $39.99, one time. No subscriptions, no ads, and access for your athlete's entire recruiting journey.

## Corrections

If we discover an error in published data, we correct it promptly and note the correction with a date. We do not silently update numbers. If you believe you've found an error in our published analysis, please contact us at [support@grobegames.com](mailto:support@grobegames.com).

---

*Figures described here are computed from the 2025-26 rosters in the RosterWise Soccer app's own bundle ({% statBundle "soccer" %}). Analysis by RosterWise (Grobe Games LLC).*

*Updated October 24, 2026: this page now describes how the soccer figures are computed from the app's own rosters — settled rosters only, with players counted at every position listed — in place of the April–May 2026 capture it described before, and its coverage and completeness tables print from those figures.*
