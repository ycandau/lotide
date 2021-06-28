const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([], []);
assertArraysEqual([], [1, 2]);
assertArraysEqual([1, 2], []);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
