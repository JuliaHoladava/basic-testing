// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({
      a: 4,
      b: 3,
      action: Action.Add,
    });
    expect(result).toBe(7);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({
      a: 15,
      b: 8,
      action: Action.Subtract,
    });
    expect(result).toBe(7);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({
      a: 3,
      b: 6,
      action: Action.Multiply,
    });
    expect(result).toBe(18);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({
      a: 30,
      b: 5,
      action: Action.Divide,
    });
    expect(result).toBe(6);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 3,
      b: 4,
      action: Action.Exponentiate,
    });
    expect(result).toBe(81);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({
      a: 3,
      b: 4,
      action: 'sum',
    });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({
      a: '',
      b: 4,
      action: Action.Add,
    });
    expect(result).toBeNull();
  });
});
