document.addEventListener("DOMContentLoaded", () => {
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
});
