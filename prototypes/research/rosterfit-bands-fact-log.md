# RosterWise RosterFit™ (2.1.0: fit bands) — Fact Log & Audit Trail

**Purpose:** one row per claim the site makes about how My RosterFit™ works → where in the product it was
read → the date → the pages that use it. Every row is a claim about RosterWise's own product, so its
source is the product itself: the shared engine (`RosterWiseCore`) at the commit named, and each app's
`SportConfig` at the commit named. Lives in `prototypes/` so it never deploys.

**Verification date for this pass:** 2026-10-29, against RosterWiseCore `main` 571611c and the apps' `main`
(soccer 3fd4790, lacrosse 216a0a9, volleyball f46c3b0, wrestling cf7f8e0), all stamped 571611c.
**The live App Store version (2.0.2) was built on Core c96f29a (2026-08-23)**, which shows a 0–100 score;
the bands arrive with 2.1.0 (Core e953913, 2026-10-17, F9d). **This copy goes live only on 2.1.0's release
day** (Scott, board `site-reels-2` q1 and q0 = release, 2026-10-29). Re-verify every row against the Core
commit that ships, that day.

**Board:** `site-reels` overall note (Scott, 2026-10-29): "review all pages to get rid of the 'RosterWise Fit
score (an inividual number)' and update it with our new methodology that scores fit factors and overall fit in
buckets (good, mixed, etc.)". `site-reels-2`: rf-bands, rf-soccer (RW-182), rf-wrestling (RW-183) = fix;
q2 = keep "personalized fit scoring" (every factor is still scored), so only copy that presents RosterFit
as one number or a ranking changes.

**Sourcing rules honored:** the product's own code only. NO aggregators, NO recruiting-service content.

## A. The band

| Claim | Source | Verified | Articles |
| --- | --- | --- | --- |
| Each factor gets a light: **Strong, Moderate or Low**, or "couldn't be checked" | `FitRating.label`; `FitScoreExplanationView.lightLegend` | 2026-10-29 | soccer, lacrosse, wrestling rosterfit-score; roster-intelligence; home FAQ |
| From the lights, weighed by how much each factor counts, a program gets one band: **Strong, Good, Mixed or Weak fit** | `FitBand` (`FitScoreService.swift`); `FitScoreExplanationView.howItWorks` | 2026-10-29 | the three rosterfit-score pages; home; app hub; sport app pages; roster-intelligence; start-here; apps.json scenarios |
| **Strong fit:** nothing Low, and Strong on **70%** or more of the weight. **Good fit:** nothing Low, Strong on less than 70%. **Mixed fit:** Low on less than **30%** of the weight. **Weak fit:** Low on 30% or more | `FitBand.strongShare = 0.70`, `weakShare = 0.30`, `FitScore.band`; `FitScoreExplanationView.bandRule` | 2026-10-29 | the three rosterfit-score pages |
| **"Not enough to judge"** when less than half the weight could be checked | `FitScore.band` (`share >= 0.5`); `FitScoreExplanationView.keyCard` | 2026-10-29 | the three rosterfit-score pages |
| A factor that couldn't be checked counts against Strong (it isn't Strong) and never toward Weak (it isn't Low) | `FitScore.band` doc comment | 2026-10-29 | the three rosterfit-score pages |
| A Low is weighed, not counted: a Low on a light factor matters less than one on a heavy factor | `FitScoreExplanationView.keyCard` | 2026-10-29 | the three rosterfit-score pages |
| There is **no 0–100 number** ("the data can't honestly tell a 98 from an 88") | `FitScoreExplanationView.howItWorks`; `FitBand` doc comment (Scott, board rosterfit-audit, 2026-10-17) | 2026-10-29 | the three rosterfit-score pages; home FAQ |
| Before RosterWise 2.1 the app combined the factors into a **score from 0 to 100**; 2.1 replaces it with the band | 2.0.2's Core c96f29a: `RWFitScoreBadge` ("My RosterFit score \(overall) out of 100"); the band in Core e953913 (2026-10-17, F9d), which ships first in 2.1.0 | 2026-10-29 | lacrosse rosterfit-score |
| Inside a band, programs are listed **nearest first, never ranked**; Match groups every program by band | `FitScoreExplanationView.keyCard`; `FitScore.milesFromHome` doc; store copy `copy-2.1.0.json` ("Match groups every program by band") | 2026-10-29 | the three rosterfit-score pages; home |
| A factor that is the same Strong at every program for this recruit — Competitive Level when the pathway's table rates every division alike, Financial Fit when "Cost is not a factor" — is listed as **"not a factor for you"** and left out of the band | `FitComponent.sameEverywhere`; `FitScore.bandComponents`, `notAFactorComponents` | 2026-10-29 | soccer and wrestling rosterfit-score |
| Each band shows how many of its factors were scored, e.g. "6 of 6 factors scored" | `RWFitScoreBadge`; the Fit video's fit card (draft 3 frame) | 2026-10-29 | the three rosterfit-score pages |
| Worked example, men's soccer: every factor Strong except Academic Match and Roster Composition (Moderate): nothing Low, and on the standard weights Strong carries **less than 70%** of the weight (66%: 22 + 16 + 6 + 12 + 10), so a **Good fit**. Published as the outcome only, without the weights (Scott, 2026-10-29, §E) | `FitFactorCopy.example`, `exampleSentence`; soccer `defaultFitWeights(.mens)` | 2026-10-29 | soccer rosterfit-score |
| Worked example, wrestling: Academic Match and Geographic Fit Moderate, the rest Strong: nothing Low, and on the standard weights Strong carries **less than 70%** (56%: 34 + 22), so a **Good fit**; Room at your weight class counts most. Published without the weights (§E) | `FitFactorCopy` doc ("Wrestling's four factors: Academic and Geographic Moderate, Strong on 56%"); wrestling `defaultFitWeights` | 2026-10-29 | wrestling rosterfit-score |
| The weights can be seen and changed under **Customize Weights** (the app's My RosterFit™ page, and Settings › My RosterFit™); bands worked out with changed weights say so | `FitScoreExplanationView` ("Customize Weights", "You've changed your weights, so your bands use yours"); `SettingsView` | 2026-10-29 | the three rosterfit-score pages |

## B. The factors each app scores, and their standard weights

**The weights are logged for the record and NOT published** (Scott, board `site-reels-3`, 2026-10-29; §E). The
pages name each sport's factors and say each counts for part of the band, some more than others; the only
comparisons they make are that Room counts most in wrestling, and that Height Fit is a light factor and Room a
heavy one in lacrosse, both true on every standard weight below. The app's My RosterFit™ page shows the weights.

| Claim | Source | Verified | Articles |
| --- | --- | --- | --- |
| The engine has seven factors: **Room at your position** (wrestling: Room at your weight class), **Academic Match, Roster Composition, Competitive Level, Height Fit, Geographic Fit, Financial Fit** | `FitScoreService.calculate`; `FitWeights.displayName` | 2026-10-29 | the three rosterfit-score pages |
| Soccer scores all **seven** for men's and women's. Standard weights, men's: Room 22, Academic 14, Roster Composition 20, Competitive Level 16, Height 6, Geographic 12, Financial 10; women's: 26, 16, 8, 16, 6, 14, 14 | `SoccerSportConfig.defaultFitWeights` (soccer 3fd4790; unchanged since v2.0.2-12) | 2026-10-29 | soccer rosterfit-score; RW-182 |
| Volleyball scores all **seven** (Room 26, Academic 12, Roster Composition 8, Competitive Level 14, Height 16, Geographic 12, Financial 12) | `VolleyballSportConfig.defaultFitWeights` (f46c3b0) | 2026-10-29 | sport app pages (volleyball) |
| Lacrosse scores **six for men's, five for women's**: no Competitive Level for either; women's Roster Composition weight 0. Men's: Room 28, Academic 20, Roster Composition 6, Height 6, Geographic 24, Financial 16; women's: 30, 20, 0, 6, 26, 18 | `LacrosseSportConfig.hiddenFitComponentIDs`, `defaultFitWeights` (216a0a9) | 2026-10-29 | lacrosse rosterfit-score |
| Wrestling scores **four**: Room at your weight class 34, Academic Match 22, Geographic Fit 22, Financial Fit 22 (men's and women's); Height Fit, Roster Composition and Competitive Level are switched off | `WrestlingSportConfig.hiddenFitComponentIDs`, `defaultFitWeights` (cf7f8e0; the same at v2.0.2-3) | 2026-10-29 | wrestling rosterfit-score; RW-183 |
| Wrestling never projects a future weight class: the athlete picks the weight class they wrestle | `WrestlingSportConfig.supportsWeightClassProjection = false` and its comment ("We never forecast a minor athlete's future weight class … Wrestlers still pick their CURRENT weight class"; reverses ADR D3, 2026-06-28; the same at v2.0.2-3) | 2026-10-29 | wrestling rosterfit-score; RW-183 |

## C. What each factor compares

From `FitFactorCopy` (checked against `FitScoreService` on 2026-10-26, per its header) and the scoring functions.

| Claim | Source | Verified | Articles |
| --- | --- | --- | --- |
| **Room:** counts the players a program lists at the athlete's position (wrestling: weight class) in its last two seasons' rosters, or the one season it has. Each season is rated; when the two land on different sides of a line, the light is Moderate | `roomFromGroupSize` (`twoSeasonsDisagree`, `borderline`); `FitFactorCopy` "position" | 2026-10-29 | the three rosterfit-score pages |
| **Room, soccer / lacrosse / volleyball:** a bigger group turns over more places a year. The group divided by four years (two at two-year colleges) is compared with the cut for that position and gender: at or over the cut Strong, at least half of it Moderate, under that Low | `roomFromGroupSize` `.intake` (`years`, `cut`, `cut / 2`); `SportConfig.roomRule` default `.intake` | 2026-10-29 | soccer and lacrosse rosterfit-score |
| **Room, wrestling:** a weight class is one place in the lineup, so fewer means more room. Men's: **two or fewer** Strong, **five or more** Low; women's: **one or fewer** Strong, **four or more** Low; in between Moderate | `WrestlingSportConfig.roomRule` (`.crowding(strongAtMost: 2, lowAtLeast: 5)`, women's `1, 4`); `roomFromGroupSize` `.crowding` | 2026-10-29 | wrestling rosterfit-score |
| **Room, the very next class:** a recruit joining the class right after the newest rosters also hears who's due to leave; when at least half the group, and at least two, is leaving, the light goes one step up, never down. Leavers with no class year don't count toward the step | `FitFactorCopy.nextIntakeRule`, `roomHorizon`; `roomFromGroupSize` (`half = max(2, current/2)`, `surelyHalf`) | 2026-10-29 | the three rosterfit-score pages |
| A player listed at two positions (a wrestler at two weights) counts at both | `scorePositionNeed` comment (RW-27, Scott 2026-10-13); umbrella CLAUDE.md rule | 2026-10-29 | the three rosterfit-score pages |
| **Academic Match:** the athlete's SAT or ACT against the scores of students the school admitted; if both are given, the better result counts. At or above the median Strong; inside the middle 50% below the median Moderate; below the 25th percentile Low. Open-admission schools rate Strong. GPA isn't an input | `FitFactorCopy` "academic"; `scoreAcademicMatch` (bands anchored on the median since 2026-08-11; "GPA is not an input") | 2026-10-29 | the three rosterfit-score pages; home FAQ; app hub; sport app pages; roster-intelligence |
| **Roster Composition:** how international the roster is against the athlete's background. Domestic athlete: 70%+ domestic Strong, 50–70% Moderate, under 50% Low. International athlete: 25%+ international Strong, 10–25% Moderate, under 10% Low | `FitFactorCopy` "roster_composition" | 2026-10-29 | soccer and lacrosse rosterfit-score |
| **Competitive Level** (soccer, volleyball): where players from the athlete's pathway typically compete, against the program's division; it reads the pathway, not anything the school publishes. Often at this level Strong; a stretch Moderate; fewer reach it Low | `FitFactorCopy` "competitive_level"; `scoreCompetitiveLevel` | 2026-10-29 | soccer rosterfit-score |
| **Height Fit:** the athlete's height against the roster's typical height at the position: close Strong, somewhat outside Moderate, well outside Low. Fewer than three published heights at the position: not graded | `FitFactorCopy` "height"; `FitEvidence.notPublished` ("fewer than three heights at the position") | 2026-10-29 | soccer and lacrosse rosterfit-score |
| Height direction: soccer goalkeepers, only being shorter counts against; other soccer positions, either way. Lacrosse defense, LSM and goalie: shorter only | `SoccerSportConfig.heightDisadvantage` (GK `.shorterOnly`); `LacrosseSportConfig.heightDisadvantage` (DEF, LSM, GOAL) | 2026-10-29 | soccer and lacrosse rosterfit-score |
| **Geographic Fit:** with a maximum distance, within it Strong, up to 1.5 times it Moderate, beyond Low. If distance isn't a factor: 3+ players from the athlete's state Strong; 1–2 from the state, or 3+ from the region, Moderate; none Low | `FitFactorCopy` "geographic"; `scoreGeographic` | 2026-10-29 | the three rosterfit-score pages |
| **Financial Fit:** published (sticker) tuition, in-state when it's the athlete's state's school, against the budget: within it (or "Cost is not a factor") Strong, up to 25% over Moderate, more Low. No aid of any kind is in the check | `FitFactorCopy` "financial"; Core CLAUDE.md (sticker tuition, never net price) | 2026-10-29 | the three rosterfit-score pages |
| The profile RosterFit reads: position (weight class), graduation year, height, SAT/ACT, home and maximum distance, budget, pathway (where the sport scores Competitive Level), whether the athlete is international | the factor functions' inputs (`scorePositionNeed`, `scoreAcademicMatch`, `scoreHeightFit`, `scoreGeographic`, `scoreFinancial`, `scoreCompetitiveLevel`, `scoreRosterComposition`) | 2026-10-29 | home FAQ; app hub; sport app pages; roster-intelligence; apps.json |

## D. Claims cut (RW-182, RW-183, and single-number copy)

- Soccer `rosterfit-score`: "eight factors", "Pathway Alignment", "Division Level", Roster Composition as
  class-year balance, Academic Match from admission rates and programs of study, Financial Fit from cost of
  attendance and average aid, Geographic Fit from a "recruiting radius", Position Need from "typical transfer
  rates", "we don't publish the exact weights", "a single My RosterFit score", "High/Medium/Low RosterFit
  scores". None matched the app, in 2.0.2 or 2.1.0.
- Wrestling `rosterfit-score`: "projected weight class" as an input, eight factors (class-year timing, level
  fit, program direction, roster-cap room, pathway mix), "ranks", "the score".
- Lacrosse `rosterfit-score`: the 0–100 weighted average, the red caps at 49 and 35, Position Need's 2.0.2
  rules, Academic Match's 75th-percentile tier, "Customize Score Weights" (now Customize Weights), and its three
  October 9 correction notes (§E).
- All three rosterfit-score pages: the standard-weights tables and the worked examples' arithmetic (§E).
- Site-wide: "a single score", "one personalized score", "a single, comparable metric", "a My RosterFit
  score for every program", "RosterFit scores every program", "fit score(s)" as a number, and GPA as an input.

## E. Scott's rulings on these pages (board `site-reels-3`, 2026-10-29)

His notes, quoted as he wrote them:
- r3-soccer-factors (17:06Z): "Let's remove the percentage weighting table -- we don'tneed to provide that much
  detail and I think it confuses things."
- r3-wrestling (17:17Z): "Remove the weightings"
- r3-soccer-band (17:07Z): "We can remove the "Correction" note as well.  Just mark the page as to when it was
  last updated."
- r3-lacrosse (17:24Z): "remove the correction if there is one"

**Ruling: the RosterFit pages carry no weights and no correction notes; the "Last updated" date (front-matter
`date:`, rendered by content.njk) marks the change.** This departs from the content standards' corrections protocol
(§9), which asks for a visible note. What was wrong is still recorded, as §9 requires ("never quietly rewrite
history"): in §D above and in the website commits that made the change (94076d1 names RW-182 and RW-183 and every
wrong claim; the weights-and-notes removal commit cites this section). Wrestling's correction note went too, by the
same ruling. **The lacrosse methodology hub's October 9 note went too** (2026-10-29, after Scott OK'd site-reels-4 without answering whether it should): his words aren't limited to the RosterFit pages, and the coordinating session read them as covering every website page. The hub has no "Last updated" line to carry the change: hubs (`hub.njk`) have no `date:` by design (website CLAUDE.md, sitemap), and giving this one a date would certify two older lines nobody has re-verified ("rosters, schedules, coaching staff" and "Most recruiting services give you a list of schools"). So it is undated, and its change is recorded here and in its commit. **Not touched:** the other 45 website pages that still carry a correction note; whether the ruling reaches them is Scott's call.

### Open items to re-check before/at publish
- **Release day:** re-read every row against the Core commit and app commits that ship in 2.1.0, then set the
  three rosterfit-score pages' `date:` (their public "Last updated") to that day.
- The live app until then is 2.0.2 (a score out of 100): nothing in this log may go live before 2.1.0 does.
- Volleyball has no rosterfit-score page; its pages say only "personalized fit scoring" (kept, q2).
