document.addEventListener("DOMContentLoaded", () => {
    // Contact form submission
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

    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
});
