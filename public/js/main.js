// Main JavaScript for ITSthe1 Website

document.addEventListener("DOMContentLoaded", function () {
  // Set Active Navigation State
  setActiveNavigation();

  // Mobile Navigation Toggle
  const navbarBurger = document.querySelector(".navbar-burger");
  const navbarMenu = document.querySelector(".navbar-menu");

  if (navbarBurger && navbarMenu) {
    navbarBurger.addEventListener("click", function () {
      navbarBurger.classList.toggle("active");
      navbarMenu.classList.toggle("active");
    });
  }

  // Mobile Dropdown Toggle
  const dropdownItems = document.querySelectorAll(".has-dropdown");

  dropdownItems.forEach((dropdown) => {
    const dropdownLink = dropdown.querySelector(".navbar-link");

    if (dropdownLink) {
      dropdownLink.addEventListener("click", function (e) {
        // Only prevent default on mobile
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle("active");

          // Close other dropdowns
          dropdownItems.forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove("active");
            }
          });
        }
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-dropdown")) {
      dropdownItems.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });

  // Header Scroll Effect with throttling for better performance
  const header = document.getElementById("header");
  let lastScroll = 0;
  let ticking = false;

  function updateHeader() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    }

    lastScroll = currentScroll;
    ticking = false;
  }

  function requestHeaderUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestHeaderUpdate, { passive: true });

  // Scroll to Top Button with improved performance
  const scrollToTopBtn = document.getElementById("scrollToTop");

  if (scrollToTopBtn) {
    let scrollTicking = false;

    function updateScrollButton() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
      scrollTicking = false;
    }

    function requestScrollUpdate() {
      if (!scrollTicking) {
        requestAnimationFrame(updateScrollButton);
        scrollTicking = true;
      }
    }

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });

    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Initialize AOS (Animate On Scroll) if available
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }

  // Form Validation and Submission (if contact form exists)
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic form validation
      const requiredFields = contactForm.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("error");
        } else {
          field.classList.remove("error");
        }
      });

      // Email validation
      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          isValid = false;
          emailField.classList.add("error");
        }
      }

      if (isValid) {
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Collect form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
          formObject[key] = value;
        });

        // Add timestamp and additional info
        formObject.timestamp = new Date().toISOString();
        formObject.page = window.location.href;

        // Try to submit the form (you can replace this with your preferred form service)
        submitContactForm(formObject)
          .then((response) => {
            if (response.success) {
              showNotification(
                "✅ Message sent successfully! We'll get back to you within 24 hours.",
                "success"
              );
              contactForm.reset();
            } else {
              throw new Error("Form submission failed");
            }
          })
          .catch((error) => {
            console.error("Form submission error:", error);
            showNotification(
              "❌ Sorry, there was an error sending your message. Please try again or contact us directly at pasindu.itsthe1@gmail.com",
              "error"
            );
          })
          .finally(() => {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          });
      } else {
        showNotification(
          "Please fill in all required fields correctly.",
          "error"
        );
      }
    });
  }

  // Contact form submission function
  async function submitContactForm(formData) {
    try {
      // Check if bot field is filled (spam protection)
      if (formData["bot-field"]) {
        throw new Error("Spam detected");
      }

      // Remove bot field from form data
      delete formData["bot-field"];

      // Try different email methods in order of preference
      let lastError;

      // Method 1: Try EmailJS first (if configured)
      if (typeof sendEmailViaEmailJS === "function" && window.emailjs) {
        try {
          console.log("Trying EmailJS...");
          return await sendEmailViaEmailJS(formData);
        } catch (emailjsError) {
          console.warn("EmailJS failed:", emailjsError);
          lastError = emailjsError;
        }
      }

      // Method 2: Try Fetch API with FormSubmit
      if (typeof sendEmailViaFetchAPI === "function") {
        try {
          console.log("Trying Fetch API...");
          return await sendEmailViaFetchAPI(formData);
        } catch (fetchError) {
          console.warn("Fetch API failed:", fetchError);
          lastError = fetchError;
        }
      }

      // Method 3: Fallback to direct form submission
      console.log("Using direct form submission...");
      return await sendEmailViaFormSubmit(formData);
    } catch (error) {
      console.error("All form submission methods failed:", error);
      throw lastError || error;
    }
  }

  // Notification System
  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(function () {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);

    // Manual close
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", function () {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    });
  }

  // Loading Animation (if needed)
  const loadingOverlay = document.querySelector(".loading-overlay");
  if (loadingOverlay) {
    window.addEventListener("load", function () {
      loadingOverlay.style.opacity = "0";
      setTimeout(function () {
        loadingOverlay.style.display = "none";
      }, 300);
    });
  }

  // Lazy Loading for Images with improved performance
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            // Create a new image to preload
            const newImg = new Image();
            newImg.onload = function() {
              img.src = img.dataset.src;
              img.classList.remove("lazy");
              img.classList.add("loaded");
            };
            newImg.onerror = function() {
              img.classList.add("error");
            };
            newImg.src = img.dataset.src;
            observer.unobserve(img);
          }
        }
      });
    }, {
      // Load images 50px before they come into view
      rootMargin: '50px'
    });

    const lazyImages = document.querySelectorAll("img[data-src]");
    lazyImages.forEach(function (img) {
      // Add loading attribute for better performance
      img.loading = "lazy";
      imageObserver.observe(img);
    });
  }

  // Parallax Effect for Hero Section
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      const heroBackground = hero.querySelector(".hero-background");
      if (heroBackground) {
        heroBackground.style.transform = `translateY(${rate}px)`;
      }
    });
  }

  // Counter Animation
  function animateCounters() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(function (counter) {
      const target = parseInt(counter.getAttribute("data-target"));
      const current = parseInt(counter.innerText);
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(function () {
          animateCounters();
        }, 20);
      } else {
        counter.innerText = target;
      }
    });
  }

  // Product Showcase Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  if (tabButtons.length > 0 && tabPanes.length > 0) {
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

          // Trigger AOS animations for the new content
          if (typeof AOS !== "undefined") {
            AOS.refresh();
          }
        }
      });
    });
  }

  // Trigger counter animation when in view
  const counterSection = document.querySelector(".counters-section");
  if (counterSection && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    });

    counterObserver.observe(counterSection);
  }

  // Product Slider Functionality
  function initProductSlider() {
    const productSlider = document.querySelector(".products-slider");
    const productSlides = document.querySelectorAll(".product-slide");
    const sliderIndicators = document.querySelectorAll(".indicator");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    console.log("Product Slider Elements:", {
      slider: !!productSlider,
      slides: productSlides.length,
      indicators: sliderIndicators.length,
      prevBtn: !!prevBtn,
      nextBtn: !!nextBtn,
    });

    if (!productSlider || productSlides.length === 0) {
      console.log("Product slider not found or no slides");
      return;
    }

    let currentSlide = 0;
    const totalSlides = productSlides.length;
    let autoPlayInterval;

    // Function to show specific slide
    function showSlide(index) {
      console.log("Showing slide:", index);

      // Remove active class from all slides and indicators
      productSlides.forEach((slide, i) => {
        slide.classList.remove("active");
      });

      sliderIndicators.forEach((indicator, i) => {
        indicator.classList.remove("active");
      });

      // Add active class to current slide and indicator
      if (productSlides[index]) {
        productSlides[index].classList.add("active");
      }

      if (sliderIndicators[index]) {
        sliderIndicators[index].classList.add("active");
      }
    }

    // Function to go to next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      console.log("Next slide:", currentSlide);
      showSlide(currentSlide);
    }

    // Function to go to previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      console.log("Previous slide:", currentSlide);
      showSlide(currentSlide);
    }

    // Auto-play functionality
    function startAutoPlay() {
      stopAutoPlay();
      console.log("Starting auto-play timer");
      autoPlayInterval = setInterval(nextSlide, 4000); // 4 seconds per slide
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        console.log("Stopping auto-play timer");
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
      }
    }

    // Event listeners for navigation buttons
    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Next button clicked");
        stopAutoPlay();
        nextSlide();
        setTimeout(startAutoPlay, 6000); // Restart after 6 seconds
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Previous button clicked");
        stopAutoPlay();
        prevSlide();
        setTimeout(startAutoPlay, 6000); // Restart after 6 seconds
      });
    }

    // Event listeners for indicators
    sliderIndicators.forEach((indicator, index) => {
      indicator.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Indicator clicked:", index);
        stopAutoPlay();
        currentSlide = index;
        showSlide(currentSlide);
        setTimeout(startAutoPlay, 6000); // Restart after 6 seconds
      });
    });

    // Initialize slider
    showSlide(0);

    // Start auto-play
    setTimeout(startAutoPlay, 2000); // Start after 2 seconds

    // Pause on hover
    productSlider.addEventListener("mouseenter", stopAutoPlay);
    productSlider.addEventListener("mouseleave", startAutoPlay);

    console.log("Product slider initialized successfully");
  }

  // Initialize the slider
  initProductSlider();
});

// Quick Contact Form Fill Function
function fillContactForm(type, subject) {
  const messageField = document.getElementById("message");
  const serviceField = document.getElementById("service");

  let message = "";
  let service = "";

  switch (type) {
    case "general":
      message =
        "Hello, I would like to learn more about your IT solutions and services. Please provide me with more information about how you can help my business.";
      service = "";
      break;
    case "quote":
      message =
        "Hello, I am interested in getting a quote for your services. Please contact me to discuss my requirements and provide pricing information.";
      service = "";
      break;
    case "consultation":
      message =
        "Hello, I would like to schedule a free consultation to discuss my business needs and explore how your solutions can help us.";
      service = "";
      break;
    case "demo":
      message =
        "Hello, I am interested in seeing a demo of your products and solutions. Please schedule a demonstration at your earliest convenience.";
      service = "";
      break;
    case "support":
      message =
        "Hello, I need technical support assistance. Please contact me to help resolve my technical issues.";
      service = "it-support";
      break;
    case "partnership":
      message =
        "Hello, I am interested in exploring partnership opportunities with ITSthe1. Please contact me to discuss potential collaboration.";
      service = "other";
      break;
  }

  if (messageField) {
    messageField.value = message;
    messageField.focus();
  }

  if (serviceField && service) {
    serviceField.value = service;
  }

  // Scroll to form
  const contactFormSection = document.querySelector(".contact-form-section");
  if (contactFormSection) {
    contactFormSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Main JavaScript for ITSthe1 Website

// Debounce function for performance optimization
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Set Active Navigation State
function setActiveNavigation() {
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll(".navbar-item, .navbar-link");

  // Remove existing active classes
  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Find and set active navigation item
  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (!href) return;

    let isActive = false;

    // Home page exact match
    if (href === "/" && currentPath === "/") {
      isActive = true;
    }
    // Other pages - check if current path starts with menu path
    else if (href !== "/" && currentPath.startsWith(href)) {
      isActive = true;
    }
    // Exact match for other pages
    else if (currentPath === href) {
      isActive = true;
    }

    if (isActive) {
      item.classList.add("active");
    }
  });
}
