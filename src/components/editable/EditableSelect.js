
import React from 'react';
import EditableComponent from './EditableComponent';

class EditableSelect extends EditableComponent {

  renderOptions = (options) => 
    options.map(option => 
      <option key={option} value={option}>{`${option}`}</option>
    )

  renderComponentView = () => {
    const { value, isActiveInput } = this.state;
    const { className, transformView, options} = this.props; 
    if (isActiveInput) {
      return (
        <>
          <select 
            onChange={this.handleChange}
            className={`editable-item ${className}`}
            value={value}>
          {this.renderOptions(options)}
          </select>
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
          { transformView ? transformView(value) : `${value}` }
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
    const { inline } = this.props;
    return (
      <div className={`editable-component ${inline ? 'editable-component-inline': ''}`}>
        {this.renderComponentView()}
      </div>
    )
  }
}

export default EditableSelect;