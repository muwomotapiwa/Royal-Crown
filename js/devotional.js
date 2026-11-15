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
  const publicDevotionalUrl = () => new URL("devotional.html", window.location.origin + "/").toString();
  const shareText = (d) => [
    "Royal Crown Ministries International",
    "Weekly Devotional",
    "",
    d.title,
    d.week ? `Week: ${d.week}` : "",
    "",
    d.scripture ? `Scripture:\n${d.scripture}` : "",
    d.reflection ? `Reflection:\n${d.reflection}` : "",
    d.prayer ? `Prayer:\n${d.prayer}` : "",
    d.contemplation ? `Contemplation:\n${d.contemplation}` : "",
    d.action ? `Action Step:\n${d.action}` : "",
    d.closing ? `Closing:\n${d.closing}` : "",
    "",
    publicDevotionalUrl()
  ].filter((line) => line !== "").join("\n\n");
  const addSharing = (container, devotional) => {
    const bar = document.createElement("div");
    bar.className = "devotional-share";
    bar.setAttribute("aria-label", "Share this devotional");
    const heading = document.createElement("strong");
    heading.textContent = "Share with";
    bar.appendChild(heading);
    const buttons = document.createElement("div");
    buttons.className = "devotional-share-buttons";
    const icons = {
      WhatsApp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.4 7.5L3 20.7l1.4-4.9A8.5 8.5 0 1 1 20.5 11.8Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.3 7.9c-.4-.3-.8-.2-1.1.2-.8 1.1-.2 3.1 1.5 4.9 1.7 1.9 3.9 2.9 5.2 2.6.7-.2 1.6-1 1.5-1.6 0-.2-.2-.3-.5-.5l-1.9-.9-.9 1.1c-1.3-.5-2.3-1.4-2.9-2.7l1-1.1-.9-2Z" fill="currentColor"/></svg>',
      Facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.1 21v-8h2.7l.4-3.2h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.4v2.1H8V13h2.7v8h3.4Z" fill="currentColor"/></svg>',
      TikTok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 3v11.4a4.1 4.1 0 1 1-3.5-4.1v3.1a1.1 1.1 0 1 0 .5 1V3h3c.2 2.6 1.8 4.2 4.5 4.4v3.2c-1.8 0-3.3-.6-4.5-1.5" fill="currentColor"/></svg>',
      "Copy Link": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13.5a4.5 4.5 0 0 0 6.4 0l2.3-2.3a4.5 4.5 0 0 0-6.4-6.4l-1.3 1.3M14 10.5a4.5 4.5 0 0 0-6.4 0l-2.3 2.3a4.5 4.5 0 0 0 6.4 6.4l1.3-1.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
    };
    const addButton = (label, handler) => {
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = icons[label];
      button.title = label;
      button.setAttribute("aria-label", `Share ${escapeHtml(devotional.title)} via ${label}`);
      button.addEventListener("click", handler);
      buttons.appendChild(button);
    };
    const url = publicDevotionalUrl();
    addButton("WhatsApp", () => window.open(`https://wa.me/?text=${encodeURIComponent(shareText(devotional))}`, "_blank", "noopener,noreferrer"));
    addButton("Facebook", () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer"));
    addButton("TikTok", async () => {
      // TikTok has no supported generic web URL share endpoint.
      // Use the device's share sheet when available; otherwise copy the URL.
      if (navigator.share) {
        try { await navigator.share({ title: devotional.title, text: shareText(devotional) }); return; }
        catch (error) { if (error.name === "AbortError") return; }
      }
      const copied = await copyLink(shareText(devotional));
      status.textContent = copied ? "Full devotional copied. Open TikTok and paste it where supported." : "Copy this devotional link to share on TikTok: " + url;
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
