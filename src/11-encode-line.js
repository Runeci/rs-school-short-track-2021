/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  let count = 0;
  let value = '';
  const resultArr = [];
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    } else {
      resultArr.push(count.toString() + value);
      value = arr[i];
      count = 1;
    }
  }
  resultArr.push(count.toString() + value);
  return resultArr.join('').toString().replace(/[0-1]/gi, '');
}

module.exports = encodeLine;

// const resultArr = [];
// const currentState = {
//   value: '',
//   count: 0,
//   getCount() {
//     return this.count <= 1 ? '' : this.count;
//   },
// };
//
// str.split('').forEach((char) => {
//   if (currentState.value === char) {
//     currentState.count += 1;
//   } else if (currentState.value) {
//     resultArr.push(`${currentState.getCount()}${currentState.value}`);
//     currentState.value = char;
//     currentState.count = 1;
//   } else {
//     currentState.value = char;
//     currentState.count = 1;
//   }
// });
//
// resultArr.push(`${currentState.getCount()}${currentState.value}`);
//
// return resultArr.join('');
