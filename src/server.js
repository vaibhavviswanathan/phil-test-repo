const express = require('express');
const path = require('path');
const { add, subtract, multiply, sqrt, factorial } = require('./math');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Route to serve the calculator page
app.get('/', (req, res) => {
    res.render('index');
});

// Route to handle calculator form submission
app.post('/calculate', (req, res) => {
    const { operation, num1, num2 } = req.body;
    let result;
    let error;

    try {
        const firstNum = parseFloat(num1);
        const secondNum = parseFloat(num2);

        // Validate inputs
        if (isNaN(firstNum)) {
            throw new Error('First number is required and must be a valid number');
        }

        switch (operation) {
            case 'add':
                if (isNaN(secondNum)) {
                    throw new Error('Second number is required for addition');
                }
                result = add(firstNum, secondNum);
                break;
            
            case 'subtract':
                if (isNaN(secondNum)) {
                    throw new Error('Second number is required for subtraction');
                }
                result = subtract(firstNum, secondNum);
                break;
            
            case 'multiply':
                if (isNaN(secondNum)) {
                    throw new Error('Second number is required for multiplication');
                }
                result = multiply(firstNum, secondNum);
                break;
            
            case 'sqrt':
                if (firstNum < 0) {
                    throw new Error('Cannot calculate square root of a negative number');
                }
                result = sqrt(firstNum);
                break;
            
            case 'factorial':
                if (!Number.isInteger(firstNum)) {
                    throw new Error('Factorial requires an integer');
                }
                if (firstNum < 0) {
                    throw new Error('Factorial requires a non-negative integer');
                }
                result = factorial(firstNum);
                break;
            
            default:
                throw new Error('Please select a valid operation');
        }

        // Format result to avoid very long decimal numbers
        if (typeof result === 'number' && !Number.isInteger(result)) {
            result = parseFloat(result.toFixed(10));
        }

    } catch (err) {
        error = err.message;
    }

    res.render('index', { result, error });
});

// Start server
app.listen(PORT, () => {
    console.log(`Calculator server running on http://localhost:${PORT}`);
});

module.exports = app;