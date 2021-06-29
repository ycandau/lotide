const { assert } = require('chai');
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  const message = (IO) => {
    IO = IO.map((v) => JSON.stringify(v));
    return `should return ${IO[2]} for (${IO[0]}, ${IO[1]})`;
  };

  const IOs = [
    [[], [], true],
    [[], [1, 2], false],
    [[1, 2], [], false],
    [[1, 2], [1, 2, 3], false],
    [[1, 2, 3], [1, 2], false],
    [[1, 2, 3], [1, 2, '3'], false],
    [[1, 2, 3], [1, 2, 3], true],
    [[[2, 3], [4]], [[2, 3], [4]], true],
    [[[2, 3], [[[4]]]], [[2, 3], [[[4]]]], true],
    [[[2, 3], [[[]]]], [[2, 3], [[[]]]], true],
    [
      [[2, 3], [4]],
      [
        [2, 3],
        [4, 5],
      ],
      false,
    ],
    [[[2, 3], [4]], [[2, 3], 4], false],
  ];

  IOs.forEach((IO) => {
    it(message(IO), () => {
      assert.deepEqual(eqArrays(...IO.slice(0, -1)), ...IO.slice(-1));
    });
  });
});
