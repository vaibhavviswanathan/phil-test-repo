// Utility function to make API calls
async function makeApiCall(endpoint, data) {
    try {
        const response = await fetch(`/api/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.error || 'An error occurred');
        }
        
        return result;
    } catch (error) {
        throw error;
    }
}

// Utility function to display results
function displayResult(resultElementId, result, isError = false) {
    const resultElement = document.getElementById(resultElementId);
    resultElement.textContent = result;
    
    // Remove existing classes
    resultElement.classList.remove('success', 'error');
    
    // Add appropriate class
    if (isError) {
        resultElement.classList.add('error');
    } else {
        resultElement.classList.add('success');
    }
}

// Utility function to get numeric value from input
function getNumericValue(elementId) {
    const value = parseFloat(document.getElementById(elementId).value);
    return isNaN(value) ? null : value;
}

// Addition
document.getElementById('addForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const a = getNumericValue('addA');
    const b = getNumericValue('addB');
    
    if (a === null || b === null) {
        displayResult('addResult', 'Please enter valid numbers', true);
        return;
    }
    
    try {
        const result = await makeApiCall('add', { a, b });
        displayResult('addResult', result.result);
    } catch (error) {
        displayResult('addResult', error.message, true);
    }
});

// Subtraction
document.getElementById('subtractForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const a = getNumericValue('subtractA');
    const b = getNumericValue('subtractB');
    
    if (a === null || b === null) {
        displayResult('subtractResult', 'Please enter valid numbers', true);
        return;
    }
    
    try {
        const result = await makeApiCall('subtract', { a, b });
        displayResult('subtractResult', result.result);
    } catch (error) {
        displayResult('subtractResult', error.message, true);
    }
});

// Multiplication
document.getElementById('multiplyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const a = getNumericValue('multiplyA');
    const b = getNumericValue('multiplyB');
    
    if (a === null || b === null) {
        displayResult('multiplyResult', 'Please enter valid numbers', true);
        return;
    }
    
    try {
        const result = await makeApiCall('multiply', { a, b });
        displayResult('multiplyResult', result.result);
    } catch (error) {
        displayResult('multiplyResult', error.message, true);
    }
});

// Division
document.getElementById('divideForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const a = getNumericValue('divideA');
    const b = getNumericValue('divideB');
    
    if (a === null || b === null) {
        displayResult('divideResult', 'Please enter valid numbers', true);
        return;
    }
    
    try {
        const result = await makeApiCall('divide', { a, b });
        displayResult('divideResult', result.result);
    } catch (error) {
        displayResult('divideResult', error.message, true);
    }
});

// Power
document.getElementById('powerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const base = getNumericValue('powerBase');
    const exponent = getNumericValue('powerExponent');
    
    if (base === null || exponent === null) {
        displayResult('powerResult', 'Please enter valid numbers', true);
        return;
    }
    
    try {
        const result = await makeApiCall('power', { base, exponent });
        displayResult('powerResult', result.result);
    } catch (error) {
        displayResult('powerResult', error.message, true);
    }
});

// Modulo
document.getElementById('moduloForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const a = getNumericValue('moduloA');
    const b = getNumericValue('moduloB');
    
    if (a === null || b === null) {
        displayResult('moduloResult', 'Please enter valid numbers', true);
        return;
    }
    
    try {
        const result = await makeApiCall('modulo', { a, b });
        displayResult('moduloResult', result.result);
    } catch (error) {
        displayResult('moduloResult', error.message, true);
    }
});

// Square Root
document.getElementById('sqrtForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const x = getNumericValue('sqrtX');
    
    if (x === null) {
        displayResult('sqrtResult', 'Please enter a valid number', true);
        return;
    }
    
    try {
        const result = await makeApiCall('sqrt', { x });
        displayResult('sqrtResult', result.result);
    } catch (error) {
        displayResult('sqrtResult', error.message, true);
    }
});

// Factorial
document.getElementById('factorialForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const n = getNumericValue('factorialN');
    
    if (n === null) {
        displayResult('factorialResult', 'Please enter a valid number', true);
        return;
    }
    
    try {
        const result = await makeApiCall('factorial', { n });
        displayResult('factorialResult', result.result);
    } catch (error) {
        displayResult('factorialResult', error.message, true);
    }
});

// Add some visual feedback for form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        button.textContent = '...';
        button.disabled = true;
        
        // Re-enable button after a short delay (API calls should complete by then)
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 500);
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Math Web Interface loaded successfully!');
    
    // Add some example values for demonstration
    const examples = {
        'addA': 10,
        'addB': 5,
        'subtractA': 20,
        'subtractB': 8,
        'multiplyA': 6,
        'multiplyB': 7,
        'divideA': 15,
        'divideB': 3,
        'powerBase': 2,
        'powerExponent': 3,
        'moduloA': 17,
        'moduloB': 5,
        'sqrtX': 16,
        'factorialN': 5
    };
    
    // Optionally set example values (commented out to keep forms clean)
    // Object.keys(examples).forEach(id => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //         element.placeholder = `e.g., ${examples[id]}`;
    //     }
    // });
});