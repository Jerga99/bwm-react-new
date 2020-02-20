
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

  renderComponentView = () => {
    const { value, isActiveInput } = this.state;
    const { className } = this.props; 
    if (isActiveInput) {
      return (
        <>
          <input
            className={className}
            value={value}>
          </input>
          <button
            onClick={this.disableInput}
            className="btn btn-warning">Cancel
          </button>
        </>
      )
    }

    return (
      <>
        <span className={className}>{value}</span>
        <button
            onClick={this.activateInput}
            className="btn btn-warning">Edit
        </button>
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