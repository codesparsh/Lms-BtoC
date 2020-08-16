import React from "react";
import AdminDash from "./AdminDash";
import { connect } from "react-redux";
import { AdminLoginAction } from "../../Actions/actions";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }
  submit = (e) => {
    e.preventDefault();
    const Credentials = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.AdminLoginAction(Credentials, this.props.history);
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h1>Give Your Login Details</h1>
        <label class="form-label" style={{ fontSize: "20px" }}>
          EMAIL_ID
        </label>
        <input
          className="form-control form-control-lg"
          placeholder="E-mail"
          type="email"
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
          autocomplete="off"
          name="email"
        />
        <label class="form-label" style={{ fontSize: "20px" }}>
          PASSWORD
        </label>
        <br />
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="E-mail"
          autocomplete="off"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
          name="password"
        />
        <br />
        <br />
        <button
          style={{ float: "right" }}
          onClick={this.submit}
          className="ui massive green button"
        >
          Login
        </button>
      </div>
    );
  }
}
export default connect(null, { AdminLoginAction })(AdminLogin);
