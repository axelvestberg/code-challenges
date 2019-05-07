const spelling = require('./spelling');

test('string bee to be returned as array b, be, bee', () => {
  expect(spelling("bee")).toEqual(["b", "be", "bee"]);
});

test('string bee to be returned as array h, ha, hap, happ, happy', () => {
  expect(spelling("happy")).toEqual(["h", "ha", "hap", "happ", "happy"]);
});