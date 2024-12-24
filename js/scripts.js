function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

function openModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('sermonVideo');
    video.src = videoSrc;
    modal.style.display = 'flex';
    video.play();
}

function closeModal(event) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('sermonVideo');
    video.pause();
    video.src = "";
    modal.style.display = 'none';
}
