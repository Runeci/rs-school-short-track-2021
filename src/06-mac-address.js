/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new Error('Not implemented');
  const result = [];
  const strArr = n.split('-');
  if (strArr.length === 6) {
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].match(/[0-9A-F][0-9A-F]/g)) {
        result.push(strArr[i]);
      }
    }
  }
  return result.length === 6;
}

module.exports = isMAC48Address;
