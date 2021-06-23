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
const map = function (array, callback) {
  const results = [];
  for (const elem of array) results.push(callback(elem));
  return results;
};

// Tests
const add = (a) => (b) => a + b;
const head = (length) => (str) => str.slice(0, length);
const uppercase = (str) => str.toUpperCase();

const firstTwoLetters = map(['alpha', 'beta', 'gamma'], head(2));

assertArraysEqual(map([1, 2, 3], add(3)), [4, 5, 6]);
assertArraysEqual(firstTwoLetters, ['al', 'be', 'ga']);
assertArraysEqual(map(firstTwoLetters, uppercase), ['AL', 'BE', 'GA']);
