/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

 Note: your solution must not modify the input array.

https://www.codewars.com/kata/5270d0d18625160ada0000e4
 */
const assert = require("assert");
const { describe, it } = require("node:test");

let name = "GREED";

function score(dice) {
  let rollCounts = new Array(6).fill(0);
  dice.forEach((roll) => (rollCounts[roll - 1] = rollCounts[roll - 1] + 1));

  let score = 0;
  rollCounts.forEach((count, roll) => {
    roll++;
    switch (roll) {
      case 1:
        score += Math.floor(count / 3) * 1000 + (count % 3) * 100;
        break;
      case 5:
        score += Math.floor(count / 3) * 500 + (count % 3) * 50;
        break;
      default:
        score += Math.floor(count / 3) * 100 * roll;
        break;
    }
  });

  return score;
}

function test() {
  describe(name, function () {
    it("should value this as worthless", function () {
      assert.strictEqual(
        score([2, 3, 4, 6, 2]),
        0,
        "Incorrect answer for dice = [2, 3, 4, 6, 2]"
      );
    });

    it("should value this triplet correctly", function () {
      assert.strictEqual(
        score([4, 4, 4, 3, 3]),
        400,
        "Incorrect answer for dice = [4, 4, 4, 3, 3]"
      );
    });

    it("should value this mixed set correctly", function () {
      assert.strictEqual(
        score([2, 4, 4, 5, 4]),
        450,
        "Incorrect answer for dice = [2, 4, 4, 5, 4]"
      );
    });
  });
}

module.exports = {
  name,
  test,
};
