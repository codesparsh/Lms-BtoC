import React from "react";

class Security extends React.Component {
  render() {
    return (
      <div>
        <div className="page-section">
          <div className="container-fluid page__container">
            <br />
            <h1>Change Your Password</h1>
          </div>
        </div>
        <div class="ui two column very relaxed grid">
          <div className="column">
            <form style={{ marginLeft: "100px" }} className="ui form">
              <label className="form-label">Current Password</label>
              <br />
              <br />
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="enter your current Password"
              />

              <br />
              <br />
              <label className="form-label">New Password</label>
              <br />
              <br />
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="enter your New Password"
              />
              <br />
              <br />
              <button className="ui green button" style={{ float: "right" }}>
                Change Password
              </button>
            </form>
          </div>
        </div>
        <br />

        <br />
        <br />
      </div>
    );
  }
}
export default Security;
