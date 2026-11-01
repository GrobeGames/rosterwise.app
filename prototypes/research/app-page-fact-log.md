# RosterWise /app/ (the apps' sales page) — Fact Log & Audit Trail

**Purpose:** one row per claim the page makes → its source → the date verified → the page(s) that use it.
Lives in `prototypes/` so it never deploys. Before changing any number or promise on `/app/`, check it against a row
here, and update the row in the same commit.

**Verification date for this pass:** 2026-11-01 (board `app-page`, M2; Scott's marks the same day).

**Sourcing rules honoured:** product claims come from the product itself (Core, the apps' store listings and the
2.1.0 release fact log, `shared/release/2.1.0/fact-log.md` in the umbrella), Apple's own pages, and the site's own
privacy policy. No competitor or recruiting service is named. One claim rests on Scott's own observation rather than a
source (row J); it is kept on his ruling and marked so.

**Pages:** `app` = `src/app/index.njk` (/app/).

## A. Coverage

| Claim | Source | Verified | Pages |
|---|---|---|---|
| **2,200+** college soccer teams, **1,800+** volleyball, **950+** lacrosse, **600+** wrestling | The opening card of each sport's first App Preview video, read from `src/_data/previews.json` by the `teamFloor` filter (`.eleventy.js`). The floors were counted from the shipping bundles (`programs.program_status = 'active'`) in the 2.1.0 fact log §A (2026-10-26) and recounted 2026-10-31 at 2,227 / 982 / 1,889 / 626 (board `creative-assets` build stamp) | 2026-11-01 | app |
| The depth section names only the chosen sport's floor ("across 2,200+ college soccer teams"), never a total across sports | Scott, board `app-page-2` (q1 note, 2026-11-01): "A recruit is only going to care about their sport. Let's remove any totals ACROSS all sports". The 5,500+ total shipped in 3589a61 was removed the same day | 2026-11-01 | app |
| The store header art on each sport card shows the same floor | `~/Library/Developer/RosterWise/release-2.1.0/creative/<sport>/header-count.png` (Scott's header A, board `creative-assets`, 2026-10-31), copied to `src/assets/store-art/` at 960 px | 2026-11-01 | app |
| Sports and divisions per app (FAQ, card lines) | `src/_data/apps.json` `subtext`, rendered by the `coverageAnswer` filter; unchanged from the lines the site already shows | 2026-11-01 | app |
| Softball and rowing are coming next | `apps.json` (`live: false`, each with a guide hub); Scott, board `app-page` (ap-sports note, 2026-11-01): "Softball and Rowing … will be built and released within the week" | 2026-11-01 | app |

## B. Price, free tier and terms

| Claim | Source | Verified | Pages |
|---|---|---|---|
| **Free to try**: open **three programs** in full plus **one conference**, and browse every program on the map and in the list | Core `FreeTierService`: `freeViewLimit = 3` (per gender), `freeConferenceLimit = 1`; the store listing's "TRY IT FREE" paragraph. "Three programs", not "three men's and three women's": Scott, board `app-page` (ap-free, 2026-11-01): "Let's just say "three programs" -- a recruit is only interested in their gender." | 2026-11-01 | app |
| **$39.99 once**, no subscription, no renewals, no ads | Store listing "ONE PRICE" (2.1.0 copy, approved board `release-210-copy`); 2.1.0 fact log §C (one non-consumable purchase, no subscription group, no ad SDK); Apple lookup lists each app as Free with in-app purchases (2026-11-01) | 2026-11-01 | app |
| No account, no login | 2.1.0 fact log §C (`IntroductionView`: "No account, no login, nothing to sign up for") | 2026-11-01 | app |
| The My RosterFit™ profile stays on the device and in the family's own iCloud, never sent to us | `src/privacy/index.html` §§3–4 (the site's privacy policy) | 2026-11-01 | app |
| Each app runs on iPhone and iPad | Apple's lookup endpoint: every app lists iPad devices and iPad screenshots (2026-11-01) | 2026-11-01 | app |
| Updates for the sport bought include each season's new rosters | The product's model: rosters ship in the app's bundled database, refreshed by app updates (the 2.1.0 What's New: "Rosters read through late October 2026") | 2026-11-01 | app |

## C. Data and what each app shows

| Claim | Source | Verified | Pages |
|---|---|---|---|
| Rosters are read from each school's own athletics site, and every roster is labeled with its season | Store description "WHAT IT COVERS" (2.1.0, approved) | 2026-11-01 | app |
| A program whose newest roster isn't complete keeps showing its last complete one | 2.1.0 What's New (approved); umbrella rule "Never publish an INCOMPLETE roster" (ADR-8) | 2026-11-01 | app |
| Roster by position and class year; room at your position (who's listed, who leaves, who's new); where players come from (states, countries, clubs, high schools); transfers matched to the college they left; what changed since the last roster | Store description "THE PROGRAM PAGE" (2.1.0, approved) | 2026-11-01 | app |
| Admit rate, test scores, cost, campus size and setting; conference standings; the head coach's tenure | Store description and the Fit tour's beats ("Admit rates, test scores and cost"); conference standings in What's New 2.1; coach start year shipped as RW-164 (2026-10-26) | 2026-11-01 | app |
| My RosterFit™ gives a fit band with a light for each factor; Compare side by side; favorites with notes; a recruiting timeline that opens at the athlete's year | Store description "ROSTERFIT", "COMPARE, FAVORITES AND IPAD", "YOUR ATHLETE'S YEAR" (2.1.0, approved) | 2026-11-01 | app |
| Each tour's questions and lines | `previews.json`, generated with the videos by the umbrella's `export_site_previews.py`; 2.1.0 fact log §C ("the preview's questions are answered on the screen under them") | 2026-11-01 | app |
| RosterWise doesn't rank programs or predict recruiting outcomes | Store description's last line (2.1.0, approved) | 2026-11-01 | app |

## D. Ratings and the review

| Claim | Source | Verified | Pages |
|---|---|---|---|
| App Store rating and count per app (e.g. "5.0 on the App Store · 7 ratings") | Read at every build from `https://itunes.apple.com/lookup?id=<appId>&country=us` (`averageUserRating`, `userRatingCount`) by `src/_data/appRatings.js`; shown only where the count is **5 or more**, and hidden if the read fails (Scott, board `app-page` q1, 2026-11-01: ratings from Apple, refreshed at each build). Read 2026-11-01: soccer 5.0 / 7, volleyball 5.0 / 7, lacrosse 5.0 / 1, wrestling 5.0 / 1 — the same as Apple's product pages that day | 2026-11-01 (and each build) | app |
| "I actually learned of programs in my own state I didn't know about." — a soccer parent, App Store review of RosterWise Soccer | One sentence quoted word for word from the review titled "Super helpful" (May 24) on the RosterWise Soccer App Store page, read 2026-11-01. "A soccer parent" is the reviewer's own account ("My son is going through the soccer recruiting process") | 2026-11-01 | app |

## J. Kept on Scott's ruling (no source)

| Claim | Basis | Verified | Pages |
|---|---|---|---|
| "Paid recruiting services charge $200–$2,000 for generic match lists." | Scott, board `app-page` (fx-prices, 2026-11-01), marked Leave: "I've actually seen these prices directly myself. I know these to be true. We can leave them." Kept from the old page; no service is named | 2026-11-01 | app |

## K. Apple's badge

| Claim / rule followed | Source | Verified | Pages |
|---|---|---|---|
| Official badge artwork only; never the standalone Apple logo; at least 40 px tall onscreen; clear space a quarter of its height; unmodified; one App Store badge per layout | developer.apple.com/app-store/marketing/guidelines/ (read 2026-11-01). The page shows one badge (the chosen sport's, at 50 px); every other store link is a plain "Get the app" button | 2026-11-01 | app |
| The badge file | `https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg` (Apple's US black badge, title `Download_on_the_App_Store_Badge_US-UK_RGB_blk_4SVG_092917`), saved unchanged as `src/assets/badges/download-on-the-app-store-black.svg` | 2026-11-01 | app |

### Open items to re-check before/at publish
- **Floors move with the bundles.** When a release recounts the teams, `previews.json` and the store art change
  together; re-copy `src/assets/store-art/` from the release's creative folder in the same commit.
- **Ratings need the build to reach itunes.apple.com.** If Cloudflare's build can't, the page simply shows no rating.
- **The review quote is static.** If Apple removes the review, remove the quote.
- **Found on the way, not fixed (not on this board):** the home page says "Every NCAA D1, D2, D3, NAIA & NJCAA
  program" in two places; soccer carries no NJCAA programs and a few teams have no shown roster.
