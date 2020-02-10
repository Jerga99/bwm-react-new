

import React from 'react';
import connect from '../store/connect';

class Login extends React.Component {

  render() {

    const { rentals } = this.props;

    return (
      <p>{JSON.stringify(rentals())}</p>
    )
  }
}

export default connect(Login);