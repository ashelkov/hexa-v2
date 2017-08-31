export function generateField(opts = {}) {
  const options = {
    rows: 37,
    cols: 49,
    colors: 6,
    ...opts,
  };

  const field = [];

  for (let row = 1; row <= options.rows; row += 1) {
    const newRow = [];
    for (let col = (row % 2) ? 1 : 2; col <= options.cols; col += 1) {
      newRow.push(Math.round(Math.random() * (options.colors - 1)));
    }
    field.push(newRow);
  }

  return {
    field,
    options,
  };
}
