import React, { Component } from "react";
import AdminDrawer from "./AdminDrawer";
import Header from "../../Header/header";
import { connect } from "react-redux";
import { FetchUserDetailsAction } from "../../Actions/AdminActions";
import { FetchCourseByIdAction } from "../../Actions/courseActions";
import { FetchUsercoursesAction } from "../../Actions/orderAction";
import AdminHeader from "./AdminHeader";

class UserDetails extends React.Component {
  componentDidMount() {
    this.props.FetchUserDetailsAction(this.props.match.params.id);
  }
  renderPrice(c) {
    if (c === "0") {
      return (
        <button style={{ float: "right" }} className="ui blue button">
          Free Course
        </button>
      );
    } else {
      return (
        <button style={{ float: "right" }} className="ui green button">
          Cost ${c}
        </button>
      );
    }
  }
  renderCourses() {
    if (this.props.courses) {
      return this.props.courses.map((course) => {
        return (
          <div
            style={{
              boxShadow: "3px 2px 3px 2px",
              padding: "20px",
              margin: "20px",
            }}
          >
            <div class="ui items" style={{ padding: "10px" }}>
              <div class="item">
                <div class="image">
                  <img
                    src={course.courseImageUrl}
                    style={{
                      borderRadius: "100px",
                      height: "150px",
                      width: "150px",
                    }}
                  />
                </div>

                <div class="content">
                  <h2>{course.courseTitle}</h2>
                  <a
                    style={{ float: "right", width: "230px" }}
                    class="ui teal tag label"
                  >
                    Date of Purchase: &nbsp;&nbsp;{course.date}
                  </a>
                  <h5>By:{course.instructorName}</h5>
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
                  </div>
                  {this.renderPrice(course.courseCost)}
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  }
  renderDetails() {
    if (this.props.user) {
      return (
        <div
          className="ui card"
          style={{ boxShadow: "5px 5px 5px", width: "1000px" }}
        >
          <div className="content" style={{ margin: "20px", padding: "20px" }}>
            <div className="page-separator">
              <div className="page-separator__text">User Details</div>
            </div>
            <h3 style={{ margin: "40px" }}>
              User Name: {this.props.user.username}
            </h3>
            <h3 style={{ margin: "40px" }}>
              User Email-Id: {this.props.user.email}{" "}
              <i class="check circle icon" style={{ color: "green" }}></i>
            </h3>
            <h3 style={{ margin: "40px" }}>
              Date Of Joining: {this.props.user.date}
            </h3>
            <h3 style={{ margin: "40px" }}>Age: {this.props.user.age}</h3>
            <h3 style={{ margin: "40px" }}>Gender: {this.props.user.sex}</h3>
            <h3 style={{ margin: "40px" }}>
              Location: {this.props.user.location}
            </h3>
            <h3 style={{ margin: "40px" }}>
              Language : {this.props.user.language}
            </h3>
            <h3 style={{ margin: "40px" }}>
              Field Of Interests :
              <ul>
                <li>{this.props.user.fieldOfIntrest}</li>
              </ul>
            </h3>

            <div className="page-separator">
              <div className="page-separator__text">Courses Purchased</div>
            </div>
            <br />

            <hr />
            <button
              className="ui green button"
              onClick={() => this.onSubmit(this.props.user._id)}
            >
              Show Courses
            </button>

            {this.renderCourses()}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  onSubmit = (p) => {
    console.log(p);
    this.props.FetchUsercoursesAction(p);
  };
  render() {
    console.log(this.props.user);
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
                <h1>Details of User</h1>
                <br />

                {this.renderDetails()}
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
  return { user: state.user.user, courses: state.mycourses.mycourse };
};
export default connect(mapStateToProps, {
  FetchUserDetailsAction,
  FetchUsercoursesAction,
})(UserDetails);
