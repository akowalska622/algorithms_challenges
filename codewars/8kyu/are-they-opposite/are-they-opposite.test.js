const isOpposite = require('./are-they-opposite');

test('The result should be a boolean', () => {
  expect(typeof isOpposite()).toBe('boolean');
});

test('The result should NOT be a string', () => {
  expect(typeof isOpposite()).not.toBe('string');
});

test('If both strings are empty, return false', () => {
  expect(isOpposite('', '')).toBeFalsy();
});

test('ab and AB should return true', () => {
  expect(isOpposite('ab', 'AB')).toBeTruthy();
});

test('aB and Ab should return true', () => {
  expect(isOpposite('aB', 'Ab')).toBeTruthy();
});

test('ab and AB should return true', () => {
  expect(isOpposite('aBcd', 'AbCD')).toBeTruthy();
});

test('AB and Ab should return true', () => {
  expect(isOpposite('AB', 'Ab')).toBeFalsy();
});
