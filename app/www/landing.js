// Welcome screen slideshow: every few seconds, fade to the next photo.
// It reads the slides from the page each time, so it keeps working when Shiny
// re-draws the welcome screen (e.g. after "Start over").
(function () {
  var SECONDS_PER_SLIDE = 6;
  setInterval(function () {
    var slides = document.querySelectorAll(".lp-bg .lp-slide");
    if (slides.length < 2) return;
    var dots = document.querySelectorAll(".lp-dots i");
    var current = 0;
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("active")) { current = i; break; }
    }
    var next = (current + 1) % slides.length;
    slides[current].classList.remove("active");
    slides[next].classList.add("active");
    for (var j = 0; j < dots.length; j++) dots[j].classList.toggle("active", j === next);
  }, SECONDS_PER_SLIDE * 1000);
})();
