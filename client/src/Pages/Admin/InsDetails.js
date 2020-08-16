import React, { Component } from "react";
import AdminDrawer from "./AdminDrawer";
import Header from "../../Header/header";
import { connect } from "react-redux";
import { FetchInsDetailsAction } from "../../Actions/AdminActions";
import { FetchCourseByIdAction } from "../../Actions/courseActions";
import { FetchUsercoursesAction } from "../../Actions/orderAction";
import { FetchInstructorCourseByInstructorId } from "../../Actions/actions";
import AdminHeader from "./AdminHeader";

class InsDetails extends React.Component {
  componentDidMount() {
    this.props.FetchInsDetailsAction(this.props.match.params.id);
  }
  renderPrice(c, p) {
    if (c === "free") {
      return (
        <button style={{ float: "right" }} className="ui blue button">
          Free Course
        </button>
      );
    } else {
      return (
        <button style={{ float: "right" }} className="ui green button">
          Cost ${p}
        </button>
      );
    }
  }
  renderStatus(c) {
    if (c === "accept") {
      return (
        <a style={{ float: "right", width: "150px" }} class="ui teal tag label">
          Status: &nbsp;&nbsp;Accepted
        </a>
      );
    } else if (c === "decline") {
      return (
        <a style={{ float: "right", width: "150px" }} class="ui red tag label">
          Status: &nbsp;&nbsp;Declined
        </a>
      );
    } else {
      return (
        <a style={{ float: "right", width: "150px" }} class="ui  tag label">
          Status: &nbsp;&nbsp;Pending..
        </a>
      );
    }
  }
  renderCourses() {
    console.log(this.props.courses);
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
                    src={course.imageUrl}
                    style={{
                      borderRadius: "100px",
                      height: "150px",
                      width: "150px",
                    }}
                  />
                </div>

                <div class="content">
                  <h2>{course.title}</h2>
                  <a
                    style={{ float: "right", width: "230px" }}
                    class="ui teal tag label"
                  >
                    Date of Publish: &nbsp;&nbsp;{course.date}
                  </a>
                  <br />
                  <br />
                  {this.renderStatus(course.permission)}

                  <h5>By:{course.username}</h5>
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
                  {this.renderPrice(course.feeStructure, course.price)}
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
      console.log(this.props.user[0]);
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
              User Name: {this.props.user[0].username}
            </h3>
            <h3 style={{ margin: "40px" }}>
              User Email-Id: {this.props.user[0].email}{" "}
              <i class="check circle icon" style={{ color: "green" }}></i>
            </h3>
            <h3 style={{ margin: "40px" }}>
              Date Of Joining: {this.props.user[0].date}
            </h3>
            <h3 style={{ margin: "40px" }}>Age: {this.props.user[0].age}</h3>
            <h3 style={{ margin: "40px" }}>Gender: {this.props.user[0].sex}</h3>
            <h3 style={{ margin: "40px" }}>
              Location: {this.props.user[0].location}
            </h3>
            <h3 style={{ margin: "40px" }}>
              Language : {this.props.user[0].language}
            </h3>
            <h3 style={{ margin: "40px" }}>
              Field Of Interests :
              <ul>
                <li>{this.props.user[0].fieldOfIntrest}</li>
              </ul>
            </h3>

            <div className="page-separator">
              <div className="page-separator__text">
                Made the Following Courses
              </div>
            </div>
            <br />

            <hr />
            <button
              className="ui green button"
              onClick={() => this.onSubmit(this.props.user[0]._id)}
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
    this.props.FetchInstructorCourseByInstructorId(p);
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
                <h1>Details of Instructor</h1>
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
  return {
    user: state.Instructor.user,
    courses: state.instructorcourse.instructorcourse,
  };
};
export default connect(mapStateToProps, {
  FetchInsDetailsAction,
  FetchInstructorCourseByInstructorId,
})(InsDetails);
