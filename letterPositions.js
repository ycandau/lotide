const letterPositions = (string) => {
  const noSpaces = string.replace(' ', '');
  const positions = {};
  for (let i = 0; i < noSpaces.length; i++) {
    const ch = noSpaces[i];
    if (ch in positions) positions[ch].push(i);
    else positions[ch] = [i];
  }
  return positions;
};

module.exports = letterPositions;
