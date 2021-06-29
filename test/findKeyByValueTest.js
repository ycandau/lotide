const { assert } = require('chai');
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  const message = (IO) => {
    IO = IO.map((v) => JSON.stringify(v));
    return `should return ${IO[2]} for (${IO[0]}, ${IO[1]})`;
  };

  const IOs = [
    [{}, '', undefined],
    [{}, 'a', undefined],
    [{}, 1, undefined],
    [{ a: 1, b: 2, c: 'x' }, 1, 'a'],
    [{ a: 1, b: 2, c: 'x' }, 'x', 'c'],
    [{ a: 1, b: 2, c: 'x' }, '', undefined],
    [{ a: 1, b: 2, c: 'x' }, 'z', undefined],
  ];

  IOs.forEach((IO) => {
    it(message(IO), () => {
      assert.deepEqual(findKeyByValue(...IO.slice(0, -1)), ...IO.slice(-1));
    });
  });
});
