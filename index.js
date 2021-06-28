const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without,
};

// const functionNames = [
// 'assertArraysEqual.js',
// 'assertEqual.js',
// 'assertObjectsEqual.js',
// 'countLetters.js',
// 'countOnly.js',
// 'eqArrays.js',
// 'eqObjects.js',
// 'findKey.js',
// 'findKeyByValue.js',
// 'flatten.js',
// 'head.js',
// 'letterPositions.js',
// 'map.js',
// 'middle.js',
// 'tail.js',
// 'takeUntil.js',
// 'without.js',
// ];
//
// const allFunctions = functionNames.reduce((exp, func) => {
// exp[func] = require('./' + func);
// return exp;
// }, {});
