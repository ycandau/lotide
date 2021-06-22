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

const tail = (array) => array.slice(1);

// Tests
assertEqual(tail([]).toString(), [].toString());
assertEqual(tail([null]).toString(), [].toString());
assertEqual(tail([1]).toString(), [].toString());
assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail(['a']).toString(), [].toString());
assertEqual(tail(['a', 'b', 'c']).toString(), ['b', 'c'].toString());

const array = ['a', 'b', 'c'];
tail(array);
assertEqual(array.toString(), ['a', 'b', 'c'].toString());
