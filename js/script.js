  /* This function compares the guessed number to the correct number. 
*/

function displayGreeting () {

    // user input
  let guessedNumber = parseInt((document.getElementById('Guessed-number-here').value));

    // variables
  let correctNumber = Math.floor((Math.random() * 6) + 1);
  
    // formula for correct guess
  if (guessedNumber == correctNumber) {
    document.getElementById("greeting").innerHTML = "Your guess was " + guessedNumber + ", and the correct number was " + correctNumber + ". You guessed correctly, good job!"
  }
    // formula for incorrect guess
  if (guessedNumber != correctNumber) {
    document.getElementById("greeting").innerHTML = "Your guess was " + guessedNumber + ", and the correct number was " + correctNumber + ". You guessed incorrectly, better luck next time!"
  }



}