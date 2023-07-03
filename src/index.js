import "./reset.css";
import "./index.css";

import { initBoard } from "./initBoard";
import { placeKnight } from "./placeKnight";
import { possibleMoves } from "./possibleMoves";
import { findPath } from "./findPath";

initBoard();
placeKnight("A-8");
// let D4toH1 = findPath("D-4", "H-1");

// console.log(possibleMoves("A-8"));
// console.log(possibleMoves(possibleMoves("A-8")));
// console.log(possibleMoves(["A-8", "B-6"]));
// console.log(possibleMoves(["A-8", "C-7"]));

let ABC = possibleMoves("A-8");
console.log(ABC);
let DEF = possibleMoves(ABC);
console.log(DEF);
let GHI = possibleMoves(DEF);
console.log(GHI);
