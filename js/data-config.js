// Shared configuration for Google Sheets-backed data.
// Uses the live Apps Script deployment. Update STAGING_API_BASE if you redeploy.
const STAGING_API_BASE =
  "https://script.google.com/macros/s/AKfycbz3DxjmidD1LYsLf7N71_IEBnvafGPc5FlEaCbsuOUvXUd_5RgHbjIy18hkmEAq1glZ/exec";

const STAGING_API = {
  devotionalsRead: `${STAGING_API_BASE}?resource=devotionals`,
  eventsRead: `${STAGING_API_BASE}?resource=events`,
  portalWrite: STAGING_API_BASE, // POST here to upsert
  highlightImageFallback: "assets/enterthemarketplace.jpeg",
};

async function fetchJson(url) {
  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Request failed ${res.status}`);
  return res.json();
}
