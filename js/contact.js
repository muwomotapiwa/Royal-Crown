document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Internal Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"], a[href*="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").includes("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").split("#")[1];
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for sticky header
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Contact Form Submission
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple feedback
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Reset the form
        form.reset();
    });

    // Hamburger Menu Functionality
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
});
