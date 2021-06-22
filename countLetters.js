// Test assertion functions
const assertEqual = (actual, expected) => {
  const [color, emoji, outcome, operator] =
    actual === expected
      ? ['\x1b[2m\x1b[32m', '  ', 'Passed', '===']
      : ['\x1b[0m\x1b[31m', '\u274c', 'Failed', '!=='];
  console.log(
    color + emoji,
    `Assertion ${outcome}: ${actual} ${operator} ${expected}`
  );
};

// Actual function
const countLetters = (string) => {
  const noSpaces = string.replace(' ', '');
  const counts = {};
  for (const ch of noSpaces) {
    counts[ch] = ch in counts ? counts[ch] + 1 : 1;
  }
  return counts;
};

// Tests
assertEqual(countLetters('').toString(), {}.toString());
assertEqual(countLetters('aaa').toString(), { a: 3 }.toString());
assertEqual(countLetters('a lpha').a, 2);
assertEqual(countLetters('alp  ha').l, 1);
assertEqual(countLetters(' alpha').p, 1);
assertEqual(countLetters('alpha ').h, 1);
assertEqual(countLetters('a lpha')[' '], undefined);
