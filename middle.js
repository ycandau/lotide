// Test assertion functions
const eqArrays = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.reduce((same, elem, index) => same && elem === arr2[index], true)
  );
};

const assertArraysEqual = (actual, expected) => {
  const [color, emoji, outcome, operator] = eqArrays(actual, expected)
    ? ['\x1b[2m\x1b[32m', '  ', 'Passed', '===']
    : ['\x1b[0m\x1b[31m', '\u274c', 'Failed', '!=='];
  console.log(
    color + emoji + `Assertion ${outcome}:`,
    `[${actual.join(', ')}] ${operator} [${expected.join(', ')}]`
  );
};

// Actual function
const middle = (array) => {
  const middle = array.length >> 1;
  return array.length <= 2
    ? []
    : array.length & 1 // odd length
    ? [array[middle]]
    : [array[middle - 1], array[middle]];
};

// Tests
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
