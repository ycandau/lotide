const { assert } = require('chai');
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  const message = (input, output) => {
    inputStr = JSON.stringify(input);
    outputStr = JSON.stringify(output);
    return 'should return ' + outputStr + ' for ' + inputStr;
  };

  const IOPairs = [
    ['', {}],
    ['aaa', { a: 3 }],
    ['  a  lpha  ', { a: 2, h: 1, l: 1, p: 1 }],
  ];

  IOPairs.forEach((IOPair) => {
    it(message(...IOPair), () => {
      assert.deepEqual(countLetters(IOPair[0]), IOPair[1]);
    });
  });

  it('should not mutate the input string', () => {
    const input = 'alpha';
    countLetters(input);
    assert.equal(input, 'alpha');
  });
});
