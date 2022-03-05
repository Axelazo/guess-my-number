'use strict';

//Function that Generates a pseudo-random number between 1 and 20 and logs to the console
let randomNumber = function () {
  return Math.floor(Math.random() * (21 - 1) + 1);
};

//Score and Highscore
let score = 20;
let highScore = 0;

//Calling it the first time when the HTML loads
let numberToGuess = randomNumber();
console.warn(numberToGuess);

const showMessage = function(string) {
  message.textContent = string;
}

//Selecting the DOM elements
let checkButton = document.querySelector('.check');
let againButton = document.querySelector('.again');
let message = document.querySelector('.message');
let labelScore = document.querySelector('.label-score');
let labelHighScore = document.querySelector('.label-highscore');
let body = document.querySelector('body');

//Adds a click function to the check button
checkButton.addEventListener('click', function () {
  let val = Number(document.querySelector('.guess').value);
  console.log(val);
  compareNumber(val);
  console.log(score);
});

//Compares the number and sets the according message
let compareNumber = function (number) {
  if (number != null && number != undefined && number != 0) {
    if (number === numberToGuess) {
      showMessage('Adivinaste!');
      calculateHighScore(score);
      body.style.backgroundColor = 'green';
    } else if (number > numberToGuess) {
      showMessage('Demasiado alto!');
      score--;
    } else if (number < numberToGuess) {
      showMessage('Demasiado bajo!');
      score--;
    }
  } else {
    showMessage('Ingresa un numero!!');
  }
  labelScore.textContent = `💯 Punteo: ${score}`;
};

//Adding the click event to the button;
againButton.addEventListener('click', function () {
  //Generates the random number again
  numberToGuess = randomNumber();
  console.warn(numberToGuess);
  message.textContent = 'Comienza a adivinar...';

  //Sets the score back to 20
  score = 20;
  labelScore.textContent = `💯 Punteo: ${score}`;

  //Resets the body color;
  body.style.backgroundColor = '#222';
});

let calculateHighScore = function (score) {
  if (score > 0 && score > highScore) {
    highScore = score;
    labelHighScore.textContent = `🥇 Punteo más alto: ${highScore}`;
  }
};
