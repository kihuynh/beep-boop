// 0 with beep
// 1 with a boop
// % 3 = Sorry daaaave

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
      return ("beep");
    } else if (number === 1) {
      return alert (boop)
    } else if (number % 3 === 0) {
      return alert (ahShit)
    }
    return
  }

};

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var number = $("input#numberInput").val();
    // var userArray = Array.from(userInput)
    var result = shit(number);
    $("#outputResult").text(result);
    shit();
  });
});
