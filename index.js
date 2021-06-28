const functionNames = [
  'assertArraysEqual.js',
  'assertEqual.js',
  'assertObjectsEqual.js',
  'countLetters.js',
  'countOnly.js',
  'eqArrays.js',
  'eqObjects.js',
  'findKey.js',
  'findKeyByValue.js',
  'flatten.js',
  'head.js',
  'letterPositions.js',
  'map.js',
  'middle.js',
  'tail.js',
  'takeUntil.js',
  'without.js',
];

const allFunctions = functionNames.reduce((exp, func) => {
  exp[func] = require('./' + func);
  return exp;
}, {});

module.exports = allFunctions;
