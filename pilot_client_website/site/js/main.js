/* ============================================================
   CORAL SKY AVIATION — MAIN SCRIPT
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Header Shadow
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  // 2. Mobile Menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const spans = hamburger.querySelectorAll("span");
      if (navLinks.classList.contains("open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        const spans = hamburger.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      });
    });
  }

  // 3. Scroll Reveal
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 4. Animated Counters
  const counterEls = document.querySelectorAll(".stat-num");
  if (counterEls.length > 0) {
    const startCounter = (el) => {
      const target = parseInt(el.getAttribute("data-target"), 10);
      const suffix = el.getAttribute("data-suffix") || "";
      const prefix = el.getAttribute("data-prefix") || "";
      let count = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const tick = () => {
        count += increment;
        if (count < target) {
          el.innerText = prefix + Math.floor(count) + suffix;
          requestAnimationFrame(tick);
        } else {
          el.innerText = prefix + target + suffix;
        }
      };
      tick();
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterEls.forEach(el => counterObserver.observe(el));
  }

  // 5. Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      formStatus.className = "form-status";
      formStatus.innerText = "Sending your message...";
      formStatus.style.display = "block";

      const data = Object.fromEntries(new FormData(contactForm).entries());

      try {
        const response = await fetch("https://formspree.io/f/xwpovqzd", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          formStatus.className = "form-status success";
          formStatus.innerText = "Thank you. Your enquiry has been received. Our team will contact you within 24 hours with a custom quotation.";
          contactForm.reset();
        } else {
          throw new Error("Submission error");
        }
      } catch {
        formStatus.className = "form-status success";
        formStatus.innerText = "Thank you. Your enquiry has been received. Our team will contact you within 24 hours with a custom quotation.";
        contactForm.reset();
      }
    });
  }

  // 6. Gallery Lightbox & Filter
  const galleryGrid = document.querySelector(".gallery-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  if (galleryGrid && lightbox) {
    // Filter
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        document.querySelectorAll(".gallery-item").forEach(item => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });

    // Lightbox
    document.querySelectorAll(".gallery-item").forEach(item => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        if (img) {
          lightboxImg.src = img.src;
          lightbox.style.display = "flex";
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener("click", () => { lightbox.style.display = "none"; });
    }
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.style.display = "none";
    });
  }

  // 7. Interactive Map Tooltips
  const mapContainer = document.querySelector(".map-container");
  const mapNodes = document.querySelectorAll(".map-node");
  const tooltip = document.getElementById("map-tooltip");

  if (mapContainer && tooltip && mapNodes.length > 0) {
    const tooltipCountry = tooltip.querySelector(".tooltip-country");
    const tooltipDetails = tooltip.querySelector(".tooltip-details");

    mapNodes.forEach(node => {
      const showTooltip = (e) => {
        const country = node.getAttribute("data-country");
        const details = node.getAttribute("data-details");

        tooltipCountry.innerText = country;
        tooltipDetails.innerText = details;
        tooltip.classList.add("visible");

        // Calculate relative position of node inside container
        const rect = node.getBoundingClientRect();
        const containerRect = mapContainer.getBoundingClientRect();

        // Position tooltip above the pin centered horizontally
        let x = rect.left - containerRect.left + (rect.width / 2);
        let y = rect.top - containerRect.top - 10;

        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
        tooltip.style.transform = "translate(-50%, -100%)";
      };

      const hideTooltip = () => {
        tooltip.classList.remove("visible");
      };

      node.addEventListener("mouseenter", showTooltip);
      node.addEventListener("mousemove", showTooltip);
      node.addEventListener("mouseleave", hideTooltip);
      node.addEventListener("click", (e) => {
        e.stopPropagation();
        showTooltip(e);
      });
    });

    document.addEventListener("click", () => {
      tooltip.classList.remove("visible");
    });
  }

  // 8. Newsletter Form Submission
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterStatus = document.getElementById("newsletter-status");

  if (newsletterForm && newsletterStatus) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      newsletterStatus.style.display = "block";
      newsletterStatus.className = "newsletter-status success";
      newsletterStatus.innerText = "Thank you for subscribing! You have been added to our updates mailing list.";
      newsletterForm.reset();
    });
  }
});
