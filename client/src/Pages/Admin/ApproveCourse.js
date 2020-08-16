import React from "react";
import { connect } from "react-redux";
import { Credentials } from "aws-sdk";
import { FetchInstructorCourseByInstructorId } from "../../Actions/actions";
//import InsDrawer from "../../Drawer/instructordrawer";
import AdminDrawer from "./AdminDrawer";
import { FetchInsCourseUnderPending } from "../../Actions/AdminActions";
import {
  ApproveCourseAction,
  DeclineCourseAction,
} from "../../Actions/AdminActions";

import Header from "../../Header/header";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";

class ApproveCourse extends React.Component {
  componentDidMount() {
    if (!this.props.id) {
      this.props.history.push("/");
    } else {
      this.props.FetchInsCourseUnderPending(this.props.id);
    }
  }
  renderinscourses() {
    if (this.props.instructorcourse) {
      console.log(this.props.instructorcourse[0]);
      return this.props.instructorcourse.map((course) => {
        console.log(course.permission);
        return (
          <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
            <div
              className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card"
              data-overlay-onload-show
              data-popover-onload-show
              data-force-reveal
              data-partial-height="44"
              data-toggle="popover"
              data-trigger="click"
            >
              <Link
                to="#"
                className="js-image"
                data-position="center"
                data-height="auto"
                data-domfactory-upgraded="img"
              >
                <img
                  src={course.imageUrl}
                  alt="course"
                  style={{
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: "168px",
                  }}
                />
              </Link>

              <div className="mdk-reveal__content">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex">
                      <Link
                        className="card-title"
                        to={`/courses-preview/${course._id}`}
                      >
                        {course.title}
                      </Link>
                      <small className="text-50 font-weight-bold mb-4pt">
                        {course.username}
                      </small>
                    </div>
                    <Link
                      to={`/courses/${course._id}`}
                      data-toggle="tooltip"
                      data-title="Remove Favorite"
                      data-placement="top"
                      data-boundary="window"
                      className="ml-4pt material-icons text-20 card-course__icon-favorite"
                    >
                      favorite
                    </Link>
                  </div>
                  <div className="d-flex">
                    <div className="rating flex">
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star_border</span>
                      </span>
                    </div>
                    <small className="text-50">6 hours</small>
                    <br />
                  </div>
                </div>
                <br />

                <button
                  className="ui green button"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.ApproveCourseAction(course._id);
                  }}
                  style={{ margin: "5px" }}
                >
                  Approve
                </button>

                <button
                  className="ui red button"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.DeclineCourseAction(course._id);
                  }}
                  style={{ float: "right", margin: "5px" }}
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    console.log(this.props.id);
    console.log(this.props.instructorcourse);
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
                <div
                  className="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <small className="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">
                    Displaying 4 out of 10 courses
                  </small>

                  <Link
                    to="#"
                    data-target="#library-drawer"
                    data-toggle="sidebar"
                    className="btn btn-sm btn-white ml-sm-16pt"
                  >
                    <i className="material-icons icon--left">tune</i> Filters
                  </Link>
                </div>
                <div className="page-separator">
                  <div className="page-separator__text">Popular Courses</div>
                </div>
                <div className="row card-group-row">
                  {this.renderinscourses()}
                </div>
              </div>
            </div>
          </div>
          <AdminDrawer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.Credentials.user.id,
    instructorcourse: state.FetchPending.pendingcourses,
  };
};
export default connect(mapStateToProps, {
  FetchInsCourseUnderPending,
  ApproveCourseAction,
  DeclineCourseAction,
})(ApproveCourse);
