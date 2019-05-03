const missingNumber = require('./missingNumber');

test('array should return missing number: 5', () => {
  expect(missingNumber([1, 2, 3, 4, 6, 10, 7, 8, 9])).toEqual(5);
});

test('array should return missing number: 8', () => {
  expect(missingNumber([9, 10, 5, 3, 4, 6, 7, 2, 1])).toEqual(8);
});
