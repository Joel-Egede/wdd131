// Footer: dynamic year and last-modified date
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML =
  "Last Modified: " + document.lastModified;

// Hamburger menu toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const primaryNav = document.getElementById("primary-nav");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
  hamburgerBtn.innerHTML = isOpen
    ? '<span class="hamburger-icon">&times;</span>'
    : '<span class="hamburger-icon">&#9776;</span>';
});