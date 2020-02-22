
import React from 'react';
import './FileLoader.scss';

class FileLoader extends React.Component {

  handleChange = event => {
    debugger
    const file = event.target.files[0];
  }

  render() {
    return (
      <div className="img-upload-container">
        <label className="img-upload btn btn-bwm-main">
          <span className="upload-text">Select an image</span>
          <input 
            onChange={this.handleChange}
            accept=".jpg, .png, .jpeg"
            className="fileInput"
            type="file"
            />
        </label>
      </div>
    )
  }
}

export default FileLoader;