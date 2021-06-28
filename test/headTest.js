const { assert } = require('chai');
const head = require('../head');

describe('#head', () => {
  const message = (input, output) => {
    inputStr = JSON.stringify(input);
    outputStr = JSON.stringify(output);
    return 'should return ' + outputStr + ' for ' + inputStr;
  };

  const IOPairs = [
    [[], undefined],
    [[1], 1],
    [[1, 2, 3], 1],
    [['a'], 'a'],
    [['a', 'b', 'c'], 'a'],
    [[['1'], 2, 3], ['1']],
    [[{ a: '1' }, 2, 3], { a: '1' }],
    [[null], null],
  ];

  IOPairs.forEach((IOPair) => {
    it(message(...IOPair), () => {
      assert.deepEqual(head(IOPair[0]), IOPair[1]);
    });
  });
});
