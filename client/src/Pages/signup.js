import React from "react";
import { connect } from "react-redux";
import "../Pages/Modal/modal.css";

import { Link, withRouter } from "react-router-dom";
import { SingupAction } from "../Actions/actions";
import RegForm from "./RegForm/Regform";
import { FetchSettingAction } from "../Actions/AdminActions";

class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = { username: "", email: "", password: "" };
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.Credentials.isAuthenticated) {
      this.props.history.push("/");
    }
    this.props.FetchSettingAction();
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   const newUser = {
  //     username: this.state.username,
  //     email: this.state.email,
  //     password: this.state.password,
  //   };
  //   this.props.SingupAction(newUser, this.props.history);
  // }
  renderLogo() {
    if (this.props.Settings) {
      return (
        <Link
          to="/"
          className="navbar-brand flex-column mb-2 align-items-center mr-0"
          style={{ minWidth: "0" }}
        >
          <span className="avatar avatar-sm navbar-brand-icon mr-0">
            <span className="avatar-title rounded">
              <img
                src={this.props.Settings[0].logo}
                alt="logo"
                className="img-fluid"
              />
            </span>
          </span>
          {this.props.Settings[0].siteName}
        </Link>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    console.log(111);
    console.log(this.props);
    return (
      <div className="layout-default layout-login-image">
        <div
          className="layout-login-image__overlay"
          style={{
            backgroundImage:
              "url(assets/images/photodune-4161018-group-of-students-m.jpg)",
          }}
        >
          <div className="fullbleed bg-dark" style={{ opacity: ".5" }}></div>
        </div>

        <div
          className="layout-login-image__form bg-white"
          data-perfect-scrollbar
        >
          <div className="d-flex justify-content-center mt-2 mb-5 navbar-light">
            {this.renderLogo()}
            {/* <Link
              to="/"
              className="navbar-brand flex-column mb-2 align-items-center mr-0"
              style={{ minWidth: "0" }}
            >
              <span className="avatar avatar-sm navbar-brand-icon mr-0">
                <span className="avatar-title rounded bg-primary">
                  <img
                    src="assets/images/illustration/student/128/white.svg"
                    alt="logo"
                    className="img-fluid"
                  />
                </span>
              </span>
              Luma
            </Link> */}
          </div>

          <h4 className="m-0">Sign up!</h4>
          <p className="mb-5">Create an account with Luma</p>

          <form onSubmit={this.onSubmit} noValidate>
            <div className="form-group">
              <label className="text-label">Name:</label>
              <div className="input-group input-group-merge">
                <input
                  id="name_2"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  className="form-control form-control-prepended"
                  placeholder="John Doe"
                />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="far fa-user"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="text-label">Email Address:</label>
              <div className="input-group input-group-merge">
                <input
                  id="email_2"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  className="form-control form-control-prepended"
                  placeholder="john@doe.com"
                />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="far fa-envelope"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="text-label">Password:</label>
              <div className="input-group input-group-merge">
                <input
                  id="password_2"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  className="form-control form-control-prepended"
                  placeholder="Enter your password"
                />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="far fa-key"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group text-center">
              <button
                id="myBtn"
                className="btn btn-primary mb-2"
                onClick={(e) => e.preventDefault()}
                type="submit"
              >
                Create Account
              </button>

              <div id="myModal" class="modal">
                <div
                  class="modal-content"
                  style={{
                    width: "500px",
                    marginLeft: "500px",
                    height: "400px",
                  }}
                >
                  <span class="close">&times;</span>
                  <RegForm
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    history={this.props.history}
                  />
                </div>
              </div>
              <br />
              <Link className="text-body text-underline" to="/login">
                Have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Credentials: state.Credentials,
  Settings: state.settings.settings,
});

export default connect(mapStateToProps, { SingupAction, FetchSettingAction })(
  withRouter(SignupPage)
);
