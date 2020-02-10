
import React from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  )
}

export default App;