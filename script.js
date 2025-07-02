// Próximo GP: 7 de julio de 2025 a las 15:00
const fechaGP = new Date("2025-07-07T15:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaGP - ahora;

  if (diferencia <= 0) {
    document.getElementById("cuenta-regresiva").innerText = "¡Es día de carrera!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("cuenta-regresiva").innerText =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarContador, 1000);