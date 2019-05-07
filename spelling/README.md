# Spelling

## Description

>Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

## My Solution

Initial code:

```
function spelling (str) {
  let arr = [];
  for (i = 0; i < str.length; i++) {
    arr.push(str.slice(0,i+1));
  }
  return arr;
}
module.exports = spelling;
```

Refactored:

```
TODO
```
## Unit tests

```
test('string bee to be returned as array b, be, bee', () => {
  expect(spelling("bee")).toEqual(["b", "be", "bee"]);
});

test('string bee to be returned as array h, ha, hap, happ, happy', () => {
  expect(spelling("happy")).toEqual(["h", "ha", "hap", "happ", "happy"]);
});
```
## Result

```
 PASS  spelling/spelling.test.js
  ✓ string bee to be returned as array b, be, bee (4ms)
  ✓ string bee to be returned as array h, ha, hap, happ, happy (3ms)
```
