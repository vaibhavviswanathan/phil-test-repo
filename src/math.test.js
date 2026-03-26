const { describe, it } = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, power } = require("./math");

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

  it("raises a number to a power", () => {
    assert.strictEqual(power(2, 3), 8);
  });
});