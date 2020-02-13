
import React from 'react';
import { loginUser } from 'actions';

const { createContext } = React;

const AuthContext = createContext(null);

export const AuthProvider = (props) => {

  const signIn = (loginData) => {
    debugger
    return loginUser(loginData)
      .then(token => {
        console.log(token);
        return token;
      })
  }

  const authApi = {
    signIn
  }

  return (
    <AuthContext.Provider value={authApi}>
      {props.children}
    </AuthContext.Provider>
  )
}


export const withAuth = Component => props => (
    <AuthContext.Consumer>
      {authApi => <Component {...props} auth={authApi} /> }
    </AuthContext.Consumer>
  )
  

