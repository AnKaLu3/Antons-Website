"use strict";
document.documentElement.classList.add("js");

// Keep older section links working while showing the current names in the URL.
const sectionAliases = {
  "#work": "#jobs",
  "#about": "#about-me",
  "#projects": "#portfolio",
  "#community": "#volunteering",
};
function updateSectionHash() {
  const hash = sectionAliases[location.hash];
  if (!hash) return;
  history.replaceState(null, "", location.pathname + location.search + hash);
  document.querySelector(hash)?.scrollIntoView({ behavior: "instant" });
}
const initialSectionAlias = sectionAliases[location.hash];
updateSectionHash();
if (initialSectionAlias) {
  // Reload scroll restoration happens after the deferred script has run.
  window.addEventListener("load", () => {
    document.querySelector(initialSectionAlias)?.scrollIntoView({ behavior: "instant" });
  }, { once: true });
}
window.addEventListener("hashchange", updateSectionHash);

// Native details remain usable without JavaScript; enhance expandable sections with motion.
document.querySelectorAll("[data-expandable]").forEach((details) => {
  const summary = details.querySelector("summary");
  const content = details.querySelector(".expandable-content");
  const closeButton = details.querySelector(".expandable-close");
  let animation = null;
  content.tabIndex = -1;

  function setExpanded(open) {
    if (animation) return;
    const startHeight = details.getBoundingClientRect().height;
    // Measure the opener even while it is hidden in the expanded state.
    summary.style.display = "inline-flex";
    const closedHeight = summary.getBoundingClientRect().height;
    summary.style.removeProperty("display");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (open) {
      details.open = true;
      content.focus({ preventScroll: true });
    } else if (details.getBoundingClientRect().top < 85) {
      details.scrollIntoView({
        behavior: reduceMotion ? "instant" : "smooth",
        block: "start",
      });
    }

    function finish() {
      if (!open) {
        details.open = false;
        summary.focus({ preventScroll: true });
      }
      details.style.removeProperty("overflow");
      animation = null;
    }

    if (reduceMotion) {
      finish();
      return;
    }

    details.style.overflow = "hidden";
    animation = details.animate(
      [
        { height: `${startHeight}px` },
        { height: `${open ? details.scrollHeight : closedHeight}px` },
      ],
      { duration: 360, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
    animation.onfinish = finish;
  }

  summary.addEventListener("click", (event) => {
    event.preventDefault();
    setExpanded(!details.open);
  });
  closeButton.addEventListener("click", () => setExpanded(false));
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.getElementById("site-nav");
function setMenu(open) {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.innerHTML = open
    ? 'Close <span aria-hidden="true">−</span>'
    : 'Menu <span aria-hidden="true">＋</span>';
  navigation.classList.toggle("open", open);
}
menuButton?.addEventListener("click", () =>
  setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
);
navigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton?.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false);
    menuButton.focus();
  }
});
const sectionLinks = Array.from(
  document.querySelectorAll('#site-nav a[href^="#"]'),
);
if ("IntersectionObserver" in window && sectionLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting)
          sectionLinks.forEach((link) => {
            const active = link.hash === "#" + entry.target.id;
            link.classList.toggle("active", active);
            if (active) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
      }
    },
    { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
  );
  sectionLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
}
// Compatibility with the original portfolio's query-string project URLs.
const requestedPage = new URLSearchParams(location.search).get("page");
const legacyPages = {
  home: "index.html",
  "robotic-skin": "robotic-skin.html",
  "furhat-audio": "furhat-audio.html",
  furpack: "furpack.html",
  "furhat-360": "furhat-360.html",
  cobot: "cobot.html",
  "harvesting-robot": "harvesting-robot.html",
};
if (
  requestedPage &&
  Object.prototype.hasOwnProperty.call(legacyPages, requestedPage)
) {
  location.replace(legacyPages[requestedPage] + location.hash);
}
