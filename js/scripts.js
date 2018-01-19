var userInput = "";
var beepBeep = "";
var boopBoop = "";

function shit(number) {
  var numberResult = [];
  var beep = "Beep";
  var boop = "Boop";
  var ahShit = "bugger off";

  for ( i = 0; i <= number; i++) {
    if (number === 0) {
      alert (beep)
    } else if (number === 1) {
      alert (boop)
    } else if (number % 3 === 0) {
      alert (ahShit)
    }
  }

};





$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    // var userInput = parseInt($("input#numberInput").val());
    // var result = something(number);
    // $("#outputResult").text(result);
    shit();
  });
});
