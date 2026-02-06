document.addEventListener("DOMContentLoaded", () => {
    const events = [
        {
            id: 1,
            name: "Easter Conference",
            startDate: "2026-04-03",
            endDate: "2026-04-05",
            time: "From 1:30 PM daily",
            location: "Eagles Nest Lodge,112 Leslie Avenue, Fourways, Sandton",
            description: "Three days of worship, word, and fellowship over Easter weekend.",
        },
        {
            id: 2,
            name: "10th Year Church Anniversary",
            startDate: "2026-05-01",
            time: "1:30 PM",
            location: "Eagles Nest Lodge,112 Leslie Avenue, Fourways, Sandton",
            description: "Celebrating a decade of God's faithfulness to Royal Crown Ministries.",
        },
        {
            id: 3,
            name: "Family Talents",
            startDate: "2026-10-11",
            time: "1:30 PM",
            location: "Eagles Nest Lodge,112 Leslie Avenue, Fourways, Sandton",
            description: "Showcase and celebrate the gifts within every family.",
        },
        {
            id: 4,
            name: "Appreciation Day",
            startDate: "2026-12-13",
            time: "1:30 PM",
            location: "Eagles Nest Lodge,112 Leslie Avenue, Fourways, Sandton",
            description: "Honoring partners, volunteers, and friends of the ministry.",
        },
    ];

    const today = new Date();
    const upcomingEventsContainer = document.getElementById("upcoming-events");
    const pastEventsContainer = document.getElementById("past-events");
    const eventCalendarContainer = document.getElementById("event-calendar");

    events.forEach((event) => {
        const startDate = new Date(event.startDate);
        const endDate = event.endDate ? new Date(event.endDate) : null;
        const referenceDate = endDate || startDate;
        const dateLabel = endDate
            ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
            : startDate.toLocaleDateString();
        const eventCard = `
            <div class="event-card">
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${dateLabel}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            </div>
        `;

        if (referenceDate >= today) {
            upcomingEventsContainer.insertAdjacentHTML("beforeend", eventCard);
        } else {
            pastEventsContainer.insertAdjacentHTML("beforeend", eventCard);
        }

        const calendarItem = `
            <div class="calendar-item">
                <h4>${event.name}</h4>
                <p><strong>Date:</strong> ${dateLabel}</p>
                <p><strong>Location:</strong> ${event.location}</p>
            </div>
        `;
        eventCalendarContainer.insertAdjacentHTML("beforeend", calendarItem);
    });

    if (!upcomingEventsContainer.innerHTML.trim()) {
        upcomingEventsContainer.innerHTML = "<p>No upcoming events at the moment.</p>";
    }
    if (!pastEventsContainer.innerHTML.trim()) {
        pastEventsContainer.innerHTML = "<p>No past events available.</p>";
    }
});
