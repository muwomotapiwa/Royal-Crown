document.addEventListener("DOMContentLoaded", () => {
    // Example data for ministries and departments
    const fellowships = [
        {
            name: "Men's Fellowship",
            description: "Empowering men to lead in faith, family, and community.",
            image: "assets/mens_fellowship.jpg",
        },
        {
            name: "Women's Fellowship",
            description: "Connecting women to God and each other through prayer and service.",
            image: "assets/womens_fellowship.jpg",
        },
        {
            name: "Youth Ministry",
            description: "Encouraging the next generation to live boldly for Christ.",
            image: "assets/youth_ministry.jpg",
        },
        {
            name: "Children's Church",
            description: "Helping kids learn about God's love through fun and engaging activities.",
            image: "assets/childrens_church.jpg",
        },
    ];

    const departments = [
        {
            name: "Choir and Band",
            description: "Leading worship with inspiring music and heartfelt praise.",
            image: "assets/choir_band.jpg",
        },
        {
            name: "Ushering",
            description: "Welcoming everyone with a smile and a helping hand.",
            image: "assets/ushering.jpg",
        },
        {
            name: "Multimedia",
            description: "Spreading the message through creative visuals and media.",
            image: "assets/multimedia.jpg",
        },
        {
            name: "Sound Crew",
            description: "Ensuring crystal-clear audio for all our services and events.",
            image: "assets/sound_crew.jpg",
        },
    ];

    // Select containers
    const ministriesGrid = document.querySelector(".ministries-grid");
    const departmentsGrid = document.querySelector(".departments-grid");

    // Clear containers to prevent duplication
    ministriesGrid.innerHTML = "";
    departmentsGrid.innerHTML = "";

    // Populate Fellowships Section
    fellowships.forEach((fellowship) => {
        ministriesGrid.innerHTML += `
            <div class="ministry-card">
                <img src="${fellowship.image}" alt="${fellowship.name}">
                <h3>${fellowship.name}</h3>
                <p>${fellowship.description}</p>
                <a href="#" class="btn">Learn More</a>
            </div>
        `;
    });

    // Populate Departments Section
    departments.forEach((department) => {
        departmentsGrid.innerHTML += `
            <div class="department-card">
                <img src="${department.image}" alt="${department.name}">
                <h3>${department.name}</h3>
                <p>${department.description}</p>
                <a href="#" class="btn">Join Us</a>
            </div>
        `;
    });
});
