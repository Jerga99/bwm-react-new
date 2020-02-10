

import React from 'react';
import { StateContext } from '../state-context';

const connect = (Component) => {
  class Connect extends React.Component {

    render() {
      return <Component {...this.context}></Component>
    }
  }
  Connect.contextType = StateContext;
  return Connect;
}

export default connect;