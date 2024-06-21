/*
A format for expressing an ordered list of integers is to use a comma separated list of either

- individual integers
- or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Courtesy of rosettacode.org

https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
*/

const assert = require("assert");
const { describe, it } = require("node:test");

const name = "RANGE_EXTRACTION";

function solution(list) {
  let results = [];
  let i = 0;
  let j = 2;
  while (i < list.length) {
    if (isConsecutive(list, i, j)) {
      while (isConsecutive(list, i, j)) {
        j++;
      } // keep looking for range until it stops
      j--; // go back one
      results.push(`${list[i]}-${list[j]}`); // push the range into results
      i = j + 1;
      j = i + 2;
    } else {
      results.push(list[i]);
      i++;
      j = i + 2;
    }
  }
  return results.join(",");
}

function isConsecutive(list, i, j) {
  return !isNaN(list[j]) && !isNaN(list[i]) && list[j] - list[i] === j - i;
}

function test() {
  describe(name, () => {
    it("Should pass sample tests", () => {
      assert.strictEqual(
        solution([
          -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19,
          20,
        ]),
        "-6,-3-1,3-5,7-11,14,15,17-20"
      );
    });
    it("Should pass the random tests", () => {
      assert.strictEqual(
        solution([
          -97, -96, -93, -91, -90, -88, -86, -84, -81, -78, -76, -73, -72, -70,
          -68, -66, -63, -60, -57, -55, -54, -53,
        ]),
        "-97,-96,-93,-91,-90,-88,-86,-84,-81,-78,-76,-73,-72,-70,-68,-66,-63,-60,-57,-55--53"
      );
    });
  });
}

module.exports = {
  name,
  test,
};
