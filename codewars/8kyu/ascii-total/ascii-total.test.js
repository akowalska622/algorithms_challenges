const uniTotal = require('./ascii-total');

test('Output must be a number', () =>
  expect(typeof uniTotal('a')).toBe('number'));

test('"a" must be 97', () => {
  expect(uniTotal('a')).toBe(97);
});

test('"aaa" must be 291', () => {
  expect(uniTotal('aaa')).toBe(291);
});
