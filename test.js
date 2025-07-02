
const form = document.getElementById("quizForm");
const resultado = document.getElementById("resultado");
const pilotoNombre = document.getElementById("pilotoNombre");
const pilotoImg = document.getElementById("pilotoImg");
const pilotoDesc = document.getElementById("pilotoDesc");

const descripciones = {
"Verstappen": "Eres como Verstappen, con un estilo único en la pista.", "Perez": "Eres como Perez, con un estilo único en la pista.", "Hamilton": "Eres como Hamilton, con un estilo único en la pista.", "Russell": "Eres como Russell, con un estilo único en la pista.", "Leclerc": "Eres como Leclerc, con un estilo único en la pista.", "Sainz": "Eres como Sainz, con un estilo único en la pista.", "Norris": "Eres como Norris, con un estilo único en la pista.", "Piastri": "Eres como Piastri, con un estilo único en la pista.", "Alonso": "Eres como Alonso, con un estilo único en la pista.", "Stroll": "Eres como Stroll, con un estilo único en la pista.", "Gasly": "Eres como Gasly, con un estilo único en la pista.", "Ocon": "Eres como Ocon, con un estilo único en la pista.", "Tsunoda": "Eres como Tsunoda, con un estilo único en la pista.", "Ricciardo": "Eres como Ricciardo, con un estilo único en la pista.", "Albon": "Eres como Albon, con un estilo único en la pista.", "Sargeant": "Eres como Sargeant, con un estilo único en la pista.", "Zhou": "Eres como Zhou, con un estilo único en la pista.", "Bottas": "Eres como Bottas, con un estilo único en la pista.", "Hulkenberg": "Eres como Hulkenberg, con un estilo único en la pista.", "Magnussen": "Eres como Magnussen, con un estilo único en la pista."
};

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const respuestas = new FormData(form);
  let puntuacion = {};

  for (let [_, piloto] of respuestas.entries()) {
    puntuacion[piloto] = (puntuacion[piloto] || 0) + 1;
  }

  let ganador = Object.entries(puntuacion).sort((a,b) => b[1] - a[1])[0][0];

  pilotoNombre.textContent = ganador;
  pilotoImg.src = `img/pilotos/${ganador}.jpg`;
  pilotoDesc.textContent = descripciones[ganador];
  resultado.style.display = "block";
});
