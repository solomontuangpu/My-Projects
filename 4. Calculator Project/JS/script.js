let currentOperand = document.querySelector('.current-operand');
let previousOperand = document.querySelector('.previous-operand');
let operator = ['+', '-', '*', '/', '%', '.'];

function showDisplay(x) {
    let current = currentOperand.innerHTML;
    let lastIndex = current[current.length - 1];

    if (currentOperand.innerHTML == 0) {
        return currentOperand.innerHTML = x;
    } else if (operator.includes(x) && operator.includes(lastIndex)) {
        return currentOperand.innerHTML = `${current.substring(0, current.length - 1)}${x}`;
    } 
        return currentOperand.innerHTML += x;
    
}

function calculate() {
    let current = currentOperand.innerHTML;
    previousOperand.innerHTML = eval(current);
    currentOperand.innerHTML = 0;
}

function allClear() {
    currentOperand.innerHTML = 0;
    previousOperand.innerHTML = "";
}

function clearLast() {
    let current = currentOperand.innerHTML;

    if (current.length == 1) {
        currentOperand.innerHTML = 0;
    } else {
        currentOperand.innerHTML = current.substring(0, current.length - 1);
    }
}