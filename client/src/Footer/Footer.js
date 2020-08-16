import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FetchSettingAction } from "../Actions/AdminActions";

class Footer extends React.Component {
  componentDidMount() {
    this.props.FetchSettingAction();
  }
  renderContact() {
    if (this.props.Settings) {
      return (
        <div>
          <h4>Contact us at</h4>
          <p>Email id:{this.props.Settings[0].contactEmail}</p>
          <p>Contact Number:{this.props.Settings[0].contactDetail}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  renderLogo() {
    if (this.props.Settings) {
      return (
        <div>
          <p className="text-70 brand mb-24pt">
            <img
              className="brand-icon"
              src={this.props.Settings[0].logo}
              width="30"
              alt="Luma"
            />{" "}
            {this.props.Settings[0].siteName}
          </p>
          <p className="measure-lead-max text-50 small mr-8pt">
            {this.props.Settings[0].description}
          </p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="js-fix-footer2 bg-white border-top-2">
        <div className="container-fluid page__container page-section d-flex flex-column">
          {this.renderLogo()}
          {/* <p className="text-70 brand mb-24pt">
            
            <img
              className="brand-icon"
              src="/assets/images/logo/black-70@2x.png"
              width="30"
              alt="Luma"
            />{" "}
            Luma
          </p> */}
          {/* <p className="measure-lead-max text-50 small mr-8pt">
            Luma is a beautifully crafted user interface for modern Education
            Platforms, including Courses & Tutorials, Video Lessons, Student and
            Teacher Dashboard, Curriculum Management, Earnings and Reporting,
            ERP, HR, CMS, Tasks, Projects, eCommerce and more.
          </p> */}
          {this.renderContact()}

          <p className="mb-8pt d-flex">
            <Link to="" className="text-70 text-underline mr-8pt small">
              Terms
            </Link>
            <Link to="" className="text-70 text-underline small">
              Privacy policy
            </Link>
          </p>
          <p className="text-50 small mt-n1 mb-0">
            Copyright 2019 &copy; All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { Settings: state.settings.settings };
};
export default connect(mapStateToProps, { FetchSettingAction })(Footer);
