// Tab functionality for ITSthe1 website
document.addEventListener("DOMContentLoaded", function () {
  initializeTabs();
});

// Initialize Tab Functionality
function initializeTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  if (tabButtons.length === 0 || tabPanes.length === 0) return;

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // Remove active class from all buttons and panes
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // Add active class to clicked button and corresponding pane
      this.classList.add("active");
      const targetPane = document.getElementById(targetTab);
      if (targetPane) {
        targetPane.classList.add("active");
      }

      // Smooth scroll to tabs if needed
      const tabContainer = document.querySelector(".product-tabs");
      if (tabContainer) {
        const offset =
          tabContainer.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    });
  });

  // Add keyboard navigation support
  tabButtons.forEach((button, index) => {
    button.addEventListener("keydown", function (e) {
      let targetIndex = index;

      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        targetIndex = index > 0 ? index - 1 : tabButtons.length - 1;
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        targetIndex = index < tabButtons.length - 1 ? index + 1 : 0;
      } else if (e.key === "Home") {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        targetIndex = tabButtons.length - 1;
      }

      if (targetIndex !== index) {
        tabButtons[targetIndex].focus();
        tabButtons[targetIndex].click();
      }
    });
  });
}
