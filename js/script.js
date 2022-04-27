  /* This function compares the guessed number to the correct number. 
*/

function displayGreeting () {

    // user input
  let insertedTemperature = parseInt((document.getElementById('Inserted-Temperature-here').value));

    // variables
  let dividingTemperature = 15;
  
    // formula for hot outside
  if (insertedTemperature >= dividingTemperature) {
    document.getElementById("greeting").innerHTML = "Wow, it's " + insertedTemperature + "° degrees outside, it's super nice out! Might as well take a swim or something :) "
  }
    // formula for cold outside
  if (insertedTemperature < dividingTemperature) {
    document.getElementById("greeting").innerHTML = "Geez, it's " + insertedTemperature + "° degrees out there, stay inside! Go get some hot chocolate and warm up, watch a movie or something :)"
  }


  // unused/currently testing code
  
      // formula for correct guess
  //if (guessedNumber == correctNumber) {
  //  document.getElementById("greeting").innerHTML = "Your guess was " + guessedNumber + ", and the correct number was " + correctNumber + ". You guessed correctly, good job!"
  //}
  
    // formula for incorrect guess
  //if (guessedNumber != correctNumber) {
  //  document.getElementById("greeting").innerHTML = "Your guess was " + guessedNumber + ", and the correct number was " + correctNumber + ". You guessed incorrectly, better luck next time!"

  // let correctNumber = Math.floor((Math.random() * 6) + 1);
  
}