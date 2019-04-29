const largestSwap = require('./largestSwap');


test('27 should output false', () => {
  expect(largestSwap(27)).toBe(false);
});

test('43 should output true', () => {
  expect(largestSwap(43)).toBe(true);
});

test('99 should output true', () => {
  expect(largestSwap(99)).toBe(true);
});