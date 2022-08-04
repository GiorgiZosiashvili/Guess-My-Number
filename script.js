"use strict";
let score = 15;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let hiddenNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".again").addEventListener("click", function () {
  score = 15;
  hiddenNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 15;
  document.querySelector("body").style.background = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No Number!");
  }
  //When player wins
  else if (guess === hiddenNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = hiddenNumber;
    document.querySelector("h1").textContent = "!Congratulations!";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== hiddenNumber) {
    if (score > 1) {
      if (guess === hiddenNumber + 1 || guess === hiddenNumber - 1) {
        displayMessage("You're getting closer 🔥");
        document.querySelector("body").style.background = "url('1.png')";
      } else if (guess > hiddenNumber) {
        displayMessage("📉 Too High");
        document.querySelector("body").style.background = "#222";
      } else if (guess < hiddenNumber) {
        displayMessage("📈 Too Low");
        document.querySelector("body").style.background = "#222";
      }
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector("body").style.background = "#AF2413";
      document.querySelector(".score").textContent = 0;
    }
  }
});
console.log(hiddenNumber);
