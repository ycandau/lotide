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

// Actual function
const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) return key;
  }
  return undefined;
};

// Tests
const obj = {
  alpha: { a: 1, b: 'first' },
  beta: { a: 2, b: 'second' },
  gamma: { a: 3, b: 'third' },
};

const equals = (target) => (elem) => target === elem;
const exceeds = (threshold) => (elem) => elem > threshold;
const isEven = (elem) => !(elem & 1);

const get = (prop) => (obj) => obj[prop];
const pipe = (f1, f2) => (x) => f2(f1(x));

assertEqual(findKey(obj, pipe(get('a'), equals(1))), 'alpha');
assertEqual(findKey(obj, pipe(get('a'), exceeds(2))), 'gamma');
assertEqual(findKey(obj, pipe(get('a'), isEven)), 'beta');
assertEqual(findKey(obj, pipe(get('b'), equals('none'))), undefined);

module.exports = findKey;
