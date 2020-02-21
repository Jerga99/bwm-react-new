
import React from 'react';


class EditableInput extends React.Component {

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

  renderComponentView = () => {
    const { value, isActiveInput } = this.state;
    const { className, transformView} = this.props; 
    if (isActiveInput) {
      return (
        <>
          <input
            onChange={this.handleChange}
            className={`editable-item ${className}`}
            value={value}>
          </input>
          <div className="button-container">
            <button
              onClick={this.update}
              className="btn btn-success btn-editable">Save
            </button>
            <button
              onClick={this.disableInput}
              className="btn btn-danger btn-editable">Cancel
            </button>
          </div>
        </>
      )
    }

    return (
      <>
        <span 
          className={`editable-item ${className}`}>
          { transformView ? transformView(value) : value }
        </span>
        <div className="button-container">
          <button
              onClick={this.activateInput}
              className="btn btn-warning btn-editable">Edit
          </button>
        </div>
      </>
    )
  }

  render() {
    return (
      <div className="editable-component">
        {this.renderComponentView()}
      </div>
    )
  }
}

export default EditableInput;