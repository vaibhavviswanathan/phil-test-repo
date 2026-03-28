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
            throw new Error(result.error || 'Something went wrong');
        }
        
        return result;
    } catch (error) {
        throw error;
    }
}

// Utility function to display results
function displayResult(resultElementId, result, isError = false) {
    const resultElement = document.getElementById(resultElementId);
    resultElement.className = 'result ' + (isError ? 'error' : 'success');
    resultElement.textContent = isError ? `Error: ${result}` : `Result: ${result}`;
}

// Utility function to show loading state
function showLoading(resultElementId) {
    const resultElement = document.getElementById(resultElementId);
    resultElement.className = 'result loading';
    resultElement.textContent = 'Calculating...';
}

// Addition form handler
document.getElementById('addForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const resultId = 'addResult';
    
    try {
        showLoading(resultId);
        const a = document.getElementById('addA').value;
        const b = document.getElementById('addB').value;
        
        const result = await makeApiCall('add', { a, b });
        displayResult(resultId, result.result);
    } catch (error) {
        displayResult(resultId, error.message, true);
    }
});

// Subtraction form handler
document.getElementById('subtractForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const resultId = 'subtractResult';
    
    try {
        showLoading(resultId);
        const a = document.getElementById('subtractA').value;
        const b = document.getElementById('subtractB').value;
        
        const result = await makeApiCall('subtract', { a, b });
        displayResult(resultId, result.result);
    } catch (error) {
        displayResult(resultId, error.message, true);
    }
});

// Multiplication form handler
document.getElementById('multiplyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const resultId = 'multiplyResult';
    
    try {
        showLoading(resultId);
        const a = document.getElementById('multiplyA').value;
        const b = document.getElementById('multiplyB').value;
        
        const result = await makeApiCall('multiply', { a, b });
        displayResult(resultId, result.result);
    } catch (error) {
        displayResult(resultId, error.message, true);
    }
});

// Division form handler
document.getElementById('divideForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const resultId = 'divideResult';
    
    try {
        showLoading(resultId);
        const a = document.getElementById('divideA').value;
        const b = document.getElementById('divideB').value;
        
        const result = await makeApiCall('divide', { a, b });
        displayResult(resultId, result.result);
    } catch (error) {
        displayResult(resultId, error.message, true);
    }
});

// Power form handler
document.getElementById('powerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const resultId = 'powerResult';
    
    try {
        showLoading(resultId);
        const a = document.getElementById('powerA').value;
        const b = document.getElementById('powerB').value;
        
        const result = await makeApiCall('power', { a, b });
        displayResult(resultId, result.result);
    } catch (error) {
        displayResult(resultId, error.message, true);
    }
});

// Modulo form handler
document.getElementById('moduloForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const resultId = 'moduloResult';
    
    try {
        showLoading(resultId);
        const a = document.getElementById('moduloA').value;
        const b = document.getElementById('moduloB').value;
        
        const result = await makeApiCall('modulo', { a, b });
        displayResult(resultId, result.result);
    } catch (error) {
        displayResult(resultId, error.message, true);
    }
});

// Square root form handler
document.getElementById('sqrtForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const resultId = 'sqrtResult';
    
    try {
        showLoading(resultId);
        const x = document.getElementById('sqrtX').value;
        
        const result = await makeApiCall('sqrt', { x });
        displayResult(resultId, result.result);
    } catch (error) {
        displayResult(resultId, error.message, true);
    }
});

// Factorial form handler
document.getElementById('factorialForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const resultId = 'factorialResult';
    
    try {
        showLoading(resultId);
        const n = document.getElementById('factorialN').value;
        
        const result = await makeApiCall('factorial', { n });
        displayResult(resultId, result.result);
    } catch (error) {
        displayResult(resultId, error.message, true);
    }
});

// Add some visual feedback for form interactions
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        // Clear previous results when user starts typing
        const form = input.closest('form');
        const resultElement = form.querySelector('.result');
        if (resultElement) {
            resultElement.textContent = '';
            resultElement.className = 'result';
        }
    });
});

// Add keyboard support (Enter key to submit forms)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        e.target.closest('form').dispatchEvent(new Event('submit'));
    }
});