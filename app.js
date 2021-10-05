const userInput = document.getElementById('user-input');
const Button = document.getElementById('button');
const userMessage = document.getElementById('user-message');
const guessesLeft = document.getElementById('guesses-left');


const randomNum = (Math.floor(Math.random() * 20)) + 1;
console.log(randomNum);
let numOfGuesses = 4;

Button.addEventListener('click', () => {
  numOfGuesses--;
  guessesLeft.textContent=numOfGuesses;
  const userGuess = Number(userInput.value);
  
  

  if (userGuess === randomNum) {
    userMessage.textContent = 'Correct, you won!';
    Button.disabled = true;
  }

  else if (numOfGuesses === 0) {
    userMessage.textContent = 'You are out of guesses! Better luck next time.';
    Button.disabled = true;
  }

  else if (userGuess > randomNum) {
    userMessage.textContent = 'Too high, try again!';
    guessesLeft.textContent = `You have ${numOfGuesses} tries left.`;
    Button.disbaled = false;
  }

  else if (userGuess < randomNum) {
    userMessage.textContent = 'Too low, try again!';
    guessesLeft.textContent = `You have ${numOfGuesses} tries left.`;
    Button.disabled = false;
  }

});