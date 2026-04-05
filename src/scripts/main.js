AOS.init();

const eventDate = new Date("2026-04-05T11:15:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "Evento expirado";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent =
    `Em ${days} Dias ${hours} Horas ${minutes} minutos e ${seconds} segundos. a jornada de One Piece continua!`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
