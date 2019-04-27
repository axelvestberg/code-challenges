# First Factorial

## Description

>Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.<br>For example: if num = 4, then your program should return (4 _ 3 _ 2 \* 1) = 24.<br> For the test cases, the range will be between 1 and 18 and the input will always be an integer.

## My Solution

Initial code:

```
function FirstFactorial(num) {
	if ((num === 0) || (num === 1)) {
		return 1;
	} else {
		return (num * FirstFactorial(num - 1));
	}
}
console.log(8);
console.log(FirstFactorial(8));
```

Refactored:

```
function FirstFactorial(num) {
	if ((num === 0) || (num === 1)) {
		return 1;
	} else {
		return (num * FirstFactorial(num - 1));
	}
}

console.log("Input:  " + 4);
console.log("Output: " + FirstFactorial(4));

console.log("Input:  " + 8);
console.log("Output: " + FirstFactorial(8));
```

## Result

```
Input:  4
Output: 24
Input:  8
Output: 40320

[Done] exited with code=0 in 0.22 seconds
```
