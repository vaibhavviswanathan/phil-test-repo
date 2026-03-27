function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

/**
 * Calculates the square root of a number
 * @param {number} x - The number to calculate the square root for
 * @returns {number} The square root of x, or NaN for negative numbers
 * 
 * Logic for different cases:
 * - Positive numbers: Returns the mathematical square root (e.g., sqrt(4) = 2)
 * - Zero: Returns 0 (sqrt(0) = 0)  
 * - Negative numbers: Returns NaN since square root of negative numbers is undefined in real numbers
 * - Decimal numbers: Returns the precise square root (e.g., sqrt(2.25) = 1.5)
 */
function sqrt(x) {
  return Math.sqrt(x);
}

module.exports = { add, subtract, multiply, sqrt };