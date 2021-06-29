const countLetters = (string) => {
  const noSpaces = string.replace(/ /g, '');
  const counts = {};
  for (const ch of noSpaces) {
    counts[ch] = ch in counts ? counts[ch] + 1 : 1;
  }
  return counts;
};

module.exports = countLetters;
