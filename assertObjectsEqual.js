const eqObjects = require('./eqObjects');

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  const [color, emoji, outcome, operator] = eqObjects(obj1, obj2)
    ? ['\x1b[2m\x1b[32m', '  ', 'Passed', '===']
    : ['\x1b[0m\x1b[31m', '\u274c', 'Failed', '!=='];
  console.log(
    color + emoji + `Assertion ${outcome}:`,
    `${inspect(obj1)} ${operator} ${inspect(obj2)}`
  );
};

module.exports = assertObjectsEqual;
