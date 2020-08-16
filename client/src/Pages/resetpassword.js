import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { ResetPasswordAction } from "../Actions/actions"

class ResetPassword extends React.Component {
  constructor() {
    super()
    this.state = { newPassword: "" }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const token = this.props.match.params.id
    const newPassword = {
      newPassword: this.state.newPassword
    }

    this.props.ResetPasswordAction(newPassword, token, this.props.history)
  }

  render() {
    return (
      <div className="layout-default layout-login-image">
        <div
          className="layout-login-image__overlay"
          style={{
            backgroundImage:
              "url(assets/images/1280_15ntkpxqt54y-sai-kiran-anagani.jpg)"
          }}
        >
          <div className="fullbleed bg-dark" style={{ opacity: ".5" }}></div>
        </div>

        <div
          className="layout-login-image__form bg-white"
          data-perfect-scrollbar
        >
          <div className="d-flex justify-content-center mt-2 mb-5 navbar-light">
            <Link
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
            </Link>
          </div>

          <h4 className="m-0">Change Password</h4>
          <br />
          <br />

          <form onSubmit={this.onSubmit} noValidate>
            <div className="form-group">
              <label className="text-label" for="email_2">
                New Password
              </label>
              <div className="input-group input-group-merge">
                <input
                  id="password_2"
                  type="password"
                  name="newPassword"
                  value={this.state.newPassword}
                  onChange={this.onChange}
                  className="form-control form-control-prepended"
                  placeholder="Enter your new password"
                />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="far fa-envelope"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group text-center">
              <button className="btn btn-primary mb-5" type="submit">
                Reset Password
              </button>
              <br />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
}

export default connect(mapStateToProps, { ResetPasswordAction })(ResetPassword)
