const chai = require("chai");
const should = chai.should(); // activate should style
const { add, subtract, multiply, divide } = require("../mylib");

describe("mylib.js (should style)", () => {
  before(() => console.log("Starting should-style tests..."));
  after(() => console.log("Finished should-style tests."));

  it("add() should add numbers correctly", () => {
    add(2, 3).should.equal(5);
  });

  it("subtract() should subtract numbers correctly", () => {
    subtract(5, 3).should.equal(2);
  });

  it("multiply() should multiply numbers correctly", () => {
    multiply(4, 3).should.equal(12);
  });

  it("divide() should divide numbers correctly", () => {
    divide(10, 2).should.equal(5);
  });

  it("divide() should throw an error on divide by zero", () => {
    (() => divide(10, 0)).should.throw("ZeroDivisionError");
  });
});
