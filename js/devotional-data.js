(() => {
  const SHEET_ID = "1CSu8Bhs9k2dVGn9K-9jYj7G44EdnI9_zygk__QlkXPw";
  const SHEET_NAME = "devotionals";
  const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;

  const parseCsv = (text) => {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      const next = text[i + 1];

      if (char === '"') {
        if (inQuotes && next === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
        continue;
      }

      if (!inQuotes && char === ",") {
        row.push(field);
        field = "";
        continue;
      }

      if (!inQuotes && char === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
        continue;
      }

      if (char !== "\r") {
        field += char;
      }
    }

    if (field.length || row.length) {
      row.push(field);
      rows.push(row);
    }

    return rows;
  };

  const normalizeDevotional = (raw) => ({
    id: raw.id ? Number(raw.id) : 0,
    week: raw.week || "",
    title: raw.title || "",
    scripture: raw.scripture || "",
    reflection: raw.reflection || "",
    contemplation: raw.contemplation || "",
    prayer: raw.prayer || "",
    action: raw.action || "",
    closing: raw.closing || "",
    audio: raw.audio || "",
    isCurrent: /^(true|yes|1)$/i.test(raw.iscurrent || raw.isCurrent || ""),
    image: raw.image || "",
    highlight: raw.highlight || ""
  });

  const fetchDevotionals = async () => {
    const response = await fetch(SHEET_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Sheet request failed: ${response.status}`);
    }

    const text = await response.text();
    const rows = parseCsv(text);
    if (!rows.length) {
      return [];
    }

    const headers = rows.shift().map((h) => h.trim());
    return rows
      .filter((row) => row.some((value) => value && value.trim()))
      .map((row) => {
        const raw = {};
        headers.forEach((header, index) => {
          raw[header] = row[index] ? row[index].trim() : "";
        });
        return normalizeDevotional(raw);
      });
  };

  window.DevotionalData = {
    fetchDevotionals
  };
})();
