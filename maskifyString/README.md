# Maskify String

## Description

>Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

## My Solution

Initial code:

```
function maskifyString (str) {
  return ("#".repeat(str.length-4)) + str.slice(-4);
}
```

Refactored:

```
function maskifyString(str) {
  if (str.length < 4) {
    return str;
  } else {
  return ("#".repeat(str.length-4)) + str.slice(-4);
  }
}
```
comment: Initial code did not pass tests for string.length < 4

## Unit tests

```

test('Mask all numbers except the last 4', () => {
  expect(maskifyString("453923239999")).toEqual("########9999");
});

test('Mask all numbers except the last 4', () => {
  expect(maskifyString("")).toEqual("");
});

test('Mask all numbers except the last 4', () => {
  expect(maskifyString("123")).toEqual("123");
});

test('Mask all numbers except the last 4', () => {
  expect(maskifyString("1234")).toEqual("1234");
});
```
## Result

```
  PASS  maskifyString/maskifyString.test.js
  ✓ Mask all numbers except the last 4. String length: 12 (3ms)
  ✓ Mask all numbers except the last 4. String length: empty (1ms)
  ✓ Mask all numbers except the last 4. String length: 3 (1ms)
  ✓ Mask all numbers except the last 4. String length: 4 (4ms)
```
