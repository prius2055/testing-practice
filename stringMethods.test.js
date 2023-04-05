const stringMethods = require('./stringMethods.js');

// TASK 1
test('gets the length of a string', () => {
  expect(stringMethods.stringLength('apple')).toBe(5);
});

test('throw error if the condition is falsy', () => {
  expect(stringMethods.stringAuthentification('John')).toBeGreaterThanOrEqual(
    1,
  );
  expect(stringMethods.stringAuthentification('John')).toBeLessThan(11);
});

// TASK 2
test('Reverse a string', () => {
  expect(stringMethods.reverseString('PAGAM')).toEqual('magap');
});
