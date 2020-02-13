
import React from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { AuthProvider } from 'providers/AuthProvider';
import { initStore } from './store';

const store = initStore();
const App = () => {

  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Header />
          <Routes />
        </Router>
      </AuthProvider>
    </Provider>
  )
}

export default App;