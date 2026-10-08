"use strict";
document.documentElement.classList.add("js");

// Inclusive calendar months, with ongoing periods refreshed on each visit.
const durationToday = new Date();
for (const label of document.querySelectorAll("[data-duration-start]")) {
  const [year, month] = label.dataset.durationStart.split("-").map(Number);
  const ongoingMonths = Math.max(0, (durationToday.getFullYear() - year) * 12
    + durationToday.getMonth() + 1 - month + 1);
  const total = ongoingMonths + Number(label.dataset.durationCompletedMonths || 0);
  if (total < 1) continue;
  const years = Math.floor(total / 12);
  const months = total % 12;
  label.textContent = (label.dataset.durationPrefix ?? "· ") + [
    years ? `${years} ${years === 1 ? "yr" : "yrs"}` : "",
    months ? `${months} ${months === 1 ? "mo" : "mos"}` : ""
  ].filter(Boolean).join(" ")
    + (label.dataset.durationCompletedMonths ? " total" : "");
}

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
// Measure intrinsic desktop widths so font loading and zoom cannot wrap the links.
const header = navigation?.closest(".header-inner");
const skinDate = document.querySelector(".skin-project-date");
function updateResponsiveLayout() {
  if (header && navigation) {
    const probe = navigation.cloneNode(true);
    probe.removeAttribute("id");
    probe.className = "nav-fit-probe";
    probe.setAttribute("aria-hidden", "true");
    probe.inert = true;
    document.body.append(probe);
    const requiredWidth = probe.getBoundingClientRect().width
      + header.querySelector(".wordmark").getBoundingClientRect().width + 28;
    probe.remove();
    const mobile = window.matchMedia("(max-width: 800px)").matches
      || requiredWidth > header.clientWidth;
    if (mobile !== header.classList.contains("nav-mobile")) setMenu(false);
    header.classList.toggle("nav-mobile", mobile);
  }
  if (skinDate) {
    const probe = skinDate.cloneNode(true);
    probe.classList.remove("date-compact");
    probe.classList.add("date-fit-probe");
    probe.style.whiteSpace = "nowrap";
    probe.setAttribute("aria-hidden", "true");
    skinDate.parentElement.append(probe);
    const compact = probe.getBoundingClientRect().width > skinDate.parentElement.clientWidth;
    probe.remove();
    skinDate.classList.toggle("date-compact", compact);
  }
}
updateResponsiveLayout();
window.addEventListener("resize", updateResponsiveLayout);
document.fonts?.ready.then(updateResponsiveLayout);
if ("ResizeObserver" in window) {
  const layoutObserver = new ResizeObserver(updateResponsiveLayout);
  if (header) layoutObserver.observe(header);
  if (skinDate) layoutObserver.observe(skinDate.parentElement);
}

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

// Native disclosures remain functional without JavaScript. Animate height in Safari
// as well as browsers without support for CSS details-content transitions.
for (const details of document.querySelectorAll("details")) {
  const summary = details.querySelector(":scope > summary");
  const listContent = details.classList.contains("cv-more")
    ? details.querySelector(".cv-earlier") : null;
  if (listContent) listContent.tabIndex = -1;
  let animation;
  let intendedOpen = details.open;
  function toggle(open, restoreFocus = false) {
    intendedOpen = open;
    const start = details.getBoundingClientRect().height;
    animation?.cancel();
    // The list opener is hidden while expanded; measure its closed height first.
    const previousDisplay = summary.style.display;
    if (listContent) summary.style.display = "inline-flex";
    const closedHeight = summary.getBoundingClientRect().height;
    summary.style.display = previousDisplay;
    details.open = true;
    const end = open ? details.getBoundingClientRect().height : closedHeight;
    if (open && listContent) listContent.focus({ preventScroll: true });
    if (!open && listContent && details.getBoundingClientRect().top < 85) {
      details.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "start"
      });
    }
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !details.animate) {
      details.open = open;
      details.style.overflow = "";
      animation = undefined;
      if (restoreFocus) summary.focus({ preventScroll: true });
      return;
    }
    details.style.overflow = "hidden";
    animation = details.animate([{ height: `${start}px` }, { height: `${end}px` }], {
      duration: 360, easing: "cubic-bezier(0.22, 1, 0.36, 1)"
    });
    animation.onfinish = () => {
      details.open = open;
      details.style.overflow = "";
      animation = undefined;
      if (restoreFocus) summary.focus({ preventScroll: true });
    };
  }
  summary.addEventListener("click", event => {
    if (event.target.closest("a")) return;
    event.preventDefault();
    toggle(animation ? !intendedOpen : !details.open);
  });
  details.querySelector(".cv-close")?.addEventListener("click", () => toggle(false, true));
}
