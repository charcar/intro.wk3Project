var pingPong = function(i) {
  if ((i) % 15 === 0) {
    return "ping-pong";
  }

  else if ((i) % 5 === 0) {
    return "pong";
  }

  else if ((i) % 3 === 0) {
    return "ping";
  }

  else if (((i % 15) != 0) && ((i % 5) != 0) && ((i % 3) != 0)) {
    return i;
  }

  };
$(document).ready(function() {

  // set input from field to variable in js
  var i = $("input#input").val();
  // while i > 0 run pingPong, then subtract 1 from i
  while (i > 0) {
    $("ul#result").append(pingPong(i));
    var i = (i - 1);


    }
  event.preventDefault();
  });
