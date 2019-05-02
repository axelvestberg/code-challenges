# Capitalize First

## Description

>Create a function that takes an array of names and returns an array with the first letter capitalized.

## My Solution

Initial code:

function capitalizeFirst(arr) {
  return arr.map(f => f.charAt(0).toUpperCase() + f.substring(1).toLowerCase());
}
```

Refactored:

```
TODO
```
## Unit tests

```
test('Each element in the array should be capitalized', () => {
  expect(capitalizeFirst(["AXEL", "edVARD", "HENrik", "adrian"])).toEqual(["Axel", "Edvard", "Henrik", "Adrian"]);
});
```
## Result

```
  capitalizeFirst/capitalizeFirst.test.js
  ✓ Each element in the array should be capitalized (7ms)
```
