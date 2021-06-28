// Test assertion functions
const assertArraysEqual = (arr1, arr2) => {
  const [color, emoji, outcome, operator] = eqArrays(arr1, arr2)
    ? ['\x1b[2m\x1b[32m', '  ', 'Passed', '===']
    : ['\x1b[0m\x1b[31m', '\u274c', 'Failed', '!=='];
  console.log(
    color + emoji + `Assertion ${outcome}:`,
    `[${arr1.join(', ')}] ${operator} [${arr2.join(', ')}]`
  );
};

const eqArrays = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.reduce((same, elem, index) => same && elem === arr2[index], true)
  );
};

// Actual function
const takeUntil = function (array, callback) {
  const results = [];
  for (const elem of array) {
    if (callback(elem)) break;
    results.push(elem);
  }
  return results;
};

// Tests
const equals = (target) => (elem) => target === elem;
const exceeds = (threshold) => (elem) => elem > threshold;

assertArraysEqual(takeUntil([1, 2, 3], equals(0)), [1, 2, 3]);
assertArraysEqual(takeUntil([1, 2, -1, 3], equals(-1)), [1, 2]);
assertArraysEqual(takeUntil(['a', 'b', null, 'c'], equals(null)), ['a', 'b']);
assertArraysEqual(takeUntil([2, 4, 6, 8], exceeds(5)), [2, 4]);

module.exports = takeUntil;
