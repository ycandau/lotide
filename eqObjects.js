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

// Helper functions
const eqArrays = (arr1, arr2) => {
  return (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length === arr2.length &&
    arr1.reduce((same, elem, index) => same && elem === arr2[index], true)
  );
};

// Actual function
const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (const key in obj1) {
    const [v1, v2] = [obj1[key], obj2[key]];
    if (v2 === undefined || (v1 !== v2 && !eqArrays(v1, v2))) return false;
  }
  return true;
};

// Tests
const a = { a: '1' };
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };
const abc2 = { a: 1, b: '2', c: '3' };
const de = { d: [1, 2], e: '2' };
const ed = { e: '2', d: [1, 2] };
const fg = { f: '2', g: [] };
const gf = { g: [], f: '2' };
const gf2 = { g: [1], f: '2' };

assertEqual(eqObjects({}, ab), false);
assertEqual(eqObjects(ab, {}), false);
assertEqual(eqObjects(ab, a), false);
assertEqual(eqObjects(a, abc), false);
assertEqual(eqObjects(abc, abc2), false);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(de, ed), true);
assertEqual(eqObjects(fg, gf), true);
assertEqual(eqObjects(gf, gf2), false);
