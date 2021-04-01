let countingScoreCorrect = 0;
let questionNumber = 0;
let countingScoreIncorrect = 0;

const playButton = document.getElementById("play-button");
const aceptarButton = document.getElementById("button-aceptar");
const pasapalabraButton = document.getElementById("button-pasapalabra");

let definition = "Primera pregunta...";
document.getElementById("definition").innerHTML = definition;

playButton.addEventListener("click", function start() {
  definition = questions[questionNumber].question;
  document.getElementById("definition").innerHTML = definition;
  let phrasePlayButton = document.getElementById("instructions");
  phrasePlayButton.innerHTML = "Mucha suerte!";
});

aceptarButton.addEventListener("click", function aceptar() {
  let answer = document.getElementById("written-answer").value;
  let letter = questions[questionNumber].letter.toUpperCase();

  if (answer.toUpperCase() === questions[questionNumber].answer.toUpperCase()) {
    questions[questionNumber].status = 1;
    document.getElementById(letter).style.background = "green";
    questionNumber++;
    countingScoreCorrect++;
  } else {
    questions[questionNumber].status = 2;
    document.getElementById(letter).style.background = "red";
    questionNumber++;
    countingScoreIncorrect++;
  }
  if (questions[questionNumber].letter === "finish") {
    showResult();
    document.querySelectorAll(".answer").forEach(function (answer) {
      answer.style.display = "none";
    });
  }
  definition = questions[questionNumber].question;
  document.getElementById("definition").innerHTML = definition;
  document.getElementById("written-answer").value = "";
});

pasapalabraButton.addEventListener("click", function pasapalabra() {
  questionNumber++;
  definition = questions[questionNumber].question;
  document.getElementById("definition").innerHTML = definition;
  document.getElementById("written-answer").value = "";
});

function showResult() {
  document.getElementById(
    "result"
  ).innerHTML = `Enhorabuena, has acertado ${countingScoreCorrect} y has fallado ${countingScoreIncorrect} !!`;
}

/*document.querySelectorAll(".answer").forEach(function (answer) {
    answer.style.display = "none";
  });*/
