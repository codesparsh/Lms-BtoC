import React from "react";
import { connect } from "react-redux";
import { FetchUsercoursesAction } from "../../Actions/orderAction";
import StudentDrawer from "../../Drawer/StudentDrawer";
import Header from "../../Header/header";
import { Link } from "react-router-dom";

class MyCourses extends React.Component {
  componentDidMount() {
    if (!this.props.Credentials.isAuthenticated) {
      this.props.history.push("/login");
    }

    console.log(this.props.Credentials.user.id);
    this.props.FetchUsercoursesAction(this.props.Credentials.user.id);
  }
  renderMycourses = () => {
    if (this.props.mycourses) {
      console.log(this.props.mycourses[0]);
      return this.props.mycourses.map((course) => {
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
                  src={course.courseImageUrl}
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
                        to={`/student/takelesson/${course.courseId}`}
                      >
                        {course.courseTitle}
                      </Link>
                      <small className="text-50 font-weight-bold mb-4pt">
                        {course.instructorName}
                      </small>
                    </div>
                    <Link
                      to={`/student/takelesson/${course.courseId}`}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  };

  render() {
    console.log(this.props.mycourses);
    return (
      <div className="layout-boxed">
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="mdk-drawer-layout__content page-content">
            <Header />
            <div className="page-section">
              <div className="container-fluid page__container">
                <div
                  className="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <small className="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">
                    Displaying Your Purchased Courses
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
                  <div className="page-separator__text">Purchased Courses</div>
                </div>
                <div className="row card-group-row">
                  {this.renderMycourses()}
                </div>
              </div>
            </div>
          </div>
          <StudentDrawer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    Credentials: state.Credentials,
    mycourses: state.mycourses.mycourse,
  };
};

export default connect(mapStateToProps, { FetchUsercoursesAction })(MyCourses);
