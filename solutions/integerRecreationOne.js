/*
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]

https://www.codewars.com/kata/55aa075506463dac6600010d
*/

const assert = require("assert");
const { describe, it } = require("node:test");

let name = "INTEGER_RECREATION_ONE";

function listSquared(m, n) {
  let results = [];

  for (let i = m; i <= n; i++) {
    let divisors = getDivisors(i);
    let s = divisors.reduce((sum, d) => sum + d * d, 0);
    let root = Math.sqrt(s);

    if (root - Math.floor(root) === 0) {
      results.push([i, s]);
    }
  }

  return results;
}

function getDivisors(n) {
  let divisors = new Set();
  for (let divisor = 1; divisor <= n; divisor++) {
    if (n % divisor === 0) {
      divisors.add(divisor);
      divisors.add(n / divisor);
    }
  }
  return Array.from(divisors);
}

function test() {
  describe(name, function () {
    it("should pass the basic tests", function () {
      assert.deepEqual(listSquared(1, 250), [
        [1, 1],
        [42, 2500],
        [246, 84100],
      ]);
      assert.deepEqual(listSquared(42, 250), [
        [42, 2500],
        [246, 84100],
      ]);
      assert.deepEqual(listSquared(250, 500), [[287, 84100]]);
    });
  });
}

module.exports = {
  name,
  test,
};
