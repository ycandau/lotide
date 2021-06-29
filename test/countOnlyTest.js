const { assert } = require('chai');
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  const message = (IO) => {
    IO = IO.map((v) => JSON.stringify(v));
    return `should return ${IO[2]} for (${IO[0]}, ${IO[1]})`;
  };

  const IOs = [
    [['a', 'b', 'a'], { a: true }, { a: 2 }],
    [['a', 'b', 'a'], { a: false }, {}],
    [['a', 'b', 'a'], { b: true }, { b: 1 }],
    [[], { a: true }, {}],
    [[], { a: false }, {}],
    [['a', 'b', 'a'], {}, {}],
    [[], {}, {}],
  ];

  IOs.forEach((IO) => {
    it(message(IO), () => {
      assert.deepEqual(countOnly(...IO.slice(0, -1)), ...IO.slice(-1));
    });
  });
});
