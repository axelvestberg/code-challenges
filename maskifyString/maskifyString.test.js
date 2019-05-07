const maskifyString = require('./maskifyString');

test('Mask all numbers except the last 4. String length: 12', () => {
  expect(maskifyString("453923239999")).toEqual("########9999");
});

test('Mask all numbers except the last 4. String length: empty', () => {
  expect(maskifyString("")).toEqual("");
});

test('Mask all numbers except the last 4. String length: 3', () => {
  expect(maskifyString("123")).toEqual("123");
});

test('Mask all numbers except the last 4. String length: 4', () => {
  expect(maskifyString("1234")).toEqual("1234");
});