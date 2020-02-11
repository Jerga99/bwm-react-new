

import React from 'react';
import { StateContext } from './Provider';

const connect = selectState => Component => {
  class Connect extends React.Component {

    render() {
      const { getState, dispatch } = this.context;
      const state = getState();
      const slice = selectState(state);
      return <Component {...slice} dispatch={dispatch}></Component>
    }
  }
  Connect.contextType = StateContext;
  return Connect;
}


export default connect;