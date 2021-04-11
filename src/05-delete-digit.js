/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  const str = n.toString();
  const newArr = [];
  for (let i = 0; i < str.length; i++) {
    const strArr = str.split('');
    strArr.splice(i, 1);
    newArr.push(strArr.join(''));
  }
  return Math.max.apply(null, newArr);
}
module.exports = deleteDigit;
