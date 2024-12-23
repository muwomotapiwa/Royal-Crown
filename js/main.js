const menuIcon = document.getElementById('menuIcon');
const mobileNav = document.getElementById('mobileNav');

menuIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
