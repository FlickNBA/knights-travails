import { placeKnight } from "./placeKnight";
import { findPath } from "./findPath";
import { initBoard, clearBoard, setScore } from "./initBoard";

export const bindButtons = () => {
  document.querySelector("#find").addEventListener("click", function () {
    clearBoard();
    let start = document.querySelector("#start").value;
    let finish = document.querySelector("#finish").value;

    document.querySelector(`#${start}`).classList.add("highlighted");
    document.querySelector(`#${finish}`).classList.add("highlighted");

    placeKnight(start);
    let result = findPath(start, finish);
    result.forEach((r, i) => {
      if (i > 0) document.querySelector(`#${r}`).innerHTML = i;
    });
    setScore(result.length - 1);
  });

  document.querySelector("#random").addEventListener("click", function () {
    clearBoard();
    let columns = [..."ABCDEFGH"];
    let rows = [..."87654321"];
    let RC1 = columns[Math.floor(columns.length * Math.random())];
    let RR1 = rows[Math.floor(rows.length * Math.random())];
    let RC2 = columns[Math.floor(columns.length * Math.random())];
    let RR2 = rows[Math.floor(rows.length * Math.random())];
    document.querySelector("#start").value = `${RC1}-${RR1}`;
    document.querySelector("#finish").value = `${RC2}-${RR2}`;

    document.querySelector(`#${RC1}-${RR1}`).classList.add("highlighted");
    document.querySelector(`#${RC2}-${RR2}`).classList.add("highlighted");

    placeKnight(`${RC1}-${RR1}`);
    let result = findPath(`${RC1}-${RR1}`, `${RC2}-${RR2}`);
    result.forEach((r, i) => {
      if (i > 0) document.querySelector(`#${r}`).innerHTML = i;
    });
    setScore(result.length - 1);
  });
};
