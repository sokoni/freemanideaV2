/**
 * Pathway AI × Chicago State University
 * About Page Logic (about.js)
 * Smooth internal navigation scrolling and mobile menu handling.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for internal anchor links (e.g. #how-it-works)
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});
