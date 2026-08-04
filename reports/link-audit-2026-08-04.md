# External Source Link Audit — rosterwise.app

**Date:** 2026-08-04
**Scope:** All guide, methodology, insights, blog, hub, legal, and product pages (~170 templates). The 1,000+ programmatic per-program pages (`src/program-pages.njk` × `programs.json`) were excluded per request. Infrastructure URLs (Google Fonts, GA4/Tag Manager, `schema.org`/`w3.org` namespace declarations) are not sources and were excluded.
**Inventory:** 65 unique external URLs, 166 citation instances, across 47 pages with "Sources & References" sections plus inline citations, footer, and legal pages.

## How this audit was run (and its limits)

- The audit session's sandbox network policy blocked direct HTTP fetching (every direct request returned a policy 403), so link status could not be confirmed by HTTP status code.
- Every URL was instead verified through web search: confirming the exact URL is live in the search index, and cross-checking the source's content against the specific claims each article attributes to it (from the front-matter `sources:` descriptions and article body text).
- Verdicts are evidence-graded:
  - **CONFIRMED_OK** — exact URL demonstrably live + content supports the claims attributed to it
  - **LIKELY_OK** — org/homepage-level link; site live and accurately described; nothing contradicts
  - **MOVED** — content exists but the cited URL appears retired; replacement given
  - **LIKELY_DEAD** — strong evidence the page no longer exists
  - **CONTRADICTS** — source is live but contradicts what the article says
  - **OUTDATED** — supported the claim when written; since superseded
  - **UNVERIFIABLE** — search cannot establish it either way; needs a manual click
- Anything not verifiable to CONFIRMED/LIKELY was flagged rather than guessed.

## Results at a glance

| Verdict | Count |
|---|---|
| CONFIRMED_OK | 41 |
| LIKELY_OK | 19 |
| MOVED | 2 |
| CONTRADICTS | 2 |
| LIKELY_DEAD | 1 |
| UNVERIFIABLE | 0 |

Of 65 unique URLs: 60 verified clean. The five that need action: **one likely-dead URL** (an NAIA path that appears never to have existed), **two factual problems** (the NAIA eligibility criteria are misstated; British Lacrosse is mislabeled as England's governing body), and **two moved URLs**. Bigger than any individual link, two site-level defects were found during the audit (below).

## Fixes applied (2026-08-04, same day — second pass on this branch)

All action items except the manual App Store tap-check were applied and verified in a clean build:

1. `src/_includes/content.njk` — `{{ source | safe }}`: Sources & References now render as real links on all 47 pages (0 escaped anchors in the built site, down from 148).
2. `src/search-index.njk` — build fixed. Root cause: `/blog/` (blog/index.njk) also consumes `collections`, so it renders in the same deferred pass as the search index; reading its `templateContent` there is unresolvable and Eleventy 3.1.5 aborts. The search index now skips body-text extraction for `/blog/` only (it stays in the index by title/description). `npm run build` is green end-to-end, 2,438 files + sitemap + SEO checks.
3. NAIA eligibility criteria corrected in `src/guide/ncaa-eligibility-center.md` (2.3 GPA alone qualifies; the two-of-three path uses 2.0 GPA / 18 ACT or 970 SAT / top-half rank).
4. British Lacrosse → England Lacrosse corrected in both international-recruiting guides (citation swapped to englandlacrosse.co.uk; prose now distinguishes the England NGB from the GB umbrella body).
5. Dead NAIA link replaced with `https://www.naia.org/why-naia/financial-aid`; CSS Profile link replaced with `https://cssprofile.collegeboard.org`; the four `ncaa.com/wrestling-men` citations replaced with `https://www.ncaa.com/sports/wrestling-men/d1`.

**Two additional defect classes were discovered while verifying the fixes, and also fixed:**

6. **Manufactured broken links from markdown linkify.** `linkify: true` auto-links bare domains in article prose. Prose like "NCAA.org/NCAA.com" became a single link to `ncaa.org/NCAA.com` (a 404 path) on 5 wrestling pages — rewritten as "NCAA.org and NCAA.com". Bare mentions of `ncaaorg.s3.amazonaws.com` in 13 places linked to the S3 bucket root (which serves an AccessDenied error) — now rendered as code spans, not links. Front-matter source strings are unaffected (they never linkified).
7. **All auto-linked domains were `http://`.** linkify-it defaults schemeless matches to `http://`; the built site had ~90 such non-TLS anchors (NCAA.org ×20, eligibilitycenter.org ×10, …). `.eleventy.js` now normalizes linkified matches to `https://`, matching the `absUrl` convention. Built site now has zero `http://` hrefs.

**Also verified in the second pass:** the wrestling/volleyball/lacrosse sources cite seven NCAA S3 PDFs as *plain-text* paths (schemeless, so outside the original 65-URL link inventory). All seven were verified live at their exact cited paths via search: the 2025-26/2026-27 men's wrestling rules book (`PRMWR_RulesBook.pdf`), the 2026/2027 women's lacrosse rules book (`PRWLA_RulesBook.pdf`), the 2025-26 D1 women's volleyball and "other sports" recruiting calendars, both 2025-26 weight-management packets (the odd `2025-256RMWR_…` filename is the NCAA's actual filename, cited correctly), and the June 2025 House-settlement Q&A.

Still open for a human: the ten-second App Store tap-check on the four app links, and a glance at the Cloudflare Pages dashboard to confirm the next deploy goes green.

## Site-level findings (affect all source links)

### 1. CRITICAL — Sources & References render as escaped text, not links (all 47 pages, since launch)

`src/_includes/content.njk` renders each front-matter source with `<li>{{ source }}</li>` (line 101). Nunjucks autoescape is ON for this project, so the `<a href="…">` HTML stored in every `sources:` front-matter entry is HTML-entity-escaped in the built page. Visitors see literal `<a href="https://…">NCAA…</a>` code as text — no clickable link. Verified in a clean build: 148 escaped anchors across exactly the 47 pages that have `sources:` front matter; `git log -S` shows the section has rendered this way since it was introduced (f93f12a, 2026-05-26). **Confirmed live in production:** a Google phrase search for `site:rosterwise.app "a href"` matches the guide/methodology pages that have Sources sections (transfer-portal, roster-intelligence, weight-class-depth, …) — "a href" can only phrase-match as visible page text, which is exactly this bug. Google is indexing the escaped code as article prose, and none of these citations function as real outbound links for E-E-A-T/SEO purposes.

**Fix (applied same day — see "Fixes applied" above):** `<li>{{ source | safe }}</li>` — safe here because `sources:` values are repo-authored, not user input. FAQ blocks and inline markdown links were unaffected (no HTML anchors in front matter outside `sources:`).

### 2. `npm run build` fails at HEAD of main (deploys likely failing)

`src/search-index.njk` (added in 61127ab) triggers `UsingCircularTemplateContentReferenceError` under Eleventy v3.1.5 — the exact version the lockfile pins, so Cloudflare Pages fails the same way: every push since 61127ab has likely failed to deploy, leaving the live site frozen at the last green deploy. **Fixed same day — see "Fixes applied" above**; check the Pages dashboard to confirm the next deploy goes green.

### 3. Clean checks

- No schemeless external hrefs (the `absUrl` soft-404 trap flagged in CLAUDE.md) anywhere in content.
- No insecure `http://` external links *written in source files*. (The built site did have ~90 `http://` anchors manufactured by markdown linkify from bare-domain prose — found and fixed in the second pass; see "Fixes applied" items 6–7.)
- No malformed markdown link syntax found.

## Action items (by priority)

1. **Fix sources rendering** — `src/_includes/content.njk:101` → `{{ source | safe }}`. Unlocks every one of the 166 citations as an actual link.
2. **Fix the build** — `src/search-index.njk` circular `templateContent` reference; then confirm Cloudflare Pages deploys are green.
3. **Correct the NAIA eligibility criteria (CONTRADICTS)** — `src/guide/ncaa-eligibility-center.md` states NAIA eligibility "requires meeting two of three criteria: 2.3 GPA; 18 ACT; top half of class." The actual NAIA rule (per the NAIA's official interpretations): a **2.3 GPA alone fully qualifies** a freshman, and the two-of-three fallback path uses a **2.0 GPA** (not 2.3) alongside 18 ACT/970 SAT and top-half class rank. The article's version was wrong at publication and understates how easy NAIA qualification is for a 2.3-GPA student. (The play.mynaia.org link itself is live and correct; the mention in `international-student-athletes.md` is fine.)
4. **Correct a factual mislabel (CONTRADICTS)** — British Lacrosse is described as the "Governing body for English lacrosse" in `src/lacrosse/womens/guide/international-recruiting.md` (sources + body) and in prose in `src/lacrosse/mens/guide/international-recruiting.md` (line ~155). British Lacrosse is the Great Britain umbrella/performance body owned by the English, Scottish, and Welsh associations; the governing body for English lacrosse is **England Lacrosse** (englandlacrosse.co.uk). Either relabel the citation or swap the link.
5. **Replace a likely-dead URL** — `https://naia.org/membership/legislative-services/financial-aid` (`src/guide/stacking-financial-aid.md`): nothing at this path (or any `/membership/legislative-services/*` path) is indexed, and it matches neither the NAIA's old Sidearm URL scheme nor its new 2026 WordPress scheme — it appears never to have existed. The facts it's cited for ARE supported by NAIA's live pages. Replacement: **https://www.naia.org/why-naia/financial-aid** (financial-aid framework) and/or **https://www.naia.org/legislative/index** (Legislative Services).
6. **Update two moved URLs:**
   - `https://student.collegeboard.org` (CSS Profile, in `src/guide/stacking-financial-aid.md`) → **https://cssprofile.collegeboard.org/** — the legacy subdomain no longer serves indexed CSS Profile content.
   - `https://www.ncaa.com/wrestling-men` (4 wrestling pages) → **https://www.ncaa.com/sports/wrestling-men/d1** — the bare path is absent from the index; the `/sports/` hubs are NCAA.com's canonical wrestling homes.
7. **Manually tap-check the four App Store links** (soccer id6763959341, volleyball id6774745522, lacrosse id6778935432, wrestling id6785280841). Nothing suggests a problem, but niche paid App Store pages aren't in the web index, so search could only verify them from first-party evidence. Ten seconds on an iPhone upgrades them to confirmed.

## Watch list (accurate today; will age or deserve polish)

- **2025-26 NCAA recruiting-calendar PDFs** (both lacrosse recruiting-timeline pages): the 2025-26 recruiting year ended 2026-07-31; swap to the 2026-27 editions in the same S3 folder next content pass.
- **NWCA "operated by" wording** (`src/wrestling/womens/guide/ncaa-championship.md`): NCWWC materials describe the pre-NCAA championship as run by the Women's Collegiate Wrestling Coalition (Wrestle Like A Girl managing, NWCA as coalition member/administrative home). "Operated by the NWCA" is a simplification — consider "operated by the coalition including the NWCA."
- **IMLCA Summit framing** (mens id-camps/club-pathways): articles attribute the "only event all NCAA men's coaches can attend" status to Oct 2023 legislation re: the Winter Summit; IMLCA now promotes a July 2025 change giving the *Summer* Summit an exclusive July 1–10 evaluation window. Worth refreshing.
- **Gustavus Adolphus dollar figures** (`src/guide/stacking-financial-aid.md`): cited $32,000–$36,500 range; the current President's Scholarship page lists $38,000/yr. Article hedges appropriately, but the range is drifting.
- **PSU bylaw numbering** (`src/guide/stacking-financial-aid.md`): the cited Portland State page reflects pre-House D1 Bylaw 15 numbering (15.01.7/15.1.1); current-manual excerpts number the Pell exception 15.2.8.1. The article's pre/post-House split is correct — only the numbering will drift.
- **Berkeley athlete-admissions policy** (`src/guide/recruited-athlete-admissions.md`): cited as "2020-21 effective"; policy has been re-approved through Fall 2026 (2026-03-13) with unchanged core language.
- **IPEDS/NCES**: collections continue on schedule through 2026-27, but the March 2025 RIF cut >95% of NCES staff — keep an eye on data timeliness for methodology pages.
- **"Over 250 NAIA member institutions"** (`src/guide/late-bloomers.md`): actual membership is 235 for 2025-26 (~241 with 2026-27 additions). The figure tracks NAIA's own round-number marketing, but "about 250" would be safer.
- **NAIA site migration**: NAIA relaunched on WordPress ~May 2026. The cited Sidearm-style paths (`/sports/mwrest/index`, `/sports/wwrest/index`) still work, but new-style equivalents (e.g. `/sports/womens-wrestling/`) now coexist — re-check these after the migration completes.
- **NJCAA "28 men's lacrosse programs"** (lacrosse house-settlement pages): a point-in-time third-party figure the NJCAA homepage doesn't itself publish (article already hedges with "per multiple sources"); expect year-to-year drift.
- **Deep-link opportunities** (link works, but a deeper URL would put readers on the actual source): usavolleyball.org → `/resource/getting-started-in-name-image-and-likeness/`; washingtonpost.com → `/sports/interactive/2024/nil-money-deals-college-sports-athlete-pay/`; nll.com → `/news/canadian-box-players-are-transforming-collegiate-field-lacrosse/`; ncaa.com (lacrosse stats) → `/stats/lacrosse-men/d1` and `/stats/lacrosse-women/d1`.

---

# Per-URL verdicts

## NCAA & Eligibility Center

### https://eligibilitycenter.org
- Verdict: CONFIRMED_OK
- Cited in: src/guide/ncaa-eligibility-center.md, src/guide/recruiting-timeline.md, src/guide/stacking-financial-aid.md (+6 more: soccer/volleyball/lacrosse recruiting-timeline guides, volleyball juco-pathway)
- Claim: Official NCAA Eligibility Center registration site; registration there is required to compete at NCAA D1/D2 (target: by end of sophomore year); also the authority on academic/transfer eligibility requirements.
- Evidence: Exact domain live and indexed as the official registration portal; NCAA.org's registration page confirms students "must register with the NCAA Eligibility Center to be eligible to play NCAA Division I or II sports," with a free profile account for D3; College Board counselor guidance corroborates fee and timing framing.
- Notes: -

### https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2025-26/2025-26D1Rec_MLARecruitingCalendar.pdf
- Verdict: CONFIRMED_OK
- Cited in: src/lacrosse/mens/guide/recruiting-timeline.md
- Claim: Official 2025-26 NCAA D1 men's lacrosse recruiting calendar; supports Sept 1 of junior year as the initial-contact date and Sept 1 of junior year for men's official visits (vs. Jan 1 for women).
- Evidence: The exact S3 URL is live and indexed ("2025-26 NCAA RECRUITING CALENDAR Division I Men's Lacrosse", recruiting year Aug 1 2025–Jul 31 2026); NCSA's calendar summary confirms coaches may call/text/offer starting September 1 of junior year and official visits from September 1 of junior year.
- Notes: Year-stamped archival document; the 2025-26 recruiting year ended 2026-07-31, so a 2026-27 edition presumably now exists in the sibling S3 folder — worth refreshing next content cycle. The cited PDF and the Sept 1 rule remain valid.

### https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2025-26/2025-26D1Rec_WLARecruitingCalendar.pdf
- Verdict: CONFIRMED_OK
- Cited in: src/lacrosse/womens/guide/recruiting-timeline.md
- Claim: Official 2025-26 NCAA D1 women's lacrosse recruiting calendar; supports Sept 1 of junior year initial contact and Jan 1 of junior year as the first date for D1 official visits.
- Evidence: Exact S3 URL live and indexed (surfaced in two separate searches); NCSA's women's lacrosse calendar page confirms Sept 1 junior-year contact and official visits permissible January 1 of junior year.
- Notes: Same freshness caveat as the men's calendar: consider swapping to the 2026-27 edition for the new cycle.

### https://web3.ncaa.org/lsdbi
- Verdict: CONFIRMED_OK
- Cited in: src/guide/stacking-financial-aid.md
- Claim: The NCAA Legislative Services Database (LSDBi) as the official source of D1 Bylaw 15 financial-aid legislation (COA cap, Pell Grant exception, athletic-aid definitions).
- Evidence: Exact URL live and indexed ("NCAA Legislative Services Database (LSDBI)"); bylaw search endpoint (`/lsdbi/search?types=bylaw`) also indexed; LSDBi is updated continuously, making it the correct authority for current Bylaw 15 text.
- Notes: -

### https://www.ncaa.com
- Verdict: LIKELY_OK
- Cited in: src/lacrosse/mens/guide/coaches-look-for-by-position.md, src/lacrosse/womens/guide/coaches-look-for-by-position.md
- Claim: NCAA.com as the home of official D1/D2/D3 lacrosse statistics, including face-off win percentage, save percentage, and caused turnovers.
- Evidence: NCAA.com stats section (`/stats/lacrosse-men/d1`) tracks Faceoff Percentage, Caused Turnovers, Saves — the categories the articles name; dozens of live, currently indexed ncaa.com pages surfaced across every search in this audit (news through March 2026).
- Notes: Homepage-level citation; the specific stats live at /stats/lacrosse-men/d1 and /stats/lacrosse-women/d1 (and stats.ncaa.org) — a deeper link would serve readers better, but nothing is wrong.

### https://www.ncaa.com/news/wrestling-women/article/2025-01-17/ncaa-adds-womens-wrestling-91st-championship
- Verdict: CONFIRMED_OK
- Cited in: src/wrestling/womens/guide/ncaa-championship.md, src/wrestling/guide/divisions-explained.md
- Claim: The NCAA added women's wrestling as its 91st championship sport, approved by Divisions I, II, and III at the January 2025 NCAA Convention in Nashville (with ~95 schools / 1,700+ athletes sponsoring in 2024-25).
- Evidence: Exact cited URL live and indexed; women's wrestling officially became the 91st championship sport Jan 17, 2025, approved by all three divisions at the Nashville Convention; "In 2024-25, 95 NCAA schools reported sponsoring the sport with more than 1,700 student-athletes." Corroborated by USA Wrestling (themat.com) coverage.
- Notes: A rewritten NCAA.org mirror also exists (`ncaa.org/media-center-ncaa-adds-womens-wrestling-as-91st-championship/`), but the cited NCAA.com URL itself is live.

### https://www.ncaa.com/news/wrestling-women/article/2025-10-31/everything-know-about-ncaa-womens-wrestling-how-it-works-scoring-weight-classes
- Verdict: CONFIRMED_OK
- Cited in: src/wrestling/womens/guide/freestyle-and-the-olympic-pathway.md, src/wrestling/womens/guide/ncaa-championship.md, src/wrestling/guide/folkstyle-freestyle-and-greco.md, src/wrestling/guide/understanding-wrestling-weight-classes.md
- Claim: NCAA women compete in freestyle (the Olympic style, unlike NCAA men's folkstyle), and the ten women's weight classes are 103–207 lbs; also cited for scoring/format details.
- Evidence: Exact cited URL live and indexed as the top result; snippet confirms NCAA women "compete in freestyle wrestling, the style that matches Olympic wrestling," with 10 weight classes — 103, 110, 117, 124, 131, 138, 145, 160, 180, 207 lbs — exactly the set the RosterWise articles list.
- Notes: -

### https://www.ncaa.com/news/wrestling-women/article/2026-03-07/mckendree-clinches-inaugural-nc-womens-wrestling-championship
- Verdict: CONFIRMED_OK
- Cited in: src/wrestling/womens/guide/ncaa-championship.md
- Claim: McKendree won the inaugural National Collegiate Women's Wrestling Championships, edging Iowa 171–166, March 6–7, 2026 at Xtream Arena in Coralville, Iowa.
- Evidence: Exact cited slug live and indexed with matching title; NCAA.com also serves a retitled alias (`…/mckendree-clinches-2026-nc-womens-wrestling-championship`); facts corroborated by ESPN (171-166 over Iowa, March 6-7, Xtream Arena, Coralville).
- Notes: NCAA.com retitled the piece ("inaugural" → "2026"), so the canonical alias may be the 2026 slug; the cited URL currently resolves — if it ever breaks, swap to the 2026-slug variant.

### https://www.ncaa.com/wrestling-men
- Verdict: **MOVED**
- Cited in: src/wrestling/mens/guide/mens-college-wrestling-landscape.md, src/wrestling/mens/guide/freestyle-greco-offseason.md, src/wrestling/guide/folkstyle-freestyle-and-greco.md, src/wrestling/guide/divisions-explained.md
- Claim: NCAA.com's men's wrestling hub, cited for division-separated men's championships (D1/D2/D3 each crown champions) and folkstyle as the collegiate men's style.
- Evidence: The men's wrestling hub is indexed at `/sports/wrestling-men/d1` ("NCAA college wrestling home"), with separate live D2 (`/sports/wrestling-men/d2`) and D3 (`/sports/wrestling-men/d3`) hubs — directly supporting the division-separated claim; two exact-phrase searches for the bare `/wrestling-men` path returned no page at that path, only `/sports/…` and `/news/…` URLs.
- Notes: **Replacement: https://www.ncaa.com/sports/wrestling-men/d1**. Whether the bare path 404s or soft-redirects couldn't be confirmed (direct fetch blocked) — relink to the `/sports/` path either way. The underlying content claims are accurate.

### https://www.ncaa.org
- Verdict: LIKELY_OK
- Cited in: src/methodology/data-and-analysis.md, src/roster-intelligence/index.md, src/volleyball/guide/juco-pathway.md (+7 more: four wrestling methodology pages, wrestling divisions/scholarships guides, both lacrosse recruiting-timeline guides)
- Claim: NCAA.org as the authoritative source for division membership lists, program listings, eligibility/transfer rules, and D2/D3 financial-aid frameworks.
- Evidence: Multiple live, currently indexed ncaa.org pages surfaced throughout this audit (Eligibility Center hub, D1 governance/legislation pages); news content through March 2026 actively published on ncaa.org.
- Notes: Homepage-level citation; NCAA.org serves articles under both dated `/news/YYYY/M/D/media-center-*.aspx` paths and rewritten `/media-center-*/` paths — both forms currently resolve.

### https://www.ncaa.org/news/2025/6/23/media-center-di-board-of-directors-formally-adopts-changes-to-roster-limits.aspx
- Verdict: CONFIRMED_OK
- Cited in: src/wrestling/guide/scholarships-and-the-house-settlement.md
- Claim: On June 23, 2025 the D1 Board of Directors formally adopted House-settlement roster limits (effective July 1, 2025), replacing sport-specific scholarship caps for opt-in schools — the basis for wrestling's roster cap of 30 with discretionary scholarship funding, plus Designated Student-Athlete grandfathering.
- Evidence: Exact cited URL live and indexed with matching title; snippet confirms roster limits codified with legislated exceptions for impacted current student-athletes, effective July 1, and that opt-in D1 programs "will be allowed to award scholarships to as many players as they wish" within roster caps. Rewritten alias also live.
- Notes: -

### https://www.ncaa.org/news/2026/3/9/media-center-the-first-ncaa-womens-wrestling-champions-are-crowned-how-bright-is-the-sports-future.aspx
- Verdict: CONFIRMED_OK
- Cited in: src/wrestling/womens/guide/freestyle-and-the-olympic-pathway.md, src/wrestling/womens/guide/ncaa-championship.md
- Claim: Cited for the inaugural-championship team results (McKendree 171–166 over Iowa), the ten weight classes, program-distribution figures (~59% D3 / ~35% D2 / ~5% D1), and the NCAA's Olympic-development framing.
- Evidence: The exact cited URL surfaced verbatim in search results with matching title; team result corroborated by ESPN; distribution figures consistent with NCAA's Jan 2026 statement that 55 D3 schools sponsor women's wrestling, "more than half of the schools sponsoring the sport" (of ~95 total).
- Notes: The related site claim that D3 gets its own women's championship in spring 2028 (approved at the Jan 2026 Convention) is independently confirmed by NCAA.org's Jan 16, 2026 article — nothing contradicted or superseded as of 2026-08-04.

## NAIA / NJCAA / NFHS

### https://naia.org
- Verdict: LIKELY_OK
- Cited in: src/methodology/data-and-analysis.md, src/roster-intelligence/index.md, src/soccer/insights/mens-roster-size.md, src/soccer/insights/division-by-numbers.md, src/soccer/insights/womens-roster-size.md
- Claim: NAIA.org is the NAIA's official site and (with NCAA.org) maintains the authoritative membership/program lists RosterWise's division and conference data is built from.
- Evidence: Homepage live and indexed; non-www URLs serve content and are indexed (student-athletes hub, staff directory); the member-schools directory exists at `/why-naia/member-schools`.
- Notes: NAIA relaunched its site on WordPress around May 2026; the homepage is unaffected, but see deep-path notes on the wrestling hubs below.

### https://naia.org/membership/legislative-services/financial-aid
- Verdict: **LIKELY_DEAD**
- Cited in: src/guide/stacking-financial-aid.md
- Claim: The NAIA operates its own financial-aid framework separate from NCAA rules, administered through NAIA Legislative Services; athletic scholarships in all sports; stacking broadly permitted under a COA-style cap.
- Evidence: Two targeted searches surface no page at this path, and nothing at any `/membership/legislative-services/*` URL is indexed; NAIA's live financial-aid pages sit at `/why-naia/financial-aid` and `/student-athletes/current/financial-aid/` ("each sport has an upper limit for institutional aid allowed per school"); Legislative Services lives at `/legislative/index` and `/membership/legislative-and-policy/`.
- Notes: **The exact path appears never to have been indexed** — it matches neither the old Sidearm pattern nor the new 2026 site's paths (likely invented or restructured away). The underlying facts ARE supported by NAIA's live pages. Replacement: **https://www.naia.org/why-naia/financial-aid** and/or **https://www.naia.org/legislative/index**.

### https://nfhs.org/resources/sports/wrestling-rules-changes-2025-26
- Verdict: CONFIRMED_OK
- Cited in: src/wrestling/guide/what-college-coaches-evaluate.md, src/wrestling/guide/understanding-wrestling-weight-classes.md
- Claim: For 2025-26, NFHS lets states choose among 14-, 13-, or 12-class weight-class options for both boys and girls; the 14-class sets are boys 106–285 and girls 100–235, the starting point for college weight projection.
- Evidence: Exact URL live and indexed (www mirror also live); the page's dual-meet rule change explicitly references states selecting from the three weight-class categories; FloWrestling confirms the 14/13/12 options and the exact boys' (106…285) and girls' (100…235) sets matching the article's table; the announced 2026-27 rule changes (headline: girls' minimum body-fat 12%→19%) do not alter the weight-class options.
- Notes: Not superseded — the article scopes itself to 2025-26 and tells readers to verify by year. The 2026-27 girls' body-fat change touches the certification topic in the weight-management guide, not the claims cited to this URL.

### https://njcaa.org
- Verdict: LIKELY_OK
- Cited in: src/volleyball/guide/juco-pathway.md
- Claim: The NJCAA governs athletics at 500+ two-year colleges (excluding California), organized in three divisions with distinct scholarship rules, with colleges declaring divisional sport sponsorship every four years.
- Evidence: Homepage live and actively publishing (release dated 2026-07-23); NJCAA self-describes as "second-largest national intercollegiate athletic organization… over 500 member schools and 3,400 teams competing in 28 different sports"; the Divisional Structure page the article paraphrases exists.
- Notes: -

### https://njcaa.org/eligibility
- Verdict: CONFIRMED_OK
- Cited in: src/volleyball/guide/juco-pathway.md
- Claim: NJCAA eligibility basics — high-school graduation or GED required, amateur status, may sign both an NJCAA and an NCAA Letter of Intent without sanction, but cannot sign LOIs with two NJCAA colleges.
- Evidence: Eligibility hub live (`/eligibility/index`, with LOI and Resources subpages; the bare path resolves into this section); NJCAA FAQs confirm the GED/graduate requirement, the dual NJCAA+NCAA LOI allowance, and that signing an NJCAA LOI makes the athlete unrecruitable by other NJCAA programs.
- Notes: Naming quibble only: NJCAA brands this "NJCAA Eligibility" (run via an Academic Eligibility Clearinghouse powered by Honest Game), not formally an "Eligibility Center." Content fully supports the article.

### https://njcaa.org/sports/wvball
- Verdict: CONFIRMED_OK
- Cited in: src/volleyball/guide/juco-pathway.md
- Claim: NJCAA volleyball championship records/history — 2025 D-I championship Nov 19-22 at the Dunn Center, Austin Peay State (Clarksville, TN); the defending champion entering 2025 had won a third consecutive D-I title; Cowley won the 2024 D-II title, its second consecutive, undefeated.
- Evidence: Sport hub live (`/sports/wvball/index`) with championship releases and stats archives; AVCA and local coverage confirm the 2025 event details; NJCAA's own recap confirms Florida SouthWestern's third straight D-I title (Nov 2024); Cowley's back-to-back undefeated (40-0) 2024 D-II title confirmed by KWCH coverage.
- Notes: -

### https://play.mynaia.org
- Verdict: **CONTRADICTS**
- Cited in: src/guide/ncaa-eligibility-center.md, src/guide/international-student-athletes.md
- Claim: The NAIA runs its own eligibility center at play.mynaia.org; per ncaa-eligibility-center.md, "NAIA eligibility requires meeting two of three criteria: 1. Minimum overall GPA of 2.3; 2. Minimum ACT composite of 18 or SAT equivalent; 3. Graduating in the top half of your high school class."
- Evidence: PlayNAIA is live and is the NAIA eligibility center (registration required before competing) — that part checks out. But the NAIA's official interpretations ("Basics of Freshman Eligibility") and its freshman-eligibility FAQ state the actual rule: a freshman qualifies with a **final 2.30 HS GPA alone**, OR by meeting **two of three: 18 ACT/970 SAT, 2.0 GPA, top half of class**; NCSA's NAIA requirements page states the same structure.
- Notes: **The URL is fine; the criteria as written are wrong.** The article folds the 2.30-standalone path into the two-of-three test and uses 2.3 where the two-of-three path uses 2.0. This rule predates the article, so it was wrong at publication. Fix the wording in src/guide/ncaa-eligibility-center.md; the mention in international-student-athletes.md is fine.

### https://www.naia.org
- Verdict: LIKELY_OK
- Cited in: src/guide/late-bloomers.md
- Claim: Families should check NAIA.org for current NAIA eligibility/recruiting rules; nearby body text says the NAIA "includes over 250 member institutions," many small and community-oriented, that can offer athletic scholarships and recruit late into senior year.
- Evidence: Homepage live; NAIA's own materials state "250 member institutions with 87,000 student-athletes… 30 national championship sports" — the article's figure tracks the NAIA's self-description; Wikipedia counts 235 members for 2025-26 with six more joining 2026-27 (~241).
- Notes: "Over 250" slightly overshoots the actual roll (235–241), though it matches NAIA's own round-number marketing. Consider "about 250" / "nearly 250." Not a link problem.

### https://www.naia.org/sports/mwrest/index
- Verdict: CONFIRMED_OK
- Cited in: src/wrestling/mens/guide/mens-college-wrestling-landscape.md, src/wrestling/guide/scholarships-and-the-house-settlement.md, src/wrestling/guide/divisions-explained.md, src/wrestling/guide/understanding-wrestling-weight-classes.md
- Claim: The NAIA sponsors its own men's wrestling national championship with its own equivalency scholarship framework, using the same ten weight classes as the NCAA (125–285).
- Evidence: Exact URL live and indexed ("Men's Wrestling Home - NAIA"); the 69th annual championship was held March 5-7, 2026 in Wichita (Grand View's 14th title) — an active, distinct NAIA championship; NAIA weight classes 125–285 identical to the NCAA men's set.
- Notes: NAIA is mid-migration to a new WordPress site (May 2026); new-style sport URLs now coexist with these Sidearm-style paths. The cited path works today — re-check after the migration completes.

### https://www.naia.org/sports/wwrest/index
- Verdict: CONFIRMED_OK
- Cited in: src/wrestling/womens/guide/ncaa-championship.md, src/wrestling/guide/divisions-explained.md, src/wrestling/guide/understanding-wrestling-weight-classes.md
- Claim: The NAIA runs its own separate women's wrestling national championship — 2026 was its fourth annual event — contested at ten weight classes distinct from the NCAA women's set.
- Evidence: Exact URL live and indexed ("Women's Wrestling home - NAIA"); NAIA's own release: "The 4th Annual Women's Wrestling National Championship took place March 13-14, 2026" (Wichita; Life (Ga.) repeated) — matching "fourth annual" exactly; 2026 brackets ran 10 weight classes.
- Notes: Same migration caveat as the men's hub (a parallel `/sports/womens-wrestling/` page now exists).

### https://www.njcaa.org
- Verdict: LIKELY_OK
- Cited in: src/lacrosse/womens/guide/scholarships-after-house-settlement.md, src/lacrosse/mens/guide/scholarships-after-house-settlement.md
- Claim: NJCAA junior-college lacrosse scholarship framework — D-I full scholarships (tuition, fees, books, room, board), D-II tuition/fees/books, D-III none; body adds 28 NJCAA men's lacrosse programs and a 20-scholarship max per D-I team.
- Evidence: Homepage live and actively publishing (through July 2026); SportsRecruits corroborates "28 men's lacrosse programs… maximum of 20 full-ride scholarships per team"; the divisional scholarship tiers confirmed across NJCAA eligibility/compete pages.
- Notes: The 28-program count is a point-in-time third-party figure (article hedges with "per multiple sources"); expect drift year to year. Not a link problem.

### https://www.njcaa.org/sports/wrest/index
- Verdict: CONFIRMED_OK
- Cited in: src/wrestling/mens/guide/mens-college-wrestling-landscape.md, src/wrestling/guide/scholarships-and-the-house-settlement.md, src/wrestling/guide/divisions-explained.md, src/wrestling/guide/understanding-wrestling-weight-classes.md
- Claim: The NJCAA runs a men's national wrestling championship and a women's invitational (an eleven-class structure with an added heavier class); NJCAA men's championship uses the same ten classes as the NCAA.
- Evidence: Exact URL live and indexed (Record Book updated April 2026); USA Wrestling coverage (March 2026) confirms the women's event is still an "Invitational" run alongside the men's National Championship (Council Bluffs, IA) — exactly the structure described; NJCAA women's weights are 11 classes (101–235), matching "eleven-class structure with an added heavier class."
- Notes: -

## Lacrosse organizations & USA Lacrosse Magazine

### https://haudenosauneenationals.com
- Verdict: LIKELY_OK
- Cited in: src/lacrosse/mens/guide/international-recruiting.md
- Claim: Official team site of the Haudenosaunee Nationals, supporting: formed 1983, sanctioned by the Grand Council of the Haudenosaunee Confederacy, the only First Nation's team with international recognition as a sovereign people, renamed from "Iroquois Nationals" in 2023.
- Evidence: Live indexed pages on the domain (`/events`, `/contact` — Nedrow, NY); Wikipedia corroborates the team's identity as the Haudenosaunee Confederacy's international lacrosse team, with this site as its official web presence.
- Notes: Site canonicalizes to www.haudenosauneenationals.com; the cited apex URL should redirect fine. Nothing found contradicting the attributed facts.

### https://imlcacoaches.com
- Verdict: LIKELY_OK
- Cited in: src/lacrosse/mens/guide/id-camps-and-tournaments.md, src/lacrosse/mens/guide/club-pathways.md
- Claim: IMLCA is the official men's coaches association; runs the IMLCA Players Summit (Winter in Orlando; Summer 2026 in greater Philadelphia July 9-10 with NXTsports and HoganLax); IMLCARecruits has 750+ coaches / 35,000+ athletes; the Summit described as "the only event in the country that all NCAA Men's Lacrosse coaches can attend."
- Evidence: "2026 Summer Players Summit" page confirms July 9-10, 2026, greater Philadelphia, co-hosted with NXTsports and HoganLax — matching the article exactly; Winter Players Summit 2026 (December, Orlando) confirmed live.
- Notes: Freshness nuance, not a contradiction: the articles attribute the "only event" framing to October 2023 NCAA legislation (Winter Summit), while IMLCA now also promotes a July 2025 legislative change giving the Summer Summit an exclusive July 1–10 evaluation window. Worth refreshing the wording; club-pathways.md already hedges ("verify current event status with the IMLCA directly").

### https://iwlca.org
- Verdict: CONFIRMED_OK
- Cited in: src/lacrosse/womens/guide/id-camps-and-tournaments.md, src/lacrosse/womens/guide/coaches-look-for-by-position.md, src/lacrosse/womens/guide/club-pathways.md
- Claim: IWLCA is the official women's coaches association with 1,200+ member coaches; runs the IWLCA Tournament Series and IWLCARecruits; its "Rules of the Game (All Disciplines)" page confirms NCAA women's lacrosse is 12v12 (vs. 10v10 internationally).
- Evidence: Homepage live and indexed — "a community of over 1,200 women's lacrosse coaches" and its "premier Recruiting Tournament Series"; the Rules of the Game page exists and states college women's lacrosse is 12v12 in 4×15:00 quarters under NCAA rules while international field is 10v10 — exactly the claim made.
- Notes: -

### https://lacrosse.ca
- Verdict: LIKELY_OK
- Cited in: src/lacrosse/womens/guide/international-recruiting.md, src/lacrosse/mens/guide/international-recruiting.md, src/lacrosse/mens/guide/club-pathways.md
- Claim: Lacrosse Canada is the official Canadian national governing body for box, field, women's, and sixes lacrosse, sitting atop provincial associations.
- Evidence: Member Associations page live, confirming the provincial structure; Wikipedia: "formerly the Canadian Lacrosse Association and founded in 1867, is the governing body of lacrosse in Canada"; recent 2026 rule-book content shows active maintenance.
- Notes: -

### https://premierlacrosseleague.com
- Verdict: LIKELY_OK
- Cited in: src/lacrosse/womens/guide/id-camps-and-tournaments.md, src/lacrosse/mens/guide/id-camps-and-tournaments.md
- Claim: Summit Lacrosse Ventures runs major Northeast tournaments; "as of 2024, Summit Classic events are owned by the Premier Lacrosse League"; Lake Placid Summit Classic (est. 1990 by George Leveille, 37th year in 2026) includes a Scholastic portion with the Girls Nike Northstar (committed) Division and Boys Summit Division.
- Evidence: PLL's own announcement "Summit Lacrosse Ventures Joins Premier Lacrosse League" (Dec 15, 2023) — Summit rebranded PLL Tournaments, 15+ tournaments including Lake Placid; live Lake Placid Summit Classic event page on the cited domain; "35th year" in 2024 is consistent with "37th year in 2026."
- Notes: "As of 2024, owned by the PLL" is accurate (deal announced Dec 15, 2023, effective into 2024). The acquisition article is the natural deep link if ever wanted.

### https://worldlacrosse.sport
- Verdict: CONFIRMED_OK
- Cited in: src/lacrosse/womens/guide/international-recruiting.md, src/lacrosse/mens/guide/international-recruiting.md
- Claim: World Lacrosse is the international governing body; source of "Lacrosse qualification set for Olympic Games Los Angeles 2028" supporting the LA28 sixes format, six men's/six women's teams, July 24-29 2028 at Exposition Park, the qualification pathway, ~100 teams entering, and 90 national federations.
- Evidence: The exact named article is live on the cited domain and confirms the three-stage pathway (continental championships Sept–Dec 2026; 2027 WL Sixes Championships with top 16 per gender; final qualifier early 2028), ~100 teams expected, six teams per gender, July 24-29 at Exposition Park Stadium; independently republished by USA Lacrosse.
- Notes: -

### https://www.britishlacrosse.org
- Verdict: **CONTRADICTS**
- Cited in: src/lacrosse/womens/guide/international-recruiting.md (sources + body); also referenced in prose in src/lacrosse/mens/guide/international-recruiting.md (~line 155)
- Claim: Cited as the "Governing body for English lacrosse" ("British Lacrosse (britishlacrosse.org) is the governing body for English lacrosse").
- Evidence: British Lacrosse's own governance page describes it as "a company limited by guarantee, owned equally by the lacrosse associations of England, Scotland and Wales," incorporated 2020, responsible for Great Britain squads at international tournaments — i.e., the GB umbrella/performance body, not England's NGB. England Lacrosse (englandlacrosse.co.uk, formed 1892 as the English Lacrosse Union) is the national governing body for lacrosse in England, and is actively operating.
- Notes: **The URL is live; the label is wrong.** Fix: either relabel ("British Lacrosse — GB umbrella body for the England/Scotland/Wales associations") or swap the link to https://www.englandlacrosse.co.uk where "governing body for English lacrosse" is asserted. Correct the men's-guide prose reference in the same pass.

### https://www.nll.com
- Verdict: LIKELY_OK
- Cited in: src/lacrosse/mens/guide/international-recruiting.md, src/lacrosse/mens/guide/coaches-look-for-by-position.md
- Claim: The NLL published "Canadian Box Players are Transforming Collegiate Field Lacrosse," supporting claims that Canadian box lacrosse develops a faster, more physical, more creative tight-space style that translates to NCAA field lacrosse, with Ohio State (Nick Myers) as a documented recruiter of Canadian talent.
- Evidence: The exact named article is live on nll.com (`/news/canadian-box-players-are-transforming-collegiate-field-lacrosse/`); snippet confirms the style claims and names Ohio State's Canadian players; TSN carries a syndicated copy corroborating content.
- Notes: Citation links the homepage; the named article's deep link would be the stronger citation but the current link is not wrong.

### https://www.usalacrosse.com
- Verdict: CONFIRMED_OK
- Cited in: src/lacrosse/womens/guide/id-camps-and-tournaments.md, src/lacrosse/womens/guide/club-pathways.md, src/lacrosse/mens/guide/id-camps-and-tournaments.md, src/lacrosse/mens/guide/club-pathways.md
- Claim: USA Lacrosse is the sport's official US national governing body; publisher of the Girls Lacrosse Rule Book, issuer of memberships required for many club/recruiting events, partner of NLF/IWLCA/IMLCA.
- Evidence: Homepage live and indexed with exactly that positioning (425,000+ members); the USOPC formally certified USA Lacrosse as the sport's National Governing Body on April 15, 2026 — strengthening the site's wording.
- Notes: -

### https://www.usalacrosse.com/magazine/college/house-rules-what-ncaa-settlement-means-lacrosse-we-know-it
- Verdict: CONFIRMED_OK
- Cited in: src/lacrosse/womens/guide/scholarships-after-house-settlement.md, src/lacrosse/mens/guide/scholarships-after-house-settlement.md, src/lacrosse/guide/house-settlement-and-lacrosse.md
- Claim: Supports the post-approval House picture: women's D1 lacrosse roster cap of 38 with scholarships available to every rostered athlete, the Title IX tailwind (football +20 scholarships), UNC coach Jenny Levy's reaction and UNC aiming to sustain 38 women's scholarships, and the $2.5M-of-$20.5M new-scholarship allowance (Virginia example).
- Evidence: Live at the exact cited URL; coverage confirms 38 as the women's roster cap (Clemson investing ~$1M/yr to sustain 38 scholarships); Levy quote confirmed verbatim; "North Carolina hopes to sustain 38 scholarships on the women's side"; football+20/Title IX dynamic and "$2.5 million … toward new scholarships … schools like Virginia" all as attributed.
- Notes: Supersession check (Aug 2026): settlement in effect unmodified; pending Ninth Circuit appeals target the back-damages Title IX allocation, not roster caps. USA Lacrosse has since published "Where Every Division I Lacrosse School Stands on Revenue Sharing" — optional fresher supplement.

### https://www.usalacrosse.com/magazine/college/ncaa-schools-can-now-pay-athletes-directly-whats-it-mean-lacrosse
- Verdict: CONFIRMED_OK
- Cited in: src/lacrosse/guide/house-settlement-and-lacrosse.md
- Claim: Supports the June 6, 2025 approval framing: ~$2.8B back damages, ~$20.5M per-school annual revenue-sharing cap for 2025-26, roster caps replacing scholarship limits, non-revenue sports receiving only a small share.
- Evidence: Live at the exact cited URL (published June 6, 2025); confirms the ~$20.5M cap, ~$2.8B over 10 years, and non-football/basketball sports projected to share ~5% (just over $1M/year); the 52.7 average men's roster and ~4.7-per-team/~362-players cap-impact figures cited on RosterWise pages surfaced from this coverage.
- Notes: The RosterWise "typically around 75% to football and men's basketball" line is attributed to separate "industry reporting," not this article — consistent with its "lion's share" framing.

### https://www.usalacrosse.com/magazine/college/what-ncaa-antitrust-settlement-means-college-lacrosse
- Verdict: CONFIRMED_OK
- Cited in: src/lacrosse/womens/guide/scholarships-after-house-settlement.md, src/lacrosse/mens/guide/scholarships-after-house-settlement.md, src/lacrosse/guide/house-settlement-and-lacrosse.md
- Claim: Supports the scholarship-structure changes (D1 men's 12.6 → up to 48; women's 12 → up to 38, matching new roster caps), the "more than 2,500 additional D1 men's lacrosse scholarships" theoretical figure, Maryland coach John Tillman's funding forecast and "I just don't see that happening" caution, and Bill Tierney's "separation even wider" assessment.
- Evidence: Live at the exact cited URL; snippets confirm "from 12.6 to 48 and from 12 to 38, respectively, based on new roster limits" and "more than 2,500 additional Division I men's lacrosse scholarships" — nearly verbatim matches; Tillman and Tierney quotes confirmed in the settlement coverage.
- Notes: Pre-approval coverage (mid-2024, hence "would jump"); the proposed 48/38 numbers were finalized unchanged at the June 2025 approval, so use alongside post-approval coverage is accurate. Caps and the DSA mechanism remain in effect as described, as of Aug 2026.

## Wrestling & volleyball organizations, media

### https://nwcaonline.com
- Verdict: LIKELY_OK
- Cited in: src/wrestling/womens/guide/ncaa-championship.md
- Claim: Cited (with the NCWWC Herstory page) for the women's collegiate championship lineage — WCWA ran the national series 2008–2020, then the NCWWC (from 2020), described in the body/FAQ as "operated by the National Wrestling Coaches Association," served as the pre-NCAA national event.
- Evidence: Homepage live at the exact URL (org "preserving, protecting, and promoting amateur wrestling since 1928"); NWCA's site actively publishes official NCWWC content (2024 NCWWC qualifier news; 2026 NC women's championships bracket/results) — supporting the lineage claim it anchors.
- Notes: Precision nuance (not a link problem): NCWWC materials say the event was organized by the Women's Collegiate Wrestling Coalition, with Wrestle Like A Girl managing and NWCA as a core coalition member/administrative home. "Operated by the NWCA" is a common simplification — consider "operated by the coalition including the NWCA." The dated lineage (WCWA final 2020; NCWWC first held 2020) is fully verified.

### https://usavolleyball.org
- Verdict: LIKELY_OK
- Cited in: src/guide/nil-and-revenue-sharing.md
- Claim: USA Volleyball, the national governing body, published "Getting Started in Name, Image, and Likeness"; the body attributes to it the point that average D1 NIL compensation is reported ~$4,000 while the median is ~$60 per deal (averages skewed by outliers).
- Evidence: The exact named guidance is live at `/resource/getting-started-in-name-image-and-likeness/`; snippets tied to it corroborate the figures (avg ~$4,262 per Opendorse; "The median NIL deal is $60… The average is skewed by outliers"); multiple live sibling NIL resources confirm the org.
- Notes: Link points to the homepage while the description names specific guidance — consider deep-linking to the resource page. No contradiction found.

### https://www.ncwwc.com/herstory
- Verdict: CONFIRMED_OK
- Cited in: src/wrestling/womens/guide/ncaa-championship.md
- Claim: The NCWWC's history page documents the lineage the article recounts: WCWA ran the collegiate national series 2008–2020 (final championship 2020); the NCWWC, first held 2020, succeeded it as the national event for NCAA-school women's programs before NCAA sponsorship.
- Evidence: Page demonstrably live at the exact URL (surfaced in two independent searches); content confirms WCWA created 2008 (first Nationals at Oklahoma City University), final championship 2020; inaugural NCWWC announced Dec 16, 2019 by the Women's Collegiate Wrestling Coalition, held 2020 at Adrian College, open to NCAA D1/D2/D3 varsity programs; corroborated by USA Wrestling's WCWA history piece.
- Notes: -

### https://www.themat.com
- Verdict: LIKELY_OK
- Cited in: src/wrestling/womens/guide/freestyle-and-the-olympic-pathway.md, src/wrestling/mens/guide/freestyle-greco-offseason.md, src/wrestling/guide/folkstyle-freestyle-and-greco.md
- Claim: USA Wrestling (themat.com) is the national governing body and home of freestyle/Greco age-group pathways, Fargo (16U/Junior Nationals), national events, and the senior/Olympic pipeline.
- Evidence: Homepage live at the exact URL; USA Wrestling confirmed as the NGB and USOPC member; Fargo claims verified on-site (2025 Junior/16U Nationals in Fargo; dedicated event hubs; described as the largest wrestling tournament in the world); mission page live.
- Notes: -

### https://www.washingtonpost.com
- Verdict: LIKELY_OK
- Cited in: src/guide/nil-and-revenue-sharing.md
- Claim: Anchors the Post's Oct 21, 2024 investigation "The hidden NIL economy of college sports" ($125M in NIL disclosures) and the body's specific findings: Colorado women's volleyball 112 deals ≈ $36,000 (~$320/deal); Oregon State men's soccer ≈ $5,700 team-wide; LSU women's tennis zero disclosed deals; UCLA rowing 11 deals totaling $490.
- Evidence: The cited investigation exists at `/sports/interactive/2024/nil-money-deals-college-sports-athlete-pay/` (published Oct 21, 2024, $125M analyzed — title/date/figure all match); specific data points verified in search results ("112 NIL deals Colorado women's volleyball players signed amounted to around $36,000"; "Oregon State men's soccer players received about $5,700"); UCLA rowing $490 corroborated.
- Notes: Bare-domain citation resolves to the WaPo homepage, not the investigation — recommend deep-linking to the interactive (paywalled but stable URL). No contradiction or supersession: the article presents the figures as an Oct 2024 snapshot and already contextualizes them against the June 2025 House settlement and NIL Go regime.

## Universities & colleges

### https://academic-senate.berkeley.edu
- Verdict: CONFIRMED_OK
- Cited in: src/guide/recruited-athlete-admissions.md
- Claim: Berkeley's Academic Senate published a Student-Athlete Admissions Policy (2020-21 effective) stating holistic review is "sufficiently robust to encompass the admission of the vast majority of recruited student-athletes through the normal Freshman and Junior Transfer admissions processes," with only "exceptional cases" going through a separate track monitored by the Student-Athlete Admissions Committee (SAAC).
- Evidence: The exact 2020-21 policy PDF is still hosted on the domain and its summary matches the quoted holistic-review language; the live SAAC committee page confirms it monitors recruitment/nomination and is "the final arbiter… for those admitted in exceptional cases"; policy versions exist for 2022-23, 2023-24, and Fall 2026 with consistent core principles.
- Notes: Policy re-approved several times since the cited 2020-21 version (most recently for Fall 2026, approved 2026-03-13). Core language unchanged — no correction needed; description could say "current version approved for Fall 2026."

### https://admissions.cornell.edu/policies/joint-ivy-statement
- Verdict: CONFIRMED_OK
- Cited in: src/guide/recruited-athlete-admissions.md
- Claim: Canonical Ivy League policy on recruited-athlete admissions; the article draws: pre-read feedback to coaches "no earlier than July 1 following the junior year," coaches may communicate support to admissions, and written "Likely Letter" probabilistic communications October 1 – March 15 of senior year.
- Evidence: Direct index hit on the exact cited URL, live on Cornell Admissions; statement content matches the article verbatim on both the July 1 pre-read date and the Oct 1–Mar 15 probabilistic-communication window; sibling Joint Ivy Statement pages at Princeton and Brown confirm it's a league-wide standing policy.
- Notes: -

### https://apsa.unc.edu/recruiting
- Verdict: CONFIRMED_OK
- Cited in: src/guide/recruited-athlete-admissions.md
- Claim: UNC's published "Academic Processes for Student-Athletes" confirms coaches begin evaluating prospects as early as their first or second year of high school, with academic evaluation continuing throughout subject to institutional standards.
- Evidence: Direct index hit on the exact cited path (canonical trailing-slash form), live; content confirms the exact claim wording ("Coaches typically begin the evaluation of prospective student-athletes as early as their first or second year of high school"); companion pages (2.0 Admissions) live on the same site.
- Notes: Site title is "Academic Processes for Student-Athletes" (a UNC institutional-processes site), not the athletics department per se — the source label "UNC Athletics" is slightly loose but not wrong enough to flag as an error.

### https://athletics.williams.edu
- Verdict: CONFIRMED_OK
- Cited in: src/guide/recruited-athlete-admissions.md
- Claim: Williams College Athletics has published articles on NESCAC recruiting procedures; specifically that Williams describes coaches submitting recruits to admissions for pre-read evaluation early in the process.
- Evidence: Root URL live (Department of Athletics site); "The Recruiting Equation: Rules, Regulations and Relationships: Admission and Athletics" is a published Williams article describing an admissions-athletics liaison who "facilitates conversations on pre-reads for recruits… a preliminary assessment of a student's viability… based on high school transcripts and test scores"; a companion piece confirms a series exists.
- Notes: Williams runs two athletics domains (ephsports.williams.edu for scores/teams; athletics.williams.edu for the department). The cited domain is the correct one — the recruiting-procedure articles live there.

### https://gogusties.com
- Verdict: CONFIRMED_OK
- Cited in: src/guide/stacking-financial-aid.md
- Claim: Gustavus Adolphus College (D3) publishes on its athletics site that it disburses over $60 million annually from its institutional scholarship fund, with Dean's/President's Scholarships of $32,000–$36,500 annually — an example of D3 financial-aid packaging.
- Evidence: The Sept 2024 article "Does Division III Give Athletic Scholarships?" is live on the cited domain and states the $60M figure; the college's scholarships page confirms the $32,000–$36,500 automatic-consideration range as indexed; gogusties.com is the official Gustavus athletics site.
- Notes: Dollar amounts drifting: the current President's Scholarship page lists $38,000/yr, above the cited range. The article hedges appropriately ("one example… check each school's published policies"), so no downgrade — but the range will slowly go stale.

### https://www.pdx.edu/student-finance/athletic-financial-aid-agreement
- Verdict: CONFIRMED_OK
- Cited in: src/guide/stacking-financial-aid.md
- Claim: Portland State's athletic financial aid agreement page publishes verbatim NCAA Bylaws 15.01.7 and 15.1.1; the article quotes 15.01.7 — aid cannot exceed the cost of attendance "normally incurred by students enrolled in a comparable program at that institution."
- Evidence: Direct index hit on the exact cited URL, live under PSU Student Finance; the page carries the bylaw text matching the article's quoted clause word-for-word.
- Notes: House-settlement nuance, no contradiction: post-settlement D1 manuals dropped sport-specific Bylaw 15 sections and renumbered others (a current-manual excerpt now numbers the Pell exception 15.2.8.1). The citing article's pre-/post-House split is correct; only the bylaw numbering on the PSU page reflects the pre-House manual — refresh in a future revision.

### https://www.tamiu.edu/finaid/student-athletes.shtml
- Verdict: CONFIRMED_OK
- Cited in: src/guide/stacking-financial-aid.md
- Claim: TAMIU's financial aid office publishes verbatim NCAA Bylaws 15.1.1 (Pell Grant Exception — Pell stacks on top of the Bylaw 15.1 limit or full grant-in-aid, whichever is greater), 15.02.5.1-3 (athletically-related-aid definition), and 15.02.6.
- Evidence: Direct index hit on the exact cited URL, live; the page's bylaw text matches the article's paraphrase on the Pell exception and the athletically-related-aid definition; TAMIU's compliance manual corroborates active Bylaw 15 publication.
- Notes: TAMIU is NCAA Division II (Lone Star Conference); D2 Bylaw 15 was not restructured by the House settlement, so this page's numbering remains current for its division — no supersession issue.

## Government & national education

### https://cccaasports.org
- Verdict: CONFIRMED_OK
- Cited in: src/volleyball/guide/juco-pathway.md
- Claim: Governing-body site for California community college athletics (3C2A, formerly CCCAA) — governance, recruiting rules, scholarship policies. Body claims: 109 member colleges, 26,000+ student-athletes annually, 24 sports, founded 1929, HQ Sacramento, no athletic scholarships (Bylaw 2.11).
- Evidence: Homepage live (with a live March 2026 scoreboard page confirming active maintenance); Wikipedia and the org's own about page confirm 1929 founding, 109 members, Sacramento HQ, 26,000+ athletes, 24 sports; compliance materials confirm no athletic scholarships per its Constitution and Bylaws.
- Notes: The org also operates a parallel official domain (3c2asports.org) reflecting the CCCAA→3C2A rebrand; both live, so the cited URL is fine. The article already says "formerly CCCAA."

### https://cifstate.org/coaches-admin/college_requirements
- Verdict: CONFIRMED_OK
- Cited in: src/volleyball/guide/juco-pathway.md
- Claim: CIF (California Interscholastic Federation) page providing NCAA/NAIA/CCCAA/NJCAA college eligibility guidance for high-school athletes.
- Evidence: The exact cited path is live and indexed; covers NCAA initial-eligibility (D1/D2/D3), NAIA eligibility resources, and CCCAA information; also served under a `/parents-students/` nav path with eligibility-center contacts for NCAA, NAIA, and NJCAA — all four bodies named in the source description covered.
- Notes: The cited URL omits "www." but cifstate.org redirects to www.cifstate.org. Both nav paths resolve.

### https://commonapp.org
- Verdict: CONFIRMED_OK
- Cited in: src/guide/stacking-financial-aid.md, src/guide/recruited-athlete-admissions.md
- Claim: Homepage citation for the Common Application as the source on college application requirements (each member college sets its own essay/testing/recommendation requirements).
- Evidence: Homepage live — the 2026-27 application opened Aug 1, 2026 (up to 20 schools); third-party guides confirm each college sets separate requirements, matching the framing.
- Notes: -

### https://nces.ed.gov/ipeds/
- Verdict: CONFIRMED_OK
- Cited in: src/methodology/data-and-analysis.md, src/roster-intelligence/index.md, src/soccer/insights/division-by-numbers.md (also rendered on every program page via src/program-pages.njk; +3 unlinked text mentions)
- Claim: IPEDS is the U.S. Department of Education's comprehensive federal database for postsecondary institution data, used by RosterWise for school enrollment, location, and academic profiles.
- Evidence: Live pages under nces.ed.gov/ipeds/ (Overview, Use The Data); NCES administers IPEDS across ~6,400 institutions; Federal Register notice covers collections through 2026-27, and the 2025-26 survey materials and data-release schedule are live.
- Notes: Claim holds today, but watch: the March 2025 RIF cut >95% of NCES staff (including all six IPEDS staffers); collection is contractor-run and still operating, but data timeliness concerns have been raised publicly.

### https://ope.ed.gov/athletics
- Verdict: CONFIRMED_OK
- Cited in: src/volleyball/guide/juco-pathway.md
- Claim: The "U.S. Department of Education EADA database" — the federal Equity in Athletics disclosure data source for athletics participation and finances.
- Evidence: The exact cited URL is live and serves the Equity in Athletics Data Analysis tool; holds annual EADA-mandated participation and financial data from all co-ed Title IV institutions with intercollegiate athletics; mirrored at data.ed.gov, confirming an active ED product.
- Notes: The URL internally redirects to the tool's landing page (longstanding behavior); the cited short URL remains the standard entry point.

### https://student.collegeboard.org
- Verdict: **MOVED**
- Cited in: src/guide/stacking-financial-aid.md
- Claim: Cited with the label "CSS Profile — Institutional need-based aid at participating schools"; the article directs families to submit the CSS Profile at participating schools alongside FAFSA.
- Evidence: A `site:student.collegeboard.org` search returns zero indexed pages — the legacy student portal no longer serves indexed content; the CSS Profile canonically lives at cssprofile.collegeboard.org (with College Board guidance directing submission via cssprofile.org); current student-facing College Board properties are collegeboard.org, bigfuture.collegeboard.org, apstudents.collegeboard.org.
- Notes: **Replacement: https://cssprofile.collegeboard.org/**. Even if the retired subdomain still redirects somewhere on collegeboard.org, it does not land on CSS Profile content, so the link no longer matches its label. The article's underlying facts about the CSS Profile remain correct.

### https://studentaid.gov
- Verdict: CONFIRMED_OK
- Cited in: src/guide/stacking-financial-aid.md
- Claim: Homepage citation for U.S. Department of Education Federal Student Aid as the source of federal financial aid information (FAFSA, Pell Grants, need-based aid).
- Evidence: Live at the exact URL as the official FSA site; FAFSA application pages live; FSA awards $120B+/year to ~13 million students — supporting the framing.
- Notes: -

### https://travel.state.gov
- Verdict: CONFIRMED_OK
- Cited in: src/guide/international-student-athletes.md
- Claim: The guide directs international families to the State Department (Bureau of Consular Affairs) site for student-visa rules; body describes F-1 requirements (SEVP-certified school, I-20, financial proof, interviews) and notes rules change frequently.
- Evidence: Student Visa and Study & Exchange pages live on travel.state.gov covering F-1/M-1; confirm I-20 and SEVIS registration requirements, matching the article's description; the Bureau of Consular Affairs handles the visa process through this site, exactly as the source line states.
- Notes: -

## App Store, Apple/Google legal, company

### https://apps.apple.com/us/app/rosterwise-lacrosse/id6778935432
- Verdict: LIKELY_OK
- Cited in: src/roster-intelligence/index.md, src/index.html, src/start-here/index.html, src/_data/apps.json
- Claim: App Store download link for RosterWise Lacrosse (Grobe Games LLC), presented as available now, covering men's and women's lacrosse across D1/D2/D3/NAIA/NJCAA.
- Evidence: Google-indexed rosterwise.app pages assert availability; the App Store page itself is absent from the web index (exact-ID, slug, and site-restricted searches all empty) — and equally, no evidence of removal; `apps.json` carries the URL with `"live": true` and it survived the 2026-07-27 stale-data correction pass.
- Notes: All supporting evidence is first-party; niche paid App Store pages demonstrably aren't web-indexed, so absence is not evidence of death. Primary conversion link — recommend a manual on-device tap-through to upgrade to confirmed.

### https://apps.apple.com/us/app/rosterwise-soccer/id6763959341
- Verdict: LIKELY_OK
- Cited in: src/index.html, src/start-here/index.html, src/_data/apps.json
- Claim: App Store download link for RosterWise Soccer (Grobe Games LLC), the flagship app, presented as available now covering 2,200+ programs.
- Evidence: Indexed rosterwise.app /app/ page: "Soccer and Volleyball are available now… download the RosterWise Soccer app directly from the Apple App Store"; exact-ID and URL-fragment searches returned nothing either way (not web-indexed); linked since the earliest homepage versions with `"live": true`.
- Notes: Same first-party-only profile; nothing anywhere contradicts availability. Include in the manual App Store check.

### https://apps.apple.com/us/app/rosterwise-volleyball/id6774745522
- Verdict: LIKELY_OK
- Cited in: src/volleyball/womens/index.md, src/index.html, src/start-here/index.html, src/_data/apps.json
- Claim: App Store download link for RosterWise Volleyball (Grobe Games LLC), presented as "now available," men's and women's indoor volleyball.
- Evidence: Indexed rosterwise.app volleyball and /app/ pages confirm the marketing claim; no apps.apple.com listing surfaced by exact-ID search and no removal evidence; `apps.json` lists it with `"live": true`.
- Notes: First-party evidence only. Include in the manual check.

### https://apps.apple.com/us/app/rosterwise-wrestling/id6785280841
- Verdict: LIKELY_OK
- Cited in: src/index.html, src/start-here/index.html, src/_data/apps.json
- Claim: App Store download link for RosterWise Wrestling (Grobe Games LLC), the newest app, men's and women's wrestling by weight class.
- Evidence: Wrestling sections indexed as live product marketing; repo history pins the launch (371efb0, 2026-07-10 "Wrestling app live"; 8dd8100 download button); no listing hit and no removal evidence in exact-ID/slug searches.
- Notes: Newest of the four (~3.5 weeks live), so zero third-party index coverage is expected. Include in the manual check.

### https://grobegames.com
- Verdict: CONFIRMED_OK
- Cited in: src/_includes/base.njk (site-wide footer), src/index.html, src/program-pages.njk, src/start-here/index.html
- Claim: Company website of Grobe Games LLC, linked in the footer ("A product of Grobe Games LLC") and as the Organization `url` in JSON-LD.
- Evidence: "Grobe Games - Play More. Grin More." live at the exact apex domain; described as a father-and-daughter game studio; rosterwise.app's own indexed legal pages name Grobe Games LLC (Missouri) with @grobegames.com support email.
- Notes: Live and correct. Minor observation: grobegames.com presents as a casual-games studio and doesn't visibly feature RosterWise, so the footer link lands on brand-adjacent rather than RosterWise-specific content — consistent with the label, just worth knowing.

### https://policies.google.com/privacy
- Verdict: CONFIRMED_OK
- Cited in: src/privacy/index.html
- Claim: Linked from the privacy policy as the privacy policy for Google Analytics, used on the marketing site only.
- Evidence: Top result at this exact path; the policy "applies to all of the services offered by Google LLC and its affiliates," which includes Google Analytics.
- Notes: -

### https://reportaproblem.apple.com
- Verdict: CONFIRMED_OK
- Cited in: src/terms/index.html, src/faq/index.njk
- Claim: Linked in Terms and FAQ as where users request App Store refunds (refunds handled by Apple under Apple's policies).
- Evidence: Apple Support's current refund instructions: "sign in to reportaproblem.apple.com… choose 'Request a refund'"; status-check instructions also point there — Apple's live, canonical refund portal.
- Notes: -

### https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
- Verdict: CONFIRMED_OK
- Cited in: src/terms/index.html
- Claim: Apple's "Licensed Application End User License Agreement" (Standard EULA) governing the app license where it conflicts with RosterWise's own Terms.
- Evidence: The exact URL is indexed live with the exact document title; content matches the framing (apps governed by the Standard EULA unless an overriding custom license is provided); remains Apple's canonical iOS/App Store EULA location (distinct from the Mac variant).
- Notes: -

### https://www.apple.com/legal/privacy/
- Verdict: CONFIRMED_OK
- Cited in: src/privacy/index.html
- Claim: Linked three times as "Apple's privacy policy," governing Apple's handling of App Store purchases and iCloud (CloudKit) sync of the My Fit profile.
- Evidence: The exact URL is indexed live as Apple's Privacy Policy page — the canonical entry point to the full worldwide policy text (also live).
- Notes: -

---

*Audit performed 2026-08-04 on branch `claude/website-guide-link-audit-ocuf98` (base: main @ a8ebc66). Verification: web-search index evidence + claim cross-checks; direct HTTP status checks were unavailable in the audit environment.*
