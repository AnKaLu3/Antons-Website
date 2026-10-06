"use strict";
document.documentElement.classList.add("js");
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
