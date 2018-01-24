
function numberInput(number){
// var numberInput = function(number) {
  var numberResult= [];
  for (var i = 0; i <= number; i++) {
    // console.log(numberResult);
    numberResult= [];
//numbers that contain 0 will output "beep"
    if (i=== 0) {
      numberResult.push("beep");
    } else if (i === 1) {
      numberResult.push("boop");
    } else if (i % 3 === 0) {
      numberResult.push("I'm sorry, Dave")
    }
    else {
      numberResult.push(i);
    }
  }
  return numberResult;
};
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("input#numberInput").val());
    var result = numberInput(userNumber);

    $("form#input").trigger('reset');
    $("#outputResult").text(result);
    console.log(result);
  });
});
