function firstFactorial(num) {
	if ((num === 0) || (num === 1)) {
		return 1;
	} else {
		return (num * firstFactorial(num - 1));
	}
}

module.exports = firstFactorial;
  