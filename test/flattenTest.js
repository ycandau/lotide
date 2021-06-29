const { assert } = require('chai');
const flatten = require('../flatten');

describe('#flatten', () => {
  const message = (IO) => {
    IO = IO.map((v) => JSON.stringify(v));
    return `should return ${IO[1]} for ${IO[0]}`;
  };

  const IOs = [
    [[], []],
    [[[]], []],
    [[[], 1], [1]],
    [[[], [1]], [1]],
    [
      [1, 2, 3, [4, 5]],
      [1, 2, 3, 4, 5],
    ],
  ];

  IOs.forEach((IO) => {
    it(message(IO), () => {
      assert.deepEqual(flatten(...IO.slice(0, -1)), ...IO.slice(-1));
    });
  });

  it('should not mutate the input array', () => {
    const input = [1, 2, 3];
    const output = flatten(input);
    assert.deepEqual(input, [1, 2, 3]);
    assert.notEqual(input, output);
  });
});
