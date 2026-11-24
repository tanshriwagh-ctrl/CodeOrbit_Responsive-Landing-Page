
/* =========================================
   AURA INTERIORS - JAVASCRIPT
   ========================================= */


// Always open the website from the Home section
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', function () {
    if (window.location.hash) {
        history.replaceState(
            null,
            '',
            window.location.pathname + window.location.search
        );
    }

    window.scrollTo(0, 0);
});

// 1. PAGE LOADER

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.style.display = "none";
        }, 1400);
    }

});


// 2. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.innerHTML = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });


    // Close menu after clicking a link

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    // Close menu with Escape

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


// 3. NAVBAR SCROLL EFFECT

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

    if (header) {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

});


// 4. PROJECT FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Activate selected button

        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        // Filter projects

        projectCards.forEach(function (card) {

            const category = card.getAttribute("data-category");

            if (filterValue === "all" || category === filterValue) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


// 5. SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// 6. SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".about-content, .service-card, .project-card, .why-item, .process-item"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

}


// 7. DYNAMIC COPYRIGHT YEAR

const copyrightYear = document.getElementById("copyrightYear");

if (copyrightYear) {

    copyrightYear.textContent = new Date().getFullYear();

}


// 8. IMAGE LOADING FALLBACK

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        this.style.backgroundColor = "#e9dfd0";

        this.style.minHeight = "150px";

        this.alt = "Interior image currently unavailable";

    });

});


// 9. CONTACT BUTTON FEEDBACK

const contactLinks = document.querySelectorAll(
    'a[href="mailto:hello@aurainteriors.example"]'
);

contactLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Thank you for your interest in Aura Interiors! " +
            "Please configure your studio email address to receive enquiries."
        );

    });

});

