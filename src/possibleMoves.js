export const possibleMoves = (tile) => {
  let columns = [..."ABCDEFGH"];
  let rows = [..."87654321"];

  if (Array.isArray(tile)) {
    console.log(`xDDD ${tile.length}`);
    let ALL = [];
    tile.forEach((t) => {
      console.log(t);
      let letter = t[t.length - 1][0];
      let number = t[t.length - 1][2];
      console.log(`${letter} ${number}`);
      let moves = [];

      //TOP LEFT MOVES

      moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) - 2]}`);
      moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) - 1]}`);

      //   //TOP RIGHT MOVES

      moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) - 2]}`);
      moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) - 1]}`);

      //BOTTOM LEFT MOVES

      moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) + 2]}`);
      moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) + 1]}`);

      //   BOTTOM RIGHT MOVES

      moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) + 2]}`);
      moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) + 1]}`);

      moves
        .filter((item) => item.includes("undefined") == false)
        .filter((item) => item.includes(tile[0][0]) == false)
        .forEach((move) => {
          ALL.push(t.concat(move));
        });
    });
    return ALL;
    // let letter = tile[tile.length - 1][0];
    // let number = tile[tile.length - 1][2];

    // // console.log(`${tile[tile.length - 1]} ${letter} ${number}`);

    // let moves = [];

    // //TOP LEFT MOVES

    // moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) - 2]}`);
    // moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) - 1]}`);

    // //   //TOP RIGHT MOVES

    // moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) - 2]}`);
    // moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) - 1]}`);

    // //BOTTOM LEFT MOVES

    // moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) + 2]}`);
    // moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) + 1]}`);

    // //   BOTTOM RIGHT MOVES

    // moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) + 2]}`);
    // moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) + 1]}`);

    // let returnArray = [];

    // moves
    //   .filter((item) => item.includes("undefined") == false)
    //   .filter((item) => item.includes(tile[0]) == false)
    //   .forEach((move) => {
    //     returnArray.push(tile.concat(move));
    //   });

    // return returnArray;
  } else {
    console.log("xD??");
    let letter = tile[0];
    let number = tile[2];

    let moves = [];

    //TOP LEFT MOVES

    moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) - 2]}`);
    moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) - 1]}`);

    //   //TOP RIGHT MOVES

    moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) - 2]}`);
    moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) - 1]}`);

    //BOTTOM LEFT MOVES

    moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) + 2]}`);
    moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) + 1]}`);

    //   BOTTOM RIGHT MOVES

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
