var userInput = "";

if (userInput === "0") {
  alert ("HEY YOU GOT A BOOP");
}


$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    console.log("SUBMIT DIS")

  });
});
