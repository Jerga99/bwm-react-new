
import React from 'react';
import { uploadImage } from 'actions';
import './FileLoader.scss';

class FileLoader extends React.Component {

  constructor() {
    super();
    this.fileReader = new FileReader();
    this.selectedImg = null;
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

  handleImageUpload = () => {
    uploadImage(this.selectedImg)
      .then(() => {
        alert('Image Uploaded!');
      })
      .catch(() => {
        alert('Upload Failed!');
      })
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
    this.selectedImg = event.target.files[0];
    this.fileReader.readAsDataURL(this.selectedImg);
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
          <>
            <div className="img-preview-container mb-2">
              <div className="img-preview">
                <img src={imgBase64}></img>
              </div>
            </div>
            <button
              onClick={this.handleImageUpload}
              className="btn btn-success mr-1"
              type="button">
              Upload
            </button>
            <button
              className="btn btn-danger"
              type="button">
              Cancel
            </button>
          </>
        }
      </div>
    )
  }
}

export default FileLoader;