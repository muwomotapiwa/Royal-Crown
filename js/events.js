document.addEventListener("DOMContentLoaded", () => {
    const events = [
        {
            id: 1,
            name: "Sunday Service",
            date: "2024-01-07",
            time: "9:00 AM",
            location: "Main Hall",
            description: "A time of worship and fellowship every Sunday.",
        },
        {
            id: 2,
            name: "Youth Gathering",
            date: "2024-02-15",
            time: "6:00 PM",
            location: "Youth Center",
            description: "Fun, faith, and fellowship for our youth members.",
        },
        {
            id: 3,
            name: "Community Outreach",
            date: "2024-03-10",
            time: "10:00 AM",
            location: "Community Hall",
            description: "Serving our community with compassion and love.",
        },
        {
            id: 4,
            name: "Christmas Celebration",
            date: "2024-12-25",
            time: "5:00 PM",
            location: "Main Hall",
            description: "Join us as we celebrate the birth of Christ.",
        },
    ];

    const today = new Date();
    const upcomingEventsContainer = document.getElementById("upcoming-events");
    const pastEventsContainer = document.getElementById("past-events");
    const eventCalendarContainer = document.getElementById("event-calendar");

    events.forEach((event) => {
        const eventDate = new Date(event.date);
        const eventCard = `
            <div class="event-card">
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${eventDate.toLocaleDateString()}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            </div>
        `;

        if (eventDate >= today) {
            upcomingEventsContainer.insertAdjacentHTML("beforeend", eventCard);
        } else {
            pastEventsContainer.insertAdjacentHTML("beforeend", eventCard);
        }

        const calendarItem = `
            <div class="calendar-item">
                <h4>${event.name}</h4>
                <p><strong>Date:</strong> ${eventDate.toLocaleDateString()}</p>
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
