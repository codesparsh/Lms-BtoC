import React from "react";
import { connect } from "react-redux";

class AdminProfilePage extends React.Component {
  renderuser() {
    if (this.props.Credentials) {
      return (
        <div>
          <label className="form-label">Email id</label>
          <br />
          <br />
          <input
            className="form-control form-control-lg"
            type="text"
            style={{ width: "600px" }}
            value={this.props.Credentials.email}
          />
          <br />
          <br />

          <br />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    return (
      <div className="page-section">
        <div className="container-fluid page__container">
          <br />
          <h1>Your Profile</h1>
        </div>
        <form style={{ margin: "100px" }}>{this.renderuser()}</form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { Credentials: state.Credentials.user };
};
export default connect(mapStateToProps)(AdminProfilePage);
