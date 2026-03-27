const { describe, it } = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, sqrt, factorial } = require("./math");

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
    });

    it("calculates square root of decimal numbers", () => {
      assert.strictEqual(sqrt(2.25), 1.5);
      assert.strictEqual(sqrt(0.25), 0.5);
    });
  });

  describe("factorial", () => {
    it("calculates factorial of 0", () => {
      assert.strictEqual(factorial(0), 1);
    });

    it("calculates factorial of 1", () => {
      assert.strictEqual(factorial(1), 1);
    });

    it("calculates factorial of small positive integers", () => {
      assert.strictEqual(factorial(2), 2);
      assert.strictEqual(factorial(3), 6);
      assert.strictEqual(factorial(4), 24);
      assert.strictEqual(factorial(5), 120);
    });

    it("calculates factorial of larger integers", () => {
      assert.strictEqual(factorial(10), 3628800);
      assert.strictEqual(factorial(12), 479001600);
    });

    it("throws TypeError for non-number input", () => {
      assert.throws(() => factorial("5"), { name: "TypeError" });
      assert.throws(() => factorial(null), { name: "TypeError" });
    });

    it("throws Error for non-integer input", () => {
      assert.throws(() => factorial(3.5), { name: "Error" });
      assert.throws(() => factorial(NaN), { name: "Error" });
    });

    it("throws Error for negative integers", () => {
      assert.throws(() => factorial(-1), { name: "Error" });
      assert.throws(() => factorial(-5), { name: "Error" });
    });

    it("throws Error for numbers too large", () => {
      assert.throws(() => factorial(171), { name: "Error" });
    });

    it("handles edge case of largest valid input", () => {
      const result = factorial(170);
      assert.ok(isFinite(result));
    });
  });
});
