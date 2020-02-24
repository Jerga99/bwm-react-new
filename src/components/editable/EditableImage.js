
import React from 'react';
import EditableComponent from './EditableComponent';
import FileLoader from 'components/file-upload/FileLoader';

const ImageView = ({value, ...rest}) => {
  debugger
  return <img {...rest} src={value}></img>
}

export class EditableImage extends React.Component {

  render() {
    return (
      <EditableComponent
        {...this.props}
        viewComponent={ImageView}
        renderComponent={(value, onChange, onKeyDown) => 
          <FileLoader />
        }
      />
    )
  }
}
