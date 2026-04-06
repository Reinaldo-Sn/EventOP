AOS.init();

const eventDate = new Date("2026-04-25T20:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  const el = document.getElementById("countdown");

  if (diff <= 0) {
    el.innerHTML = `<span class="countdown__item">A festa já começou!</span>`;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  el.innerHTML = `
    <span class="countdown__item">${days}d</span>
    <span class="countdown__item">${hours}h</span>
    <span class="countdown__item">${minutes}m</span>
    <span class="countdown__item">${seconds}s</span>
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);
