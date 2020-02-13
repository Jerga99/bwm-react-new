
import React from 'react';
import { connect } from 'react-redux';
import { loginUser, userAuthenticated } from 'actions';
import jwt from 'jsonwebtoken';
import moment from 'moment';

const { createContext, useContext } = React;

const AuthContext = createContext(null);

const AuthBaseProvider = ({children, dispatch}) => {

  const checkAuthState = () => {
    const decodedToken = decodeToken(getToken());
    if (decodedToken && moment().isBefore(getExpiration(decodedToken))) {
      dispatch(userAuthenticated(decodedToken))
    }
  }

  const getExpiration = (decodedToken) => {
    return moment.unix(decodedToken.exp);
  }

  const getToken = () => {
    return localStorage.getItem('bwm_token');
  }

  const decodeToken = token => {
    return jwt.decode(token);
  }

  const signIn = (loginData) => {
    return loginUser(loginData)
      .then(token => {
        localStorage.setItem('bwm_token', token);
        const decodedToken = decodeToken(token);
        dispatch(userAuthenticated(decodedToken))
        return token;
      })
  }

  const authApi = {
    signIn,
    checkAuthState
  }

  return (
    <AuthContext.Provider value={authApi}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthProvider = connect()(AuthBaseProvider);

export const useAuth = () => {
  return useContext(AuthContext);
}

export const withAuth = Component => props => (
  <AuthContext.Consumer>
    {authApi => <Component {...props} auth={authApi} /> }
  </AuthContext.Consumer>
)
  

