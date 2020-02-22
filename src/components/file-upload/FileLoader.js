
import React from 'react';
import './FileLoader.scss';

class FileLoader extends React.Component {

  constructor() {
    super();
    this.fileReader = new FileReader();
    this.state = {
      imgBase64: ''
    }
  }

  componentDidMount() {
    this.listenToFileLoading();
  }

  componentWillUnmount() {
    this.removeFileLoadListener();
  }

  handleImageLoad = ({target: {result: imgBase64}}) => {
    this.setState({ imgBase64 })
  }

  listenToFileLoading = () => {
    this.fileReader.addEventListener('load', this.handleImageLoad);
  }

  removeFileLoadListener = () => {
    this.fileReader.removeEventListener('load', this.handleImageLoad);
  }

  handleChange = event => {
    const file = event.target.files[0];
    this.fileReader.readAsDataURL(file);
  }

  render() {
    const { imgBase64 } = this.state;
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
        { imgBase64 &&
          <img src={imgBase64}></img>
        }
      </div>
    )
  }
}

export default FileLoader;