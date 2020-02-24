
import React from 'react';
import Spinner from 'components/shared/Spinner';
import { uploadImage } from 'actions';
import ImageCrop from './ImageCrop';
import './FileLoader.scss';

class ImageSnippet {
  constructor(src, name, type) {
    this.src = src;
    this.name = name;
    this.type = type;
  }
}

class FileLoader extends React.Component {

  constructor() {
    super();
    this.inputRef = React.createRef();
    this.fileReader = new FileReader();
    this.originalImage = null;
    this.state = {
      croppedImg: null,
      selectedImg: null,
      imgStatus: 'INIT'
    }
  }

  handleImageUpload = () => {
    const { croppedImg } = this.state;
    this.changeImageStatus('PENDING');
    const imageToUpload = blobToFile(croppedImg);
    uploadImage(imageToUpload)
      .then(uploadedImage => {
        this.props.onFileUpload(uploadedImage._id);
        this.changeImageStatus('UPLOADED');
      })
      .catch(() => {
        this.changeImageStatus('ERROR');
      })
  }

  handleImageLoad = image => this.originalImage = image

  handleCropComplete = async crop => {
    if (!this.originalImage) { return; }
    const { selectedImg } = this.state;
    const croppedImg = await getCroppedImg(this.originalImage, crop, selectedImg.name);
    this.setState({croppedImg});
  }

  handleChange = event => {
    const file = event.target.files[0]; 

    this.fileReader.onloadend = (event) => {
      const selectedImg = new ImageSnippet(event.target.result, file.name, file.type);
      this.setState({ selectedImg, imgStatus: 'LOADED' })
    }
    
    this.fileReader.readAsDataURL(file);
  }

  cancelImage = () => {
    this.inputRef.current.value = null;
    this.originalImage = null;
    this.setState({selectedImg: null, croppedImg: null, imgStatus: 'INIT'});
  }

  changeImageStatus= imgStatus => this.setState({imgStatus})

  render() {
    const { selectedImg, imgStatus, croppedImg } = this.state;
    return (
      <div className="img-upload-container">
        <label className="img-upload btn btn-bwm-main">
          <span className="upload-text">Select an image</span>
          <input 
            ref={this.inputRef}
            onChange={this.handleChange}
            accept=".jpg, .png, .jpeg"
            className="fileInput"
            type="file"
            />
        </label>
        { selectedImg &&
          <ImageCrop 
            src={selectedImg.src}
            onCropComplete={this.handleCropComplete}
            onImageLoaded={this.handleImageLoad} />
        }
        { selectedImg &&
          <>
            <div className="img-preview-container mb-2">
              <div className="img-preview">
                <img src={(croppedImg && croppedImg.url) || selectedImg.src} alt=""></img>
              </div>
              { imgStatus === 'PENDING' &&
                <div className="spinner-container upload-status">
                  <Spinner />
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
              <button
                onClick={this.handleImageUpload}
                className="btn btn-success mr-1"
                type="button">
                Upload
              </button>
            }
            <button
              onClick={this.cancelImage}
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

function blobToFile(blob) {
  return new File([blob], blob.name, {type: blob.type});
}

function getCroppedImg(image, crop, fileName) {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height,
  );

  // As Base64 string
  // const base64Image = canvas.toDataURL('image/jpeg');
  // return base64Image;

  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) {
        //reject(new Error('Canvas is empty'));
        reject('Canvas is empty');
        return;
      }
      blob.name = fileName;
      const fileUrl = window.URL.createObjectURL(blob);
      blob.url = fileUrl;
      resolve(blob);
    }, 'image/jpeg');
  });
}