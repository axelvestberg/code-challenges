const formatNumbers = require('./formatNumbers');

test('1000 should be 1,000', () => {
  expect(formatNumbers(1000)).toBe("1,000");
});

test('1000 should be 1,000', () => {
  expect(formatNumbers(123456789)).toBe("123,456,789");
});

test('23 should be 23', () => {
  expect(formatNumbers(23)).toBe("23");
});
