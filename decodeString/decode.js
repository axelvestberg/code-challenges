
numways = (data) => {
	return helper(data, data.length)
}

helper = (data, k) => {
	if (k == 0) {
		return 1;
	}
	
	s = data.length - k;
	
	if (data[s] == '0') {
		return 0;
	}

	result = helper(data, k - 1);

	if (k >= 2 && data[s||s+2]

}

arr = [0 ,"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(decode("12"));