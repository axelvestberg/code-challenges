longestSubsequence = (s1, s2, s1StartIndex = 0, s2StartIndex = 0) => {
	const results = []
	
	for (let s1Idx = s1StartIndex; s1Idx < s1.length; s1Idx++) {
		const s1Char = s1[s1Idx];
		const s2Idx = s2.indexOf(s1Char, s2StartIndex);

		let result = [];

		if (s2Idx !== -1) {
			result.push(s1Char, ...longestSubsequence(s1, s2, s1Idx + 1, s2Idx + 1))

		}
		results.push(result);
	}
	const longest = findLongest(results);
	return longest.join('');
}

function findLongest(arr) {
	let longest = [];

	for (let candidate of arr) {
		if (candidate.length > longest.length) {
			longest = candidate;
		}
	}
	return longest;
}

/*

For each s1[i] compare s2[i] if equal add s1 to result

Om s1 = s2 - lägg till s1 i result och 

 

*/

module.exports = longestSubsequence;