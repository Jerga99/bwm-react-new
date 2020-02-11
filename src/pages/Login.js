

import React from 'react';
import connect from '../store/connect';

class Login extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <p>{JSON.stringify(data)}</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data2
  }
}

export default connect(mapStateToProps)(Login);