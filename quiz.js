function checkAnswer() {
  let correctAnswer = "4";

  let input = document.querySelector("[name= 'quiz']:checked");

  let userAnswer = input.getAttribute("value");

  let feedBack = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedBack.textContent = "Correct! Well done.";
  } else {
    feedBack.textContent = "That's incorrect. Try again!";
  }
}

let btn = document.getElementById("submit-answer");

btn.addEventListener("click", checkAnswer);
