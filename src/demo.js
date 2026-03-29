// Math functions (copied from math.js for browser compatibility)
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
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

// Helper function to validate inputs and display results
function validateInputsAndCalculate(aId, bId, resultId, operation, operationName) {
    const aInput = document.getElementById(aId);
    const bInput = document.getElementById(bId);
    const resultDiv = document.getElementById(resultId);
    
    // Clear previous result classes
    resultDiv.className = 'result';
    
    // Get values
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    
    // Validate inputs
    if (isNaN(a) || isNaN(b)) {
        resultDiv.textContent = 'Please enter valid numbers for both fields.';
        resultDiv.classList.add('error');
        return;
    }
    
    try {
        const result = operation(a, b);
        resultDiv.textContent = `Result: ${a} ${getOperatorSymbol(operationName)} ${b} = ${result}`;
        resultDiv.classList.add('success');
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.classList.add('error');
    }
}

// Helper function to get operator symbol
function getOperatorSymbol(operationName) {
    switch(operationName) {
        case 'addition': return '+';
        case 'subtraction': return '-';
        case 'multiplication': return '×';
        case 'division': return '÷';
        default: return '';
    }
}

// Addition function
function performAddition() {
    validateInputsAndCalculate('add-a', 'add-b', 'add-result', add, 'addition');
}

// Subtraction function
function performSubtraction() {
    validateInputsAndCalculate('sub-a', 'sub-b', 'sub-result', subtract, 'subtraction');
}

// Multiplication function
function performMultiplication() {
    validateInputsAndCalculate('mul-a', 'mul-b', 'mul-result', multiply, 'multiplication');
}

// Division function
function performDivision() {
    validateInputsAndCalculate('div-a', 'div-b', 'div-result', divide, 'division');
}

// Add event listeners for Enter key press
document.addEventListener('DOMContentLoaded', function() {
    // Addition inputs
    document.getElementById('add-a').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performAddition();
    });
    document.getElementById('add-b').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performAddition();
    });
    
    // Subtraction inputs
    document.getElementById('sub-a').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSubtraction();
    });
    document.getElementById('sub-b').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSubtraction();
    });
    
    // Multiplication inputs
    document.getElementById('mul-a').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performMultiplication();
    });
    document.getElementById('mul-b').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performMultiplication();
    });
    
    // Division inputs
    document.getElementById('div-a').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performDivision();
    });
    document.getElementById('div-b').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performDivision();
    });
});