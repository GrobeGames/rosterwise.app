# M3 / M4 — computed roster figures

**Season:** 2025-26 (published on the site as "the 2025 season", matching the existing `soccer/insights/` pages).
**Source:** RosterWise roster dataset, `pipeline/data/rosterwise.db`.
**Exclusions:** non-players (managers/staff, `is_non_player=1`) and program-seasons with fewer than 12 rostered players (treated as incomplete scrapes).
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
| D3 | Goalkeeper | 386 | 3.0 | 2-4 | 2.9 | 1-7 |
| D3 | Defender | 386 | 9.0 | 7-10 | 8.7 | 3-17 |
| D3 | Midfielder | 386 | 9.0 | 7-11 | 9.4 | 2-24 |
| D3 | Forward | 386 | 7.0 | 5-8 | 6.5 | 1-14 |
| NAIA | Goalkeeper | 152 | 3.0 | 2-3 | 2.8 | 1-5 |
| NAIA | Defender | 152 | 8.0 | 6-10 | 8.4 | 1-19 |
| NAIA | Midfielder | 152 | 9.0 | 7-12 | 9.3 | 2-20 |
| NAIA | Forward | 152 | 6.0 | 4-8 | 6.1 | 0-17 |
| All divisions | Goalkeeper | 1124 | 3.0 | 2-4 | 3.0 | 1-7 |
| All divisions | Defender | 1124 | 9.0 | 7-10 | 8.7 | 1-19 |
| All divisions | Midfielder | 1124 | 9.0 | 7-11 | 9.3 | 1-27 |
| All divisions | Forward | 1124 | 7.0 | 5-8.25 | 6.9 | 0-17 |

**Testing the page's wording against D1 women's programs (n=339):**

- Programs carrying 3-4 goalkeepers: **86.4%** (exactly 3: 64.0%)
- Programs carrying 8-10 midfielders: **50.1%**
- Programs carrying 6-8 defenders: **50.7%**

## B. Volleyball position groups per roster

Claim under audit: *"most rosters carry 3-5 OH … typically 3-4 MB … usually 2-3 setters … 1-2 liberos … typically 2-3 opposites … 1-3 DS"* (`blog/how-to-read-a-college-volleyball-roster.md:56-59`).

### Women's volleyball — all divisions (n=1300 programs)

| Position | Programs | Median | IQR (p25-p75) | Mean | Range | Page claims | % of programs inside claimed range |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Outside Hitter | 1300 | 5.0 | 4-6 | 5.0 | 0-12 | 3-5 | 60.3% |
| Middle Blocker | 1300 | 4.0 | 3-5 | 3.9 | 0-10 | 3-4 | 60.8% |
| Setter | 1300 | 3.0 | 2-3 | 2.9 | 0-7 | 2-3 | 71.6% |
| Libero | 1300 | 1.0 | 0-3 | 1.4 | 0-12 | 1-2 | 28.4% |
| Opposite / Right Side | 1300 | 2.0 | 1-2 | 1.6 | 0-6 | 2-3 | 45.2% |
| Defensive Specialist | 1300 | 2.0 | 1-4 | 2.5 | 0-12 | 1-3 | 45.3% |

### Men's volleyball — all divisions (n=211 programs)

| Position | Programs | Median | IQR (p25-p75) | Mean | Range | Page claims | % of programs inside claimed range |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Outside Hitter | 211 | 6 | 4.5-7 | 6.0 | 2-13 | 3-5 | 44.1% |
| Middle Blocker | 211 | 4 | 3-5 | 4.2 | 1-8 | 3-4 | 53.6% |
| Setter | 211 | 3 | 2-3 | 2.8 | 1-6 | 2-3 | 70.1% |
| Libero | 211 | 2 | 1-3 | 2.1 | 0-7 | 1-2 | 56.9% |
| Opposite / Right Side | 211 | 2 | 1-3 | 2.2 | 0-6 | 2-3 | 59.7% |
| Defensive Specialist | 211 | 0 | 0-1 | 0.8 | 0-6 | 1-3 | 30.8% |

## C. Lacrosse roster size

Claims under audit: men's D1 rosters *"typically around 50+ players"* (`lacrosse/mens/guide/recruiting-timeline.md:135`, `lacrosse/mens/guide/scholarships-after-house-settlement.md:72`); women's D1 *"typically 30-35+ players"* (`lacrosse/womens/guide/scholarships-after-house-settlement.md:69`).

| Population | Programs | Median | IQR (p25-p75) | Mean | Range |
| --- | --- | --- | --- | --- | --- |
| Men's D1 | 77 | 49 | 47-53 | 49.7 | 34-63 |
| Men's D2 | 81 | 44 | 32-52 | 42.8 | 18-72 |
| Men's D3 | 231 | 38 | 28-47 | 37.6 | 12-70 |
| Men's NAIA | 28 | 27.0 | 23.75-31.25 | 28.2 | 16-50 |
| Women's D1 | 133 | 34 | 31-37 | 34.0 | 20-46 |
| Women's D2 | 111 | 28 | 21-32 | 26.8 | 13-58 |
| Women's D3 | 274 | 22.0 | 18-27 | 22.5 | 12-40 |
| Women's NAIA | 29 | 20 | 17-25 | 20.6 | 14-31 |

- D1 men's lacrosse programs at **50+** players: **48.1%** of 77
- D1 women's lacrosse programs at **30+** players: **85.7%** of 133
- D1 women's lacrosse programs in the published **30-35** band: **51.9%**

## D. Sport-agnostic roster size and graduating class

Claims under audit: *"a typical college roster has somewhere between 20 and 35 athletes"* and *"each year, a class of seniors graduates — usually 4 to 8 athletes"* (`guide/late-bloomers.md:95`).

| Sport | Programs | Median | IQR (p25-p75) | Mean | Range |
| --- | --- | --- | --- | --- | --- |
| soccer | 2237 | 29 | 26-33 | 30.0 | 12-82 |
| volleyball | 1699 | 17 | 15-19 | 17.5 | 12-44 |
| lacrosse | 980 | 31.0 | 22-40 | 32.1 | 12-72 |
| wrestling | 519 | 28 | 21-35 | 28.9 | 12-70 |
| **all four sports** | 5435 | 26 | 18-32 | 26.4 | 12-82 |

- Programs whose roster falls in the published **20-35** band: **54.1%** of 5435

| Departing-class measure | Programs | Median | IQR (p25-p75) | Mean | Range | % in published 4-8 band |
| --- | --- | --- | --- | --- | --- | --- |
| Seniors (SR + RS-SR) | 5435 | 4 | 2-7 | 4.8 | 0-22 | 49.3% |
| Seniors + graduate students | 5435 | 5 | 3-7 | 5.4 | 0-24 | 49.7% |

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
| Women's D3 | 415 | 11318 | 242 | 2.1% | 0.0% | 0.0%-54.2% | 0.2% |
| Women's NAIA | 197 | 5154 | 1029 | 20.0% | 11.1% | 0.0%-100.0% | 25.4% |
| Women's all divisions | 1223 | 33901 | 3363 | 9.9% | 3.8% | 0.0%-100.0% | 9.7% |

---

## G. Method checks

**Our method reproduces the already-published `soccer/insights/` numbers.**
Applying that page's stated exclusion of Mercyhurst and New Haven (mid-transition
D2→D1) to D1 men's soccer gives 211 programs, mean roster 28.9, range 15-42 —
exactly the figures published on `soccer/insights/mens-roster-size.md`. The same
filter reproduces its 33.6% D1 men's international share (33.8% now, after 23
programs were re-scraped in August 2026). So the figures in this document are
computed the same way the site's existing insight pages were.

**The libero / defensive-specialist split is a labeling artifact, not a real
distribution.** Of 1,300 fully-positioned women's volleyball programs, only 707
label anybody a libero while 983 label somebody a defensive specialist — the two
terms are used interchangeably from program to program. The separate `L` and
`DS` medians in section B are therefore **not publishable**. The defensible
figure is the combined back-row group:

| Population | Programs | Median | IQR (p25-p75) | Mean | Range |
| --- | --- | --- | --- | --- | --- |
| Women's volleyball, libero + DS | 1300 | 4 | 3-5 | 3.8 | 0-12 |
| Men's volleyball, libero + DS | 211 | 3 | 2-4 | 2.9 | 1-7 |

**International flag integrity.** 12,756 of 12,910 players flagged international
in 2025-26 soccer (98.8%) carry a resolved country code; the top countries for
D1 men are England/GB (232), Canada (230), Germany (188), Spain (161), France
(102). The flag is not being set on unresolved hometown strings.

---

## H. Verdict per claim

| # | Claim as published | Computed reality (2025-26) | Verdict |
| --- | --- | --- | --- |
| 1 | M soccer: "most programs carry three to four goalkeepers" | D1 median **3**, IQR 3-4; **91.7%** of 204 D1 programs carry 3-4 | **Correct** — attribute it |
| 2 | M soccer: "midfielders often 8-10" | D1 median **10**, IQR **8-12**; only 46.1% fall in 8-10 | **Understated** — widen to 8-12 |
| 3 | M soccer: "defenders 6-8" | D1 median **9**, IQR **8-10**; only 40.2% fall in 6-8 | **Wrong** — the true band is 8-10 |
| 4 | W soccer: "most programs carry three goalkeepers" | D1 median **3**, IQR 3-3; 64.0% carry exactly 3 | **Correct** — attribute it |
| 5 | W soccer: "midfielders often 8-10" | D1 median **9**, IQR **7-10** | **Slightly off** — the band is 7-10 |
| 6 | W soccer: "defenders 6-8" | D1 median **8**, IQR **7-10** | **Understated** — the band is 7-10 |
| 7 | VB: "OH … most rosters carry 3-5" | W median **5**, IQR **4-6** | **Understated** — the band is 4-6 |
| 8 | VB: "MB … typically 3-4" | W median **4**, IQR **3-5** | **Close** — 3-5 is the honest band |
| 9 | VB: "S … usually 2-3" | W median **3**, IQR **2-3** | **Correct** — attribute it |
| 10 | VB: "L … 1-2 on the roster" | Not separable from DS (see §G) | **Cut the split** — publish combined back-row: median 4, IQR 3-5 |
| 11 | VB: "RS/OPP … typically 2-3" | W median **2**, IQR **1-2** | **Overstated** — the band is 1-2 |
| 12 | VB: "DS … 1-3 on the roster" | Not separable from L (see §G) | **Cut the split** — fold into back-row figure |
| 13 | M lacrosse D1: "typically around 50+ players" | Median **49**, IQR **47-53**; 48.1% of 77 are at 50+ | **Marginally overstated** — say median 49, IQR 47-53 |
| 14 | W lacrosse D1: "typically 30-35+ players" | Median **34**, IQR **31-37** | **Close** — say median 34, IQR 31-37 |
| 15 | "a typical college roster has 20 to 35 athletes" | Across 5,435 program-seasons in four sports, median **26**, IQR 18-32; 54.1% inside 20-35. Varies hugely by sport: volleyball median 17, soccer 29, lacrosse 31, wrestling 28 | **Misleading as a single band** — replace with per-sport figures |
| 16 | "a class of seniors graduates — usually 4 to 8 athletes" | Median **4**, IQR **2-7** (seniors incl. redshirt seniors); 49.3% inside 4-8 | **Overstated** — the band is 2-7, median 4 |
| 17 | "a program with 9.9 equivalencies might carry 30 players" | D1 men's soccer median **28**, IQR 27-30 | **Close** — use 28 |
| 18 | "…meaning roughly 20 walk-ons had roster spots" | **Not computable.** RosterWise holds no player-level scholarship or aid data | **Cut** — no data supports it |
| 19 | "national average for men's D1 soccer is roughly 20-25% international" | **33.8%** of D1 men's roster spots (2,099 of 6,203 across 213 programs); median program 33.3% | **Wrong, and materially so** — off by 9-14 points |
| 20 | "some D1 and D2 programs — 30% or more of their roster" | **56.3%** of D1 and **63.9%** of D2 men's programs are at 30%+ | **Badly understated** — "some" is actually the majority |
| 21 | "in women's soccer, international percentages tend to be lower across the board" | Confirmed at every division: D1 12.4% vs 33.8%, D2 11.3% vs 37.3%, D3 2.1% vs 11.2%, NAIA 20.0% vs 48.2% | **Correct** — attribute it |
