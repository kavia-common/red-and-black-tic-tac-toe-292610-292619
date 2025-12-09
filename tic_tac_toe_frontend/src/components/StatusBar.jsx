import React from 'react';

/**
 * StatusBar displays current game status:
 * - Next player
 * - Winner
 * - Draw
 */
function StatusBar({ currentPlayer, winner, isDraw }) {
  let text = '';
  if (winner) {
    text = `Winner: ${winner}`;
  } else if (isDraw) {
    text = 'Draw game!';
  } else {
    text = `Next: ${currentPlayer}`;
  }

  return (
    <div className="ttt-status" role="status" aria-live="polite">
      <span className={`status-chip ${winner ? 'winner' : isDraw ? 'draw' : 'next'}`}>
        {text}
      </span>
    </div>
  );
}

export default StatusBar;
