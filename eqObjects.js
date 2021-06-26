//------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------
// Actual function

const eqObjects = (obj1, obj2) => {
  // Check same number of entries
  const entries1 = Object.entries(obj1);
  if (entries1.length !== Object.keys(obj2).length) return false;

  // Check same entries
  for (const [key, value] of entries1) {
    const equal = Array.isArray(value)
      ? eqArrays
      : typeof value === 'object'
      ? eqObjects
      : (a, b) => a === b; // also handles undefined
    if (!equal(value, obj2[key])) return false;
  }
  return true;
};

//------------------------------------------------------------------------------
// Tests

const a = { a: '1' };
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };
const abc2 = { a: 1, b: '2', c: '3' };

assertEqual(eqObjects({}, ab), false);
assertEqual(eqObjects(ab, {}), false);
assertEqual(eqObjects(ab, a), false);
assertEqual(eqObjects(a, abc), false);
assertEqual(eqObjects(abc, abc2), false);
assertEqual(eqObjects(ab, ba), true);

const de = { d: [1, 2], e: '2' };
const ed = { e: '2', d: [1, 2] };
const fg = { f: '2', g: [] };
const gf = { g: [], f: '2' };
const gf2 = { g: [1], f: '2' };

assertEqual(eqObjects(de, ed), true);
assertEqual(eqObjects(fg, gf), true);
assertEqual(eqObjects(gf, gf2), false);

const h1 = { a: { z: 1 }, b: 2 };
const h2 = { b: 2, a: { z: 1 } };
const h3 = { a: { z: 2 }, b: 2 };
const h4 = { a: { e: 1 }, b: 2 };

const i1 = { a: { z: 1 }, b: 2, c: {} };
const i2 = { b: 2, a: { z: 1 }, c: {} };
const i3 = { b: 2, a: { z: 2 }, c: {} };

assertEqual(eqObjects(h1, h2), true);
assertEqual(eqObjects(h1, h3), false);
assertEqual(eqObjects(h1, h4), false);
assertEqual(eqObjects(i1, i2), true);
assertEqual(eqObjects(i1, i3), false);
