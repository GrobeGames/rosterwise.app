# RosterWise Lacrosse — what the app actually shows (ground truth, 2026-10-09)

**Purpose.** Standards §3: descriptions of RosterWise's own product are sourced from the product
itself. This file is that source for every lacrosse page on rosterwise.app. Every statement below is
read from code or from the app's bundled database, cited by file:line or by a quoted SQL query with
its result. Anything that could not be established is marked **UNDETERMINED**.

**What was read (read-only; nothing built, run, or modified):**

- `app-lacrosse/` at its checked-out `main` — `RosterWiseLacrosse/Config/LacrosseSportConfig.swift`
  (abbreviated **LSC** below), `RosterWiseLacrosse/Views/LacrosseFieldView.swift` (**LFV**),
  `RosterWiseLacrosse/RosterWiseLacrosseApp.swift`, `docs/app-store-connect-setup.md`,
  `release/whats-new.txt`, and the bundled DB `RosterWiseLacrosse/Resources/rosterwise.db`
  (file dated 2026-09-26; `bundle_meta.anchor_season = 2025-26`, retained seasons 2022-23 … 2026-27).
- `RosterWiseCore/` at its checked-out `main` (`CORE_VERSION.md` in app-lacrosse records Core
  `c96f29a`; the checkout may be newer — **the code read is the current Core checkout, which is what
  the next build compiles against**). Paths below are relative to
  `RosterWiseCore/Sources/RosterWiseCore/` unless they start with `RosterWiseCore/`.
- `RosterWiseCore/CLAUDE.md` → "RosterFit — the rules that are not obvious" (lines 125-257).
- `pipeline/src/rosterwise/normalize.py` (international classification only).

**Caveat on "shows".** I read what the code renders; I did not run the app. Where a view is gated
(for example, a section that renders nothing when the data is empty, or a section that needs a My Fit
profile), the gate is stated.

---

## 1. Positions

**Men's:** Attack (ATT), Midfield (MID), Long-Stick Midfielder (LSM), Face-off (FO), Defense (DEF),
Goalie (GOAL). **Women's:** Attack, Midfield, Defense, Goalie.

- Taxonomies: LSC:28-35 (men's), LSC:37-42 (women's); ordered codes LSC:50-54
  (`["ATT","MID","LSM","FO","DEF","GOAL"]` men's, `["ATT","MID","DEF","GOAL"]` women's).
- The app's own label for the face-off position is **"Face-off"** (LSC:24, 33; LFV:265). "FOGO"
  appears only as an in-app glossary term that points at it: LSC:491 — "FOGO … tracked here as the
  Face-off (FO) position."
- **SSDM is NOT an app position.** No SSDM code exists in either taxonomy (LSC:19-54) or in the DB's
  `sports.position_taxonomy_json` (`{"ATT","DEF","FO","GOAL","LSM","MID"}`). Rosters that list SSDM are
  folded into MID or DEF. On the rosters the app displays:

  ```sql
  SELECT p.gender, pl.position_normalized, COUNT(*) n
  FROM players pl JOIN programs p ON p.id=pl.program_id
  JOIN program_seasons ps ON ps.program_id=pl.program_id AND ps.is_effective=1
       AND ps.roster_season IS pl.roster_season
  WHERE pl.position_raw LIKE '%SSDM%' OR pl.position_raw LIKE '%short%stick%'
  GROUP BY 1,2;
  -- M|DEF|116   M|FO|2   M|LSM|5   M|MID|300
  ```
- **"Draw specialist" / draw control is NOT an app position.** LSC:492 (in-app glossary): "Draw
  Control — … a midfield skill, not a separate roster position." Rosters that list a draw specialist
  are folded into another position. Same query with `position_raw LIKE '%draw%' OR … '%/DS%' OR 'DS%'`:
  `W|ATT|10  W|DEF|3  W|MID|19`.
- **LSM and Face-off ARE app positions, men's only** (LSC:23-24, 44-47). Players on displayed rosters
  by normalized position (same join, grouped by gender and position):
  M: MID 6,447 · DEF 4,063 · ATT 3,304 · GOAL 1,483 · FO 966 · LSM 619 · blank 504;
  W: MID 4,441 · ATT 4,250 · DEF 4,158 · GOAL 1,389 · blank 257.
  (These are all retained seasons' effective rosters joined to `program_seasons.is_effective = 1`;
  they are evidence of the taxonomy in use, not published figures.)

## 2. Position-depth view — YES, three of them, on every program page with a roster

Program page section order: `Views/Explore/ProgramDetailView.swift:529-576`.

1. **"Position Depth" field chart** (lacrosse-specific). LFV:1-10, 27 (`"\(roleLabel) Depth"`;
   `roleLabel` defaults to "Position", `Environment/SportContext.swift:700`), wired in
   `RosterWiseLacrosseApp.swift:109-117` and placed at `ProgramDetailView.swift:534-543`.
   A half-field diagram with one bubble per position showing **the count of players at that
   position** (LFV:175-201, 207-214), colored **Open / Competitive / Stacked** (legend LFV:39-43):
   goalie and face-off by absolute count (≤2 Open, 3 Competitive, 4+ Stacked); LSM ≤2 / 3-4 / 5+;
   attack, midfield and defense relative to the average of those three groups on the same roster
   (<70% of it Open, >130% Stacked) — LFV:235-253. LSM and Face-off bubbles appear only when the
   roster has them (LFV:19-20, 176, 190).
2. **"Analytics" card** (`ProgramDetailView.swift:1054-1061`):
   - **"Roster Composition"** stacked bar chart — x-axis class year (FR, SO, JR, SR, GR, Other; redshirt
     years fold into their base year), each bar stacked by position (1122-1247).
   - **"Roster Details"** — "By Position" player counts using the gender's labels, with a "Not Listed"
     row, and "By Class Year" counts including RS-FR … RS-SR and N/A (1290-1367).
3. **"Positions Opening Next Season" + "Roster Depth"** (`Views/Explore/ClassYearGapView.swift`,
   placed at `ProgramDetailView.swift:548-556`; shown with or without a profile, ClassYearGapView:3-6):
   per position, how many seniors and graduate students depart after this season ("N leaving",
   "M return") — 127-132, 165-185; departing classes are SR, RS-SR, GR
   (`Services/RosterDepthBuckets.swift:42`). "Roster Depth" is a position × class-year heatmap with
   columns FR, SO, JR, SR, GR (254-286). With a profile, a personalized note for the user's position;
   for recruits 2+ years out it shows a horizon note instead of an opportunity claim (8-12, 223).

Position-depth is **per program, per displayed roster**. It does not show playing rotation, starters,
or a program's "typical" rotation — nothing in the code reads either.

## 3. International data

- **Per program — YES, a count and a percentage.** "Recruiting Pipeline" card →
  "International Players" with the count and the percentage of the roster
  (`ProgramDetailView.swift:2096-2108`), with the fine print "Based on hometown/country, not
  recruiting pathway…" (2111).
- **Countries — YES.** "Where Players Come From" (`Views/Explore/GeographicRecruitingMapView.swift`,
  title at 137) lists international players **by country name** with counts (355-381), shows the number
  of distinct countries (206-210), and pins them on a map at country centroids (1-5).
  Conference profile: "International Players" percentage and "Top Countries" (up to 8)
  (`Views/Explore/ConferenceProfileView.swift:613-650`). Division Explorer: "Average international
  roster percentage by conference" (`Views/Explore/DivisionExplorerView.swift:636`). Explore hub
  headline stat "Countries" (`Views/Explore/ExploreHubView.swift:408`). Connections tab can search
  players by country (`Views/Connections/ConnectionsTabView.swift:259-271`).
- **Canadian provinces — NO aggregation.** International players are grouped by `country_code` only
  (GeographicRecruitingMapView.swift:360-366); no view groups by province. The province survives only
  as text inside an individual player's hometown line in the roster list, when the school published
  it — `DBPlayer.locationFormatted` (`Database/Models/DBPlayer.swift:82-99`) renders hometown +
  `state_or_country`, and the DB holds e.g. `Ontario` 406, `Canada` 318, `British Columbia` 191,
  `Alberta` 105 for `country_code='CA'` (all seasons).
- Classification: a player counts as international only on a positive non-US verdict from the roster's
  location field; an unclear entry counts as **not** international
  (`pipeline/src/rosterwise/normalize.py:1047-1066`, ladder at 972-996).
- Programs carrying an `international_pct`: `SELECT gender, COUNT(*), SUM(international_pct IS NOT NULL)
  FROM programs GROUP BY gender;` → `M|440|438`, `W|558|556`.

## 4. Geography, pathways, transfers, coach tenure, class-year gaps

- **Geography / hometown — YES.** "Where Players Come From" (`GeographicRecruitingMapView.swift`):
  map pins by state (domestic) and country (international); a list of states and countries with
  player counts; count of distinct states and countries (195-210); a footprint pill "Local recruiting" /
  "Regional recruiting" / "National recruiting" plus "International" when ≥10% and ≥2 players
  (227-241; `Services/RecruitingFootprint.swift:48-53, 98-99`). Each player's hometown is in the roster
  list (`Views/Explore/PlayerRowView.swift:41-56`). With a profile: players from the user's city,
  state or high school on this roster (`Views/Explore/HometownConnectionView.swift:1-4`).
  Connections tab and Hometown Leaderboard search across programs (`ExploreHubView.swift:318-320`;
  `Views/Explore/HometownLeaderboardView.swift:1-4`).
- **Recruiting pathways — YES.** "Recruiting Pipeline" card (`ProgramDetailView.swift:1977-2093`):
  bar chart of players by pathway — Club, Prep School, High School, International, Online School,
  College Transfer, JUCO Transfer, Unknown (LSC:82-93) — "based on last school listed on roster"
  (2090). A banner says when a school lists only high schools (1998). **Not** a view of the summer
  tournament circuit or showcases — nothing in the code reads events.
- **Transfers — YES, but NOT "transfer portal activity."** "Transfer Pipeline"
  (`Views/Explore/TransferTrackerView.swift:16-63`): players on the roster whose school-published
  roster lists a previous college — count, "% of the roster transferred from another program", the
  source schools with counts, and a "Transfer-Friendly Program" badge at ≥25%. The year-over-year
  "What changed" section states outright that it observed "a roster page, not a transfer portal"
  (`Theme/Components/RWRosterDeltaSection.swift:16-18`). Division Explorer: "Transfer Flow by Division"
  (`DivisionExplorerView.swift:105, 423`). The app reads no transfer-portal data.
- **Year-over-year roster change — YES, gated.** "What changed": this season's roster against the
  last one, position-group size changes, "no longer listed" counts, no names; renders only when both
  seasons are settled (`RWRosterDeltaSection.swift:1-35`).
- **Coach tenure — YES.** Coaching Staff section (`ProgramDetailView.swift:1471-1660`): head coach(es)
  and assistants with name and title; for head coaches only, a tenure badge "Nth season (YYYY-YY)" or
  "Incoming (YYYY)" and a stage label — **New Era** (1st season), **Developing** (2nd-4th),
  **Building** (5th-6th), **Established** (7th-11th), **Program Pillar** (12th+), **Incoming** —
  only when a start year is known (`Database/Models/DBCoach.swift:100-131`); interim and co-head
  badges; "About the Coach" bio summary when available (1625-1644). Conference profile: average
  tenure, longest, newest (`ConferenceProfileView.swift:541-575`). Assistant tenure is not shown.
  Coverage: `SELECT is_head_coach, COUNT(*), SUM(start_year IS NOT NULL), SUM(bio_summary IS NOT NULL
  AND bio_summary<>'') FROM coaches GROUP BY 1;` → head coaches `1|996|976|357`; assistants
  `0|2869|1|0`. Program record is shown as the most recent completed season's, labeled
  ("Record (2025-26)", `ProgramDetailView.swift:678-680`); no record under the current coach.
- **Height by position — YES.** "Height by Position" section on the program page
  (`ProgramDetailView.swift:1814`). Heights on displayed rosters: M 15,349 of 17,386 players,
  W 12,229 of 14,495 (same effective-season join as §1).
- **Class-year gaps — YES** (see §2.3): departures by position next season and the position ×
  class-year heatmap.

## 5. RosterFit

**Core engine:** seven components, in this order — Position Need, Academic Match, Roster
Composition, Competitive Level, Height Fit, Geographic Fit, Financial Fit
(`Services/FitScoreService.swift:339-342`, names 349-357, built 417-423).

**Lacrosse:**

- **Competitive Level is hidden** for both genders — LSC:236 `hiddenFitComponentIDs =
  ["competitive_level"]`; removed from scoring and the breakdown at FitScoreService.swift:450. Reason
  in code: no club tier exists to grade in lacrosse (LSC:199-235). Its "Red = capped at 59" rule
  therefore never applies in lacrosse (FitScoreService.swift:533-542).
- **Women's Roster Composition weight is 0** (LSC:287-288) and a zero-weight component is removed
  from scoring and the breakdown (FitScoreService.swift:450; `Environment/SportContext.swift:471-480`).
- **Standard weights** (LSC:283-289; each sums to 100):

  | Component | Men's | Women's |
  | --- | --- | --- |
  | Position Need | 28 | 30 |
  | Academic Match | 20 | 20 |
  | Roster Composition | 6 | 0 (removed) |
  | Competitive Level | 0 (hidden) | 0 (hidden) |
  | Height Fit | 6 | 6 |
  | Geographic Fit | 24 | 26 |
  | Financial Fit | 16 | 18 |

  → **men's lacrosse scores six components, women's five**, under the standard weights.
- Users can change the weights (Settings › My RosterFit™ › Customize Score Weights —
  `Views/More/FitScoreExplanationView.swift:151-153`; `Views/More/FitWeightsEditorView.swift`).
  A custom-weighted score is marked; zeroing a component removes it and any cap it carries
  (`RosterWiseCore/CLAUDE.md:182-190`).
- **What each component compares** (FitScoreService.swift):
  - Position Need (572-856): needs the recruit's position and graduation year. For the next intake
    after the roster observed: how many at the position depart by the recruit's entry and how many
    remain, against per-position thresholds (821-840; LSC:119-130). Further out: the program's typical
    annual intake at the position = players at the position ÷ 4 (÷ 2 at NJCAA), against a
    per-position, per-gender cut (767-788; LSC:158-170). If players with no published class year
    would change the answer, it is not graded (804-818).
  - Academic Match (982-1128): the recruit's ACT/SAT against the school's published 25th/50th/75th
    percentiles (IPEDS); open-admission schools rate Green (1011).
  - Roster Composition (1445-1487): domestic recruit — ≥70% domestic Green, 50-70% Yellow, <50% Red;
    international recruit — ≥25% international Green, 10-25% Yellow, <10% Red. Men's only.
  - Height Fit (892-977): the recruit's height against the average and spread of published heights at
    the position (needs ≥3, else a named proxy group or not graded, 900-917); for DEF, LSM and GOAL
    only being shorter counts against (LSC:139-143).
  - Geographic Fit (1155-1241): with a distance preference — miles from home (Green within, Yellow up
    to 1.5×, Red beyond); with "distance is not a factor" — the program's recruiting footprint: 3+
    players from the recruit's state Green, 1-2 Yellow, none but 3+ from the region Yellow, else Red.
  - Financial Fit (1316-1422): published sticker tuition (in-state if the recruit's state matches,
    else out-of-state) against the recruit's maximum: within Green, ≤25% over Yellow, more Red; aid
    not included (1384-1391). "No limit" → Green, "cost is not a limiting factor" (1393-1399).
- **How it combines:** Green 5 / Yellow 2.5 / Red 1, weighted average scaled to 0-100 (525).
  **Fixed denominator:** a component that cannot be verified still counts at full weight at a neutral
  value, so missing data neither raises nor lowers the basis (501-510; `RosterWiseCore/CLAUDE.md:
  135-151`). Not scored at all when the program has no roster (485-499) or less than half the weight
  is verified (512-522). **Caps:** 2 Red components → max 49; 3+ → max 35; only verified Reds count
  (528-548). Every score is shown with "X of Y factors scored" (`Theme/Components/RWFitScoreBadge.swift:118`).
- **There is no "Pathway Alignment" and no "Division Level" component** — neither id exists in
  FitScoreService.swift:339-342. Pathway data is shown as information only (1426-1438).

## 6. Program counts

```sql
SELECT gender, division, SUM(program_status='active') active,
       SUM(program_status<>'active') non_active, COUNT(*) total
FROM programs GROUP BY gender, division ORDER BY gender, division;
-- M|D1|77|0|77   M|D2|81|0|81   M|D3|233|5|238   M|NAIA|27|1|28   M|NJCAA|16|0|16
-- W|D1|133|0|133 W|D2|112|1|113 W|D3|272|10|282  W|NAIA|29|1|30
SELECT COUNT(*) FROM programs;  -- 998
```

- **998 program rows: 440 men's, 558 women's.** 980 are `active` (434 men's, 546 women's); 18 are
  discontinued (16), departed (1) or suspended (1), all with `status_year = 2026`.
- **What the app itself counts:** the Explore hub "Programs" stat counts every row for the selected
  gender with no status filter (`Database/DatabaseManager.swift:2095-2139`, comment 2097-2111).
  Running that query: `M|440 programs`, `W|558 programs`.
- Programs with a displayed roster (effective season, ≥1 player, not discontinued/departed):
  M 433, W 547. Displayed season: men's 357 × 2025-26, 77 × 2026-27, 4 older; women's 395 × 2025-26,
  153 × 2026-27, 8 older.
- **The app's own copy:** "990+ Programs" (LSC:306), "Every NCAA D1/D2/D3, NAIA, and NJCAA lacrosse
  program" (LSC:307), "Access all 990+ programs, fit scores, and roster analysis" (LSC:308).
- No NJCAA women's programs (correct — NJCAA discontinued it; LSC:377-397).

## 7. Things a page implies that the app does not show

- **Program-level scholarship investment / funding** — no data, no view. "Scholarship" appears only in
  division-level Resources copy (`Views/More/ResourcesView.swift:193-246`; LSC:447-457).
- **Transfer-portal activity** — no portal data (§4).
- **Canadian provinces as a breakdown** — not aggregated (§3).
- **SSDM and draw specialist as positions** — not app positions (§1).
- **Playing rotation / starters** — not modeled (§2).
- **Pathway analysis of the summer tournament circuit or showcases** — not modeled (§4).
- **"Eight factors," "Pathway Alignment," "Division Level"** — not in the engine (§5).
- **"More than a thousand programs"** — the DB holds 998 (§6).
- **"We don't publish the exact weights"** — the app shows each component's weight and lets users
  change it (§5).
- **Head-coach stage labels** — a methodology page says "we don't assign a 'good' or 'bad' label to
  any tenure length." True of good/bad, but the app does attach a stage label to every head coach
  with a known start year (§4); the page omitted it.

## UNDETERMINED

- Where the pipeline gets coach start years (the coach-tenure page says "publicly available coaching
  biographies"). Not traced; left as written.
- Whether the free tier gates any of these views beyond the 3-program limit
  (`docs/app-store-connect-setup.md:108`). Not traced; no page relies on it.
- The live App Store listing and price. Only the repo's own listing copy and $39.99 IAP were read
  (`docs/app-store-connect-setup.md:112, 140, 183-217`); the live store page was not fetched.

## Discrepancies inside the app's own copy (report only — nothing changed)

1. **App Store description lists "competitive level" as a RosterFit input** —
   `docs/app-store-connect-setup.md:188` ("position need, competitive level, academics, roster
   composition, size fit, geography, and finances"). Competitive Level is hidden in lacrosse (LSC:236),
   and roster composition is not scored for women's (LSC:287-288).
2. **In-app "How It Works" uses the men's numbers for both genders.** It says the score is
   "calculated from \(activeFitComponentCount) components" (`FitScoreExplanationView.swift:47`),
   where `activeFitComponentCount = 7 − hidden = 6` (`Environment/SportContext.swift:724`) — but
   women's scores 5. It prints each weight from `sportConfig.defaultFitWeights`
   (`FitScoreExplanationView.swift:61`), which is the **men's** table (LSC:266), and filters only hidden
   components, not zero-weighted ones (292) — so a women's user sees Roster Composition at 6% and
   every other weight at the men's value.
3. **In-app "When Data Is Missing" describes the retired renormalising arithmetic** —
   `FitScoreExplanationView.swift:105-109` says unverifiable components are "left out of the score
   entirely" and "the remaining ones share out the missing weight." The engine does the opposite: fixed
   denominator, neutral value at full weight (`FitScoreService.swift:501-510`).
4. **In-app Academic Match Yellow band** — "Scores near the range (within 3 ACT / 100 SAT points)"
   (`FitScoreExplanationView.swift:265`). The engine removed that cushion
   (`FitScoreService.swift:1039-1041`).
5. **In-app Geographic Fit description covers distance only** (`FitScoreExplanationView.swift:276-277`);
   with "distance is not a factor" the engine scores the recruiting footprint instead
   (`FitScoreService.swift:1159-1214`).
6. **Financial "No limit" auto-Greens** (`FitScoreService.swift:1393-1399`), while
   `RosterWiseCore/CLAUDE.md:192-197` says "`maxTuition == nil` … 'No limit' now means *not scored*, not
   *perfect*." Engine and its own doc disagree.
7. **NJCAA card arithmetic.** In-app copy: "Sixteen men's programs, thirteen of them in New York,
   Maryland and New Jersey" (LSC:396). The bundle: `SELECT state, COUNT(*) FROM programs WHERE
   division='NJCAA' GROUP BY state;` → NY 8, MD 4, NJ 2, IL 1, DE 1 — **fourteen** (the comment at
   LSC:377-378 has the same 8/4/2).
8. **"990+ Programs"** holds against the 998 rows the app lists, but only 980 are active; 18 listed
   programs are discontinued, departed or suspended. If "990+" is read as programs that field a team,
   it is high.
9. **App Store / IAP copy says "transfer intelligence"** (`docs/app-store-connect-setup.md:142, 226`)
   and the promotional text still reads "2025-26 rosters now live!" (226) while `release/whats-new.txt:3`
   announces 2026-27 rosters. The app shows roster-listed previous colleges, not portal data.
10. **SSDMs split across two positions in the data** — 300 SSDM-labeled players normalized to MID and
    116 to DEF on displayed rosters (§1 query). Position-depth counts at MID and DEF therefore depend
    on how each school wrote "SSDM". Pipeline normalization question, not a copy fix.
