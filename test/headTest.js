const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([]), undefined);
assertEqual(head([null]), null);
assertEqual(head([1]), 1);
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(['a']), 'a');
assertEqual(head(['a', 'b', 'c']), 'a');
