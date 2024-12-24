document.addEventListener("DOMContentLoaded", () => {
    // Load Navbar
    fetch("index.html")
        .then((response) => response.text())
        .then((data) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;
            const navbar = tempDiv.querySelector("header");
            document.getElementById("navbar").appendChild(navbar);
        })
        .catch((error) => console.error("Error loading navbar:", error));

    // Load Footer
    fetch("index.html")
        .then((response) => response.text())
        .then((data) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;
            const footer = tempDiv.querySelector("footer");
            document.getElementById("footer").appendChild(footer);
        })
        .catch((error) => console.error("Error loading footer:", error));

    // Attach the toggleMenu function for mobile navigation
    document.addEventListener("click", (event) => {
        if (event.target.closest(".hamburger")) {
            toggleMenu();
        }
    });
});

// Toggle Menu Functionality for Mobile
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("show");
}
