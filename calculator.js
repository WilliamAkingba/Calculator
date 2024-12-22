// calculator.js
class Calculator {
    add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Inputs must be numbers");
        }
        return a + b;
    }

    subtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Inputs must be numbers");
        }
        return a - b;
    }

    multiply(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Inputs must be numbers");
        }
        return a * b;
    }
}

module.exports = Calculator;
