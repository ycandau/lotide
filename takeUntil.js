const takeUntil = function (array, callback) {
  const results = [];
  for (const elem of array) {
    if (callback(elem)) break;
    results.push(elem);
  }
  return results;
};

module.exports = takeUntil;
