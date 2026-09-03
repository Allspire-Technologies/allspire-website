// Paint the right theme before the app mounts: remembered choice first, then the OS.
// External (not inline) so the Content-Security-Policy can stay free of 'unsafe-inline'.
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
