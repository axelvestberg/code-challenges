const longestSubsequence = require('./longestSubsequence');

test('return longest subsequence = ABC', () => {
	expect(longestSubsequence("ABCDE", "ABC")).toBe("ABC");
});

test('return longest subsequence = ADAD', () => {
	expect(longestSubsequence("ABBA", "ABCABA")).toBe("ABBA");
});

test('return longest subsequence = ABAD', () => {
	expect(longestSubsequence("ABAZDC", "BACBAD")).toBe("ABAD");
});

test('return longest subsequence = "" (empty string) ', () => {
	expect(longestSubsequence("", "...")).toBe("");
});

test('return longest subsequence = aa', () => {
	expect(longestSubsequence("aa", "aaaa")).toBe("aa");
});