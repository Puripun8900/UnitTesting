const { add, isEven } = require("./src/math");

function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a * b;
}

function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a - b;
}

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  if (b === 0) {
    throw new Error("ZeroDivisionError: Cannot divide by zero");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide, isEven };
