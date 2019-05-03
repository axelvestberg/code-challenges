# Largest Swap

## Description

>Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

## My Solution

Initial code:

```
ffunction missingNumber(arr) {
  let sum = arr.reduce((a, b)=> a + b, 0);
  return 55 - sum;
}

module.exports = missingNumber;
```

Refactored:

```
TODO
```
## Unit tests

```
test('array should return missing number: 5', () => {
  expect(missingNumber([1, 2, 3, 4, 6, 10, 7, 8, 9])).toEqual(5);
});

test('array should return missing number: 8', () => {
  expect(missingNumber([9, 10, 5, 3, 4, 6, 7, 2, 1])).toEqual(8);
});
```
## Result

```
PASS  missingNumber/missingNumber.test.js
  ✓ array should return missing number: 5 (1ms)
  ✓ array should return missing number: 8
```
