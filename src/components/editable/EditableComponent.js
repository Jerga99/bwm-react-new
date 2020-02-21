
import React from 'react';


class EditableComponent extends React.Component {

  constructor({entity, field}) {
    super();

    this.state = {
      value: entity[field],
      originValue: entity[field],
      isActiveInput: false
    }
  }

  update = () => {
    const { value, originValue } = this.state;
    const { onUpdate, field } = this.props;

    if (value !== originValue) {
      onUpdate(
        {[field]: value}, 
        () => this.setState({isActiveInput: false, originValue: value}), 
        () => this.setState({isActiveInput: false, value: originValue}))
    }
  }

  activateInput = () => this.setState({isActiveInput: true})

  disableInput = () => 
    this.setState({isActiveInput: false, value: this.state.originValue})

  handleChange = event => {
    this.setState({value: event.target.value})
  }
}

export default EditableComponent;