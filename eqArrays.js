const eqArrays = (arr1, arr2) => {
  // Check same number of elements
  if (arr1.length !== arr2.length) return false;

  // Check same elements
  for (const index in arr1) {
    const elem = arr1[index];
    const equal = Array.isArray(elem)
      ? eqArrays
      : typeof elem === 'object'
      ? (a, b) => a === b // @todo eqObjects
      : (a, b) => a === b; // also handles undefined
    if (!equal(elem, arr2[index])) return false;
  }
  return true;
};

module.exports = eqArrays;
