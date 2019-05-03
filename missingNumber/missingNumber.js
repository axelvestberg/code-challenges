function missingNumber(arr) {

  let sum = arr.reduce((a, b)=> a + b, 0);
  return 55 - sum;
}

module.exports = missingNumber;