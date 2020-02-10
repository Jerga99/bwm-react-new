

import React from 'react';

const Router = ({children}) => {
  
  const { pathname } = window.location;
  return children.map(child => {
    const uid = Math.random().toString(32).slice(2);
    return React.cloneElement(child, { pathname, key: uid });
  })
}

const Route = ({children, pathname, path}) => {
  return pathname === path ? children : null;
}

export {
  Router,
  Route
}