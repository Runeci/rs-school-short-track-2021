/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new Error('Not implemented');
  const sum = n.toString()
    .split('')
    .map((i) => Number(i))
    .reduce((acc, current) => acc + current, 0);

  return sum.toString().length > 1
    ? getSumOfDigits(sum)
    : sum;
}

module.exports = getSumOfDigits;
