/* The App Preview videos on rosterwise.app (board site-reels, Scott's picks 2026-10-29: option A, poster first and
   tap to play with sound, plus the "Watch it in action" pill on every app spotlight).

   Nothing plays or downloads until a visitor taps: a poster is a button, and the tap swaps in a <video> that plays
   in the page (playsinline) with its own controls. One video plays at a time. Markup: src/_includes/reels-band.njk
   and reels-pill.njk; data: src/_data/previews.json. */
(function () {
  "use strict";

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) {
      if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    }
    if (text) n.textContent = text;
    return n;
  }

  function makeVideo(src, poster, width, height) {
    var v = el("video", { controls: "", playsinline: "", preload: "auto", poster: poster, width: width, height: height });
    v.src = src;
    return v;
  }

  // One video at a time, anywhere on the page.
  document.addEventListener("play", function (e) {
    document.querySelectorAll("video").forEach(function (v) {
      if (v !== e.target && !v.paused) v.pause();
    });
  }, true);

  function pauseIn(root) {
    root.querySelectorAll("video").forEach(function (v) { v.pause(); });
  }

  // --- The band --------------------------------------------------------------------------------------------------

  document.querySelectorAll("[data-reels]").forEach(function (band) {
    band.addEventListener("click", function (e) {
      var play = e.target.closest(".rw-reel-play");
      if (play) {
        var img = play.querySelector("img");
        var v = makeVideo(play.dataset.reelSrc, play.dataset.reelPoster, img.getAttribute("width"), img.getAttribute("height"));
        v.setAttribute("aria-label", play.getAttribute("aria-label").replace(/^Play the /, "The "));
        play.replaceWith(v);
        v.focus();
        var p = v.play();
        if (p && p.catch) p.catch(function () { /* the controls are there to start it */ });
        return;
      }
      var chip = e.target.closest("[data-reels-chip]");
      if (chip) {
        band.querySelectorAll("[data-reels-chip]").forEach(function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        band.querySelectorAll("[data-reels-set]").forEach(function (set) {
          var on = set.dataset.reelsSet === chip.dataset.reelsChip;
          if (!on) pauseIn(set);
          set.hidden = !on;
        });
      }
    });

    // On a phone the row scrolls sideways; the dots follow the video in view.
    band.querySelectorAll(".rw-reels-set").forEach(function (set) {
      var row = set.querySelector(".rw-reels-row");
      var dots = set.querySelectorAll(".rw-reels-dots i");
      if (!row || !dots.length) return;
      var ticking = false;
      row.addEventListener("scroll", function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          ticking = false;
          var cards = row.children, mid = row.scrollLeft + row.clientWidth / 2, best = 0, gap = Infinity;
          for (var i = 0; i < cards.length; i++) {
            var c = cards[i].offsetLeft + cards[i].offsetWidth / 2 - row.offsetLeft;
            if (Math.abs(c - mid) < gap) { gap = Math.abs(c - mid); best = i; }
          }
          dots.forEach(function (d, i) { d.classList.toggle("on", i === best); });
        });
      }, { passive: true });
    });
  });

  // --- The pill and its player -----------------------------------------------------------------------------------

  var dialog = null, opener = null, data = null, sportIx = 0, videoIx = 0;

  function wordsList(v) {
    var box = el("div", { class: "rw-words" });
    box.appendChild(el("h3", null, v.title + ": what the video shows"));
    var ol = el("ol");
    v.words.forEach(function (w) {
      var li = el("li");
      li.appendChild(el("span", { class: "rw-words-kicker" }, w.kicker));
      li.appendChild(document.createTextNode(" " + w.text));
      if (w.kind === "beat") {
        li.appendChild(el("span", { class: "rw-words-line" }, w.line));
      } else if (w.line) {
        var lower = w.line.charAt(0) === w.line.charAt(0).toLowerCase();
        li.appendChild(document.createTextNode((lower ? " " : ". ") + w.line));
      }
      ol.appendChild(li);
    });
    box.appendChild(ol);
    return box;
  }

  function build() {
    dialog = el("dialog", { class: "rw-player", "aria-labelledby": "rw-player-title" });
    dialog.innerHTML =
      '<div class="rw-player-top"><h2 id="rw-player-title"></h2>' +
      '<button type="button" class="rw-player-x" aria-label="Close the videos">&times;</button></div>' +
      '<div class="rw-player-chips" role="group" aria-label="Choose a sport"></div>' +
      '<div class="rw-player-tabs" role="group" aria-label="Choose a video"></div>' +
      '<div class="rw-player-stage"></div>' +
      '<a class="rw-player-dl" target="_blank" rel="noopener"></a>' +
      '<details class="rw-reels-words rw-player-words"><summary>Read what this video shows</summary></details>';
    document.body.appendChild(dialog);
    dialog.querySelector(".rw-player-x").addEventListener("click", close);
    dialog.addEventListener("cancel", function () { pauseIn(dialog); });
    dialog.addEventListener("close", function () {
      pauseIn(dialog);
      if (opener) opener.focus();
    });
    // A tap on the dark surround closes it, as a tap outside a sheet does.
    dialog.addEventListener("click", function (e) { if (e.target === dialog) close(); });
    dialog.querySelector(".rw-player-chips").addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (b) { sportIx = Number(b.dataset.ix); videoIx = 0; render(true); }
    });
    dialog.querySelector(".rw-player-tabs").addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (b) { videoIx = Number(b.dataset.ix); render(true); }
    });
  }

  function render(autoplay) {
    var sport = data.sports[sportIx], video = sport.videos[videoIx];
    dialog.querySelector("#rw-player-title").textContent = "RosterWise " + sport.name + ", in action";

    var chips = dialog.querySelector(".rw-player-chips");
    chips.textContent = "";
    chips.hidden = data.sports.length < 2;
    data.sports.forEach(function (s, i) {
      chips.appendChild(el("button", { type: "button", "data-ix": i, "aria-pressed": i === sportIx ? "true" : "false" }, s.name));
    });

    var tabs = dialog.querySelector(".rw-player-tabs");
    tabs.textContent = "";
    sport.videos.forEach(function (v, i) {
      tabs.appendChild(el("button", { type: "button", "data-ix": i, "aria-pressed": i === videoIx ? "true" : "false" }, v.title));
    });

    var stage = dialog.querySelector(".rw-player-stage");
    pauseIn(stage);
    stage.textContent = "";
    var v = makeVideo(video.src, video.poster, video.width, video.height);
    v.setAttribute("aria-label", "The " + video.title + " video, with music");
    stage.appendChild(v);

    var dl = dialog.querySelector(".rw-player-dl");
    dl.href = sport.appStoreUrl;
    dl.textContent = "Download RosterWise " + sport.name + " on the App Store";

    var words = dialog.querySelector(".rw-player-words");
    var old = words.querySelector(".rw-words");
    if (old) old.remove();
    words.appendChild(wordsList(video));

    if (autoplay) {
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    }
  }

  // Pause here rather than only on the dialog's "close" event: a browser that doesn't deliver that event (seen in an
  // Electron view, 2026-10-29) would keep the video playing behind a closed player.
  function close() {
    if (!dialog) return;
    pauseIn(dialog);
    if (dialog.open) dialog.close();
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-reels-open]");
    if (!btn) return;
    var json = btn.parentElement.querySelector(".rw-player-data");
    if (!json) return;
    data = JSON.parse(json.textContent);
    if (!data.sports || !data.sports.length) return;
    if (!dialog) build();
    opener = btn;
    sportIx = 0;
    videoIx = 0;
    if (dialog.showModal) dialog.showModal(); else dialog.setAttribute("open", "");
    render(true); // the tap that opened it is what lets it play with sound
  });
})();
