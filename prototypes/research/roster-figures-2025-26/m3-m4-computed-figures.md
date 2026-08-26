# M3 / M4 — computed roster figures

**Season:** 2025-26 (published on the site as "the 2025 season", matching the existing `soccer/insights/` pages).
**Source:** RosterWise roster dataset, `pipeline/data/rosterwise.db`.
**Exclusions:** non-players (managers/staff, `is_non_player=1`) and program-seasons with fewer than 0 rostered players (treated as incomplete scrapes).
**Position tables** additionally require the program to list a position for *every* rostered player, so a partly-unlabelled roster cannot understate a position group.

Capture windows by sport (when the 2025-26 rosters were read):

| Sport | First capture | Last capture |
| --- | --- | --- |
| lacrosse | 2026-06 | 2026-08 |
| soccer | 2026-04 | 2026-08 |
| volleyball | 2026-05 | 2026-08 |
| wrestling | 2026-06 | 2026-08 |

## A. Soccer position groups per roster

Claim under audit: *"most programs carry three to four goalkeepers … midfielders often 8-10, defenders 6-8"* (`soccer/{mens,womens}/guide/goalkeeper-recruiting.md:42`).

### Men's soccer

| Division | Position | Programs | Median | IQR (p25-p75) | Mean | Range |
| --- | --- | --- | --- | --- | --- | --- |
| D1 | Goalkeeper | 204 | 3.0 | 3-4 | 3.5 | 1-8 |
| D1 | Defender | 204 | 9.0 | 8-10 | 8.9 | 3-17 |
| D1 | Midfielder | 204 | 10.0 | 8-12 | 10.1 | 3-18 |
| D1 | Forward | 204 | 6.0 | 5-8 | 6.6 | 2-17 |
| D2 | Goalkeeper | 181 | 4 | 3-4 | 3.9 | 2-8 |
| D2 | Defender | 181 | 10 | 9-12 | 11.0 | 5-28 |
| D2 | Midfielder | 181 | 12 | 9-14 | 12.1 | 3-29 |
| D2 | Forward | 181 | 8 | 6-10 | 8.0 | 1-19 |
| D3 | Goalkeeper | 376 | 3.0 | 3-4 | 3.4 | 1-7 |
| D3 | Defender | 376 | 10.0 | 8-12 | 10.0 | 2-22 |
| D3 | Midfielder | 376 | 11.0 | 9-13 | 11.1 | 3-23 |
| D3 | Forward | 376 | 7.0 | 5-9 | 7.1 | 1-15 |
| NAIA | Goalkeeper | 139 | 4 | 3-4 | 3.8 | 2-10 |
| NAIA | Defender | 139 | 11 | 8-14 | 11.1 | 4-25 |
| NAIA | Midfielder | 139 | 12 | 10-15 | 12.4 | 3-24 |
| NAIA | Forward | 139 | 8 | 5-10 | 7.9 | 1-31 |
| All divisions | Goalkeeper | 900 | 4.0 | 3-4 | 3.6 | 1-10 |
| All divisions | Defender | 900 | 10.0 | 8-12 | 10.1 | 2-28 |
| All divisions | Midfielder | 900 | 11.0 | 9-13 | 11.3 | 3-29 |
| All divisions | Forward | 900 | 7.0 | 5-9 | 7.3 | 1-31 |

**Testing the page's wording against D1 men's programs (n=204):**

- Programs carrying 3-4 goalkeepers: **91.7%** (exactly 3: 48.5%)
- Programs carrying 8-10 midfielders: **46.1%**
- Programs carrying 6-8 defenders: **40.2%**

### Women's soccer

| Division | Position | Programs | Median | IQR (p25-p75) | Mean | Range |
| --- | --- | --- | --- | --- | --- | --- |
| D1 | Goalkeeper | 339 | 3 | 3-3 | 3.1 | 1-5 |
| D1 | Defender | 339 | 8 | 7-10 | 8.4 | 3-14 |
| D1 | Midfielder | 339 | 9 | 7-10 | 8.7 | 1-22 |
| D1 | Forward | 339 | 7 | 6-9 | 7.4 | 1-15 |
| D2 | Goalkeeper | 246 | 3.0 | 3-4 | 3.2 | 1-6 |
| D2 | Defender | 246 | 9.0 | 8-11 | 9.2 | 3-18 |
| D2 | Midfielder | 246 | 10.0 | 8-12 | 10.0 | 2-27 |
| D2 | Forward | 246 | 7.0 | 6-9 | 7.3 | 1-15 |
| D3 | Goalkeeper | 388 | 3.0 | 2-4 | 2.9 | 1-7 |
| D3 | Defender | 388 | 9.0 | 7-10 | 8.7 | 1-17 |
| D3 | Midfielder | 388 | 9.0 | 7-11 | 9.4 | 2-24 |
| D3 | Forward | 388 | 7.0 | 5-8 | 6.5 | 0-14 |
| NAIA | Goalkeeper | 152 | 3.0 | 2-3 | 2.8 | 1-5 |
| NAIA | Defender | 152 | 8.0 | 6-10 | 8.4 | 1-19 |
| NAIA | Midfielder | 152 | 9.0 | 7-12 | 9.3 | 2-20 |
| NAIA | Forward | 152 | 6.0 | 4-8 | 6.1 | 0-17 |
| All divisions | Goalkeeper | 1126 | 3.0 | 2-4 | 3.0 | 1-7 |
| All divisions | Defender | 1126 | 9.0 | 7-10 | 8.7 | 1-19 |
| All divisions | Midfielder | 1126 | 9.0 | 7-11 | 9.3 | 1-27 |
| All divisions | Forward | 1126 | 7.0 | 5-8 | 6.9 | 0-17 |

**Testing the page's wording against D1 women's programs (n=339):**

- Programs carrying 3-4 goalkeepers: **86.4%** (exactly 3: 64.0%)
- Programs carrying 8-10 midfielders: **50.1%**
- Programs carrying 6-8 defenders: **50.7%**

## B. Volleyball position groups per roster

Claim under audit: *"most rosters carry 3-5 OH … typically 3-4 MB … usually 2-3 setters … 1-2 liberos … typically 2-3 opposites … 1-3 DS"* (`blog/how-to-read-a-college-volleyball-roster.md:56-59`).

### Women's volleyball — all divisions (n=1412 programs)

| Position | Programs | Median | IQR (p25-p75) | Mean | Range | Page claims | % of programs inside claimed range |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Outside Hitter | 1412 | 5.0 | 4-6 | 4.9 | 0-12 | 3-5 | 60.2% |
| Middle Blocker | 1412 | 4.0 | 3-5 | 3.8 | 0-10 | 3-4 | 58.7% |
| Setter | 1412 | 3.0 | 2-3 | 2.8 | 0-7 | 2-3 | 70.2% |
| Libero | 1412 | 1.0 | 0-2 | 1.3 | 0-12 | 1-2 | 29.7% |
| Opposite / Right Side | 1412 | 1.0 | 1-2 | 1.6 | 0-6 | 2-3 | 43.4% |
| Defensive Specialist | 1412 | 2.0 | 1-4 | 2.4 | 0-12 | 1-3 | 47.2% |

Libero and defensive specialist are used interchangeably and are not separable: 766 of 1412 programs label anyone a libero, 1068 label someone a defensive specialist. Counted as one back-row group: median **3.5**, IQR 3-4, mean 3.7, range 0-12.

### Men's volleyball — all divisions (n=238 programs)

| Position | Programs | Median | IQR (p25-p75) | Mean | Range | Page claims | % of programs inside claimed range |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Outside Hitter | 238 | 5.0 | 4-7 | 5.6 | 1-13 | 3-5 | 47.1% |
| Middle Blocker | 238 | 4.0 | 3-5 | 4.0 | 1-8 | 3-4 | 51.7% |
| Setter | 238 | 3.0 | 2-3 | 2.7 | 1-6 | 2-3 | 66.0% |
| Libero | 238 | 2.0 | 1-3 | 2.0 | 0-7 | 1-2 | 57.6% |
| Opposite / Right Side | 238 | 2.0 | 1-3 | 2.1 | 0-6 | 2-3 | 58.0% |
| Defensive Specialist | 238 | 0.0 | 0-1 | 0.8 | 0-6 | 1-3 | 33.2% |

Libero and defensive specialist are used interchangeably and are not separable: 209 of 238 programs label anyone a libero, 90 label someone a defensive specialist. Counted as one back-row group: median **3**, IQR 2-4, mean 2.7, range 0-7.

## C. Lacrosse roster size

Claims under audit: men's D1 rosters *"typically around 50+ players"* (`lacrosse/mens/guide/recruiting-timeline.md:135`, `lacrosse/mens/guide/scholarships-after-house-settlement.md:72`); women's D1 *"typically 30-35+ players"* (`lacrosse/womens/guide/scholarships-after-house-settlement.md:69`).

| Population | Programs | Median | IQR (p25-p75) | Mean | Range |
| --- | --- | --- | --- | --- | --- |
| Men's D1 | 77 | 49 | 47-53 | 49.7 | 34-63 |
| Men's D2 | 81 | 44 | 32-52 | 42.8 | 18-72 |
| Men's D3 | 232 | 38.0 | 28-47 | 37.5 | 11-70 |
| Men's NAIA | 28 | 27.0 | 23.75-31.25 | 28.2 | 16-50 |
| Women's D1 | 133 | 34 | 31-37 | 34.0 | 20-46 |
| Women's D2 | 111 | 28 | 21-32 | 26.8 | 13-58 |
| Women's D3 | 274 | 22.0 | 18-27 | 22.5 | 12-40 |
| Women's NAIA | 30 | 20.0 | 17-24.25 | 20.2 | 11-31 |

- D1 men's lacrosse programs at **50+** players: **48.1%** of 77
- D1 women's lacrosse programs at **30+** players: **85.7%** of 133
- D1 women's lacrosse programs in the published **30-35** band: **51.9%**

## D. Sport-agnostic roster size and graduating class

Claims under audit: *"a typical college roster has somewhere between 20 and 35 athletes"* and *"each year, a class of seniors graduates — usually 4 to 8 athletes"* (`guide/late-bloomers.md:95`).

| Sport | Programs | Median | IQR (p25-p75) | Mean | Range |
| --- | --- | --- | --- | --- | --- |
| soccer (men's) | 1014 | 31.0 | 28-36 | 32.7 | 14-82 |
| soccer (women's) | 1225 | 28 | 25-30 | 27.7 | 6-55 |
| volleyball (men's) | 273 | 18 | 14-20 | 17.2 | 6-35 |
| volleyball (women's) | 1608 | 17.0 | 14-19 | 16.7 | 1-44 |
| lacrosse (men's) | 434 | 42.0 | 30-50 | 39.7 | 11-72 |
| lacrosse (women's) | 548 | 26.0 | 20-32 | 26.1 | 11-58 |
| wrestling (men's) | 411 | 29 | 22-36 | 29.4 | 4-70 |
| wrestling (women's) | 181 | 17 | 11-26 | 19.3 | 1-69 |
| **all four sports** | 5694 | 25.0 | 17-31 | 25.6 | 1-82 |

- Programs whose roster falls in the published **20-35** band: **51.6%** of 5694

| Departing-class measure | Programs | Median | IQR (p25-p75) | Mean | Range | % in published 4-8 band |
| --- | --- | --- | --- | --- | --- | --- |
| Seniors (SR + RS-SR) | 5694 | 4.0 | 2-7 | 4.6 | 0-22 | 47.1% |
| Seniors + graduate students | 5694 | 5.0 | 3-7 | 5.1 | 0-24 | 47.6% |

## E. House-settlement walk-on math

Claim under audit: *"a program with 9.9 scholarship equivalencies might carry 30 players — meaning roughly 20 walk-ons"* (`guide/house-settlement.md:137`).

| Population | Programs | Median | IQR (p25-p75) | Mean | Range |
| --- | --- | --- | --- | --- | --- |
| D1 men's soccer | 213 | 28 | 27-30 | 29.1 | 15-58 |

**The second half of this claim is not computable.** RosterWise holds no scholarship or athletic-aid data at the player level, so the number of walk-ons on any roster cannot be derived from our dataset. See the recommendation table.

## F. M4 — soccer international composition

Claim under audit: *"the national average for men's D1 soccer is roughly 20-25% international"* and *"some D1 and D2 programs … 30% or more"* and *"in women's soccer, international percentages tend to be lower across the board"* (`soccer/guide/recruiting-myths.md:88`).

| Population | Programs | Players | International | Share of all roster spots | Median program share | Program range | % of programs at 30%+ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Men's D1 | 213 | 6203 | 2099 | 33.8% | 33.3% | 0.0%-92.9% | 56.3% |
| Men's D2 | 202 | 7151 | 2670 | 37.3% | 38.1% | 0.0%-100.0% | 63.9% |
| Men's D3 | 406 | 12949 | 1448 | 11.2% | 5.7% | 0.0%-87.0% | 8.6% |
| Men's NAIA | 191 | 6814 | 3287 | 48.2% | 46.4% | 0.0%-100.0% | 69.6% |
| Men's all divisions | 1014 | 33177 | 9545 | 28.8% | 21.5% | 0.0%-100.0% | 41.2% |
| Women's D1 | 349 | 9683 | 1203 | 12.4% | 9.1% | 0.0%-77.8% | 10.9% |
| Women's D2 | 260 | 7708 | 870 | 11.3% | 5.6% | 0.0%-100.0% | 11.2% |
| Women's D3 | 417 | 11333 | 244 | 2.2% | 0.0% | 0.0%-54.2% | 0.2% |
| Women's NAIA | 197 | 5154 | 1029 | 20.0% | 11.1% | 0.0%-100.0% | 25.4% |
| Women's all divisions | 1225 | 33916 | 3365 | 9.9% | 3.8% | 0.0%-100.0% | 9.7% |
