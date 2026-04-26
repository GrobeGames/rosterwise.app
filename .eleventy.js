const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItTocDoneRight = require("markdown-it-toc-done-right");

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

  eleventyConfig.setLibrary("md", md);

  // --- Filters ---

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
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // ISO date for datetime attributes
  eleventyConfig.addFilter("dateISO", (dateStr) => {
    const date = new Date(dateStr);
    return date.toISOString().split("T")[0];
  });

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
