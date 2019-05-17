# First Factorial

## Description

>Have the function firstFactorial(num) take the num parameter being passed and return the factorial of it.<br>For example: if num = 4, then your program should return (4 _ 3 _ 2 \* 1) = 24.<br> For the test cases, the range will be between 1 and 18 and the input will always be an integer.

## My Solution

Initial code:
```
function firstFactorial(num) {
	if ((num === 0) || (num === 1)) {
		return 1;
	} else {
		return (num * firstFactorial(num - 1));
	}
}
console.log(8);
console.log(firstFactorial(8));
```

Refactored 1:
```
function firstFactorial(num) {
	if ((num === 0) || (num === 1)) {
		return 1;
	} else {
		return (num * firstFactorial(num - 1));
	}
}
```

Refactored 2:
```
function firstFactorial(num) {
	return num = ((num === 0) || (num === 1)) ?  1 : (num * firstFactorial(num - 1));
}
```

Refactored 3:
```
firstFactorial = num => ((num === 0) || (num === 1)) ?  1 : (num * firstFactorial(num - 1));
```

## Unit tests

```
test('first factorial of 0 is 1', () => {
  expect(firstFactorial(0)).toBe(1);
});

test('first factorial of 1 is 1', () => {
  expect(firstFactorial(1)).toBe(1);
});

test('first factorial of 4 is 24', () => {
  expect(firstFactorial(4)).toBe(24);
});

test('first factorial of 8 is 40320', () => {
  expect(firstFactorial(8)).toBe(40320);
});
```
## Result

```
 PASS  FirstFactorial/index.test.js
  ✓ first factorial of 0 is 1 (2ms)
  ✓ first factorial of 1 is 1 (1ms)
  ✓ first factorial of 4 is 24 (1ms)
  ✓ first factorial of 8 is 40320
```
