var userInput = "";


// var endEnd = function(userInput) {
//
// }


$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#numberInput").val());
    // var result = endEnd(UserInput);
    // $("#outputResult").text(result);

  });
});
