import React from 'react';
import './App.css';
import './index.css';
import Board from './components/Board';
import StatusBar from './components/StatusBar';
import Controls from './components/Controls';
import { useTicTacToe } from './hooks/useTicTacToe';
import config from './config';

// PUBLIC_INTERFACE
function App() {
  /**
   * Root component rendering the Tic Tac Toe experience.
   * Includes title, game board, status, controls, and optional dev-only footer.
   */
  const {
    squares,
    currentPlayer,
    winner,
    isDraw,
    winningLine,
    history,
    handleSquareClick,
    reset,
    undo
  } = useTicTacToe();

  const showConfig = (config.featureFlags || []).includes('showConfig');
  const showDevFooter = config.nodeEnv === 'development' || showConfig;

  return (
    <div className="ttt-app" role="application" aria-label="Tic Tac Toe Game">
      <header className="ttt-header">
        <h1 className="ttt-title">Tic Tac Toe</h1>
      </header>

      <main className="ttt-main">
        <StatusBar
          currentPlayer={currentPlayer}
          winner={winner}
          isDraw={isDraw}
        />
        <Board
          squares={squares}
          onSquareClick={handleSquareClick}
          disabled={Boolean(winner) || isDraw}
          winningLine={winningLine}
        />
        <Controls
          onRestart={reset}
          onUndo={undo}
          canUndo={history.length > 1}
        />
      </main>

      {showDevFooter && (
        <footer className="ttt-footer" aria-live="polite">
          <div className="dev-indicator">
            <span className="badge">DEV</span>
            <span className="kv">env: <strong>{config.nodeEnv || 'unset'}</strong></span>
            <span className="kv">base: <strong>{config.frontendUrl || window.location.origin}</strong></span>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
