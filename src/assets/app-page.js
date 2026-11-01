/* /app/: one chosen sport for the whole page, and the hero's silent loop (board app-page; Scott's marks, 2026-11-01:
   the hero video loops silently, every other video stays tap-to-play).

   The sport: ?sport=<slug>, else the sport of the site page the visitor came from, else their last pick, else the
   first live sport (the one the page renders visible, so nothing jumps without JavaScript). Every element with
   data-ap-for="<slug>" shows only for its sport.

   The loop plays muted only while on screen, never for anyone who asked for reduced motion or data saving (they
   get the poster and a Play button), and stops for good once the visitor presses Pause. Sound on restarts it from
   the beginning with sound. Markup: src/app/index.njk. */
(function () {
  "use strict";

  var chips = document.querySelectorAll("[data-ap-sport]");
  var slugs = [];
  chips.forEach(function (c) { slugs.push(c.dataset.apSport); });
  var KEY = "rw-app-sport";

  function store(get, value) {
    try {
      if (get) return window.localStorage.getItem(KEY);
      window.localStorage.setItem(KEY, value);
    } catch (e) { /* private window or blocked storage: the page still works */ }
    return null;
  }

  function fromUrl() {
    var m = location.search.match(/[?&]sport=([a-z]+)/);
    return m && slugs.indexOf(m[1]) >= 0 ? m[1] : null;
  }

  // The same rule as the site's sportForUrl filter: the slug bounded by "/" or "-".
  function fromReferrer() {
    var ref = document.referrer;
    if (!ref) return null;
    try {
      var u = new URL(ref);
      if (u.origin !== location.origin) return null;
      for (var i = 0; i < slugs.length; i++) {
        if (new RegExp("[/-]" + slugs[i] + "[/-]").test(u.pathname)) return slugs[i];
      }
    } catch (e) { /* not a URL */ }
    return null;
  }

  var stillOnly = (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) ||
    (navigator.connection && navigator.connection.saveData);

  // --- The loop ---------------------------------------------------------------------------------------------------

  var loops = [];
  document.querySelectorAll(".ap-loop").forEach(function (fig) {
    var v = fig.querySelector("video[data-ap-loop]");
    if (!v) return;
    var loop = { fig: fig, v: v, pause: fig.querySelector("[data-ap-pause]"), sound: fig.querySelector("[data-ap-sound]"),
      stopped: !!stillOnly, inView: false };
    loops.push(loop);
    setLabels(loop);

    loop.pause.addEventListener("click", function () {
      if (v.paused) {
        loop.stopped = false;
        ensureSrc(v);
        play(v);
      } else {
        loop.stopped = true;
        v.pause();
      }
      setLabels(loop);
    });

    loop.sound.addEventListener("click", function () {
      ensureSrc(v);
      if (v.muted) {
        v.muted = false;
        v.currentTime = 0;
        loop.stopped = false;
        play(v);
      } else {
        v.muted = true;
      }
      setLabels(loop);
    });

    v.addEventListener("play", function () { setLabels(loop); });
    v.addEventListener("pause", function () { setLabels(loop); });
  });

  function ensureSrc(v) {
    if (!v.getAttribute("src") && v.dataset.src) v.src = v.dataset.src;
  }

  function play(v) {
    var p = v.play();
    if (p && p.catch) p.catch(function () { /* the buttons are there to start it */ });
  }

  function setLabels(loop) {
    var playing = !loop.v.paused;
    loop.pause.textContent = playing ? "Pause" : "Play";
    loop.pause.setAttribute("aria-pressed", playing ? "false" : "true");
    loop.sound.textContent = loop.v.muted ? "Sound on" : "Sound off";
    loop.sound.setAttribute("aria-pressed", loop.v.muted ? "false" : "true");
    loop.v.setAttribute("aria-label", loop.v.getAttribute("aria-label").replace(/, playing (without|with) sound$/, "") +
      (loop.v.muted ? ", playing without sound" : ", playing with sound"));
  }

  function update(loop) {
    var shown = !loop.fig.hidden;
    if (shown && loop.inView && !loop.stopped) {
      ensureSrc(loop.v);
      play(loop.v);
    } else if (!loop.v.paused) {
      loop.v.pause();
    }
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        loops.forEach(function (loop) {
          if (loop.fig === e.target) { loop.inView = e.isIntersecting; update(loop); }
        });
      });
    }, { threshold: 0.4 });
    loops.forEach(function (loop) { io.observe(loop.fig); });
  }

  // --- The chosen sport -------------------------------------------------------------------------------------------

  function choose(slug, remember) {
    if (slugs.indexOf(slug) < 0) return;
    chips.forEach(function (c) { c.setAttribute("aria-pressed", c.dataset.apSport === slug ? "true" : "false"); });
    document.querySelectorAll("[data-ap-for]").forEach(function (el) {
      var on = el.dataset.apFor === slug;
      if (!on) el.querySelectorAll("video").forEach(function (v) { v.pause(); });
      el.hidden = !on;
    });
    loops.forEach(update);
    if (remember) store(false, slug);
  }

  chips.forEach(function (c) {
    c.addEventListener("click", function () { choose(c.dataset.apSport, true); });
  });

  var first = fromUrl() || fromReferrer() || store(true) || slugs[0];
  if (first && first !== slugs[0]) choose(first, false);
})();
