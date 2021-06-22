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

const without = (source, itemsToRemove) => {
  return source.filter((elem) => !itemsToRemove.includes(elem));
};

// Tests
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, 3], [1, 2, '3']), [3]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3, 4]), []);

const arr = [1, 2, 3];
without([1, 2, 3], [1, 2, 3]);
assertArraysEqual(arr, [1, 2, 3]);
