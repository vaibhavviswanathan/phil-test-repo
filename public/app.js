// Import math functions - we'll fetch them dynamically since this is client-side
let mathFunctions = {};

// Fetch and parse the math functions from the server
async function loadMathFunctions() {
    try {
        const response = await fetch('/math.js');
        const mathCode = await response.text();
        
        // Create a safe evaluation environment for the math functions
        const safeEval = new Function('module', mathCode + '; return module.exports;');
        const moduleObj = { exports: {} };
        mathFunctions = safeEval(moduleObj);
        
        console.log('Math functions loaded:', Object.keys(mathFunctions));
    } catch (error) {
        console.error('Error loading math functions:', error);
        // Fallback to basic implementations
        mathFunctions = {
            add: (a, b) => a + b,
            subtract: (a, b) => a - b,
            multiply: (a, b) => a * b,
            divide: (a, b) => {
                if (b === 0) throw new Error('Division by zero is not allowed');
                return a / b;
            },
            power: (base, exponent) => Math.pow(base, exponent),
            modulo: (a, b) => {
                if (b === 0) throw new Error('Modulo by zero is not allowed');
                return a % b;
            },
            sqrt: (x) => {
                if (x < 0) throw new Error('Square root of negative number is not allowed');
                return Math.sqrt(x);
            },
            factorial: (n) => {
                if (typeof n !== 'number') throw new TypeError('Input must be a number');
                if (!Number.isInteger(n)) throw new Error('Input must be an integer');
                if (n < 0) throw new Error('Input must be a non-negative integer');
                if (n > 170) throw new Error('Input too large - factorial would exceed JavaScript number limits');
                if (n === 0 || n === 1) return 1;
                let result = 1;
                for (let i = 2; i <= n; i++) {
                    result *= i;
                }
                return result;
            }
        };
    }
}

// Display result in the UI
function displayResult(elementId, result, isError = false) {
    const resultElement = document.getElementById(elementId);
    resultElement.textContent = result;
    resultElement.className = `result ${isError ? 'error' : 'success'}`;
}

// Handle form submission for binary operations (two inputs)
function handleBinaryOperation(formId, inputAId, inputBId, resultId, operation) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        try {
            const a = parseFloat(document.getElementById(inputAId).value);
            const b = parseFloat(document.getElementById(inputBId).value);
            
            if (isNaN(a) || isNaN(b)) {
                throw new Error('Please enter valid numbers');
            }
            
            const result = mathFunctions[operation](a, b);
            displayResult(resultId, `Result: ${result}`);
        } catch (error) {
            displayResult(resultId, `Error: ${error.message}`, true);
        }
    });
}

// Handle form submission for unary operations (one input)
function handleUnaryOperation(formId, inputId, resultId, operation) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        try {
            const value = parseFloat(document.getElementById(inputId).value);
            
            if (isNaN(value)) {
                throw new Error('Please enter a valid number');
            }
            
            const result = mathFunctions[operation](value);
            displayResult(resultId, `Result: ${result}`);
        } catch (error) {
            displayResult(resultId, `Error: ${error.message}`, true);
        }
    });
}

// Initialize all form handlers when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Load math functions first
    await loadMathFunctions();
    
    // Set up binary operation handlers
    handleBinaryOperation('add-form', 'add-a', 'add-b', 'add-result', 'add');
    handleBinaryOperation('subtract-form', 'subtract-a', 'subtract-b', 'subtract-result', 'subtract');
    handleBinaryOperation('multiply-form', 'multiply-a', 'multiply-b', 'multiply-result', 'multiply');
    handleBinaryOperation('divide-form', 'divide-a', 'divide-b', 'divide-result', 'divide');
    handleBinaryOperation('power-form', 'power-base', 'power-exponent', 'power-result', 'power');
    handleBinaryOperation('modulo-form', 'modulo-a', 'modulo-b', 'modulo-result', 'modulo');
    
    // Set up unary operation handlers
    handleUnaryOperation('sqrt-form', 'sqrt-x', 'sqrt-result', 'sqrt');
    handleUnaryOperation('factorial-form', 'factorial-n', 'factorial-result', 'factorial');
    
    console.log('Interactive Math Demo initialized!');
});