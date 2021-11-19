const transpose = function (matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let col = [];
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i]);
    }
    result.push(col);
  }
  return result;
};

module.exports = transpose;