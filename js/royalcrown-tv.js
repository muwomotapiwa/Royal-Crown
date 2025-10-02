document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('header nav');
  const navLinks = nav ? nav.querySelectorAll('a') : [];

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    });
  });

  const zoomFrame = document.getElementById('zoomFrame');
  if (zoomFrame && !zoomFrame.hasAttribute('loading')) {
    zoomFrame.setAttribute('loading', 'lazy');
  }
});
