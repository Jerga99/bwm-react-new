
import React from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { StateContext } from './state-context';
import store from './store';

const App = () => {

  return (
    <StateContext.Provider value={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </StateContext.Provider>
  )
}

export default App;