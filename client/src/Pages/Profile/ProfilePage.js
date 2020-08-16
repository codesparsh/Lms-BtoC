import React from "react";
import { connect } from "react-redux";
import { FetchInsDetailsAction } from "../../Actions/AdminActions";
import _ from "lodash";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";

class ProfilePage extends React.Component {
  state = {
    Uploadpercentage: 0,
    SelectedFile: null,
    avatar: "",
    presentcategory: "",
    newValues: {},
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
      this.setState({
        newValues: {
          ...this.state.newValues,
          avatar: res.data.downloadVideoUrl,
        },
      });
      const a = { avatar: res.data.downloadVideoUrl };
      axios.put(`/user/profile/${this.props.Credentials.user.id}`, a);

      this.setState({ Uploadpercentage: 100 }, () => {
        setTimeout(() => {
          this.setState({ Uploadpercentage: 0 });
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
  componentDidMount() {
    if (this.props.Credentials.isAuthenticated) {
      this.props.FetchInsDetailsAction(this.props.Credentials.user.id);
    } else {
      this.props.history.push("/login");
    }
  }
  onsubmit = (e) => {
    e.preventDefault();
    axios.put(
      `/user/profile/${this.props.Credentials.user.id}`,
      this.state.newValues
    );
  };
  renderVerification(email, verified) {
    if (verified) {
      return (
        <i
          class="check circle icon"
          style={{ color: "green", float: "right" }}
        ></i>
      );
    } else {
      const a = { email: email };
      return (
        <div>
          <br />
          <button
            className="ui blue button"
            style={{ float: "right" }}
            onClick={(e) => {
              e.preventDefault();
              axios.put("/user/email-confirmation", a);
            }}
          >
            Verify Your email
          </button>
        </div>
      );
    }
  }
  renderUser() {
    if (this.props.User) {
      return (
        <form style={{ marginLeft: "100px" }} className="ui form">
          <label className="form-label">Name</label>
          <br />
          <br />
          <input
            className="form-control form-control-lg"
            defaultValue={this.props.User.username}
            onChange={(e) =>
              this.setState({
                newValues: {
                  ...this.state.newValues,
                  username: e.target.value,
                },
              })
            }
          />
          <br />
          <br />
          <label className="form-label">Email id</label>
          <br />
          <br />
          <input
            className="form-control form-control-lg"
            defaultValue={this.props.User.email}
            onChange={(e) =>
              this.setState({
                newValues: {
                  ...this.state.newValues,
                  email: e.target.value,
                },
              })
            }
          />
          {this.renderVerification(
            this.props.User.email,
            this.props.User.emailVerified
          )}
          {/* <i
            class="check circle icon"
            style={{ color: "green", float: "right" }}
          ></i> */}
          <br />
          <br />
          <label className="form-label">Profile Pic</label>
          <br />
          <br />
          <input
            className="form-control form-control-lg"
            type="file"
            name="VideoURL"
            onChange={this.onFileChange}
          />
          <br />

          <br />
          <br />
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
          <br />
          <br />
          <label className="form-label">Mobile Number Authentication</label>
          <br />
          <br />
          <input className="form-control form-control-lg" type="number" />
          <br />
          <button style={{ float: "right" }} className="ui blue button">
            Authenticate
          </button>
          <br />
          <br />
          <br />
          <hr />
          <button className="ui green button" onClick={this.onsubmit}>
            Save changes
          </button>
          <br />
          <br />
          <hr />
        </form>
      );
    } else {
      return <div></div>;
    }
  }
  renderInst() {
    if (this.props.User.instructor) {
      return (
        <div>
          <a style={{ marginLeft: "200px" }} class="ui teal tag label">
            Verified Instructor
          </a>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <a style={{ marginLeft: "200px" }} class="ui teal tag label">
            Student
          </a>
        </div>
      );
    }
  }
  renderpic() {
    if (this.props.User) {
      console.log(this.props.User);
      return (
        <div>
          <img
            //src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            src={this.props.User.avatar}
            style={{
              height: "200px",
              width: "200px",
              marginLeft: "100px",
              borderRadius: "100px",
            }}
          />
          <br />
          <br />
          <hr />
          {this.renderInst()}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    console.log(11111111111);
    console.log(this.state);
    console.log(this.props.User);
    return (
      <div>
        <div className="page-section">
          <div className="container-fluid page__container">
            <br />
            <h1>Your Profile</h1>
          </div>
        </div>

        <div class="ui two column very relaxed grid">
          <div className="column">{this.renderUser()}</div>
          <div className="column">{this.renderpic()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { Credentials: state.Credentials, User: state.user.user };
};
export default connect(mapStateToProps, { FetchInsDetailsAction })(ProfilePage);
