document.addEventListener("DOMContentLoaded", () => {
    // Toggle Menu Functionality
    const toggleMenu = () => {
        const nav = document.querySelector("nav");
        nav.classList.toggle("show");
    };

    // Add event listener to the hamburger menu
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }
});
