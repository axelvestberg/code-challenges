const capitalizeFirst = require('./capitalizeFirst');

test('Each element in the array should be capitalized', () => {
  expect(capitalizeFirst(["AXEL", "edVARD", "HENrik", "adrian"])).toEqual(["Axel", "Edvard", "Henrik", "Adrian"]);
});