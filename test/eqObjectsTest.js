const { assert } = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  const message = (IO) => {
    IO = IO.map((v) => JSON.stringify(v));
    return `should return ${IO[2]} for (${IO[0]}, ${IO[1]})`;
  };

  const IOs = [
    [{}, { a: '1' }, false],
    [{ a: '1' }, {}, false],
    [{ a: '1' }, { a: '1', b: '2' }, false],
    [{ a: '1', b: '2' }, { a: '-1', b: '2' }, false],
    [{ a: '1', b: '2' }, { b: '2', a: '1' }, true],
    [{ d: [1, 2], e: '2' }, { e: '2', d: [1, 2] }, true], //
    [{ f: '2', g: [] }, { g: [], f: '2' }, true], //
    [{ g: [], f: '2' }, { g: [1], f: '2' }, false], //
    [{ a: { z: 1 }, b: 2 }, { b: 2, a: { z: 1 } }, true],
    [{ a: { z: 1 }, b: 2 }, { a: { z: 2 }, b: 2 }, false],
    [{ a: { z: 1 }, b: 2 }, { a: { e: 1 }, b: 2 }, false],
    [{ a: { z: 1 }, b: 2, c: {} }, { b: 2, a: { z: 1 }, c: {} }, true],
    [{ a: { z: 1 }, b: 2, c: {} }, { b: 2, a: { z: 2 }, c: {} }, false],
  ];

  IOs.forEach((IO) => {
    it(message(IO), () => {
      assert.deepEqual(eqObjects(...IO.slice(0, -1)), ...IO.slice(-1));
    });
  });
});
