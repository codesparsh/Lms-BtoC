import axios from "axios";
import { ProgressBar } from "react-bootstrap";
import { connect } from "react-redux";
import React, { Component } from "react";
import { UploadVideoAction } from "../Actions/actions";

class UploadVideo extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    Uploadpercentage: 0,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "image",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    const options = {
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        if (percent < 100) {
          this.setState({ Uploadpercentage: percent });
        }
        if (percent === 100) {
          setTimeout(() => {
            this.setState({ Uploadpercentage: 0 });
          }, 10000);
        }
      },
    };

    // Request made to the backend api
    // Send formData object

    this.props.UploadVideoAction(formData, options);

    //axios.post("/image/file-upload", formData, options).then((res) => {
    //console.log(res);
    // this.setState({ Uploadpercentage: 100 }, () => {
    //   setTimeout(() => {
    //     this.setState({ Uploadpercentage: 0 });
    //   }, 1000);
    // });

    //Here give the backend where to upload the files
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
        </div>
      );
    }
  };

  render() {
    const { Uploadpercentage } = this.state;
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          {Uploadpercentage > 0 && (
            <ProgressBar
              now={Uploadpercentage}
              active
              label={`${Uploadpercentage}%`}
            />
          )}
          <button
            class="btn btn-outline-dark mb-24pt mb-sm-0 "
            onClick={this.onFileUpload}
          >
            Upload!
          </button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { UploadVideoAction })(UploadVideo);
