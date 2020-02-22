
import React from 'react';
import { uploadImage } from 'actions';
import './FileLoader.scss';

class FileLoader extends React.Component {

  constructor() {
    super();
    this.fileReader = new FileReader();
    this.selectedImg = null;
    this.state = {
      imgBase64: '',
      imgStatus: 'INIT'
    }
  }

  componentDidMount() {
    this.listenToFileLoading();
  }

  componentWillUnmount() {
    this.removeFileLoadListener();
  }

  handleImageUpload = () => {
    this.changeImageStatus('PENDING');
    uploadImage('askjdn')
      .then(() => {
        this.changeImageStatus('UPLOADED');
      })
      .catch(() => {
        this.changeImageStatus('ERROR');
      })
  }

  handleImageLoad = ({target: {result: imgBase64}}) => {
    this.setState({ imgBase64, imgStatus: 'LOADED' })
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

  changeImageStatus= imgStatus => this.setState({imgStatus})

  render() {
    const { imgBase64, imgStatus } = this.state;
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
              { imgStatus === 'PENDING' &&
                <div className="spinner-container upload-status">
                  Loading...
                </div>
              }
              { imgStatus === 'UPLOADED' &&
                <div className="alert alert-success upload-status">
                  Image has been succesfuly uploaded!
                </div>
              }
              { imgStatus === 'ERROR' &&
                <div className="alert alert-danger upload-status">
                  Image upload failed!
                </div>
              }
            </div>
            { imgStatus === 'LOADED' &&
              <>
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
          </>
        }
      </div>
    )
  }
}

export default FileLoader;