const compareTriplets = require('./compareTriplets');

test('return compare array', () => {
	a = [1, 2, 3];
	b = [1, 3, 2];
	expect(compareTriplets(a, b)).toEqual([1, 1]);
});

test('return compare array', () => {
	a = [3, 2, 3];
	b = [1, 3, 2];
	expect(compareTriplets(a, b)).toEqual([2, 1]);
});