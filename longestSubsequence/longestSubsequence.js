longestSubsequence = (s1, s2) => {
	sub = "";
	for(i = 0; i < s1.length; i++) {
		if (s1[i] === s2[i]) {
			console.log(s1[i])
			console.log(s2[i])
			sub = sub + s1[i]		}
	}
	console.log(sub);
	return sub;
}
longestSubsequence("ABC", "ABC"); //ABC
longestSubsequence("CBC", "ABAC"); //BC
longestSubsequence("CBCA", "CCA"); //CCA
longestSubsequence("A", "BCA"); //A

module.exports = longestSubsequence;