// Apex Plumbing Co. — site interactions

(function () {
  "use strict";

  // Mobile nav toggle
  var burger = document.querySelector(".hamburger");
  var mobileNav = document.getElementById("mobileNav");
  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      mobileNav.classList.toggle("open");
    });
    // Close the menu when a link is tapped
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.classList.remove("open");
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Quote form — demo behaviour: validate + show success message.
  // FOR A LIVE SITE: point the <form> at Formspree or your backend
  // and delete this intercept so the browser submits for real.
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var success = document.getElementById("formSuccess");
      if (success) {
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }
})();
