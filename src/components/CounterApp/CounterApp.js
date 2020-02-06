
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CounterView from './CounterView';
import './CounterApp.css';

const CounterApp = (props) => {
  const [count, setCount] = useState(0);
  const { title } = props;

  useEffect(() => {
    console.log('Calling USE EFFECT');
  }, [])

  const increment = (step) => () => setCount(count + step)
  
  return (
    <div>
      <div className="counter-app">
        <h1>{title}</h1>
        <CounterView 
          countValue={count} 
          handleIncrement={increment}
        />
      </div>
    </div>
  )
}

CounterApp.propTypes = {
  title: PropTypes.string.isRequired
}


// class CounterApp extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       count: 99
//     }
//   }
 
//   increment = (step) => {
//     this.setState({
//       count: this.state.count + step
//     })
//   }

//   // Lifecycle function
//   render() {
//     const { count } = this.state;
//     const { title } = this.props;
//     return (
//       <div>
//         <div className="counter-app">
//           <h1>{title}</h1>
//           <h2 className="value">{count}</h2>
//           <button onClick={() => this.increment(1)}>Increment</button>
//           <button onClick={() => this.increment(-1)}>Decrement</button>
//         </div>
//       </div>
//     )
//   }
// }

export default CounterApp;


