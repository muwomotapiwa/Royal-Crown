document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("highlight-title");
  const scriptureEl = document.getElementById("highlight-scripture");
  const descEl = document.getElementById("highlight-description");
  const imgEl = document.getElementById("highlight-image");
  const statusEl = document.getElementById("highlight-status");

  const setStatus = (text, type = "info") => {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.className = `status ${type}`;
  };

  const pickCurrent = (list) => {
    const current = list.find((d) => String(d.isCurrent || "").toLowerCase() === "true");
    if (current) return current;
    return list
      .slice()
      .sort((a, b) => Number(b.id || 0) - Number(a.id || 0))[0];
  };

  const shortText = (text = "", limit = 220) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit).trimEnd() + "…";
  };

  const render = (devotional) => {
    if (!devotional) {
      setStatus("No devotionals found in Google Sheets.", "error");
      return;
    }

    titleEl.innerHTML = `<strong>${devotional.title || "Untitled"}</strong>`;
    scriptureEl.textContent = devotional.scripture || "";
    descEl.textContent = shortText(devotional.reflection || devotional.closing || "");

    if (devotional.image && imgEl) {
      imgEl.src = devotional.image;
      imgEl.alt = devotional.title || "Devotional highlight";
    } else if (imgEl) {
      imgEl.src = STAGING_API.highlightImageFallback;
    }

    setStatus("Loaded highlight from Google Sheets.", "success");
  };

  const load = async () => {
    setStatus("Loading highlight from Google Sheets...");
    try {
      const raw = await fetchJson(STAGING_API.devotionalsRead);
      const list = Array.isArray(raw) ? raw : [];
      render(pickCurrent(list));
    } catch (err) {
      console.error(err);
      setStatus("Failed to load highlight. Check the staging config URL.", "error");
    }
  };

  load();
});
