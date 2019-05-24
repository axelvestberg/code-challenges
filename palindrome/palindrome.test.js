const palindrome = require('./palindrome')

test('abc is cba', () => {
	expect(palindrome("abc")).toEqual("cba");
});

test('string to be reversed', () => {
	expect(palindrome("a b c 12 3")).toEqual("3 21 c b a");
});