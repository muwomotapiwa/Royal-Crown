document.addEventListener("DOMContentLoaded", () => {
    // Example data for Recent Sermons
    const recentSermons = [
        {
            title: "Vision Reset",
            preacher: "Pastor Jacob",
            date: "2024-01-15",
            thumbnail: "assets/.png",
        },
        {
            title: "Hope in Hard Times",
            preacher: "Pastor Jane Smith",
            date: "2024-01-22",
            thumbnail: "assets/hope_in_hard_times.jpg",
        },
    ];

    // Example data for Sermon Series
    const sermonSeries = [
        {
            title: "The Beatitudes",
            description: "Discover the blessings of Christ's teachings in Matthew 5.",
            thumbnail: "assets/beatitudes.jpg",
        },
        {
            title: "Living by Grace",
            description: "Explore the depths of God's grace through this series.",
            thumbnail: "assets/living_by_grace.jpg",
        },
    ];

    // Example data for Featured Videos
   /* const featuredVideos = [
        "assets/sermon1.mp4",
        "assets/sermon2.mp4",
        "assets/sermon3.mp4",
    ];*/

    // Select containers for dynamic content
    const recentSermonsGrid = document.querySelector(".sermons-grid");
    const seriesGrid = document.querySelector(".series-grid");

    // Populate Recent Sermons Section
    recentSermons.forEach((sermon) => {
        recentSermonsGrid.innerHTML += `
            <div class="sermon-card">
                <img src="${sermon.thumbnail}" alt="${sermon.title}">
                <h3>${sermon.title}</h3>
                <p>By ${sermon.preacher} on ${new Date(sermon.date).toLocaleDateString()}</p>
                <a href="#" class="btn">Watch Now</a>
            </div>
        `;
    });

    // Populate Sermon Series Section
    sermonSeries.forEach((series) => {
        seriesGrid.innerHTML += `
            <div class="series-card">
                <img src="${series.thumbnail}" alt="${series.title}">
                <h3>${series.title}</h3>
                <p>${series.description}</p>
                <a href="#" class="btn">View Series</a>
            </div>
        `;
    });

    /*// Featured Videos Player Functionality
    let currentVideoIndex = 0; // Track the current video index
    const videoPlayer = document.getElementById("videoPlayer");
    const playPauseButton = document.getElementById("playPauseVideo");
    const prevButton = document.getElementById("prevVideo");
    const nextButton = document.getElementById("nextVideo");

    // Function to update the video source
    function updateVideo(index) {
        videoPlayer.src = featuredVideos[index];
        videoPlayer.play(); // Auto-play the video when it changes
        playPauseButton.textContent = "Pause"; // Update button text to Pause
    }

    // Event listener for Play/Pause button
    playPauseButton.addEventListener("click", () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
            playPauseButton.textContent = "Pause";
        } else {
            videoPlayer.pause();
            playPauseButton.textContent = "Play";
        }
    });

    // Event listener for Next button
    nextButton.addEventListener("click", () => {
        currentVideoIndex = (currentVideoIndex + 1) % featuredVideos.length; // Cycle to next video
        updateVideo(currentVideoIndex);
    });

    // Event listener for Previous button
    prevButton.addEventListener("click", () => {
        currentVideoIndex =
            (currentVideoIndex - 1 + featuredVideos.length) % featuredVideos.length; // Cycle to previous video
        updateVideo(currentVideoIndex);
    });

    // Initialize the first video
    updateVideo(currentVideoIndex);*/
});
