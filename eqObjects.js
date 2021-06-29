const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {
  // Check same number of entries
  const entries1 = Object.entries(obj1);
  if (entries1.length !== Object.keys(obj2).length) return false;

  // Check same entries
  for (const [key, value] of entries1) {
    const equal = Array.isArray(value)
      ? eqArrays
      : typeof value === 'object'
      ? eqObjects
      : (a, b) => a === b; // also handles undefined
    if (!equal(value, obj2[key])) return false;
  }
  return true;
};

module.exports = eqObjects;
