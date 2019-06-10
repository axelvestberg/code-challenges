import longestSubsequence from './longestSubsequence';

test('return longest subsequence', () => {
	expect(longestSubsequence("ABCDE", "ABC").toBe("ABC"));
});

test('return longest subsequence', () => {
	expect(longestSubsequence("BADACD", "ABDAD").toBe("ADAD"));
});