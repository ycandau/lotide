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
const findKeyByValue = (object, value) => {
  for (const key in object) {
    if (object[key] === value) return key;
  }
  return undefined;
};

// Tests
const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
  seven: 7,
};

assertEqual(findKeyByValue({}, ''), undefined);
assertEqual(findKeyByValue({}, 'a'), undefined);
assertEqual(findKeyByValue({}, 1), undefined);

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, 7), 'seven');
assertEqual(findKeyByValue(bestTVShowsByGenre, ''), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
