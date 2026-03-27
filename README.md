# Phil Test Repo

A simple Node.js project used for testing the Phil AI coding agent. Now includes a web-based calculator interface!

## Features

- Basic math operations: addition, subtraction, multiplication
- Advanced operations: square root, factorial
- Clean web interface with form validation
- Express.js server with EJS templating

## Usage

### Running the Calculator Web Server

```bash
npm install
npm run server
```

Or alternatively:

```bash
npm run dev
```

The calculator will be available at `http://localhost:3000`

### Original CLI Usage

```bash
npm start
npm test
```

## Calculator Features

- **Addition**: Add two numbers together
- **Subtraction**: Subtract the second number from the first
- **Multiplication**: Multiply two numbers
- **Square Root**: Calculate the square root of a number (positive numbers only)
- **Factorial**: Calculate the factorial of a non-negative integer (0-170)

The web interface automatically adjusts the input fields based on the selected operation and includes client-side validation for better user experience.