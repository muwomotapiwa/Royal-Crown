// Hamburger Menu Toggle for Thank You Page
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const heading = document.getElementById("thank-you-heading");
  const params = new URLSearchParams(window.location.search);
  const visitorName = (params.get("name") || sessionStorage.getItem("royalCrownContactName") || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 60);

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  if (heading && visitorName) {
    heading.textContent = `Thank You, ${visitorName}!`;
  }

  if (params.has("name") && window.history.replaceState) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});
