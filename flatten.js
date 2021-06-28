const assertArraysEqual = function (arr1, arr2) {
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

const cat = (arr1, arr2) => {
  arr2.forEach((elem) => arr1.push(elem));
  return arr1;
};

const flatten = (array) => {
  const output = [];
  array.forEach((elem) =>
    Array.isArray(elem) ? cat(output, elem) : output.push(elem)
  );
  return output;
};

// Tests
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([[]]), []);
assertArraysEqual(flatten([[], 1]), [1]);
assertArraysEqual(flatten([[], [1]]), [1]);
assertArraysEqual(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]);

const array = [1, 2, 3, [4]];
flatten(array);
assertArraysEqual(array[3], [4]);

module.exports = flatten;
