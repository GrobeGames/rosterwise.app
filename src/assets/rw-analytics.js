/* What visitors do with the apps' videos and App Store links, sent to GA4 (board app-page, M1: Scott, 2026-11-01,
   "Start M1"). A baseline before /app/ is redesigned, so the new page has numbers to be compared against.

   Events, each with `sport` and `placement`:
     video_start · video_progress (25, 50, 75 %) · video_complete
       GA4's own video event names and parameters (video_title, video_url, video_provider, video_percent,
       video_current_time, video_duration), so its built-in video dimensions fill in.
     video_player_open   the "Watch it in action" pill opened the full-screen player
     app_store_click     a tap on any link to an app's App Store page

   Nothing here changes what a visitor sees, and it sends nothing if GA isn't on the page. Add ?rw_debug=1 to a URL
   to send these events with debug_mode, so they show in GA4's DebugView. Loaded by base.njk, index.html and
   start-here/index.html (every page with a video or an App Store link). */
(function () {
  "use strict";

  var DEBUG = /[?&]rw_debug=1\b/.test(location.search);
  var PROGRESS = [25, 50, 75];

  function send(name, params) {
    if (typeof window.gtag !== "function") return;
    if (DEBUG) params.debug_mode = true;
    window.gtag("event", name, params);
  }

  // Where on the page something sits, from the nearest container that names it. First match wins, so the player
  // (a dialog appended to <body>) and the end-of-page spotlight are found before the section they sit in.
  var PLACES = [
    [".rw-player", "player"],
    ["[data-reels]", "band"],
    [".content-cta", "content_cta"],
    [".program-cta", "program_cta"],
    [".hub-cta", "hub_cta"],
    [".spot-cta", "spot_cta"],
    [".sport-tile", "sport_tile"],
    [".product-hero", "hero"],
    [".product-final-cta, .section.final", "final_cta"],
    ["nav, .site-header, .nav-links", "nav"],
    ["footer", "footer"]
  ];

  function placement(node) {
    for (var i = 0; i < PLACES.length; i++) {
      if (node.closest(PLACES[i][0])) return PLACES[i][1];
    }
    return node.closest("main, article, .content") ? "in_text" : "other";
  }

  // The page section around it (its id, else its first class), to tell apart two placements of the same kind on
  // one page, such as the home page's sport tiles at the top and at the end.
  function section(node) {
    var s = node.closest("section, header, footer, dialog");
    if (!s) return "";
    return s.id || (s.classList[0] || s.tagName.toLowerCase());
  }

  // /assets/video/<sport>-<video>-<release>.mp4 (previews.json)
  function describeVideo(v) {
    var src = v.currentSrc || v.src || "";
    var m = src.match(/\/([a-z]+)-([a-z]+)-[\d.]+\.mp4/);
    return {
      sport: m ? m[1] : "unknown",
      key: m ? m[2] : "unknown",
      url: src.replace(/^https?:\/\/[^/]+/, "")
    };
  }

  function videoParams(v, extra) {
    var d = describeVideo(v);
    var p = {
      video_provider: "rosterwise",
      video_title: d.sport + " " + d.key,
      video_url: d.url,
      video_duration: Math.round(v.duration || 0),
      video_current_time: Math.round(v.currentTime || 0),
      sport: d.sport,
      video_key: d.key,
      placement: placement(v),
      section: section(v)
    };
    for (var k in extra || {}) p[k] = extra[k];
    return p;
  }

  // Media events don't bubble, so listen while they're captured on the way down. State is kept on each <video>:
  // a replay after the end counts as a new start.
  document.addEventListener("play", function (e) {
    var v = e.target;
    if (!(v instanceof HTMLVideoElement) || v._rwStarted) return;
    v._rwStarted = true;
    v._rwProgress = {};
    // A first play can come before the file's length is known; wait for it so video_duration is real.
    if (v.duration) send("video_start", videoParams(v));
    else v.addEventListener("loadedmetadata", function () { send("video_start", videoParams(v)); }, { once: true });
  }, true);

  document.addEventListener("timeupdate", function (e) {
    var v = e.target;
    if (!(v instanceof HTMLVideoElement) || !v._rwStarted || !v.duration) return;
    var pct = (v.currentTime / v.duration) * 100;
    for (var i = 0; i < PROGRESS.length; i++) {
      var mark = PROGRESS[i];
      if (pct >= mark && !v._rwProgress[mark]) {
        v._rwProgress[mark] = true;
        send("video_progress", videoParams(v, { video_percent: mark }));
      }
    }
  }, true);

  document.addEventListener("ended", function (e) {
    var v = e.target;
    if (!(v instanceof HTMLVideoElement) || !v._rwStarted) return;
    send("video_complete", videoParams(v, { video_percent: 100 }));
    v._rwStarted = false;
  }, true);

  // Clicks are taken on the way down too, so a handler that stops the event later can't hide it.
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!(t instanceof Element)) return;

    var open = t.closest("[data-reels-open]");
    if (open) {
      var sports = [];
      var json = open.parentElement && open.parentElement.querySelector(".rw-player-data");
      try {
        JSON.parse(json.textContent).sports.forEach(function (s) { sports.push(s.slug); });
      } catch (err) { /* the player won't open either */ }
      send("video_player_open", {
        sport: sports.length === 1 ? sports[0] : "all",
        placement: placement(open),
        section: section(open)
      });
      return;
    }

    var a = t.closest('a[href*="apps.apple.com"]');
    if (a) {
      var m = a.href.match(/\/app\/rosterwise-([a-z]+)\/id\d+/);
      send("app_store_click", {
        sport: m ? m[1] : "unknown",
        placement: placement(a),
        section: section(a),
        link_url: a.href
      });
    }
  }, true);
})();
