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


  // Share individual devotionals without changing the Google Sheet schema.
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const devotionalUrl = (id) => {
    const url = new URL("devotional.html", window.location.href);
    url.search = "";
    url.hash = "";
    url.searchParams.set("id", String(id));
    return url.toString();
  };
  const copyLink = async (url) => {
    if (navigator.clipboard?.writeText) {
      try { await navigator.clipboard.writeText(url); return true; } catch (_) { /* fallback */ }
    }
    const field = document.createElement("textarea");
    field.value = url;
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    return copied;
  };
  const shareText = (d) => `${d.title}\n${d.scripture}\n${devotionalUrl(d.id)}`;
  const addSharing = (container, devotional) => {
    const bar = document.createElement("div");
    bar.className = "devotional-share";
    bar.setAttribute("aria-label", "Share this devotional");
    const heading = document.createElement("strong");
    heading.textContent = "Share this devotional";
    bar.appendChild(heading);
    const buttons = document.createElement("div");
    buttons.className = "devotional-share-buttons";
    const addButton = (label, handler) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.setAttribute("aria-label", `Share ${escapeHtml(devotional.title)} via ${label}`);
      button.addEventListener("click", handler);
      buttons.appendChild(button);
    };
    const url = devotionalUrl(devotional.id);
    addButton("WhatsApp", () => window.open(`https://wa.me/?text=${encodeURIComponent(shareText(devotional))}`, "_blank", "noopener,noreferrer"));
    addButton("Facebook", () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer"));
    addButton("TikTok", async () => {
      // TikTok has no supported generic web URL share endpoint.
      // Use the device's share sheet when available; otherwise copy the URL.
      if (navigator.share) {
        try { await navigator.share({ title: devotional.title, text: devotional.scripture, url }); return; }
        catch (error) { if (error.name === "AbortError") return; }
      }
      const copied = await copyLink(url);
      status.textContent = copied ? "Link copied. Open TikTok and paste it where supported." : "Copy this devotional link to share on TikTok: " + url;
    });
    addButton("Copy Link", async () => {
      const copied = await copyLink(url);
      status.textContent = copied ? "Devotional link copied!" : "Unable to copy automatically. Link: " + url;
    });
    const status = document.createElement("p");
    status.className = "devotional-share-status";
    status.setAttribute("role", "status");
    bar.appendChild(buttons);
    bar.appendChild(status);
    container.appendChild(bar);
  };

  const render = (devotionals) => {
    devotionalList.innerHTML = "";
    if (memoryVerse) memoryVerse.textContent = "";

    if (!devotionals.length) {
      devotionalList.innerHTML =
        '<p class="empty">No devotionals found. Please check the Google Sheet or Apps Script endpoint.</p>';
      return;
    }

    const current = devotionals.find((d) => d.isCurrent);
    if (current && memoryVerse) {
      memoryVerse.innerHTML = `<div class="memory-verse"><strong>Memory Verse:</strong> ${escapeHtml(current.scripture)}</div>`;
    }

    devotionals
      .slice()
      .sort((a, b) => b.id - a.id)
      .forEach((devotional, index) => {
        const entry = document.createElement("div");
        entry.classList.add("devotional-entry");
        entry.style.setProperty("--i", index);

        const content = `
          <h3>${escapeHtml(devotional.title)}</h3>
          <p><strong>Week:</strong> ${escapeHtml(devotional.week)}</p>
          <blockquote>${escapeHtml(devotional.scripture)}</blockquote>
          <p><strong>Reflection:</strong> ${escapeHtml(devotional.reflection)}</p>
          ${devotional.prayer ? `<p><strong>Prayer:</strong> ${escapeHtml(devotional.prayer)}</p>` : ""}
          ${devotional.contemplation ? `<p><strong>Contemplation:</strong> ${escapeHtml(devotional.contemplation)}</p>` : ""}
          ${devotional.action ? `<p><strong>Action Step:</strong> ${escapeHtml(devotional.action)}</p>` : ""}
          ${devotional.closing ? `<p><strong>Closing:</strong> ${escapeHtml(devotional.closing)}</p>` : ""}
          ${devotional.audio ? `<audio controls ${devotional.isCurrent ? "preload=\"auto\"" : ""}><source src="${escapeHtml(devotional.audio)}" type="audio/mpeg">Your browser does not support the audio element.</audio>` : ""}
        `;

        if (devotional.isCurrent) {
          entry.innerHTML = content;
          addSharing(entry, devotional);
        } else {
          const toggle = document.createElement("button");
          toggle.innerHTML = `<span class="plus-icon">+</span> ${escapeHtml(devotional.title)} (${escapeHtml(devotional.week)})`;
          toggle.className = "accordion-button";

          const details = document.createElement("div");
          details.className = "accordion-content";
          details.innerHTML = content;
          addSharing(details, devotional);

          toggle.addEventListener("click", () => {
            const open = details.classList.toggle("open");
            toggle.classList.toggle("active");
            toggle.querySelector(".plus-icon").textContent = open ? "–" : "+";
            if (open) details.scrollIntoView({ behavior: "smooth", block: "start" });
          });

          entry.appendChild(toggle);
          entry.appendChild(details);
        }

        entry.id = `devotional-${devotional.id}`;
        devotionalList.appendChild(entry);
      });
    const requestedId = Number(new URLSearchParams(window.location.search).get("id"));
    if (requestedId > 0) {
      const selected = document.getElementById(`devotional-${requestedId}`);
      if (selected) {
        const details = selected.querySelector(".accordion-content");
        const toggle = selected.querySelector(".accordion-button");
        if (details && toggle) {
          details.classList.add("open");
          toggle.classList.add("active");
          toggle.querySelector(".plus-icon").textContent = "–";
        }
        selected.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }
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
