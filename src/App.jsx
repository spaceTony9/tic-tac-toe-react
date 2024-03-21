import React from 'react';
import './App.css';
import { useState } from 'react';

import Square from './components/square.jsx';

export default function App() {
  const [value, setValue] = useState(Array(9).fill(null));
  function handleClick(i) {
    const valueCopy = [...value];
    valueCopy[i] = 'x';
    setValue(valueCopy);
  }
  return (
    <>
      <div className="board-row">
        <Square value={value[0]} onClick={() => handleClick(0)} />
        <Square value={value[1]} onClick={() => handleClick(1)} />
        <Square value={value[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={value[3]} onClick={() => handleClick(3)} />
        <Square value={value[4]} onClick={() => handleClick(4)} />
        <Square value={value[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={value[6]} onClick={() => handleClick(6)} />
        <Square value={value[7]} onClick={() => handleClick(7)} />
        <Square value={value[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
}
