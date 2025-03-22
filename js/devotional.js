document.addEventListener("DOMContentLoaded", () => {
  const devotionals = [
    {
      id: 1,
      week: "Monday 24 March – Saturday 29 March 2025",
      title: "Embracing God's Promises",
      scripture: `“For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.” — Jeremiah 29:11`,
      reflection: `Today, take a moment to pause and reflect on the promises that God has made to us. In a world full of uncertainties and challenges, it can be easy to feel lost or anxious about the future. However, Jeremiah 29:11 reminds us that God has a divine plan for each of us...`,
      prayer: `Dear Heavenly Father, thank You for the hope and future that You promise us. Help me to trust in Your plans even when I cannot see the way ahead...`,
      contemplation: `Spend a few minutes in silence, allowing God’s words to sink into your heart...`,
      action: `Consider writing down one area of your life where you need to embrace God's promise today...`,
    }
    // 🔄 You can add more devotionals here in future
  ];

  const devotionalList = document.getElementById("devotional-list");

  devotionals
    .sort((a, b) => b.id - a.id) // Most recent first
    .forEach((devotional) => {
      const entry = document.createElement("div");
      entry.classList.add("devotional-entry");
      entry.innerHTML = `
        <h3>${devotional.title}</h3>
        <p><strong>Week:</strong> ${devotional.week}</p>
        <blockquote>${devotional.scripture}</blockquote>
        <p><strong>Reflection:</strong> ${devotional.reflection}</p>
        <p><strong>Prayer:</strong> ${devotional.prayer}</p>
        <p><strong>Contemplation:</strong> ${devotional.contemplation}</p>
        <p><strong>Action Step:</strong> ${devotional.action}</p>
      `;
      devotionalList.appendChild(entry);
    });
});
