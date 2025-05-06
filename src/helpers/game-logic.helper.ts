import { BoardState, Player } from "../@types/globals.types";

export const WINNING_COMBINATIONS = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (board: BoardState): Player | null => {
  for (const combination of WINNING_COMBINATIONS) {
    const [elementA, elementB, elementC] = combination;

    console.log('elementA', elementA);
    console.log('board[elementA]', board[elementA]);

    if (board[elementA] && board[elementA] === board[elementB] && board[elementA] === board[elementC]) {
      return board[elementA]
    }
  }
  return null
}

export const checkDraw = (board: BoardState): boolean => {
  return board.every(Boolean) && !checkWinner(board)
}
