'use client'

import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1 className="text-6xl">{number}</h1>
      <button className="text-6xl" onClick={onIncrease}>+1</button>
      <button className="text-6xl" onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;