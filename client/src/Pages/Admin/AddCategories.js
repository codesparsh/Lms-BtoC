import React from "react";
import Header from "../../Header/header";
import AdminDrawer from "./AdminDrawer";
import UploadImageVaishnav from "../../Upload/UploadImageVaishnav";
import UploadImageNew from "../../Upload/UploadImageNew";
import {
  AddSettingsActions,
  AddCategoriesAction,
} from "../../Actions/AdminActions";
import { connect } from "react-redux";
import _ from "lodash";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";
import AdminHeader from "./AdminHeader";

class AddCategories extends React.Component {
  state = {
    Categories: [],
    count: 1,
    SelectedFile: null,
    UploadPercentage: 0,
    presentvideourl: "",
    presentcategory: "",
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = async (event) => {
    event.preventDefault();
    // this.setState({ selectedFile: event.target.files[0] });

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
      },
    };

    // Request made to the backend api
    // Send formData object

    //this.props.UploadVideoAction(formData, options);
    await axios.post("/image/file-upload", formData, options).then((res) => {
      console.log(111111111111111);
      console.log(res);
      this.setState({ presentvideourl: res.data.downloadVideoUrl });

      this.setState({ Uploadpercentage: 100 }, () => {
        setTimeout(() => {
          this.setState({ Uploadpercentage: 0 });
          this.setState({ checked: true });
          this.setState({ value: "yes" });
        }, 1000);
      });
    });
    // if (this.state.UploadPercentage === 0) {
    //   setTimeout(() => {
    //     this.setState({ checked: true });
    //   }, 3000);
    // }

    // this.setState({ checked: true });
    //Here give the backend where to upload the files
  };

  renderform() {
    return (
      <div>
        {_.times(this.state.count, () => (
          <form className="ui form">
            <label className="form-label">Category Name</label>
            <input
              className="form-control form-control-lg"
              placeholder="category name"
              onChange={(e) =>
                this.setState({ presentcategory: e.target.value })
              }
            />
            <br />
            <label className="form-label">Category Image</label>
            <input type="file" name="VideoURL" onChange={this.onFileChange} />

            {this.state.Uploadpercentage > 0 && (
              <ProgressBar
                now={this.state.Uploadpercentage}
                active
                label={`${this.state.Uploadpercentage}%`}
              />
            )}
            <button
              class="btn btn-outline-dark mb-24pt mb-sm-0 "
              onClick={this.onFileUpload}
            >
              Upload!
            </button>
            <br />
            <br />

            <button
              className="ui green button"
              style={{ float: "right" }}
              onClick={this.onsubmit}
            >
              Add this category
            </button>
          </form>
        ))}
      </div>
    );
  }

  onsubmit = (e) => {
    e.preventDefault();
    const a = {
      CategoriesName: this.state.presentcategory,
      CategoriesImage: this.state.presentvideourl,
    };
    // this.setState({ Categories: [...this.state.Categories, a] });
    this.props.AddCategoriesAction(a);
  };
  addmore = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };
  remove = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  };
  AddCategories = (e) => {
    console.log(this.state.Categories);
    this.props.AddCategoriesAction(this.state.Categories);
  };

  render() {
    console.log(this.state);
    return (
      <div className="layout-boxed">
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="mdk-drawer-layout__content page-content">
            <AdminHeader />
            <div className="page-section">
              <div className="container-fluid page__container">
                <br />
                <h1>Add Your Categories</h1>
                <br />
                {this.renderform()}
                <br />
                <hr />
                <hr />
                {/* <button
                  className="ui blue button"
                  onClick={this.addmore}
                  style={{ float: "left" }}
                >
                  Add Another Category
                </button>
                <button
                  className="ui blue button"
                  onClick={this.remove}
                  style={{ float: "right" }}
                >
                  Remove Category
                </button> */}
                <br />
                <br />
                {/* <button
                  className="ui green button"
                  onClick={this.AddCategories}
                >
                  Add all these categories
                </button> */}
              </div>
            </div>
          </div>
          <AdminDrawer />
        </div>
      </div>
    );
  }
}

export default connect(null, { AddCategoriesAction })(AddCategories);
