const { assert } = require('chai');
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  const message = (IO) => {
    IO = IO.map((v) => JSON.stringify(v));
    return `should return ${IO[2]} for (${IO[0]}, ${IO[1]})`;
  };

  const obj = {
    alpha: { a: 1, b: 'first' },
    beta: { a: 2, b: 'second' },
    gamma: { a: 3, b: 'third' },
  };

  const IOs = [
    ['', {}],
    ['a', { a: [0] }],
    ['abba', { a: [0, 3], b: [1, 2] }],
  ];

  IOs.forEach((IO) => {
    it(message(IO), () => {
      assert.deepEqual(letterPositions(...IO.slice(0, -1)), ...IO.slice(-1));
    });
  });
});
