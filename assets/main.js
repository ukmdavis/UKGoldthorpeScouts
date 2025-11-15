// Set footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  // If a page has data-markdown-src, fetch and render that markdown
  const body = document.body;
  const mdSrc = body.getAttribute("data-markdown-src");
  if (mdSrc) {
    const target = document.getElementById("markdown-content");
    if (target) {
      fetch(mdSrc)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load markdown: " + mdSrc);
          return res.text();
        })
        .then((text) => {
          // Strip YAML frontmatter if present
          const cleaned = text.replace(/^---[\s\S]*?---/, "").trim();
          target.innerHTML = window.marked.parse(cleaned);
        })
        .catch((err) => {
          console.error(err);
          target.innerHTML = "<p>Content coming soon.</p>";
        });
    }
  }

  // Calendar subscription link logic
  const calendarUrlCode = document.getElementById("calendar-url");
  const calendarSubscribe = document.getElementById("calendar-subscribe");
  if (calendarUrlCode && calendarSubscribe) {
    const urlText = calendarUrlCode.textContent || "";
    if (urlText && urlText !== "(set via CMS)") {
      const webcalUrl = urlText.replace(/^https?:\/\//, "webcal://");
      calendarSubscribe.setAttribute("href", webcalUrl);
    } else {
      calendarSubscribe.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Calendar URL hasn't been set yet. Leaders can add it in the admin area.");
      });
    }
  }
});