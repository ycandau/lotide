// Test assertion functions
const assertEqual = (actual, expected) => {
  const [color, emoji, outcome, operator] =
    actual === expected
      ? ['\x1b[2m\x1b[32m', '  ', 'Passed', '===']
      : ['\x1b[0m\x1b[31m', '\u274c', 'Failed', '!=='];
  console.log(
    color + emoji + `Assertion ${outcome}: ${actual} ${operator} ${expected}`
  );
};

const eqArrays = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.reduce((same, elem, index) => same && elem === arr2[index], true)
  );
};

const assertArraysEqual = (arr1, arr2) => {
  const [color, emoji, outcome, operator] = eqArrays(arr1, arr2)
    ? ['\x1b[2m\x1b[32m', '  ', 'Passed', '===']
    : ['\x1b[0m\x1b[31m', '\u274c', 'Failed', '!=='];
  console.log(
    color + emoji + `Assertion ${outcome}:`,
    `[${arr1.join(', ')}] ${operator} [${arr2.join(', ')}]`
  );
};

// Actual function
const letterPositions = (string) => {
  const noSpaces = string.replace(' ', '');
  const positions = {};
  for (let i = 0; i < noSpaces.length; i++) {
    const ch = noSpaces[i];
    if (ch in positions) positions[ch].push(i);
    else positions[ch] = [i];
  }
  return positions;
};

// Tests
assertEqual(letterPositions('').a, undefined);
assertEqual(letterPositions('hello').a, undefined);
assertEqual(letterPositions('hello')[' '], undefined);

assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);

module.exports = letterPositions;
