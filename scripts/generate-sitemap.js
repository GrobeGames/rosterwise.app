#!/usr/bin/env node
/**
 * Sitemap Generator for rosterwise.app
 *
 * Auto-discovers all HTML files in the site root and generates a valid
 * sitemap.xml following the sitemaps.org 0.9 spec.
 *
 * Usage:
 *   node scripts/generate-sitemap.js
 *
 * The script reads from the repo root (one level up from scripts/) and
 * writes sitemap.xml to the same directory.
 *
 * To add priority/changefreq rules for new page types, edit the
 * PATH_CONFIG array below.
 */

const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const BASE_URL = "https://rosterwise.app";

// Site root directory (repo root, one level up from scripts/)
const SITE_ROOT = path.resolve(__dirname, "..");

// Output path for generated sitemap
const OUTPUT_PATH = path.join(SITE_ROOT, "sitemap.xml");

/**
 * Priority and changefreq rules.  First match wins, so put more specific
 * patterns before general ones.  The `pattern` is matched against the
 * URL path (e.g. "/privacy", "/soccer/programs/duke").
 *
 * When you add programmatic SEO pages later (e.g. /soccer/programs/*),
 * just add a new entry here — the script auto-discovers HTML files.
 */
const PATH_CONFIG = [
  // Homepage
  { pattern: /^\/$/, priority: "1.0", changefreq: "monthly" },

  // Support page (updated more often than legal pages)
  { pattern: /^\/support$/, priority: "0.5", changefreq: "monthly" },

  // Legal / policy pages
  { pattern: /^\/(privacy|takedown|disclaimer|terms)$/, priority: "0.3", changefreq: "yearly" },

  // Future: sport program pages  (example — uncomment when pages exist)
  // { pattern: /^\/soccer\/programs\/.+$/, priority: "0.7", changefreq: "weekly" },
  // { pattern: /^\/soccer\/conferences\/.+$/, priority: "0.5", changefreq: "monthly" },

  // Catch-all default
  { pattern: /.*/, priority: "0.5", changefreq: "monthly" },
];

// Directories and file patterns to exclude from the sitemap
const EXCLUDE_PATTERNS = [
  /^\./, // dotfiles / dotdirs
  /^_/, // _redirects, _headers, _build, etc.
  /^node_modules$/,
  /^scripts$/,
  /^assets$/,
  /^admin$/,
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Recursively find all .html files under `dir`, returning paths relative
 * to SITE_ROOT.
 */
function findHtmlFiles(dir, relativeTo = SITE_ROOT) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(relativeTo, fullPath);
    const topLevel = relPath.split(path.sep)[0];

    // Skip excluded directories/files
    if (EXCLUDE_PATTERNS.some((p) => p.test(topLevel))) continue;

    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(fullPath, relativeTo));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      results.push(relPath);
    }
  }

  return results;
}

/**
 * Convert a relative file path (e.g. "privacy.html") to a clean URL path
 * (e.g. "/privacy").  index.html becomes "/".
 */
function fileToUrlPath(relPath) {
  // Normalize separators
  let urlPath = "/" + relPath.replace(/\\/g, "/");

  // Strip .html extension
  urlPath = urlPath.replace(/\.html$/, "");

  // /index becomes /
  if (urlPath === "/index") return "/";

  return urlPath;
}

/**
 * Look up priority and changefreq for a URL path using PATH_CONFIG.
 */
function getConfig(urlPath) {
  for (const rule of PATH_CONFIG) {
    if (rule.pattern.test(urlPath)) {
      return { priority: rule.priority, changefreq: rule.changefreq };
    }
  }
  // Fallback (should never reach here due to catch-all)
  return { priority: "0.5", changefreq: "monthly" };
}

/**
 * Get file last-modified date in ISO 8601 (YYYY-MM-DD).
 */
function getLastMod(filePath) {
  const stat = fs.statSync(filePath);
  return stat.mtime.toISOString().split("T")[0];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const htmlFiles = findHtmlFiles(SITE_ROOT);

  const urls = htmlFiles
    .map((relPath) => {
      const urlPath = fileToUrlPath(relPath);
      const config = getConfig(urlPath);
      const lastmod = getLastMod(path.join(SITE_ROOT, relPath));
      const loc =
        urlPath === "/" ? `${BASE_URL}/` : `${BASE_URL}${urlPath}`;

      return { loc, lastmod, ...config };
    })
    // Sort: homepage first, then alphabetically
    .sort((a, b) => {
      if (a.loc === `${BASE_URL}/`) return -1;
      if (b.loc === `${BASE_URL}/`) return 1;
      return a.loc.localeCompare(b.loc);
    });

  // Build XML
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    ),
    "</urlset>",
    "", // trailing newline
  ].join("\n");

  fs.writeFileSync(OUTPUT_PATH, xml, "utf-8");

  console.log(`✓ sitemap.xml generated with ${urls.length} URLs:`);
  urls.forEach((u) =>
    console.log(`  ${u.loc}  (priority=${u.priority}, changefreq=${u.changefreq})`)
  );
}

main();
