const cat = (arr1, arr2) => {
  arr2.forEach((elem) => arr1.push(elem));
  return arr1;
};

const flatten = (array) => {
  const output = [];
  array.forEach((elem) =>
    Array.isArray(elem) ? cat(output, elem) : output.push(elem)
  );
  return output;
};

module.exports = flatten;
