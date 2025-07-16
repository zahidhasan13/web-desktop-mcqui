const menuIcon = document.querySelector(".mobile-nav-icon");
const mobileOverlay = document.querySelector(".mobile-overlay");
const mobileMenuBar = document.querySelector(".mobile-menu-bar");
const mobileNavClose = document.querySelector(".mobile-nav-close");

// Open menu
menuIcon.addEventListener("click", () => {
  mobileOverlay.classList.add("show");
  mobileMenuBar.classList.add("show");
});

// Close menu when clicking close button
mobileNavClose.addEventListener("click", () => {
  mobileOverlay.classList.remove("show");
  mobileMenuBar.classList.remove("show");
});

// Close menu when clicking overlay
mobileOverlay.addEventListener("click", () => {
  mobileOverlay.classList.remove("show");
  mobileMenuBar.classList.remove("show");
});
