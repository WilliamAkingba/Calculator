// calculator.test.js
const Calculator = require('./calculator');

describe('Calculator Tests', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('Addition of two numbers', () => {
        expect(calculator.add(3, 2)).toBe(5);
    });

    test('Subtraction of two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('Addition throws error for non-numeric inputs', () => {
        expect(() => calculator.add("3", 2)).toThrow("Inputs must be numbers");
    });

    test('Subtraction throws error for non-numeric inputs', () => {
        expect(() => calculator.subtract(5, "3")).toThrow("Inputs must be numbers");
    });
});
