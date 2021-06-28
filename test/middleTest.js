const { assert } = require('chai');
const middle = require('../middle');

describe('#middle', () => {
  const message = (input, output) => {
    inputStr = JSON.stringify(input);
    outputStr = JSON.stringify(output);
    return 'should return ' + outputStr + ' for ' + inputStr;
  };

  const IOPairs = [
    [[], []],
    [[1], []],
    [[1, 2], []],
    [[1, 2, 3], [2]],
    [
      [1, 2, 3, 4],
      [2, 3],
    ],
    [[[1], [2], [3]], [[2]]],
    [[{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }]],
  ];

  IOPairs.forEach((IOPair) => {
    it(message(...IOPair), () => {
      assert.deepEqual(middle(IOPair[0]), IOPair[1]);
    });
  });

  it('should not mutate the input array', () => {
    const input = [1, 2, 3];
    const output = middle(input);
    assert.deepEqual(input, [1, 2, 3]);
    assert.notEqual(input, output);
  });
});
