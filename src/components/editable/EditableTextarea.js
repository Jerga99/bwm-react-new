
import React from 'react';
import EditableComponent from './EditableComponent';

class EditableTextarea extends EditableComponent {

  renderComponentView = () => {
    const { value, isActiveInput } = this.state;
    const { className, transformView, rows = 5, cols = 50} = this.props; 
    if (isActiveInput) {
      return (
        <>
          <textarea
            onChange={this.handleChange}
            className={`editable-item ${className}`}
            value={value} 
            rows={rows}
            cols={cols} />
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
    const { inline } = this.props;
    return (
      <div className={`editable-component ${inline ? 'editable-component-inline': ''}`}>
        {this.renderComponentView()}
      </div>
    )
  }
}

export default EditableTextarea;