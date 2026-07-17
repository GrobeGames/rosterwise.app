// Live sports that have a shipping app + an on-site download page.
// Drives the paginated per-sport download pages (src/sport-app-pages.njk).
// Source of truth is apps.json — this just filters it.
const apps = require("./apps.json");

module.exports = (apps.sports || []).filter((s) => s.live && s.downloadPage);
