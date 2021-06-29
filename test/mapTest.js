const { assert } = require('chai');
const map = require('../map');

describe('#map', () => {
  const message = (IO) => {
    IO = IO.map((v) => JSON.stringify(v));
    return `should return ${IO[2]} for (${IO[0]}, ${IO[1]})`;
  };

  const IOs = [
    [[], (x) => x, []],
    [[1, 2, 3], (x) => x * 2, [2, 4, 6]],
    [['a', 'b', 'c'], (str) => str + '1', ['a1', 'b1', 'c1']],
  ];

  IOs.forEach((IO) => {
    it(message(IO), () => {
      assert.deepEqual(map(...IO.slice(0, -1)), ...IO.slice(-1));
    });
  });
});
