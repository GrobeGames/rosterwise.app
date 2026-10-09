# rosterwise.app — SEO / Content Status

Point-in-time snapshot. Durable rules live in `CLAUDE.md`. Update or prune this
file as work lands.

## SEO Phase 4 — Program Pages (as of 2026-05-18)

### Shipped
- **2,246 program pages** live and building (~7.5s build, ~146MB output).
- `src/program-pages.njk` — hero, Quick Facts, US map, analysis card, and status
  badges: red "PROGRAM DISCONTINUED (year)", green "NEW PROGRAM — First Season".
- Soccer program hubs `/soccer/mens/programs/` and `/soccer/womens/programs/`
  with client-side filtering (division, state, search).
- Data produced in the **pipeline** repo, exported to `src/_data/programs.json`:
  - `scripts/export_web_programs.py` — slug dedup (appends `-{program_id}` on
    collision), discontinued/new detection, religious affiliation excluded.
  - `scripts/audit_school_colors.py` — multi-source color lookup, CSV
    review-then-commit.
  - `scripts/enrich_wikidata_alumni.py` — Wikidata SPARQL + MLS/NWSL draft
    scraping, strict exact-name matching, CSV review workflow.
- Decisions: religious affiliation removed from web (kept in iOS DB); strict
  exact-name alumni matching (no partial) to avoid false positives.

### Known data-quality issues
- **`program_changes` gender mismatches:** several `program_id` refs point to the
  wrong gender (SF State 1536→W not M, Montana State Billings 1495→W, Eastern NM
  1427→W, Cincinnati 1253→W, Appalachian State 1020→W). Fix, or generate
  discontinued pages from `program_changes` school_name + gender instead of
  program_id.
- **School colors:** teamcolorcodes.com returns page-chrome `#F5F5F5` for most
  schools; only ~8 manual matches reliable. ~92 schools still need better colors.
- **Wikidata:** SPARQL was rate-limited (429) — retry with backoff.
- **Draft alumni:** 170 matches across 91 programs in `data/alumni_drafts_only.csv`
  (pipeline repo) — needs human review before committing.

### Next steps
1. Review & commit `data/alumni_drafts_only.csv` after verification.
2. Fix `program_changes` gender mismatches (or bypass program_id for discontinued).
3. Retry Wikidata SPARQL with rate-limit handling.
4. Expand the manual color dictionary for remaining suspicious schools.
5. Consider a conference filter on hub pages.
6. Add more notable-alumni sources (team sites, Wikipedia program articles).

## Resolved SEO fixes (2026-06-16)

- **Schemeless external links + missing 404 → soft-404 "alternates".** Google
  Search Console flagged program-page athletics URLs as "Alternate page with
  proper canonical tag." Two causes: (1) `program-pages.njk` linked
  `href="{{ program.athletics_domain }}"` schemeless, resolving relative to
  rosterwise.app; (2) no `src/404.html`, so unmatched paths returned the homepage
  with HTTP 200. **Fixes (committed 9e2ae5b on main):** added the `absUrl`
  Eleventy filter (now applied to external hrefs), added a `noindex`
  `src/404.html` (alone this fixed the HTTP-200 fallback — Cloudflare auto-serves
  404.html with a real 404 once it exists), and wired `generate-sitemap.js`
  `EXCLUDE_FILES` to drop 404.html. See CLAUDE.md for the durable rules.
- **GSC "Page with redirect":** only real items were the same schemeless
  artifacts (fixed); the rest (`/privacy`, `/takedown`, `/disclaimer`, `/support`
  trailing-slash 308s; http→https) are correct expected redirects,
  informational only — they age out.

## GSC coverage review (2026-10-09)

- **Not found (404), ~80 program-page URLs ending in an athletics domain**
  (`…/randolph-macon-yellow-jackets/www.rmcathletics.com`): leftovers of the
  schemeless-link bug fixed 2026-06-16. A full scan of the built site finds no
  schemeless or broken internal hrefs, and these URLs now return a real 404 —
  correct. No action; they age out of the report.
- **`/guide/questions-to-ask-coaches/` 404:** page removed in cb0f81e
  (2026-05-20). Now 301 → `/guide/contacting-coaches/` (`_redirects`).
- **`/terms/` "Blocked by robots.txt":** robots.txt disallowed `/terms`, so
  Google could never see its 301. Disallow removed.
- **`/search-index.json` "Crawled – not indexed":** now
  `X-Robots-Tag: noindex` (`_headers`).
- **`https://www.rosterwise.app/` "Alternate page with proper canonical":**
  www is **not** redirected — it serves 200 with a canonical to the apex
  (`http://www` only upgrades to `https://www`). Needs a Cloudflare dashboard
  redirect rule (www → apex, 301, preserve path + query); `_redirects` cannot
  match on host. Canonical tags already cover it, so this is cleanup only.
- **`/cdn-cgi/l/email-protection` 404:** Cloudflare Email Address
  Obfuscation (Scrape Shield) rewrites every `mailto:` link. Harmless; turn it
  off in the dashboard if the report entry matters.
- **Expected / no action:** `?from=AppAgg.com` UTM URL (canonicalized),
  http→https, no-slash → slash 308s, the old `/landing/` artifacts.
- **Open: "Crawled – currently not indexed"** — ~180 program pages plus some
  guides/hubs. Not a technical fault (all return 200, canonical, in sitemap);
  it is Google's quality/duplication judgment on templated pages. Separate
  workstream.

<!-- Sources: ~/.claude/projects/-Users-scottspringman-Developer/memory/project_seo_phase4_status.md; repo peek (src/program-pages.njk, scripts/generate-sitemap.js, src/robots.txt, src/_redirects) -->
