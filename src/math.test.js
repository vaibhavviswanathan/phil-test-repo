const { describe, it } = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, sqrt } = require("./math");

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

  describe("sqrt", () => {
    it("calculates square root of positive numbers", () => {
      assert.strictEqual(sqrt(4), 2);
      assert.strictEqual(sqrt(9), 3);
      assert.strictEqual(sqrt(16), 4);
      assert.strictEqual(sqrt(25), 5);
    });

    it("calculates square root of zero", () => {
      assert.strictEqual(sqrt(0), 0);
    });

    it("returns NaN for negative numbers", () => {
      assert.ok(Number.isNaN(sqrt(-1)));
      assert.ok(Number.isNaN(sqrt(-4)));
      assert.ok(Number.isNaN(sqrt(-10)));
    });

    it("calculates square root of decimal numbers", () => {
      assert.strictEqual(sqrt(2.25), 1.5);
      assert.strictEqual(sqrt(0.25), 0.5);
    });
  });
});