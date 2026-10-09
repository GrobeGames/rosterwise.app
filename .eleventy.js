const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItTocDoneRight = require("markdown-it-toc-done-right");
const apps = require("./src/_data/apps.json");

module.exports = function (eleventyConfig) {
  // --- Passthrough copies ---
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("src/_headers");

  // --- Markdown-it with TOC + anchors ---
  const mdOptions = {
    html: true,
    linkify: true,
    typographer: true,
  };

  const md = markdownIt(mdOptions)
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink(),
      slugify: (s) =>
        s
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-"),
    })
    .use(markdownItTocDoneRight, {
      containerClass: "toc",
      listType: "ul",
      slugify: (s) =>
        s
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-"),
    });

  // linkify-it prefixes schemeless bare domains in prose with http:// — force
  // https so auto-linked mentions match the absUrl convention for outbound links.
  md.linkify.normalize = (match) => {
    if (!match.schema) {
      match.url = "https://" + match.url;
    }
    if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
      match.url = "mailto:" + match.url;
    }
  };

  eleventyConfig.setLibrary("md", md);

  // --- Filters ---

  // Format numbers with commas (e.g., 13174 → "13,174")
  eleventyConfig.addFilter("commaNumber", (num) => {
    if (num === null || num === undefined) return "—";
    return Number(num).toLocaleString("en-US");
  });

  // Reading time (words / 230 wpm, minimum 1 min)
  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return "1 min";
    const words = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 230));
    return `${minutes} min read`;
  });

  // Date formatting: "April 26, 2026"
  eleventyConfig.addFilter("dateDisplay", (dateStr) => {
    const date = new Date(dateStr);
    // Front-matter dates parse as UTC midnight; formatting in the build
    // machine's local zone shows the previous day west of UTC.
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  // ISO date for datetime attributes
  eleventyConfig.addFilter("dateISO", (dateStr) => {
    const date = new Date(dateStr);
    return date.toISOString().split("T")[0];
  });

  // Absolute URL: ensure an external link has a scheme so it is never
  // resolved relative to rosterwise.app (e.g. "hiuroyals.com" →
  // "https://hiuroyals.com"). Prevents bogus same-site crawl URLs.
  eleventyConfig.addFilter("absUrl", (url) => {
    if (!url) return url;
    return /^https?:\/\//i.test(url) ? url : "https://" + url;
  });

  // Drop one trailing period from a value the template ends a sentence
  // with, so an abbreviated name ("Old Dominion Athletic Conf.") doesn't
  // render a double period ("…Conf..").
  eleventyConfig.addFilter("beforePeriod", (s) =>
    typeof s === "string" ? s.replace(/\.$/, "") : s
  );

  // Resolve the sport (from apps.json) that a given page URL belongs to, e.g.
  // "/wrestling/guide/x/" → the wrestling entry. Returns null for
  // sport-agnostic pages (/guide/, /faq/, /app/, home, …). The slug must be
  // bounded by "/" or "-", so "/soccer/…" matches and so do hyphenated blog
  // slugs like "/blog/how-to-read-a-college-volleyball-roster/", but the
  // slug never matches inside other words.
  // Single source of truth for every sport-aware CTA/app-logo block.
  eleventyConfig.addFilter("sportForUrl", (url) => {
    if (!url) return null;
    return (
      (apps.sports || []).find(
        (s) =>
          s.live && s.slug && new RegExp("[/-]" + s.slug + "[/-]").test(url)
      ) || null
    );
  });

  // Sitemap lastmod map: page URL → front-matter `date:` (YYYY-MM-DD) for
  // every page that sets one. `date:` is the public "Last updated" stamp,
  // bumped only on real re-verification, which is exactly what <lastmod>
  // means. Read `item.data.date`, never `item.page.date` — Eleventy fills
  // page.date with the file's creation time when front matter has no date.
  // Consumed by scripts/generate-sitemap.js; see src/sitemap-lastmod.njk.
  eleventyConfig.addFilter("sitemapLastmodJson", (items) => {
    const map = {};
    for (const item of items) {
      const date = item.data && item.data.date;
      if (!item.url || !date) continue;
      const parsed = new Date(date);
      if (Number.isNaN(parsed.getTime())) {
        throw new Error(
          `Unparseable front-matter date ${JSON.stringify(date)} in ${item.inputPath}`
        );
      }
      // Front-matter dates parse as UTC midnight; take the UTC calendar day.
      map[item.url] = parsed.toISOString().split("T")[0];
    }
    return JSON.stringify(map, null, 2);
  });

  // JSON-LD-safe string: JSON-escapes a value (surrounding quotes included)
  // for direct embedding in a JSON-LD <script> block. Use with `| safe` so
  // Nunjucks autoescape doesn't HTML-entity-encode apostrophes/quotes into
  // the structured data (e.g. Don&#39;t). "<" is unicode-escaped so
  // "</script>" in a value can never break out of the script block.
  eleventyConfig.addFilter("jsonLd", (value) =>
    JSON.stringify(
      value === undefined || value === null ? "" : String(value)
    ).replace(/</g, "\\u003c")
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
