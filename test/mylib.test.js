const assert = require("chai").assert;
const { add, subtract, multiply, divide } = require("../mylib");

describe("mylib.js (assert style)", () => {
  before(() => console.log("Starting tests..."));
  after(() => console.log("Tests completed."));

  it("add() should add numbers", () => {
    assert.equal(add(2, 3), 5);
  });

  it("subtract() should subtract numbers", () => {
    assert.equal(subtract(5, 3), 2);
  });

  it("multiply() should multiply numbers", () => {
    assert.equal(multiply(4, 3), 12);
  });

  it("divide() should divide numbers", () => {
    assert.equal(divide(10, 2), 5);
  });

  it("divide() should throw error on divide by zero", () => {
    assert.throws(() => divide(10, 0), /ZeroDivisionError/);
  });
});
