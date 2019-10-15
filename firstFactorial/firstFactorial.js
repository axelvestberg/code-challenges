//firstFactorial = num => ((num === 0) || (num === 1)) ?  1 : (num * firstFactorial(num - 1));

//refactor with memoization (dynamic programming)
/*
firstFactorial = (n, mem) => {
	mem = [];
	if (n == 0) return 1;
	else if (n == 1) return 1;
	else if (mem[n] == n) {
		console.log("test")
		return mem[n];
	}
	else {
		mem[n] = firstFactorial(n-1, mem[n]) * n;
		//console.log(n + " : " + mem[n]);
		return mem[n];
	}
}
*/

firstFactorial = (n) => {
	mem = [];
	for (let i = n; i <= n; i--) {
		if (i == 0) mem[i] = 1;
		else if (i == 1) mem[i] = 1;
		else {
			result = mem[i-1] * result;
			mem[i];
		}
 	}
}

console.log(firstFactorial(3));

module.exports = firstFactorial;

