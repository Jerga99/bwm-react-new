
import React from 'react';
import EditableComponent from './EditableComponent';

class EditableTextarea extends React.Component {

  render() {
    const { className, rows, cols} = this.props;
    return (
      <EditableComponent
        {...this.props}
        renderComponent={(value, onChange) => 
          <textarea
            onChange={onChange}
            className={`editable-item ${className}`}
            value={value} 
            rows={rows}
            cols={cols} 
          />
        }
      />
    )
  }
}

export default EditableTextarea;