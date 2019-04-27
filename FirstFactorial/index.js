function FirstFactorial(num) {
	if ((num === 0) || (num === 1)) {
		return 1;
	} else {
		return (num * FirstFactorial(num - 1));
	}
}

console.log("Input:  " + 4);
console.log("Output: " + FirstFactorial(4));

console.log("Input:  " + 8);
console.log("Output: " + FirstFactorial(8));
                  

  