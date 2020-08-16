import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { ForgotPasswordAction } from "../Actions/actions"

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: "" }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const data = {
      email: this.state.email
    }
    // const response = axios.put("/user/forgot-password", email)
    // console.log(response)
    this.props.ForgotPasswordAction(data, this.props.history)
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

          <h4 className="m-0">Forgot Password</h4>
          <p className="mb-5">
            An email with password reset instructions
            <br /> has been sent to your email address,
            <br /> if it exists on our system.{" "}
          </p>

          <form onSubmit={this.onSubmit} noValidate>
            <div className="form-group">
              <label className="text-label" for="email_2">
                Email Address:
              </label>
              <div className="input-group input-group-merge">
                <input
                  id="email_2"
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="form-control form-control-prepended"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder="Email"
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
                Send Email
              </button>
              <br />

              <Link className="text-body text-underline" to="/signup">
                Sign up!
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { ForgotPasswordAction })(
  ForgotPassword
)
