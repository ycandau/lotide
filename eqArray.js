//------------------------------------------------------------------------------
// Test assertion functions

const assertEqual = function (actual, expected) {
  const [color, emoji, outcome, operator] =
    actual === expected
      ? ['\x1b[2m\x1b[32m', '  ', 'Passed', '===']
      : ['\x1b[0m\x1b[31m', '\u274c', 'Failed', '!=='];

  console.log(
    color + emoji,
    `Assertion ${outcome}: ${actual} ${operator} ${expected}`
  );
};

//------------------------------------------------------------------------------
// Actual function

const eqArrays = (arr1, arr2) => {
  // Check same number of elements
  if (arr1.length !== arr2.length) return false;

  // Check same elements
  for (const index in arr1) {
    const elem = arr1[index];
    const equal = Array.isArray(elem)
      ? eqArrays
      : typeof elem === 'object'
      ? (a, b) => a === b // @todo eqObjects
      : (a, b) => a === b; // also handles undefined
    if (!equal(elem, arr2[index])) return false;
  }
  return true;
};

//------------------------------------------------------------------------------
// Tests

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1, 2]), false);
assertEqual(eqArrays([1, 2], []), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [[[4]]]], [[2, 3], [[[4]]]]), true);
assertEqual(eqArrays([[2, 3], [[[]]]], [[2, 3], [[[]]]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
