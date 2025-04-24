window.onload = function () {
  // Hamburger Menu Toggle
  document.getElementById("hamburger").addEventListener("click", function () {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  });

  // Close Button for Navigation Links
  document.getElementById("close-btn").addEventListener("click", function () {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.remove("active");
  });

  // Section Visibility Animation on Scroll
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Adjust this value to control when the animation triggers
    }
  );

  sections.forEach((section) => {
    section.classList.add("section-hidden");
    observer.observe(section);
  });






  // Skill Circle Animation
  const skillCircles = document.querySelectorAll(".skill-circle");

  skillCircles.forEach((circle) => {
    const percent = circle.getAttribute("data-percent"); // Get percentage

    // Define color manually based on data-percent
    let color;
    if (percent <= 30) {
      color = "#FF5733"; // Red
    } else if (percent <= 50) {
      color = "#FFC300"; // Yellow
    } else if (percent <= 80) {
      color = "#7CFC00"; // Lime Green
    } else {
      color = "#4CAF50"; // Green
    }

    // Ensure transition happens after loading
    setTimeout(() => {
      circle.style.background = `conic-gradient(${color} ${percent}%, #e0e0e0 ${percent}% 100%)`;
    }, 500);
  });
};

