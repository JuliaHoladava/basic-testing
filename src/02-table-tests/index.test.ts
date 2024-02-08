// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 4, b: 3, action: Action.Add, expected: 7 },
  { a: 15, b: 8, action: Action.Subtract, expected: 7 },
  { a: 3, b: 6, action: Action.Multiply, expected: 18 },
  { a: 30, b: 5, action: Action.Divide, expected: 6 },
  { a: 3, b: 4, action: Action.Exponentiate, expected: 81 },
  { a: 3, b: 4, action: 'sum', expected: null },
  { a: '', b: 4, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  testCases.forEach(({ a, b, action, expected }) => {
    test(`should correctly ${action} ${a} and ${b}`, () => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    });
  });
});
