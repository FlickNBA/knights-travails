export const initBoard = () => {
  let helperLeft = document.querySelector("#helper-left");
  let helperBottom = document.querySelector("#helper-bottom");
  let board = document.querySelector("#board");

  board.style.width = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.65}px`;
  board.style.height = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.65}px`;
  helperLeft.style.height = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.65}px`;
  helperBottom.style.width = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.65}px`;

  [..."87654321"].forEach((row, rowIndex) => {
    let helper = document.createElement("div");
    helper.classList = `left-${row}`;
    helper.innerHTML = `${row}`;
    helperLeft.append(helper);

    [..."ABCDEFGH"].forEach((column, columnIndex) => {
      let tile = document.createElement("div");
      tile.id = `${column}-${row}`;
      tile.classList = `tile-${row}`;
      board.appendChild(tile);
    });
  });

  [..."ABCDEFGH"].forEach((column) => {
    let helper = document.createElement("div");
    helper.classList = `bottom-${column}`;
    helper.innerHTML = `${column}`;
    helperBottom.append(helper);
  });
};

export const clearBoard = () => {
  document.querySelectorAll("#board > div").forEach((d) => {
    d.innerHTML = "";
    d.classList.remove("highlighted");
  });
};

export const setScore = (score) => {
  document.querySelector("#score").innerHTML = `Moves: ${score}`;
};
