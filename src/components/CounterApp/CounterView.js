
import React, { useEffect } from 'react';

const CounterView = (props) => {
  const { countValue, handleIncrement} = props;

  useEffect(() => {
    console.log('Use Effect from Counter View!');
  })

  return (
    <div>
      <h2 className="value">{countValue}</h2>
      <button onClick={handleIncrement(2)}>Increment</button>
      <button onClick={handleIncrement(-4)}>Decrement</button>
    </div>
  )
}

export default CounterView;