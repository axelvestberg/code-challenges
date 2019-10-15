const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (input) => {
	console.log(`Received: ${input}`);
	let arr = []
	x = input.split(/[ ,]+/);
	workout(x, arr);
});

let workout = (x, arr) => {
console.log(x);
console.log(arr);
	// x = start weight - multiple of 25
	// z = claimed lift weight today - multiple of 25
	// k = days already worked out
	if (k = 1) {
		arr.push(x)
		return possible(arr, z)
	}
	
	for (var i = 0; i <= k; i++) {
		if (i == 0) {
			success = x;
			fail = x*0.9
			remainder = fail % 25;
			if (remainder < 12.5) {
				fail = fail - remainder
			} else {
				fail = fail + 25 - remainder
			}
			arr.push()
		}
	}
	return possible(arr, z);
}

let possible = (arr, z) => {
	if (arr.includes(z)) {
		return "biceps"
	} else {
		return "liar"
	}
}



module.exports = workout;