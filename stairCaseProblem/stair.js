//NOT CORRECT

stair = (n, X) => {
	let sum = 0;
	if (n < 0) {
		return 0;
	} else if (n == 0) {
		return 1;
	} else if (n < X.length -1) {
			for(let i = 0; i < X.length; i++) {
				sum += stair(n - X[i], X);
			}
			return sum + 1;
	} else {
		for(let i = 0; i < X.length; i++) {
			sum += stair(n - X[i], X);
			console.log(sum);
		}
		return sum;
	}
}

console.log(stair(5, [1, 2, 3]));