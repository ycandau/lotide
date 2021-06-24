// Helper functions
const eqArrays = (arr1, arr2) => {
  return (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length === arr2.length &&
    arr1.reduce((same, elem, index) => same && elem === arr2[index], true)
  );
};

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (const key in obj1) {
    const [v1, v2] = [obj1[key], obj2[key]];
    if (v2 === undefined || (v1 !== v2 && !eqArrays(v1, v2))) return false;
  }
  return true;
};

// Actual function
const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  const [color, emoji, outcome, operator] = eqObjects(obj1, obj2)
    ? ['\x1b[2m\x1b[32m', '  ', 'Passed', '===']
    : ['\x1b[0m\x1b[31m', '\u274c', 'Failed', '!=='];

  console.log(
    color + emoji + `Assertion ${outcome}:`,
    `${inspect(obj1)} ${operator} ${inspect(obj2)}`
  );
};

// Tests
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };
const de = { d: [1, 2], e: '2' };
const ed = { e: '2', d: [1, 2] };

assertObjectsEqual(ab, ba);
assertObjectsEqual(de, ed);
assertObjectsEqual(ab, abc);
assertObjectsEqual(ab, {});
