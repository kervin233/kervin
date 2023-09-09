let currentInput = '';
let currentOperator = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    console.log('Appending:', value);
    if (resultDisplayed) {
        resultDisplayed = false;
        currentInput = '';
        display.value = '';
    }

    currentInput += value;
    display.value = currentInput;
}



function clearDisplay() {
    document.getElementById('display').value = '';
    currentInput = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
