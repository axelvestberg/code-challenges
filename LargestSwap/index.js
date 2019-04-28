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

console.log('expect false: ' + largestSwap(27));
console.log('expect true: ' + largestSwap(43));
console.log('expect true: ' + largestSwap(99));