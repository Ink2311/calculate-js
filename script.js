let displayValue = "";
let firstOperator = null;
let secondOperator = null;
let currentOperation = null;
function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue || "0";
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperation !== null) {
    calculate();
  }
  firstOperator = parseFloat(displayValue);
  currentOperation = op;
  displayValue = "";
}

function calculate() {
  if (currentOperation === null || displayValue === "") {
    return;
  }
  secondOperator = parseFloat(displayValue);

  let result;

  switch (currentOperation) {
    case "+":
      result = firstOperator + secondOperator;
      break;
    case "-":
      result = firstOperator - secondOperator;
      break;
    case "*":
      result = firstOperator * secondOperator;
      break;
    case "/":
      result = firstOperator / secondOperator;
      break;
    default:
      return;
  }
  displayValue = result.toString();
  currentOperation = null;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  firstOperator, secondOperator, (currentOperation = null);
  updateDisplay();
}
