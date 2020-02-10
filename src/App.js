
import React from 'react';
import Header from './components/shared/Header';

import { Router, Route } from './components/Bwm-Router';

import RentalHome from './pages/RentalHome';
import Login from './pages/Login';
import Register from './pages/Register';


// Explaining how everyhing works (:
const App = () => {

  return (
    <div>
      <Router>
        <Header />
        <Route path="/">
          <RentalHome />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Router>
    </div>
  )
}

export default App;