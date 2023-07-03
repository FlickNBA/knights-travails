import { possibleMoves } from "./possibleMoves";

const isWinner = (arr, item) => arr.find((line) => line.includes(item));

export const findPath = (start, goal, moves = []) => {
  if (moves.length == 0) {
    return findPath(start, goal, possibleMoves(start));
  } else {
    return isWinner(moves, goal) != undefined ? isWinner(moves, goal) : findPath(start, goal, possibleMoves(moves));
  }
};
