// ==========================================================
// Countdown on the home page.
// Fill in real dates when you have them, e.g. "2027-02-13T19:00:00-06:00".
// Until then it shows "T-MINUS: TBA".
// ==========================================================

const EVENTS = [
  { name: "Engagement Party", date: null },
  { name: "The Wedding",      date: null },
];

(function countdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  const now = new Date();
  const next = EVENTS
    .filter(e => e.date && new Date(e.date) > now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  if (!next) {
    el.textContent = "T-MINUS: TBA";
    return;
  }

  const days = Math.ceil((new Date(next.date) - now) / 86400000);
  el.textContent = `${String(days).padStart(3, "0")} DAYS TO ${next.name.toUpperCase()}`;
})();
