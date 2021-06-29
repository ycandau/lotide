const { assert } = require('chai');
const without = require('../without');

describe('#without', () => {
  const message = (IO) => {
    IO = IO.map((v) => JSON.stringify(v));
    return `should return ${IO[2]} for (${IO[0]}, ${IO[1]})`;
  };

  const IOs = [
    [[1, 2, 3], [], [1, 2, 3]],
    [[], [1, 2, 3], []],
    [[1, 2, 3], [1, 2, '3'], [3]],
    [[1, 2, 3], [1, 2, 3, 4], []],
  ];

  IOs.forEach((IO) => {
    it(message(IO), () => {
      assert.deepEqual(without(...IO.slice(0, -1)), ...IO.slice(-1));
    });
  });
});
