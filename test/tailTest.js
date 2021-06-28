const { assert } = require('chai');
const tail = require('../tail');

describe('#tail', () => {
  const message = (input, output) => {
    inputStr = JSON.stringify(input);
    outputStr = JSON.stringify(output);
    return 'should return ' + outputStr + ' for ' + inputStr;
  };

  const IOPairs = [
    [[], []],
    [[1], []],
    [[1, 2], [2]],
    [
      [1, 2, 3],
      [2, 3],
    ],
    [
      [[1], [2], [3]],
      [[2], [3]],
    ],
    [
      [{ a: 1 }, { b: 2 }, { c: 3 }],
      [{ b: 2 }, { c: 3 }],
    ],
  ];

  IOPairs.forEach((IOPair) => {
    it(message(...IOPair), () => {
      assert.deepEqual(tail(IOPair[0]), IOPair[1]);
    });
  });

  it('should not mutate the input array', () => {
    const input = [1, 2, 3];
    const output = tail(input);
    assert.deepEqual(input, [1, 2, 3]);
    assert.notEqual(input, output);
  });
});
