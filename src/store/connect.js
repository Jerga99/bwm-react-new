

import React from 'react';
import { StateContext } from '../state-context';

const connect = selectState => Component => {
  class Connect extends React.Component {

    render() {
      const slice = selectState(this.context);
      return <Component {...slice}></Component>
    }
  }
  Connect.contextType = StateContext;
  return Connect;
}


export default connect;