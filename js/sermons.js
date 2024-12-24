document.addEventListener("DOMContentLoaded", () => {
    const recentSermons = [
        {
            title: "Walking by Faith",
            preacher: "Pastor John Doe",
            date: "2024-01-15",
            thumbnail: "assets/walking_by_faith.jpg",
        },
        {
            title: "Hope in Hard Times",
            preacher: "Pastor Jane Smith",
            date: "2024-01-22",
            thumbnail: "assets/hope_in_hard_times.jpg",
        },
    ];

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

    const recentSermonsGrid = document.querySelector(".sermons-grid");
    const seriesGrid = document.querySelector(".series-grid");

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
});
