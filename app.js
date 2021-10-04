const userInput = document.getElementById('user-input');
const Button = document.getElementById('button');
const userMessage = document.getElementById('user-message');
let guessesLeft = document.getElementById('guesses-left');


const randomNum = (Math.floor(Math.random() * 20)) + 1;
console.log(randomNum);
let initialGuess = 0;

Button.addEventListener('click', () => {
  initialGuess++;
  const userGuess = Number(userInput.value);
  
  
  

  if (userGuess === randomNum) {
    userMessage.textContent = 'Correct, you won!';
    Button.disabled = true;
  }

  else if (initialGuess === 4) {
    userMessage.textContent = 'Out of guesses!';
    Button.disabled = true;
  }

  else if (userGuess > randomNum) {
    userMessage.textContent = 'Too high, try again!';
    Button.disbaled = false;
  }

  else if (userGuess < randomNum) {
    userMessage.textContent = 'Too low, try again!';
    Button.disabled = false;
  }

});