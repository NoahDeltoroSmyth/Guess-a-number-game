const userGuess = document.getElementById('user-guess');
const Button = document.getElementById('button');
const userMessage = document.getElementById('user-message');


const randomNum = (Math.floor(Math.random() * 20)) + 1;
//console.log((Math.floor(Math.random() * 20)) + 1);
let initialGuess = 4;

Button.addEventListener('click', () => {
  initialGuess--;
  console.log(initialGuess);

  if (initialGuess<1){
    document.getElementById('button').disabled = true;
  }

  

});