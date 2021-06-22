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

// Tests
assertEqual('Same', 'Same');
assertEqual('Same', 'Different');
assertEqual(1, 1);
assertEqual(1, 2);
