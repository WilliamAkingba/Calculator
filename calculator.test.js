// calculator.test.js
const Calculator = require('./calculator');

describe('Calculator Tests', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    // Test Addition
    test('Addition of two numbers', () => {
        expect(calculator.add(3, 2)).toBe(5);
    });

    // Test Subtraction
    test('Subtraction of two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    // Test Multiplication
    test('Multiplication of two numbers', () => {
        expect(calculator.multiply(4, 3)).toBe(12);
    });

    // Test Error for Addition with Non-numeric Inputs
    test('Addition throws error for non-numeric inputs', () => {
        expect(() => calculator.add("3", 2)).toThrow("Inputs must be numbers");
    });

    // Test Error for Subtraction with Non-numeric Inputs
    test('Subtraction throws error for non-numeric inputs', () => {
        expect(() => calculator.subtract(5, "3")).toThrow("Inputs must be numbers");
    });

    // Test Error for Multiplication with Non-numeric Inputs
    test('Multiplication throws error for non-numeric inputs', () => {
        expect(() => calculator.multiply(4, "3")).toThrow("Inputs must be numbers");
    });
});
