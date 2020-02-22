
import React from 'react';
import EditableComponent from './EditableComponent';

class EditableInput extends React.Component {

  render() {
    return (
      <EditableComponent
        {...this.props}
        renderComponent={(value, onChange) => 
          <input
            value={value}
            onChange={onChange}
            className={`editable-item ${this.props.className}`}>
          </input>
        }
      />
    )
  }
}

export default EditableInput;