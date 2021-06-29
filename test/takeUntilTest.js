const { assert } = require('chai');
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  const message = (IO) => {
    IO = IO.map((v) => JSON.stringify(v));
    return `should return ${IO[2]} for (${IO[0]}, ${IO[1]})`;
  };

  const IOs = [
    [[], (x) => x === 0, []],
    [[1, 2, 3], (x) => x === 0, [1, 2, 3]],
    [[1, 2, 3], (x) => x === 1, []],
    [[1, 2, 3], (x) => x === 2, [1]],
  ];

  IOs.forEach((IO) => {
    it(message(IO), () => {
      assert.deepEqual(takeUntil(...IO.slice(0, -1)), ...IO.slice(-1));
    });
  });
});
