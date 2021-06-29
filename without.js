const without = (source, itemsToRemove) => {
  return source.filter((elem) => !itemsToRemove.includes(elem));
};

module.exports = without;
