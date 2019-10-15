const firstFactorial = require('./firstFactorial');


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

test('first factorial of 20 is 2432902008176640000', () => {
  expect(firstFactorial(20)).toBe(2432902008176640000);
});