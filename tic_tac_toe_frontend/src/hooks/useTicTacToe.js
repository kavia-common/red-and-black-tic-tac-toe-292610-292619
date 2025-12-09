import { useCallback, useMemo, useState } from 'react';
import { calculateWinner, isDraw, nextPlayer, LINES } from '../utils/game';

/**
 * useTicTacToe manages tic tac toe game state with history.
 * Returns state and action handlers.
 */
export function useTicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);

  const squares = history[step];

  const currentPlayer = useMemo(() => {
    const xCount = squares.filter((v) => v === 'X').length;
    const oCount = squares.filter((v) => v === 'O').length;
    return nextPlayer(xCount, oCount);
  }, [squares]);

  const { winner, line: winningLine } = useMemo(
    () => calculateWinner(squares),
    [squares]
  );

  const draw = useMemo(() => !winner && isDraw(squares), [winner, squares]);

  const handleSquareClick = useCallback(
    (index) => {
      if (winner || draw) return;
      if (squares[index]) return;

      const next = squares.slice();
      next[index] = currentPlayer;

      // discard future if we've undone
      const newHistory = history.slice(0, step + 1);
      newHistory.push(next);
      setHistory(newHistory);
      setStep(step + 1);
    },
    [winner, draw, squares, currentPlayer, history, step]
  );

  const reset = useCallback(() => {
    setHistory([Array(9).fill(null)]);
    setStep(0);
  }, []);

  const undo = useCallback(() => {
    if (step > 0) {
      setStep(step - 1);
    }
  }, [step]);

  return {
    squares,
    currentPlayer,
    winner,
    isDraw: draw,
    history,
    winningLine,
    handleSquareClick,
    reset,
    undo,
    LINES
  };
}

export default useTicTacToe;
