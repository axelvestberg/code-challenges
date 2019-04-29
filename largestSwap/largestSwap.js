function largestSwap(num) {
  
  let split = ('' + num).split('').map(Number);

  if (split[0] > split[1]) {
    return true;
  } else if (split[0] < split[1]) {
    return false;
  } else {
    return true;
  }
}

module.exports = largestSwap;