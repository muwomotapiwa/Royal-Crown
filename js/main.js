function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const isDisplayed = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = isDisplayed ? 'none' : 'flex';
}

// Close the menu when a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').style.display = 'none';
    });
});
