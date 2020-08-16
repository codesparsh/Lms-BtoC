import React from "react";
import Header from "../Header/header";
import Drawer from "../Drawer/drawer";
import { Link } from "react-router-dom";
import { FetchCourseAction } from "../Actions/courseActions";
import { connect } from "react-redux";
import AllCourse from "./AllCourse";
import StudentDrawer from "../Drawer/StudentDrawer";

class Courses extends React.Component {
  constructor() {
    super();
    this.state = { video: false, videoUrl: "" };
    // this.rendercourse = this.rendercourse.bind(this)
  }

  componentDidMount() {
    console.log(1234232434);
    this.props.courses();

    //this.props.course() is key for action creator FetchCourseAction and it will fetch all the courses.
  }

  render() {
    console.log(this.state);
    console.log(this.props.allcourses);
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
                  <div className="page-separator__text">Web Development</div>
                </div>

                <div className="row card-group-row">
                  {/* <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                    <div
                      className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card"
                      data-overlay-onload-show
                      data-popover-onload-show
                      data-force-reveal
                      data-partial-height="44"
                      data-toggle="popover"
                      data-trigger="click"
                    >
                      <Link to="#" className="js-image" data-position="">
                        <img
                          src="assets/images/paths/mailchimp_430x168.png"
                          alt="course"
                        />
                        <span className="overlay__content align-items-start justify-content-start">
                          <span className="overlay__action card-body d-flex align-items-center">
                            <i className="material-icons mr-4pt">
                              play_circle_outline
                            </i>
                            <span className="card-title text-white">
                              Preview
                            </span>
                          </span>
                        </span>
                      </Link>

                      <div className="mdk-reveal__content">
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex">
                              <Link
                                className="card-title"
                                to="boxed-student-course.html"
                              >
                                Newsletter Design
                              </Link>
                              <small className="text-50 font-weight-bold mb-4pt">
                                Elijah Murray
                              </small>
                            </div>
                            <Link
                              to="boxed-student-course.html"
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
                                <span className="material-icons">
                                  star_border
                                </span>
                              </span>
                            </div>
                            <small className="text-50">6 hours</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="popoverContainer d-none">
                      <div className="media">
                        <div className="media-left mr-12pt">
                          <img
                            src="assets/images/paths/mailchimp_40x40@2x.png"
                            width="40"
                            height="40"
                            alt="Angular"
                            className="rounded"
                          />
                        </div>
                        <div className="media-body">
                          <div className="card-title mb-0">
                            Newsletter Design
                          </div>
                          <p className="lh-1 mb-0">
                            <span className="text-black-50 small">with</span>
                            <span className="text-black-50 small font-weight-bold">
                              Elijah Murray
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="my-16pt text-black-70">
                        Learn the fundamentals of working with Angular and how
                        to create basic applications.
                      </p>

                      <div className="mb-16pt">
                        <div className="d-flex align-items-center">
                          <span className="material-icons icon-16pt text-black-50 mr-8pt">
                            check
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>Fundamentals of working with Angular</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons icon-16pt text-black-50 mr-8pt">
                            check
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>Create complete Angular applications</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons icon-16pt text-black-50 mr-8pt">
                            check
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>Working with the Angular CLI</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons icon-16pt text-black-50 mr-8pt">
                            check
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>Understanding Dependency Injection</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons icon-16pt text-black-50 mr-8pt">
                            check
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>Testing with Angular</small>
                          </p>
                        </div>
                      </div>

                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="d-flex align-items-center mb-4pt">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              access_time
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>6 hours</small>
                            </p>
                          </div>
                          <div className="d-flex align-items-center mb-4pt">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              play_circle_outline
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>12 lessons</small>
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              assessment
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>Beginner</small>
                            </p>
                          </div>
                        </div>
                        <div className="col text-right">
                          <Link
                            to="boxed-student-course.html"
                            className="btn btn-primary"
                          >
                            Watch trailer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {this.rendercourse()}

                  {this.renderVideo()}
                </div>
                <div className="page-separator">
                  <div className="page-separator__text">Machine Learning</div>
                </div>

                <div className="row card-group-row">
                  {this.renderMachineLearning()}
                </div>
              </div>
            </div>
          </div>
          <StudentDrawer />
        </div>
      </div>
    );
  }
  renderVideo() {
    if (this.state.video) {
      return (
        <div>
          <video height="200px" width="300px" controls>
            <source src={this.state.videoUrl} type="video/mp4" />
          </video>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  renderMachineLearning() {
    if (this.props.allcourses) {
      console.log(this.props.allcourses[0]);
      return this.props.allcourses.map((course) => {
        if (course.category === "Machine Learning") {
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
                  onClick={(e) => this.setitup(course.videoUrl)}
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
                        to={`/courses-preview/${course._id}`}
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
        } else {
          return <div></div>;
        }
      });
    } else {
      return <div></div>;
    }
  }
  rendercourse() {
    console.log(222222222222);
    console.log(this.props.allcourses);
    if (this.props.allcourses) {
      console.log(this.props.allcourses[0]);
      return this.props.allcourses.map((course) => {
        if (course.category === "web Development") {
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
                  onClick={(e) => this.setitup(course.videoUrl)}
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
                        to={`/courses-preview/${course._id}`}
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
        } else {
          return <div></div>;
        }
      });
    } else {
      return <div></div>;
    }
  }

  setitup = (a) => {
    console.log(a);
    this.setState({ video: !this.state.video });
    this.setState({ videoUrl: a });
  };
}

const mapStateToProps = (state) => {
  return {
    allcourses: Object.values(state.course.courses),
  };
};

export default connect(mapStateToProps, { courses: FetchCourseAction })(
  Courses
);
