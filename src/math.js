function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot modulo by zero');
  }
  return a % b;
}

function sqrt(x) {
  if (x < 0) {
    throw new Error('Cannot take square root of negative number');
  }
  return Math.sqrt(x);
}

function factorial(n) {
  if (typeof n !== 'number') {
    throw new TypeError('Input must be a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  if (n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  if (n > 170) {
    throw new Error('Input too large - factorial would exceed JavaScript number limits');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

module.exports = { add, subtract, multiply, divide, power, modulo, sqrt, factorial };