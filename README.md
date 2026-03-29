# Phil Test Repo

A simple Node.js project used for testing the Phil AI coding agent. This project provides a collection of mathematical utility functions for basic arithmetic and advanced mathematical operations.

## Description

This repository contains a math utilities library that provides fundamental mathematical operations including basic arithmetic (addition, subtraction, multiplication), square root calculations, and factorial computations with comprehensive input validation.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/vaibhavviswanathan/phil-test-repo.git
cd phil-test-repo
```

2. No additional dependencies are required - this project uses only Node.js built-in modules.

## Usage

### Running the Project

```bash
npm start
npm test
```

### Math Utility Functions

The math utilities are available in `src/math.js`. Here are comprehensive usage examples for all available functions:

#### Basic Arithmetic Operations

##### Addition
```javascript
const { add } = require('./src/math');

// Basic addition
console.log(add(5, 3)); // Output: 8
console.log(add(-2, 7)); // Output: 5
console.log(add(0.5, 0.25)); // Output: 0.75
console.log(add(-10, -5)); // Output: -15
```

##### Subtraction
```javascript
const { subtract } = require('./src/math');

// Basic subtraction
console.log(subtract(10, 3)); // Output: 7
console.log(subtract(5, 8)); // Output: -3
console.log(subtract(0.75, 0.25)); // Output: 0.5
console.log(subtract(-5, -2)); // Output: -3
```

##### Multiplication
```javascript
const { multiply } = require('./src/math');

// Basic multiplication
console.log(multiply(4, 5)); // Output: 20
console.log(multiply(-3, 7)); // Output: -21
console.log(multiply(0.5, 8)); // Output: 4
console.log(multiply(0, 100)); // Output: 0
```

#### Advanced Mathematical Operations

##### Square Root
```javascript
const { sqrt } = require('./src/math');

// Square root calculations
console.log(sqrt(16)); // Output: 4
console.log(sqrt(2)); // Output: 1.4142135623730951
console.log(sqrt(0)); // Output: 0
console.log(sqrt(0.25)); // Output: 0.5
```

##### Factorial
```javascript
const { factorial } = require('./src/math');

// Factorial calculations
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(10)); // Output: 3628800

// Error handling examples
try {
  factorial(-5); // Throws: Error: Input must be a non-negative integer
} catch (error) {
  console.error(error.message);
}

try {
  factorial(3.5); // Throws: Error: Input must be an integer
} catch (error) {
  console.error(error.message);
}

try {
  factorial("5"); // Throws: TypeError: Input must be a number
} catch (error) {
  console.error(error.message);
}

try {
  factorial(171); // Throws: Error: Input too large - factorial would exceed JavaScript number limits
} catch (error) {
  console.error(error.message);
}
```

#### Using All Functions Together
```javascript
const { add, subtract, multiply, sqrt, factorial } = require('./src/math');

// Complex calculations
const a = 5;
const b = 3;

const sum = add(a, b); // 8
const difference = subtract(a, b); // 2
const product = multiply(a, b); // 15
const squareRoot = sqrt(add(a, b)); // sqrt(8) = 2.8284271247461903
const factorialResult = factorial(a); // 120

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Square root of sum: ${squareRoot}`);
console.log(`Factorial of ${a}: ${factorialResult}`);
```

## Function Reference

| Function | Parameters | Description | Returns | Throws |
|----------|------------|-------------|---------|--------|
| `add(a, b)` | `a, b: number` | Adds two numbers | `number` | - |
| `subtract(a, b)` | `a, b: number` | Subtracts b from a | `number` | - |
| `multiply(a, b)` | `a, b: number` | Multiplies two numbers | `number` | - |
| `sqrt(x)` | `x: number` | Calculates square root | `number` | - |
| `factorial(n)` | `n: number` | Calculates factorial of n | `number` | `TypeError` if not number, `Error` if not integer, negative, or > 170 |

## License

MIT