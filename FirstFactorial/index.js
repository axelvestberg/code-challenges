function firstFactorial(num) {
	if ((num === 0) || (num === 1)) {
		return 1;
	} else {
		return (num * firstFactorial(num - 1));
	}
}

console.log("Input:  " + 4);
console.log("Output: " + firstFactorial(4));

console.log("Input:  " + 8);
console.log("Output: " + firstFactorial(8));
                  

  