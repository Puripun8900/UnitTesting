const { expect } = require("chai");
const { add, subtract, multiply, divide } = require("../mylib");

describe("mylib.js (expect style)", () => {
  before(() => console.log("Starting expect-style tests..."));
  after(() => console.log("Finished expect-style tests."));

  it("add() should add numbers correctly", () => {
    expect(add(2, 3)).to.equal(5);
  });

  it("subtract() should subtract numbers correctly", () => {
    expect(subtract(5, 3)).to.equal(2);
  });

  it("multiply() should multiply numbers correctly", () => {
    expect(multiply(4, 3)).to.equal(12);
  });

  it("divide() should divide numbers correctly", () => {
    expect(divide(10, 2)).to.equal(5);
  });

  it("divide() should throw an error on divide by zero", () => {
    expect(() => divide(10, 0)).to.throw("ZeroDivisionError");
  });
});
