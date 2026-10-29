// The Sports menu in the site header (src/_includes/nav-sports.njk). Opens on click, closes on
// Escape or a click outside. When the page's hamburger is showing, the panel is part of the open
// mobile menu (nav-sports.css), so the button does nothing.
(function () {
  var btn = document.getElementById('navSportsBtn');
  var panel = document.getElementById('navSports');
  var hamburger = document.getElementById('navToggle');
  if (!btn || !panel) return;
  function setOpen(open) {
    panel.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function (e) {
    if (hamburger && getComputedStyle(hamburger).display !== 'none') return;
    e.stopPropagation();
    setOpen(!panel.classList.contains('open'));
  });
  document.addEventListener('click', function (e) {
    if (!panel.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) { setOpen(false); btn.focus(); }
  });
})();
