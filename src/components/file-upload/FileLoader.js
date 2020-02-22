
import React from 'react';


class FileLoader extends React.Component {

  handleChange = event => {
    debugger
    const file = event.target.files[0];
  }

  render() {
    return (
      <>
        <label className="upload-text">Select an image</label>
        <input 
          onChange={this.handleChange}
          accept=".jpg, .png, .jpeg"
          className="form-control"
          type="file"
          />
      </>
    )
  }
}

export default FileLoader;