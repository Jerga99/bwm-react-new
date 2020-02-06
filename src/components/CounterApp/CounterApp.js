
import React, { useState } from 'react';
import './CounterApp.css';

// const CounterApp = () => {
//   const [count, setCount] = useState(0);

//   // const stateArray = useState(100);
//   // const mySuperValue = stateArray[0];
//   // const changeMySuperValue = stateArray[1];
  
//   // const increment = (step) => {
//   //   setCount(count + step);
//   // }

//   const increment = (step) => () => setCount(count + step)
  

//   return (
    // <div>
    //   <div className="counter-app">
    //     <h1 className="value">{count}</h1>
    //     <button onClick={increment(1)}>Increment</button>
    //     <button onClick={increment(-10)}>Decrement</button>
    //   </div>
    // </div>
//   )
// }


class CounterApp extends React.Component {

  constructor() {
    super();
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
    this.state = {
      count: 99
    }
  }
  
  // state = {
  //   count: 0
  // }

  componentDidMount() {
    alert('Component Did Mount Called');
  }

  componentDidUpdate() {
    alert('Component Did Update Called'); 
  }

  increment = (step) => {
    this.setState({
      count: this.state.count + step
    })
  }

  // Lifecycle function
  render() {
    alert('Render Called'); 
    const { count } = this.state;
    return (
      <div>
        <div className="counter-app">
          <h1 className="value">{count}</h1>
          <button onClick={() => this.increment(1)}>Increment</button>
          <button onClick={() => this.increment(-1)}>Decrement</button>
        </div>
      </div>
    )
  }
}



export default CounterApp;


