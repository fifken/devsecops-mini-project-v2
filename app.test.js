const { add, subtract } = require('./app');

describe('Calculator Functions', () => {
    test('should correctly add two numbers', () => {
        expect(add(5, 3)).toBe(8);
    });

    test('should correctly subtract two numbers', () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test('should handle negative results in subtraction', () => {
        expect(subtract(3, 5)).toBe(-2);
    });
});
