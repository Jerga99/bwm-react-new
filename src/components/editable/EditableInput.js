
import React from 'react';


class EditableInput extends React.Component {

  constructor({entity, field, className}) {
    super();

    this.state = {
      value: entity[field],
      originValue: entity[field],
      isActiveInput: false
    }
  }

  activateInput = () => this.setState({isActiveInput: true})
  disableInput = () => this.setState({isActiveInput: false})

  handleChange = event => {
    this.setState({value: event.target.value})
  }

  renderComponentView = () => {
    const { value, isActiveInput } = this.state;
    const { className } = this.props; 
    if (isActiveInput) {
      return (
        <>
          <input
            onChange={this.handleChange}
            className={className}
            value={value}>
          </input>
          <div className="button-container">
            <button
              onClick={this.disableInput}
              className="btn btn-warning btn-editable">Cancel
            </button>
          </div>
        </>
      )
    }

    return (
      <>
        <span className={className}>{value}</span>
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