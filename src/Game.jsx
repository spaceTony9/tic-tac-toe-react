import React from 'react';
import './Game.css';
import { useState } from 'react';

import Square from './components/square.jsx';
import NextMoveMessage from './components/NextMoveMessage.jsx';

export default function Game({
  xIsNext,
  squares,
  onPlay,
  draw,
  newGameButtonClicked,
}) {
  const currentLetter = xIsNext ? 'X' : 'O';
  const winner = calculateWinner(squares);
  let message = null;
  if (winner === 'draw') {
    message = "It's a Draw";
    draw(true);
    newGameButtonClicked(false);
  } else if (winner) {
    message = 'Winner:' + winner;
  } else {
    message = 'Next move:' + currentLetter;
  }
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const valueCopy = [...squares];
    valueCopy[i] = currentLetter;
    onPlay(valueCopy);
  }

  return (
    <>
      <NextMoveMessage message={message} />
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  // Check for a draw
  if (!squares.includes(null)) {
    return 'draw';
  }

  return null;
}
