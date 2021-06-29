# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ycandau/lotide`

**Require it:**

`const _ = require('@ycandau/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(actual, expected)`: Assert that two arrays are equal.
- `assertEqual(actual, expected)`: Assert that two variables are strictly equal.
- `assertObjectsEqual(actual, expected)`: Assert that two objects are equal.
- `countLetters(string)`: Count the letters in a string, ignoring spaces, and return an object with the counts.
- `countOnly(array, itemsToCount)`: Count the elements in an array, given an object with boolean values determining what to count.
- `eqArrays(array1, array2)`: Predicate to test if two arrays are equal.
- `eqObjects(object1, object2)`: Predicate to test if two objects are equal.
- `findKey(object, callback)`: Find the key in an object that satisfies a predicate.
- `findKeyByValue(object, value)`: Find the key in an object that has a given value.
- `flatten(array)`: Flatten an array of arrays.
- `head(array)`: Return the first element of an array.
- `letterPositions(string)`: Given a string, return an object with a key for each included letter, and arrays of indexes as values.
- `map(array, callback)`: Map an array to a new array by applying a callback.
- `middle(array)`: Return the middle of an array (one or two elements based on odd or even lengths).
- `tail(array)`: Return a copy of an array starting from the second element.
- `takeUntil(array)`: Return a copy of an array up until a predicate is satisfied (not inclusive).
- `without(source, itemsToRemove)`: Return a copy of an array with the exclusion of all elements from a second array.
