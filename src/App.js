
import React from 'react';
import Header from './components/shared/Header';

import RentalHome from './pages/RentalHome';
import Login from './pages/Login';
import Register from './pages/Register';


// Explaining how everyhing works (:
const App = () => {

  const renderPages = () => {
    const { pathname } = window.location;

    switch(pathname) {
      case '/':
        return <RentalHome />;
      case '/login':
        return <Login />;
      case '/register':
        return <Register />;
      default:
        return <RentalHome />;
    }
  }

  return (
    <div>
      <Header />
      { renderPages() }
    </div>
  )
}

export default App;