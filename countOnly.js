const countOnly = (array, itemsToCount) => {
  const counts = {};
  array.forEach((elem) => {
    if (itemsToCount[elem]) {
      counts[elem] = elem in counts ? counts[elem] + 1 : 1;
    }
  });
  return counts;
};

module.exports = countOnly;
