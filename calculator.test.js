const calculator = require('./calculator.js');

describe('calculator', () => {
  // ADD
  test('check that add is a valid method in calculator object', () => {
    expect(calculator.add()).toBeDefined();
  });

  test('add two numbers', () => {
    expect(calculator.add(1, 7)).toBe(8);
  });

  test('check that the result is a valid number', () => {
    expect(calculator.add(9, 10)).not.toBeNaN();
  });

  // SUBTRACT
  test('subtract is a valid method in calculator object', () => {
    expect(calculator.subtract()).toBeDefined();
  });

  test('subtract two numbers', () => {
    expect(calculator.subtract('apple', 7)).toBeNaN();
  });

  test('result is a valid number', () => {
    expect(calculator.subtract(9, 10)).toBeLessThan(0);
  });

  // DIVIDE
  test('divide is a valid method in calculator object', () => {
    expect(calculator.divide()).toBeDefined();
  });

  test('divide two numbers', () => {
    expect(calculator.divide(20, 5)).toBe(4);
  });

  test('result is a valid number', () => {
    expect(calculator.divide(0, 10)).toBeFalsy();
  });

  // MULTIPLY
  test('multiply is a valid method in calculator object', () => {
    expect(calculator.multiply()).toBeDefined();
  });

  test('multiply two numbers', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
  });

  test('Result is greater than 0', () => {
    expect(calculator.multiply(9, 10)).toBeGreaterThan(0);
  });
});
