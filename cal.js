function squareRoot() {
  let value = parseFloat(currentInput);
  if (value < 0) {
    currentInput = 'Error';
  } else {
    currentInput = String(Math.sqrt(value));
  }
  updateDisplay();
  waitingForSecondOperand = true;
}

function cube() {
  let value = parseFloat(currentInput);
  currentInput = String(Math.pow(value, 3));
  updateDisplay();
  waitingForSecondOperand = true;
}

function percent() {
  let value = parseFloat(currentInput);
  currentInput = String(value / 100);
  updateDisplay();
  waitingForSecondOperand = true;
}

function trigFunction(func) {
  let value = parseFloat(currentInput);
  // Convert degrees to radians for JavaScript trig functions
  let radians = value * (Math.PI / 180);
  let result;

  switch (func) {
    case 'sin':
      result = Math.sin(radians);
      break;
    case 'cos':
      result = Math.cos(radians);
      break;
    case 'tan':
      result = Math.tan(radians);
      break;
    case 'cot':
      result = 1 / Math.tan(radians);
      break;
    case 'sec':
      result = 1 / Math.cos(radians);
      break;
    case 'csc':
      result = 1 / Math.sin(radians);
      break;
    default:
      result = value;
  }

  if (!isFinite(result)) {
    currentInput = 'Error';
  } else {
    currentInput = String(result);
  }
  updateDisplay();
  waitingForSecondOperand = true;
}
