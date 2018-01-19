//back-end logic //

// var userInput = "";
// var beepBeep = "";
// var boopBoop = "";

function shit(number) {
  var numberResult = [];
  var beep = "Beep";
  var boop = "Boop";
  var ahShit = "Sorry Dave. You don't pay me enough to do this";

  for ( i = 0; i <= number; i++) {
    if (number === 0) {
      return alert(boop);
    } else if (number === 1) {
      return alert (boop);
    } else if (number % 3 === 0) {
      return alert (ahShit);
    } else
    return alert ("Go away. I can't work in these conditions");
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
