document.addEventListener("DOMContentLoaded", () => {
  // Project filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");

        if (filterValue === "all" || cardCategory === filterValue) {
          card.classList.remove("hide");
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.opacity = "1";
          }, 50);
        } else {
          card.classList.add("hide");
        }
      });
    });
  });

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navbar = document.querySelector(".navbar");

  if (navToggle && navbar) {
    navToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navbar.classList.remove("open");
      });
    });
  }
});
