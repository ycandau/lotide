const assertEqual = require('../assertEqual');

assertEqual('Same', 'Same');
assertEqual('Same', 'Different');
assertEqual(1, 1);
assertEqual(1, 2);
