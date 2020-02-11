

import React from 'react';
import { StateContext } from './Provider';

const connect = selectState => Component => {
  class Connect extends React.Component {

    render() {
      const state = this.context.getState();
      const slice = selectState(state);
      return <Component {...slice}></Component>
    }
  }
  Connect.contextType = StateContext;
  return Connect;
}


export default connect;