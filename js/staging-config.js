// Central staging configuration for Google Sheets-backed data.
// Replace the placeholder URLs with your deployed Google Apps Script endpoints.
// Keep this file out of version control if you later store secrets here.
const STAGING_API = {
  devotionalsRead:
    "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYED_ID/exec?resource=devotionals",
  eventsRead:
    "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYED_ID/exec?resource=events",
  portalWrite:
    "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYED_ID/exec?resource=upsert",
  highlightImageFallback: "assets/enterthemarketplace.jpeg",
};

async function fetchJson(url) {
  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Request failed ${res.status}`);
  return res.json();
}
