import React, { useState } from 'react';
import Game from './Game.jsx';
import './Game.css';

export default function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const [isDraw, setDraw] = useState(false);
  const [isNewGameClicked, setNewGameClicked] = useState(false);
  console.log(history);
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }
  function startNewGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setXIsNext(true);
    setNewGameClicked(true);
  }

  function goToMove(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
  const renderNextMove = history.map((squares, nextMove) => {
    let desc = nextMove > 0 ? 'Go to move #' + nextMove : 'Go to game start';
    return (
      <li key={nextMove}>
        <button onClick={() => goToMove(nextMove)}>{desc}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Game
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          draw={setDraw}
          newGameButtonClicked={setNewGameClicked}
        />
      </div>
      <div>
        {!isNewGameClicked && isDraw && (
          <button onClick={startNewGame}>Start new game</button>
        )}
      </div>
      <div className="game-info">
        <ol>{renderNextMove}</ol>
      </div>
    </div>
  );
}
