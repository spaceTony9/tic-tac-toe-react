import { useState } from 'react';

export default function Square({ onClick, value }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}
