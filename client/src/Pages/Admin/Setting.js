import React from "react";
import Header from "../../Header/header";
import AdminDrawer from "./AdminDrawer";
import UploadImageVaishnav from "../../Upload/UploadImageVaishnav";
import UploadImageNew from "../../Upload/UploadImageNew";
import { AddSettingsActions } from "../../Actions/AdminActions";
import { connect } from "react-redux";
import AdminHeader from "./AdminHeader";

class Settings extends React.Component {
  state = {
    secret: "",
    siteName: "",
    description: "",
    colorTheme: "",
    contactDetail: "",
    contactemail: "",
    password: "",
  };
  onsubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.AddSettingsActions(this.state);
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
                <h1>Settings</h1>
                <br />
                <form>
                  <label className="form-label">Site Credentials</label>
                  <br />
                  <input
                    className="form-control form-control-lg"
                    placeholder="Your Site Credentials"
                    type="text"
                    onChange={(e) => {
                      this.setState({ secret: e.target.value });
                    }}
                  />
                  <br />
                  <br />
                  <label className="form-label">Site Name</label>
                  <br />
                  <input
                    className="form-control form-control-lg"
                    placeholder="Your Site Name"
                    type="text"
                    onChange={(e) => {
                      this.setState({ siteName: e.target.value });
                    }}
                  />
                  <br />
                  <br />

                  <label className="form-label">Description</label>
                  <br />

                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Description....."
                    type="textarea"
                    rows="10"
                    cols="80"
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  />
                  <br />
                  <br />
                  <hr />
                  <hr />
                  <label className="form-label">Colour Theme</label>
                  <br />
                  <input
                    type="color"
                    id="favcolor"
                    className="form-control form-control-lg"
                    name="favcolor"
                    defaultValue="#ff0000"
                    onChange={(e) =>
                      this.setState({ colorTheme: e.target.value })
                    }
                  />
                  <br />
                  <br />
                  <hr />
                  <hr />
                  <UploadImageVaishnav title="Upload Your Logo" />
                  <br />
                  <br />
                  <hr />
                  <hr />
                  <UploadImageNew title="Upload Your Favicon" />
                  <br />
                  <br />
                  <hr />
                  <hr />
                  <label className="form-label">Contact Info</label>
                  <br />
                  <input
                    className="form-control form-control-lg"
                    placeholder="Your Contact Info"
                    type="number"
                    onChange={(e) =>
                      this.setState({ contactDetail: e.target.value })
                    }
                  />

                  <br />
                  <br />
                  <label className="form-label">Contact Emailid</label>
                  <br />
                  <input
                    className="form-control form-control-lg"
                    placeholder="Your Contact Emailid"
                    type="email"
                    onChange={(e) =>
                      this.setState({ contactemail: e.target.value })
                    }
                  />
                  <br />
                  <br />
                  <label className="form-label">Passord</label>
                  <br />
                  <input
                    className="form-control form-control-lg"
                    placeholder="Your Password"
                    type="password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <br />
                  <br />

                  <button
                    onClick={this.onsubmit}
                    className="ui massive green button"
                    style={{ float: "right" }}
                  >
                    Submit
                  </button>
                  <br />
                  <br />
                  <hr />
                </form>
                <br />
              </div>
            </div>
          </div>

          <AdminDrawer />
        </div>
      </div>
    );
  }
}
export default connect(null, { AddSettingsActions })(Settings);
