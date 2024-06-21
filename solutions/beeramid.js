/*
Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

1. your referral bonus, and
2. the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16

https://www.codewars.com/kata/51e04f6b544cf3f6550000c1
*/

const assert = require("assert");
const { describe, it } = require("node:test");

const name = "BEERAMID";

function beeramid(bonus, price) {
  let maxCans = Math.floor(bonus / price);

  let n = 1; // levels
  while (pyramid(n) <= maxCans) {
    n += 1;
  }

  return n - 1;
}

function pyramid(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

function test() {
  describe(name, () => {
    it("should pass the basic tests", () => {
      assert.strictEqual(beeramid(9, 2), 1);
      assert.strictEqual(beeramid(10, 2), 2);
      assert.strictEqual(beeramid(11, 2), 2);
      assert.strictEqual(beeramid(21, 1.5), 3);
      assert.strictEqual(beeramid(454, 5), 5);
      assert.strictEqual(beeramid(455, 5), 6);
      assert.strictEqual(beeramid(4, 4), 1);
      assert.strictEqual(beeramid(3, 4), 0);
      assert.strictEqual(beeramid(0, 4), 0);
      assert.strictEqual(beeramid(-1, 4), 0);
    });
  });
}

module.exports = {
  name,
  test,
};
