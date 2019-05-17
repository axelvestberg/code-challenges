missingNumber = arr => {
  let sum = arr.reduce((x, y)=> x + y, 0);
  return 55 - sum;
}

module.exports = missingNumber;