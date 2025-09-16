/* --- script.js --- */

document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle Functionality ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Toggles the 'active' class on the hamburger menu and nav menu
  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  // Event listener for hamburger click
  hamburger.addEventListener("click", toggleMenu);

  // Close menu when a nav link is clicked
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // --- Smooth Scrolling for Navigation Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // --- Simple Contact Form Validation ---
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let isValid = true;
    let errors = [];

    // Clear previous status
    formStatus.textContent = "";
    formStatus.className = "form-status";

    // Validate fields
    if (name === "") {
      isValid = false;
      errors.push("Name is required.");
    }

    if (email === "") {
      isValid = false;
      errors.push("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Simple regex for email validation
      isValid = false;
      errors.push("Please enter a valid email address.");
    }

    if (message === "") {
      isValid = false;
      errors.push("Message is required.");
    }

    // Display results
    if (!isValid) {
      formStatus.textContent = errors.join(" ");
      formStatus.classList.add("error");
    } else {
      // On success, show a message and clear the form
      // In a real application, this is where you would send the data to a server
      formStatus.textContent =
        "Thank you for your message! I will get back to you soon.";
      formStatus.classList.add("success");
      contactForm.reset();
    }
  });
});
