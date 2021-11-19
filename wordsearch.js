const transpose = require("./transpose");

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const transposeArr = transpose(letters);
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of transposeArr) {
    if (l.join("").includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
