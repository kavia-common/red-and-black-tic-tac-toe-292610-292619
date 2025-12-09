import React from 'react';

/**
 * Controls provide Reset and Undo actions.
 * Props:
 * - onRestart: () => void
 * - onUndo: () => void
 * - canUndo: boolean
 */
function Controls({ onRestart, onUndo, canUndo }) {
  return (
    <div className="ttt-controls" role="group" aria-label="Game controls">
      <button
        type="button"
        className="btn btn-primary"
        onClick={onRestart}
        aria-label="Restart game"
      >
        Restart
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={onUndo}
        disabled={!canUndo}
        aria-disabled={!canUndo ? 'true' : 'false'}
        aria-label="Undo last move"
      >
        Undo
      </button>
    </div>
  );
}

export default Controls;
