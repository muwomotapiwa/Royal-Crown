const fallbackDevotionals = [];

const normalizeDevotional = (row) => ({
  id: Number(row.id || 0),
  week: row.week || "",
  title: row.title || "Untitled",
  scripture: row.scripture || "",
  reflection: row.reflection || "",
  prayer: row.prayer || "",
  contemplation: row.contemplation || "",
  action: row.action || "",
  closing: row.closing || "",
  audio: row.audio || "",
  image: row.image || "",
  isCurrent: String(row.isCurrent || "").toLowerCase() === "true",
});

const loadDevotionals = async () => {
  // Try Google Sheets via Apps Script
  if (typeof fetchJson === "function" && typeof STAGING_API !== "undefined") {
    try {
      const data = await fetchJson(STAGING_API.devotionalsRead);
      if (Array.isArray(data) && data.length) return data.map(normalizeDevotional);
    } catch (err) {
      console.warn("Failed to load devotionals from Google Sheets. Falling back.", err);
    }
  }

  // Optional external hook
  if (window.DevotionalData && typeof window.DevotionalData.fetchDevotionals === "function") {
    try {
      const data = await window.DevotionalData.fetchDevotionals();
      if (Array.isArray(data) && data.length) {
        return data.map(normalizeDevotional);
      }
    } catch (err) {
      console.warn("Failed to load devotionals from external provider. Using fallback data.", err);
    }
  }

  // Fallback
  return fallbackDevotionals.map(normalizeDevotional);
};

document.addEventListener("DOMContentLoaded", () => {
  const devotionalList = document.getElementById("devotional-list");
  const memoryVerse = document.getElementById("memory-verse");
  const searchBar = document.getElementById("searchBar");

  const render = (devotionals) => {
    devotionalList.innerHTML = "";

    if (!devotionals.length) {
      devotionalList.innerHTML =
        '<p class="empty">No devotionals found. Please check the Google Sheet or Apps Script endpoint.</p>';
      return;
    }

    const current = devotionals.find((d) => d.isCurrent);
    if (current && memoryVerse) {
      memoryVerse.innerHTML = `<div class="memory-verse"><strong>Memory Verse:</strong> ${current.scripture}</div>`;
    }

    devotionals
      .slice()
      .sort((a, b) => b.id - a.id)
      .forEach((devotional, index) => {
        const entry = document.createElement("div");
        entry.classList.add("devotional-entry");
        entry.style.setProperty("--i", index);

        const content = `
          <h3>${devotional.title}</h3>
          <p><strong>Week:</strong> ${devotional.week}</p>
          <blockquote>${devotional.scripture}</blockquote>
          <p><strong>Reflection:</strong> ${devotional.reflection}</p>
          ${devotional.prayer ? `<p><strong>Prayer:</strong> ${devotional.prayer}</p>` : ""}
          ${devotional.contemplation ? `<p><strong>Contemplation:</strong> ${devotional.contemplation}</p>` : ""}
          ${devotional.action ? `<p><strong>Action Step:</strong> ${devotional.action}</p>` : ""}
          ${devotional.closing ? `<p><strong>Closing:</strong> ${devotional.closing}</p>` : ""}
          ${devotional.audio ? `<audio controls ${devotional.isCurrent ? "preload=\"auto\"" : ""}><source src="${devotional.audio}" type="audio/mpeg">Your browser does not support the audio element.</audio>` : ""}
        `;

        if (devotional.isCurrent) {
          entry.innerHTML = content;
        } else {
          const toggle = document.createElement("button");
          toggle.innerHTML = `<span class="plus-icon">+</span> ${devotional.title} (${devotional.week})`;
          toggle.className = "accordion-button";

          const details = document.createElement("div");
          details.className = "accordion-content";
          details.innerHTML = content;

          toggle.addEventListener("click", () => {
            const open = details.classList.toggle("open");
            toggle.classList.toggle("active");
            toggle.querySelector(".plus-icon").textContent = open ? "–" : "+";
            if (open) details.scrollIntoView({ behavior: "smooth", block: "start" });
          });

          entry.appendChild(toggle);
          entry.appendChild(details);
        }

        devotionalList.appendChild(entry);
      });
  };

  const start = async () => {
    const devotionals = await loadDevotionals();
    render(devotionals);
  };

  if (searchBar) {
    searchBar.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      document.querySelectorAll(".devotional-entry").forEach((entry) => {
        entry.style.display = entry.textContent.toLowerCase().includes(searchTerm) ? "block" : "none";
      });
    });
  }

  start();
});
