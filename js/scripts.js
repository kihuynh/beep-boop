//back-end logic //

// var userInput = "";
// var beepBeep = "";
// var boopBoop = "";

function shit(number) {
  var numberResult = [];
  var beep = "Beep";
  var boop = "Boop";
  var ahShit = "I can't do that. Bugger off";

  for ( i = 0; i <= number; i++) {
    if (number === 0) {
      return ("beep");
    } else if (number === 1) {
      return alert (boop);
    } else if (number % 3 === 0) {
      return alert (ahShit);
    } else
    return alert ("Go away. I don't work like this.");
  }

};

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#numberInput").val());
    var result = shit(number);
    $("#outputResult").text(result);
  });
});
