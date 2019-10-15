const workout = require('./workout');

test('100 100 4 should output biceps', () => {
  expect(workout(100, 100, 4)).toEqual("biceps");
});

// test('100 125 3 should output biceps', () => {
//   expect(workout(100, 125, 3)).toEqual("biceps");
// });

// test('100 150 3 should output liar', () => {
//   expect(workout(100, 150, 3)).toEqual("liar");
// });