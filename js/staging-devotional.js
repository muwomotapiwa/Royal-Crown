document.addEventListener("DOMContentLoaded", () => {
  const devotionalList = document.getElementById("devotional-list");
  const memoryVerse = document.getElementById("memory-verse");
  const searchBar = document.getElementById("searchBar");
  const status = document.getElementById("devotional-status");

  const renderStatus = (text, type = "info") => {
    if (!status) return;
    status.textContent = text;
    status.className = `status ${type}`;
    status.style.display = type === "success" ? "none" : "block";
  };

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

  const render = (devotionals) => {
    devotionalList.innerHTML = "";

    if (!devotionals.length) {
      devotionalList.innerHTML =
        "<p class=\"empty\">No devotionals found. Check the Sheet or the endpoint URL.</p>";
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

  const load = async () => {
    renderStatus("Loading latest devotionals...");
    try {
      const raw = await fetchJson(STAGING_API.devotionalsRead);
      const devotionals = Array.isArray(raw) ? raw.map(normalizeDevotional) : [];
      render(devotionals);
      renderStatus("", "success");
    } catch (err) {
      console.error(err);
      renderStatus("Failed to load from Google Sheets. Check the staging config URL.", "error");
    }
  };

  if (searchBar) {
    searchBar.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      document.querySelectorAll(".devotional-entry").forEach((entry) => {
        entry.style.display = entry.textContent.toLowerCase().includes(searchTerm) ? "block" : "none";
      });
    });
  }

  load();
});
