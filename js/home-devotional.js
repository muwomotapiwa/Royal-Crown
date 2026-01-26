document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("[data-devotional-highlight]");
  if (!container || !window.DevotionalData) {
    return;
  }

  const titleEl = document.getElementById("devotional-title");
  const scriptureEl = document.getElementById("devotional-scripture");
  const highlightEl = document.getElementById("devotional-highlight");
  const imageEl = document.getElementById("devotional-image");

  const updateHighlight = (devotional) => {
    if (!devotional) {
      return;
    }

    if (titleEl) {
      titleEl.textContent = devotional.title || "Weekly Devotional";
    }

    if (scriptureEl) {
      scriptureEl.textContent = devotional.scripture || "";
    }

    if (highlightEl) {
      highlightEl.textContent = devotional.highlight || devotional.reflection || "";
    }

    if (imageEl && devotional.image) {
      imageEl.src = devotional.image;
      imageEl.alt = devotional.title || "Weekly Devotional";
    }
  };

  const load = async () => {
    try {
      const devotionals = await window.DevotionalData.fetchDevotionals();
      if (!devotionals.length) {
        return;
      }

      const current = devotionals.find((item) => item.isCurrent);
      if (current) {
        updateHighlight(current);
        return;
      }

      const newest = devotionals.reduce((latest, item) => {
        if (!latest || (item.id || 0) > (latest.id || 0)) {
          return item;
        }
        return latest;
      }, null);

      updateHighlight(newest);
    } catch (err) {
      console.warn("Failed to update home devotional highlight.", err);
    }
  };

  load();
});
