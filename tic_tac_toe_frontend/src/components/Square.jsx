import React, { useCallback } from 'react';

/**
 * Square represents a single cell in the board.
 * Props:
 * - index: number (0..8)
 * - value: 'X' | 'O' | null
 * - onClick: () => void
 * - disabled: boolean
 * - highlight: boolean
 */
function Square({ index, value, onClick, disabled, highlight }) {
  const label = value
    ? `Square ${index + 1}, ${value}`
    : `Square ${index + 1}, empty`;

  const handleKeyDown = useCallback(
    (e) => {
      if (disabled) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    },
    [disabled, onClick]
  );

  return (
    <button
      type="button"
      className={`ttt-square ${highlight ? 'is-winning' : ''}`}
      role="gridcell"
      aria-label={label}
      aria-disabled={disabled ? 'true' : 'false'}
      disabled={disabled}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      data-index={index}
    >
      <span className={`marker ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''}`}>
        {value || ''}
      </span>
    </button>
  );
}

export default Square;
