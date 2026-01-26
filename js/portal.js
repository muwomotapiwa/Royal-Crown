const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzOp74yIsvL6Cq3uO_Od2hajCC3mUVM-2C729kHpaltnIkrDhdPnlVY2Cc20-5-5MzI/exec";

const form = document.getElementById("devotional-form");
const statusEl = document.getElementById("portal-status");
const weekStartEl = document.getElementById("weekStart");
const weekEndEl = document.getElementById("weekEnd");
const weekEl = document.getElementById("week");

const setStatus = (message, isError = false) => {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.style.color = isError ? "#b00020" : "#1a5f2a";
};

const serializeForm = (formEl) => {
  const data = new FormData(formEl);
  return {
    week: (data.get("week") || "").toString().trim(),
    title: (data.get("title") || "").toString().trim(),
    scripture: (data.get("scripture") || "").toString().trim(),
    highlight: (data.get("highlight") || "").toString().trim(),
    reflection: (data.get("reflection") || "").toString().trim(),
    contemplation: (data.get("contemplation") || "").toString().trim(),
    prayer: (data.get("prayer") || "").toString().trim(),
    action: (data.get("action") || "").toString().trim(),
    closing: (data.get("closing") || "").toString().trim(),
    audio: (data.get("audio") || "").toString().trim(),
    image: (data.get("image") || "").toString().trim(),
    makeCurrent: data.get("makeCurrent") === "on"
  };
};

const isValidPayload = (payload) =>
  payload.week && payload.title && payload.scripture && payload.highlight && payload.reflection;

const formatWeekRange = (startValue, endValue) => {
  if (!startValue || !endValue) return "";
  const start = new Date(startValue);
  const end = new Date(endValue);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return "";

  const formatter = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const startText = formatter.format(start).replace(",", "");
  const endText = formatter.format(end).replace(",", "");
  return `${startText} – ${endText}`;
};

const updateWeekPreview = () => {
  const formatted = formatWeekRange(weekStartEl?.value, weekEndEl?.value);
  if (weekEl) {
    weekEl.value = formatted;
  }
};

if (weekStartEl && weekEndEl) {
  weekStartEl.addEventListener("change", updateWeekPreview);
  weekEndEl.addEventListener("change", updateWeekPreview);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus("");

  if (!SCRIPT_URL) {
    setStatus("Portal is not connected yet. Add the Apps Script URL first.", true);
    return;
  }

  updateWeekPreview();
  const payload = serializeForm(form);
  if (!isValidPayload(payload)) {
    setStatus("Please fill in all required fields before publishing.", true);
    return;
  }

  const body = new URLSearchParams(payload).toString();

  try {
    setStatus("Publishing devotional...");
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body
    });

    setStatus("Submitted. Please check the sheet to confirm.", false);
    form.reset();
  } catch (err) {
    setStatus(`Publish failed: ${err.message}`, true);
  }
});
