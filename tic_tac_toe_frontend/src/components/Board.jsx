import React from 'react';
import Square from './Square';

/**
 * Board renders a 3x3 grid of squares.
 * Props:
 * - squares: array of 9 values 'X' | 'O' | null
 * - onSquareClick: function(index) to handle click
 * - disabled: boolean to lock the board
 * - winningLine: array of indices for winning line to highlight
 */
function Board({ squares, onSquareClick, disabled, winningLine }) {
  const isWinningIndex = (idx) => Array.isArray(winningLine) && winningLine.includes(idx);

  return (
    <div
      className="ttt-board"
      role="grid"
      aria-label="Tic Tac Toe board"
      aria-disabled={disabled ? 'true' : 'false'}
    >
      {squares.map((value, idx) => (
        <Square
          key={idx}
          index={idx}
          value={value}
          onClick={() => !disabled && onSquareClick(idx)}
          disabled={disabled || Boolean(value)}
          highlight={isWinningIndex(idx)}
        />
      ))}
    </div>
  );
}

export default Board;
