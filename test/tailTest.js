const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail([]).toString(), [].toString());
assertEqual(tail([null]).toString(), [].toString());
assertEqual(tail([1]).toString(), [].toString());
assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail(['a']).toString(), [].toString());
assertEqual(tail(['a', 'b', 'c']).toString(), ['b', 'c'].toString());

const array = ['a', 'b', 'c'];
tail(array);
assertEqual(array.toString(), ['a', 'b', 'c'].toString());
