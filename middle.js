const middle = (array) => {
  const middle = array.length >> 1;
  return array.length <= 2
    ? []
    : array.length & 1 // odd length
    ? [array[middle]]
    : [array[middle - 1], array[middle]];
};

module.exports = middle;
