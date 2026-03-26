const { describe, it } = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, divide } = require("./math");

describe("math", () => {
  it("adds two numbers", () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it("subtracts two numbers", () => {
    assert.strictEqual(subtract(10, 4), 6);
  });

  it("multiplies two numbers", () => {
    assert.strictEqual(multiply(5, 6), 30);
  });

  it("divides two numbers", () => {
    assert.strictEqual(divide(10, 2), 5);
  });

  it("divides with decimal result", () => {
    assert.strictEqual(divide(7, 2), 3.5);
  });

  it("divides negative numbers", () => {
    assert.strictEqual(divide(-10, 2), -5);
    assert.strictEqual(divide(10, -2), -5);
    assert.strictEqual(divide(-10, -2), 5);
  });

  it("throws error when dividing by zero", () => {
    assert.throws(() => divide(10, 0), {
      name: "Error",
      message: "Division by zero is not allowed"
    });
  });
});