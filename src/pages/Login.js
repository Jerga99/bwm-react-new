

import React from 'react';
import { StateContext } from '../state-context';

class Login extends React.Component {

  render() {
    return (
      <p>{JSON.stringify(this.context.rentals())}</p>
    )
  }
}

Login.contextType = StateContext;

export default Login;