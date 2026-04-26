#!/usr/bin/env node
/**
 * SEO Sanity Check for rosterwise.app
 *
 * Runs as part of the build process and fails loudly if critical
 * SEO files are missing or misconfigured.
 */

const fs = require("fs");
const path = require("path");

const SITE_ROOT = path.resolve(__dirname, "..");
const BASE_URL = "https://rosterwise.app";

let errors = 0;

function check(label, condition, detail) {
  if (condition) {
    console.log(`  ✓ ${label}`);
  } else {
    console.error(`  ✗ FAIL: ${label} — ${detail}`);
    errors++;
  }
}

console.log("SEO sanity check:");

// 1. robots.txt exists
const robotsPath = path.join(SITE_ROOT, "robots.txt");
check(
  "robots.txt exists",
  fs.existsSync(robotsPath),
  "robots.txt is missing from site root"
);

// 2. sitemap.xml exists
const sitemapPath = path.join(SITE_ROOT, "sitemap.xml");
const sitemapExists = fs.existsSync(sitemapPath);
check(
  "sitemap.xml exists",
  sitemapExists,
  "sitemap.xml is missing — run `npm run generate-sitemap` first"
);

// 3. sitemap.xml references the correct base URL
if (sitemapExists) {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
  check(
    `sitemap.xml references ${BASE_URL}`,
    sitemapContent.includes(BASE_URL),
    `sitemap.xml does not contain ${BASE_URL} — check BASE_URL in generate-sitemap.js`
  );

  check(
    "sitemap.xml is valid XML (starts with <?xml)",
    sitemapContent.startsWith("<?xml"),
    "sitemap.xml doesn't start with an XML declaration"
  );

  // Count URLs
  const urlCount = (sitemapContent.match(/<url>/g) || []).length;
  check(
    `sitemap.xml has at least 1 URL (found ${urlCount})`,
    urlCount >= 1,
    "sitemap.xml has no <url> entries"
  );
}

console.log("");

if (errors > 0) {
  console.error(`SEO check failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log("All SEO checks passed.");
}
