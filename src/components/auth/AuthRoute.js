

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';


const AuthRoute = ({component: Component, ...rest}) => {
  const authService = useAuth();
  return (
    <Route {...rest} render={(props) => authService.isAuthenticated() ?
       <Component {...rest} {...props}/> : <Redirect to={{pathname: '/login'}} />  } />
  )
}

export default AuthRoute;