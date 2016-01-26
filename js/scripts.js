var pingPong = function(i) {
  if ((i) % 15 === 0) {
    return "ping-pong";
  }
  else if ((i) % 5 === 0) {
    return "pong";
  }
  else if ((i) % 3 === 0) {
    return "ping";
  };


  return "Input an integer, please";
}
