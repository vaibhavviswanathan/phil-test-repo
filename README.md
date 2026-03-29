# Phil Test Repo

A simple Node.js project used for testing the Phil AI coding agent. This project provides a collection of mathematical utility functions and an interactive web demo.

## Features

- Math utilities library with comprehensive operations
- Interactive web demo with modern UI
- Express.js server for serving the web interface
- Comprehensive error handling and input validation

## Installation

1. Clone the repository:
```bash
git clone https://github.com/vaibhavviswanathan/phil-test-repo.git
cd phil-test-repo
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Running the Interactive Demo

Start the server to access the interactive math demo:

```bash
npm start
```

Then open your browser to `http://localhost:8080` to use the interactive math calculator.

### Running Tests

```bash
npm test
```

### Math Utility Functions

The math utilities are available in `src/math.js` and include:

- **Basic Operations**: add, subtract, multiply, divide
- **Advanced Operations**: power, modulo, square root, factorial

All functions include comprehensive error handling for edge cases like division by zero, negative square roots, and invalid factorial inputs.

## Project Structure

```
├── src/
│   ├── math.js          # Math utility functions
│   ├── math.test.js     # Test cases
│   └── index.js         # Original CLI interface
├── public/
│   ├── index.html       # Interactive web interface
│   ├── styles.css       # Modern responsive styling
│   └── app.js          # Client-side JavaScript
├── server.js           # Express server
└── package.json        # Project configuration
```

## License

MIT