import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllCourse extends Component {
  state = { video: 0 };
  render() {
    return this.props.allcourses.map((course) => {
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
              <span className="overlay__content align-items-start justify-content-start">
                <span className="overlay__action card-body d-flex align-items-center">
                  <i className="material-icons mr-4pt">play_circle_outline</i>
                  <button
                    className="card-title text-white"
                    onClick={this.setState({ video: 1 })}
                  >
                    Preview
                  </button>
                </span>
              </span>
            </Link>

            <div className="mdk-reveal__content">
              <div className="card-body">
                <div className="d-flex">
                  <div className="flex">
                    <Link className="card-title" to="boxed-student-course.html">
                      {course.title}
                    </Link>
                    <small className="text-50 font-weight-bold mb-4pt">
                      {course.user.username}
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
                      <span className="material-icons">star_border</span>
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
            </div>

            <p className="my-16pt text-black-70">
              Learn the fundamentals of working with Angular and how to create
              basic applications.
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
        </div>
      );
    });
  }
}

export default AllCourse;
