import React from "react";
import { connect } from "react-redux";
import { FetchCourseByIdAction } from "../../Actions/courseActions";
import StudentDrawer from "../../Drawer/StudentDrawer";
import Header from "../../Header/header";
import { Link } from "react-router-dom";
import Drawer from "../../Drawer/drawer";
class CoursePreview extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.FetchCourseByIdAction(this.props.match.params.id);
    console.log(this.props);
  }

  renderSections() {
    return this.props.presentcourse.sections.map((section) => {
      return (
        <div className="item" key={section._id}>
          <div className="card mb-0">
            <ul class="accordion accordion--boxed js-accordion mb-0" id="toc-2">
              <li class="accordion__item">
                <a
                  class="accordion__toggle"
                  data-toggle="collapse"
                  data-parent="#toc-2"
                  href={`#toc-content-${section._id}`}
                >
                  <span class="flex">{section.SectionTitle}</span>
                  <span class="accordion__toggle-icon material-icons">
                    keyboard_arrow_down
                  </span>
                </a>
                {this.renderLectures(section)}
              </li>
            </ul>
          </div>
          {/* <div className="content">{section.SectionTitle}</div> */}
        </div>
      );
    });
  }
  renderLectures(section) {
    console.log(section.taskList.length);
    return (
      <div class="accordion__menu">
        <ul class="list-unstyled collapse" id={`toc-content-${section._id}`}>
          {section.taskList.map((lecture) => {
            console.log(lecture.VideoUrl);
            return (
              <li class="accordion__menu-link">
                <span class="material-icons icon-16pt icon--left text-body">
                  play_arrow
                </span>
                <a
                  class="flex"
                  onClick={() => this.setState({ video: lecture.VideoURL })}
                >
                  {lecture.VideoName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  renderprice() {
    if (this.props.presentcourse.feeStructure === "free") {
      return <p style={{ fontSize: "14px" }}>Free Course</p>;
    } else {
      return (
        <p style={{ fontSize: "14px" }}>
          only at $ {this.props.presentcourse.price}
        </p>
      );
    }
  }

  renderCoursePreview = () => {
    if (this.props.presentcourse) {
      return (
        <div>
          <div
            class="mdk-box bg-primary js-mdk-box mb-0"
            data-effects="blend-background"
          >
            <div class="mdk-box__content">
              <div class="hero py-64pt text-center text-sm-left">
                <div class="container-fluid page__container">
                  <h1 class="text-white">{this.props.presentcourse.title}</h1>
                  <p class="lead text-white-50 measure-hero-lead">
                    {this.props.presentcourse.learning}
                  </p>
                  <div class="d-flex flex-column flex-sm-row align-items-center justify-content-start">
                    <button
                      id="btnplay"
                      class="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt"
                    >
                      Watch trailer{" "}
                      <i class="material-icons icon--right">
                        play_circle_outline
                      </i>
                    </button>
                    <a href="#" class="btn btn-white">
                      Start your free trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar navbar-expand-sm navbar-light bg-white border-bottom-2 navbar-list p-0 m-0 align-items-center">
            <div class="container-fluid page__container">
              <ul class="nav navbar-nav flex align-items-sm-center">
                <li class="nav-item navbar-list__item">
                  <div class="media align-items-center">
                    <span class="media-left mr-16pt">
                      <img
                        src="\assets\images\256_rsz_nicolas-horn-689011-unsplash.jpg"
                        width="40"
                        alt="avatar"
                        class="rounded-circle"
                      />
                    </span>
                    <div class="media-body">
                      <a
                        class="card-title m-0"
                        href="boxed-teacher-profile.html"
                      >
                        {this.props.presentcourse.username}
                      </a>
                      <p class="text-50 lh-1 mb-0">Instructor</p>
                    </div>
                  </div>
                </li>
                <li class="nav-item navbar-list__item">
                  <i class="material-icons text-muted icon--left">schedule</i>
                  2h 46m
                </li>
                <li class="nav-item navbar-list__item">
                  <i class="material-icons text-muted icon--left">assessment</i>
                  Beginner
                </li>
                <li class="nav-item ml-sm-auto text-sm-center flex-column navbar-list__item">
                  <div class="rating rating-24">
                    <div class="rating__item">
                      <i class="material-icons">star</i>
                    </div>
                    <div class="rating__item">
                      <i class="material-icons">star</i>
                    </div>
                    <div class="rating__item">
                      <i class="material-icons">star</i>
                    </div>
                    <div class="rating__item">
                      <i class="material-icons">star</i>
                    </div>
                    <div class="rating__item">
                      <i class="material-icons">star_border</i>
                    </div>
                  </div>
                  <p class="lh-1 mb-0">
                    <small class="text-muted">20 ratings</small>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="page-section border-bottom-2">
            <div class="container-fluid page__container">
              <div class="page-separator">
                <div class="page-separator__text">Table of Contents</div>
              </div>
              <div class="row mb-0">
                <div class="col-lg-7">
                  {this.renderSections()}
                  <br />
                  <br />
                  <br />
                  <div class="page-separator">
                    <div class="page-separator__text">Preview Video</div>
                  </div>
                  <video
                    height="300px"
                    width="500px"
                    id="video"
                    src={this.props.presentcourse.videoUrl}
                    controls
                  ></video>
                </div>
                <div class="col-lg-5 justify-content-center">
                  <div class="card">
                    <div class="card-body py-16pt text-center">
                      <span class="icon-holder icon-holder--outline-secondary rounded-circle d-inline-flex mb-8pt">
                        <i class="material-icons">timer</i>
                      </span>
                      <h4 class="card-title">
                        <strong>Buy this Course</strong>
                      </h4>
                      <p class="card-subtitle text-70 mb-24pt">
                        Get access to all videos in the library
                      </p>
                      {this.renderprice()}
                      <Link
                        to={`/cart/${this.props.presentcourse._id}`}
                        class="btn btn-accent mb-8pt"
                      >
                        Enroll To This Course
                      </Link>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page-section bg-white border-bottom-2">
            <div class="container-fluid page__container">
              <div class="row ">
                <div class="col-md-7">
                  <div class="page-separator">
                    <div class="page-separator__text">About this course</div>
                  </div>
                  <p style={{ fontSize: "15px" }}>
                    {this.props.presentcourse.description}
                  </p>
                </div>
                <div class="col-md-5">
                  <div class="page-separator">
                    <div class="page-separator__text bg-white">
                      What you’ll learn
                    </div>
                  </div>
                  <p style={{ fontSize: "15px" }}>
                    {this.props.presentcourse.learning}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="page-section bg-white border-bottom-2">
            <div class="container">
              <div class="row">
                <div class="col-md-7 mb-24pt mb-md-0">
                  <h4>About the author</h4>
                  <p>{this.props.presentcourse.username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  render() {
    return (
      <div className="layout-boxed">
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="mdk-drawer-layout__content page-content">
            <Header />
            {this.renderCoursePreview()}
          </div>
          <StudentDrawer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    presentcourse: state.course.presentcourse,
    Credentials: state.Credentials,
  };
};
export default connect(mapStateToProps, { FetchCourseByIdAction })(
  CoursePreview
);
