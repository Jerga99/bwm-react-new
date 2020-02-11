
import React from 'react';

export const StateContext = React.createContext({});

const Provider = ({children, store}) => 
  <StateContext.Provider value={store}>{children}</StateContext.Provider>


export default Provider;