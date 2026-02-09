document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("devotional-form");
  const statusEl = document.getElementById("portal-status");
  const clearBtn = document.getElementById("clear-form");

  const setStatus = (text, type = "info") => {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.className = `status ${type}`;
  };

  const endpointIsConfigured = () =>
    STAGING_API.portalWrite && !STAGING_API.portalWrite.includes("REPLACE_WITH_YOUR_DEPLOYED_ID");

  const toPayload = (formData) => ({
    id: Number(formData.get("id") || 0),
    week: formData.get("week") || "",
    title: formData.get("title") || "",
    scripture: formData.get("scripture") || "",
    reflection: formData.get("reflection") || "",
    prayer: formData.get("prayer") || "",
    contemplation: formData.get("contemplation") || "",
    action: formData.get("action") || "",
    closing: formData.get("closing") || "",
    audio: formData.get("audio") || "",
    image: formData.get("image") || "",
    isCurrent: formData.get("isCurrent") === "on",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!endpointIsConfigured()) {
      setStatus("Portal write URL is not configured. Update js/staging-config.js.", "error");
      return;
    }

    const payload = toPayload(new FormData(form));
    setStatus("Submitting to Google Sheets...", "info");

    try {
      const res = await fetch(STAGING_API.portalWrite, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || `Request failed ${res.status}`);

      setStatus(body.message || "Saved to Google Sheets.", "success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus(`Submit failed: ${err.message}`, "error");
    }
  };

  const handleClear = () => {
    form.reset();
    setStatus("Form cleared.", "info");
  };

  form?.addEventListener("submit", handleSubmit);
  clearBtn?.addEventListener("click", handleClear);

  // Initial status
  if (endpointIsConfigured()) {
    setStatus("Ready to submit to Google Sheets.", "success");
  } else {
    setStatus("Portal write URL is not configured. Update js/staging-config.js.", "error");
  }
});
