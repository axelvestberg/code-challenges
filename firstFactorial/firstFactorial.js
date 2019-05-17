firstFactorial = num => ((num === 0) || (num === 1)) ?  1 : (num * firstFactorial(num - 1));

module.exports = firstFactorial;
