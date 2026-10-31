# RosterWise App Preview videos on rosterwise.app — Fact Log & Audit Trail

**Purpose:** one row per claim the "See it in action" band, the "Watch it in action" pill and their player make
→ where it was read → the date → the pages that use it. The videos' own words are claims about the app, and
the release's fact log is their source of record: `shared/release/2.1.0/fact-log.md` in the umbrella repo.
This log points at its rows instead of copying them, so a recount on release day is one edit there and one
re-export here.
Lives in `prototypes/` so it never deploys (build only emits from `src/`).

**Verification date for this pass:** 2026-10-29.

**Sourcing rules honored:** the product's own code and builds, Apple's own pages, and Mixkit's own licence
page. NO aggregators and NO recruiting-service content.

**Board:** `site-reels` (Scott's marks 2026-10-29 16:16–16:20Z): q0 = a (the band), q1 = tap (poster first, tap
to play with sound), q2 = release (live on release day with the final cuts); place-c ok with the note to add
the pill to every app spotlight; build-host, build-play, build-sport, build-a11y, build-music, build-phone ok;
RW-181 fix.

## A. What the band and pill say

| Claim | Source | Verified | Pages |
| --- | --- | --- | --- |
| "See it in action" / "See RosterWise™ {Sport} in action" / "{N} short tours of the app" / "Watch it in action · {N} short videos": N is the number of videos in that sport's `previews.json` entry | `src/_data/previews.json`, written by `export_site_previews.py` from the release's beat list (`preview_sizzle_beats.VIDEOS`: three videos) | 2026-10-29 | home, `/{sport}/app/`, every app spotlight |
| "The videos use the app's sample programs" | The footage is the review build's sample programs, with "Sample data" visible throughout and real colleges and trademarks blurred (release `shoot-plan.md`, Recording: "'Sample data' stays visible throughout"; board `release-preview-5` build stamp) | 2026-10-29 | home, `/{sport}/app/` |
| Each video's length on its poster and in its label (draft: 0:29) | ffprobe of the web copy, stored as `seconds` in `previews.json` | 2026-10-29 (drafts) | home, `/{sport}/app/` |
| "with music" in each play button's label | The track is *I Do!* (Mixkit 1001), release fact log §E | 2026-10-29 | home, `/{sport}/app/`, the player |

## B. What the videos say (the "Read what each video shows" text)

Generated from the beat list the videos are cut from, never typed here. Each row's source of record is in
the release fact log.

| Claim | Release fact-log row | Verified there | Pages |
| --- | --- | --- | --- |
| "Men's & women's college soccer · 2,200+ teams": a floor at or below the shipping bundle's count of active programs; recounted the day before upload | §A, Team counts (soccer 2,227 on 2026-10-26) | 2026-10-26; **recount on release day** | home, `/soccer/app/`, soccer and sport-agnostic spotlights |
| The beats' questions and gold lines ("Is there room at your position?" / "Who's there, who leaves, who's new", …): each answered on the screen under it | §C, "The preview's questions are answered on the screen under them" | 2026-10-29 | same |
| "My RosterFit™ … A fit band, with a light for each factor" | §C (RosterFit's factors); Core `FitBand` and `FitRating`, `FitScoreService.swift` at 571611c | 2026-10-29 | same |
| "All in one app: No subscription · No login · No ads" | §C, "All in one app" | 2026-10-29 | same |
| "Free to try. Full access is an in-app purchase." | §D, in-app purchase disclosure; `preview_beats.END["note"]` | 2026-10-26 | same |

## C. The music on the website

| Claim | Source | Verified | Pages |
| --- | --- | --- | --- |
| The Mixkit Stock Music Free License lets the music be copied, modified, distributed and publicly performed "on any web or social media platform", including advertisements; its allowed uses include online marketing ads; no credit is required. Not allowed: CDs/DVDs, video games, TV or radio broadcast, remixing or a music-only track, claiming it, registering it with any rights-management service | mixkit.co/license/, the "Stock Music Free License" panel (its text loads only in that panel; no version or date shown), read in the browser pane | 2026-10-29 | every page with the band or the pill |
| The track only plays inside the video: the site serves no audio-only file and no audio player | this build: `export_site_previews.py` writes MP4s and JPEGs only | 2026-10-29 | same |

## D. The drawn phone (Apple's marketing guidelines)

| Claim | Source | Verified | Pages |
| --- | --- | --- | --- |
| Apple's marketing guidelines cover marketing materials, our website included: Apple's own product images for Apple devices, no illustrations or simulations of Apple products, and a generic device only without details unique to Apple products (home button, sensor housing, Ring/Silent switch, volume controls) | developer.apple.com/app-store/marketing/guidelines/, "Apple Product Images › Image Use" and "Unauthorized Uses" | 2026-10-29 | every page with the band or the pill |
| The phone drawn in the videos is a plain rounded rectangle with no Dynamic Island, notch, buttons or switches | the draft 3 frames (board `site-reels`, build-phone) | 2026-10-29 (drafts); **re-check on the final cuts** | same |

## E. Hosting (decisions, not published claims)

| Fact | Source | Verified |
| --- | --- | --- |
| A 29.5 s draft re-encodes to 1.4–1.66 MB at 590 × 1280 (H.264 CRF 28, AAC 96 kbps); its master is 41 MB. VP9 came out larger (1.86 MB), so MP4 only | ffmpeg 9.0.1 on the drafts | 2026-10-29 |
| Cloudflare Pages: 25 MiB per file, 20,000 files a site on the Free plan | developers.cloudflare.com/pages/platform/limits/ | 2026-10-29 |
| GitHub release assets redirect to release-assets.githubusercontent.com and come back as `application/octet-stream` with `content-disposition: attachment`, through signed links that expire, so they can't be the source of a page's video | `curl -sIL` on a public release asset | 2026-10-29 |

## Cut

- RW-181 (commit a538d99): the home page's four drawn phones and every figure on them (RosterFit scores for
  five real colleges, a roster, openings, transfers and a school profile), none of which any fact log backed.

### Open items to re-check before/at publish
- **Release day:** re-run `export_site_previews.py` for each sport on the final cuts (`--release 2.1.0`), so
  §B's words and §A's lengths are the finals', and the floor in §B matches the store's recount.
- Lacrosse, volleyball and wrestling have no beat list yet; the exporter refuses them rather than give them
  soccer's words. Each gets its own §B rows when its beats land.
- Re-read the Mixkit licence panel before the merge (no version date; Envato may change it at any time).
- Re-check §D on the final cuts' phone.
