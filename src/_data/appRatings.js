// Each live app's App Store rating, read from Apple's public lookup endpoint when the site builds (board app-page,
// Scott's answer to q1, 2026-11-01: ratings from Apple, refreshed at each build). Keyed by sport slug:
//   { soccer: { rating: 5, count: 7, read: "2026-11-01" }, … }
// Templates show a rating only where `count` reaches `minCount`, so a single rating never stands in for a
// reputation. Any failure (no network, a changed response) leaves that sport out and the page shows no rating:
// a missing number is better than a stale or wrong one.
const apps = require("./apps.json");

const MIN_COUNT = 5;
const TIMEOUT_MS = 8000;

async function lookup(appId) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${appId}&country=us`, { signal: ctrl.signal });
    if (!res.ok) return null;
    const body = await res.json();
    const r = body && body.resultCount === 1 ? body.results[0] : null;
    if (!r || String(r.trackId) !== String(appId)) return null;
    const rating = Number(r.averageUserRating);
    const count = Number(r.userRatingCount);
    if (!Number.isFinite(rating) || !Number.isInteger(count) || rating < 1 || rating > 5) return null;
    return { rating, count };
  } catch (err) {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

module.exports = async function () {
  const read = new Date().toISOString().slice(0, 10);
  const out = { minCount: MIN_COUNT, read, sports: {} };
  const live = (apps.sports || []).filter((s) => s.live && s.appId);
  const results = await Promise.all(live.map((s) => lookup(s.appId)));
  live.forEach((s, i) => {
    if (results[i]) out.sports[s.slug] = { ...results[i], read };
  });
  return out;
};
