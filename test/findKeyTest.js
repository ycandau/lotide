const { assert } = require('chai');
const findKey = require('../findKey');

describe('#findKey', () => {
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
    [obj, (obj) => obj.a === 1, 'alpha'],
    [obj, (obj) => obj.a > 2, 'gamma'],
    [obj, (obj) => obj.a > 4, undefined],
    [obj, (obj) => obj.b === 'second', 'beta'],
    [obj, (obj) => obj.b === '', undefined],
  ];

  IOs.forEach((IO) => {
    it(message(IO), () => {
      assert.deepEqual(findKey(...IO.slice(0, -1)), ...IO.slice(-1));
    });
  });
});
