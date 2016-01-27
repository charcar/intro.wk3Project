var pingPong = function(input) {
  if ((input) % 15 === 0) {
    return "ping-pong";
  } else if ((input) % 5 === 0) {
    return "pong";
  } else if ((input) % 3 === 0) {
    return "ping";
  } else if (((input % 15) != 0) && ((input % 5) != 0) && ((input % 3) != 0)) {
    return input;
  }
};

$(document).ready(function() {
  $("form#submitField").submit(function(event) {
  // initialize starting variable of 1
  var i = 1;
  // set input from field to variable in js
  var input = parseInt($("input#input").val());
  // while i > 0 run pingPong, then subtract 1 from i
  while (i > 0 && i <= input) {
    $("ul#result").append("<li>" + pingPong(i) + "</li>");
    var i = (i + 1);
    event.preventDefault();
  };
 });
});
