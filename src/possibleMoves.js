export const possibleMoves = (tile) => {
  let columns = [..."ABCDEFGH"];
  let rows = [..."87654321"];
  if (Array.isArray(tile)) {
    let ALL = [];
    tile.forEach((t) => {
      let letter = t[t.length - 1][0];
      let number = t[t.length - 1][2];
      let moves = [];
      moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) - 2]}`);
      moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) - 1]}`);
      moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) - 2]}`);
      moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) - 1]}`);
      moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) + 2]}`);
      moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) + 1]}`);
      moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) + 2]}`);
      moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) + 1]}`);
      moves
        .filter((item) => item.includes("undefined") == false)
        .forEach((move) => {
          ALL.push(t.concat(move));
        });
    });
    return ALL;
  } else {
    let letter = tile[0];
    let number = tile[2];
    let moves = [];
    moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) - 2]}`);
    moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) - 1]}`);
    moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) - 2]}`);
    moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) - 1]}`);
    moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) + 2]}`);
    moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) + 1]}`);
    moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) + 2]}`);
    moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) + 1]}`);
    let returnArray = [];
    moves
      .filter((item) => item.includes("undefined") == false)
      .filter((item) => item.includes(tile[0]) == false)
      .forEach((move) => {
        returnArray.push([tile].concat(move));
      });

    return returnArray;
  }
};
