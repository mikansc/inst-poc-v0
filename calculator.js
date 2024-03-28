const isValidInputs = (...inputs) => {
  return inputs.every((input) => typeof input === 'number');
}

const sum = (a, b) => {
  if (!isValidInputs(a, b)) {
    throw new Error('Invalid input');
  }
  return a + b
};

const subtract = (a, b) => {
  if (!isValidInputs(a, b)) {
    throw new Error('Invalid input');
  }
  return a - b
};

const multiply = (a, b) => {
  if (!isValidInputs(a, b)) {
    throw new Error('Invalid input');
  }
  return a * b;
}

const divide = (a, b) => {
  if (!isValidInputs(a, b)) {
    throw new Error('Invalid input');
  }
  return a / b
};

export default { sum, subtract, multiply, divide };