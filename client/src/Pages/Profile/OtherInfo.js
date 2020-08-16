import React from "react";
import { connect } from "react-redux";
import { FetchInsDetailsAction } from "../../Actions/AdminActions";
import _ from "lodash";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";

class OtherInfo extends React.Component {
  state = {
    newValues: {},
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
  renderFOI(k) {
    console.log(k);
    return k.map((m) => {
      return (
        <>
          <li>{m}</li>
          <br />
          <hr />
        </>
      );
    });
  }

  renderDetails() {
    if (this.props.User) {
      return (
        <form style={{ marginLeft: "100px" }} className="ui form">
          <label className="form-label">
            Date of Birth: {this.props.User.age}
          </label>
          <label className="form-label">Change Date Of Birth</label>
          <br />
          <br />
          <input
            className="form-control form-control-lg"
            defaultValue={this.props.User.age}
            type="date"
            onChange={(e) =>
              this.setState({
                newValues: {
                  ...this.state.newValues,
                  age: e.target.value,
                },
              })
            }
          />
          <br />
          <br />
          <label className="form-label">Gender</label>
          <br />
          <br />
          <input
            className="form-control form-control-lg"
            defaultValue={this.props.User.sex}
            type="text"
            onChange={(e) =>
              this.setState({
                newValues: {
                  ...this.state.newValues,
                  sex: e.target.value,
                },
              })
            }
          />
          <br />
          <br />
          <label className="form-label">Location</label>
          <br />
          <br />
          <input
            className="form-control form-control-lg"
            defaultValue={this.props.User.location}
            onChange={(e) =>
              this.setState({
                newValues: {
                  ...this.state.newValues,
                  location: e.target.value,
                },
              })
            }
          />
          <br />
          <br />

          <label className="form-label">Language</label>
          <br />
          <br />
          <input
            className="form-control form-control-lg"
            defaultValue={this.props.User.language}
            onChange={(e) =>
              this.setState({
                newValues: {
                  ...this.state.newValues,
                  language: e.target.value,
                },
              })
            }
          />
          <br />
          <br />
          <label className="form-label">Field of Interest</label>
          <ul type="circle">
            {this.renderFOI(this.props.User.fieldOfIntrest)}
          </ul>
          <hr />
          <button className="ui green button" onClick={this.onsubmit}>
            Save Changes
          </button>
        </form>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    return (
      <div>
        <div className="page-section">
          <div className="container-fluid page__container">
            <br />
            <h1>Other Informations</h1>
          </div>
        </div>
        <div class="ui two column very relaxed grid">
          <div className="column">{this.renderDetails()}</div>
        </div>
        <br />

        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { Credentials: state.Credentials, User: state.user.user };
};
export default connect(mapStateToProps, { FetchInsDetailsAction })(OtherInfo);
