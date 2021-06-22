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

const head = (array) => array[0];

// Tests
assertEqual(head([]), undefined);
assertEqual(head([null]), null);
assertEqual(head([1]), 1);
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(['a']), 'a');
assertEqual(head(['a', 'b', 'c']), 'a');
