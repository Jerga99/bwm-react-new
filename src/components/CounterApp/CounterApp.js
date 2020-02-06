
import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  // const stateArray = useState(100);
  // const mySuperValue = stateArray[0];
  // const changeMySuperValue = stateArray[1];
  
  // const increment = (step) => {
  //   setCount(count + step);
  // }

  const increment = (step) => () => setCount(count + step)
  

  return (
    <div>
      <div className="counter-app">
        <h1 className="value">{count}</h1>
        <button onClick={increment(1)}>Increment</button>
        <button onClick={increment(-10)}>Decrement</button>
      </div>
    </div>
  )
}

export default CounterApp;


