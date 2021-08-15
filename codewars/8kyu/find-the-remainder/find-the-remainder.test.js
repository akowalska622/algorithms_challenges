const remainder = require('./find-the-remainder');

test('5 % 3 should be 2', () => {
  expect(remainder(5, 3)).toBe(2);
});
