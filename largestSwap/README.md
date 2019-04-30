# Largest Swap

## Description

>Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.<br>
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27.<br> 
On the other hand, swapping 43 gives us 34, and 43 > 34.<br>
Numbers with two identical digits (third example) should yield true (you can't do better).

## My Solution

Initial code:

```
function largestSwap(num) {
  
  let split = ('' + num).split('').map(Number);

  if (split[0] > split[1]) {
    return true;
  } else if (split[0] < split[1]) {
    return false;
  } else {
    return true;
  }
}

module.exports = largestSwap;
```

Refactored:

```
TODO
```
## Unit tests

```
test('27 should output false', () => {
  expect(largestSwap(27)).toBe(false);
});

test('43 should output true', () => {
  expect(largestSwap(43)).toBe(true);
});

test('99 should output true', () => {
  expect(largestSwap(99)).toBe(true);
});
```
## Result

```
 PASS  largestSwap/largestSwap.test.js
  ✓ 27 should output false (2ms)
  ✓ 43 should output true (1ms)
  ✓ 99 should output true
```
