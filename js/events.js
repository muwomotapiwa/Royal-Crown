document.addEventListener("DOMContentLoaded", () => {
    const events = [
        // 2025 Ministry Events Only
        {
            id: 1,
            name: "Easter Conference",
            date: "2025-04-18",
            time: "1:30 PM",
            location: "Eagles Nest Lodge,112 Leslie Avenue, Fourways, Sandton",
            description: "Join us for a powerful 3-day Easter Conference.",
        },
        {
            id: 2,
            name: "9th Year Church Anniversary",
            date: "2025-05-02",
            time: "1:30 PM",
            location: "Eagles Nest Lodge,112 Leslie Avenue, Fourways, Sandton",
            description: "Celebrating 9 years of grace, growth, and glory.",
        },
        {
            id: 3,
            name: "Faithfire Conference",
            date: "2025-09-12",
            time: "1:30 PM",
            location: "Eagles Nest Lodge,112 Leslie Avenue, Fourways, Sandton",
            description: "3-day revival of faith, fire, and transformation.",
        },
        {
            id: 4,
            name: "Family Talents Day",
            date: "2025-10-19",
            time: "1:30 PM",
            location: "Eagles Nest Lodge,112 Leslie Avenue, Fourways, Sandton",
            description: "Celebrate gifts and talents with the whole family.",
        },
        {
            id: 5,
            name: "Thanksgiving Sunday",
            date: "2025-12-07",
            time: "1:30 PM",
            location: "Eagles Nest Lodge,112 Leslie Avenue, Fourways, Sandton",
            description: "A special thanksgiving service to close the year.",
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
