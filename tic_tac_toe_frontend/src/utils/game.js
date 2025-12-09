export const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // cols
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

/**
 * PUBLIC_INTERFACE
 * calculateWinner determines if a player has won on the board.
 * @param {Array<('X'|'O'|null)>} squares - current board
 * @returns {{winner: 'X'|'O'|null, line: number[]|null}}
 */
export function calculateWinner(squares) {
  for (const [a, b, c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: null };
}

/**
 * PUBLIC_INTERFACE
 * isDraw returns true if all squares filled and no winner
 * @param {Array<('X'|'O'|null)>} squares
 * @returns {boolean}
 */
export function isDraw(squares) {
  return squares.every(Boolean) && !calculateWinner(squares).winner;
}

/**
 * PUBLIC_INTERFACE
 * nextPlayer calculates next mark based on counts
 * @param {number} xCount
 * @param {number} oCount
 * @returns {'X'|'O'}
 */
export function nextPlayer(xCount, oCount) {
  return xCount === oCount ? 'X' : 'O';
}
