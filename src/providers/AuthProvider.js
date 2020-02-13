
import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from 'actions';
import jwt from 'jsonwebtoken';

const { createContext } = React;

const AuthContext = createContext(null);

const AuthBaseProvider = ({children, dispatch}) => {

  const decodeToken = token => {
    return jwt.decode(token);
  }

  const signIn = (loginData) => {
    return loginUser(loginData)
      .then(token => {
        localStorage.setItem('bwm_token', token);
        const decodedToken = decodeToken(token);
        dispatch({
          type: 'USER_AUTHENTICATED',
          username: decodedToken.username || ''
        })
        return token;
      })
  }

  const authApi = {
    signIn
  }

  return (
    <AuthContext.Provider value={authApi}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthProvider = connect()(AuthBaseProvider);


export const withAuth = Component => props => (
    <AuthContext.Consumer>
      {authApi => <Component {...props} auth={authApi} /> }
    </AuthContext.Consumer>
  )
  

