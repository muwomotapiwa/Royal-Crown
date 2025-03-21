// Ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function () {
    console.log("Learn More Page Loaded");

    // Smooth Scrolling for Internal Links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Expandable Sections for Learn More Page
    const sections = document.querySelectorAll(".expandable");
    sections.forEach(section => {
        section.addEventListener("click", function() {
            this.classList.toggle("expanded");
            const content = this.nextElementSibling;
            if (this.classList.contains("expanded")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0px";
            }
        });
    });

    // Close Mobile Menu When Clicking Outside
    document.addEventListener("click", function(event) {
        const nav = document.querySelector("nav");
        const hamburger = document.querySelector(".hamburger");

        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            nav.classList.remove("show");
        }
    });
});

// Toggle Mobile Menu Functionality
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("show");
}

// Sticky Header on Scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
