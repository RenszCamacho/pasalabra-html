const form = document.getElementById("form");
const pasapalabra = document.getElementById("pasapalabra-button");
const abandonar = document.getElementById("abandonar-button");

// pasapalabra.addEventListener("click", () => console.log("pasapalabra"));
// abandonar.addEventListener("click", () => console.log("Abandonaste el juego."));

let userAnswer;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userAnswer = e.target.answer.value;
  if (userAnswer === "bingo") {
    console.log("Correcto!");
  } else {
    console.log("Incorrecto!");
  }
});
