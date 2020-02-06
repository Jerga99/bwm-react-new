
import React from 'react';
import './CounterApp.css';

const CounterApp = () => {

  const increment = () => {
    alert('Incrementing!');
  }

  const decrement = () => {
    alert('Decrementing!');
  }

  return (
    <div>
      <div className="counter-app">
        <h1 className="value">0</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default CounterApp;


