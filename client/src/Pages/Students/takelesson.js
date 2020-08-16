import React from "react";
import Header from "../../Header/header";
import axios from "axios";
import { connect } from "react-redux";
import { FetchCourseByIdAction } from "../../Actions/courseActions";
import StudentDrawer from "../../Drawer/StudentDrawer";
import { Link } from "react-router-dom";

class TakeLesson extends React.Component {
  state = { video: "" };

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
  rendervideo = (url) => {
    console.log(111);
    return (
      <div>
        <video height="500" width="900" src={url} controls>
          {/* <source src={url} type="video/mp4" /> */}
        </video>
      </div>
    );
  };
  renderfees = () => {
    if (this.props.presentcourse.feeStructure === "free") {
      return <p>{this.props.presentcourse.feeStructure}</p>;
    } else {
      return <p>Only at ${this.props.presentcourse.price}</p>;
    }
  };
  rendercourse = () => {
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
                  <div class="d-flex flex-column flex-sm-row align-items-center justify-content-start"></div>
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
          <br />
          <br />

          <div class="ui two column very relaxed grid">
            <div
              class="column"
              style={{ width: "600px", margin: "20px", marginLeft: "100px" }}
            >
              <h1>{this.props.presentcourse.title}</h1>
              <div class="page-separator">
                <div class="page-separator__text">Table of Contents</div>
              </div>
              {this.renderSections()}
              <hr />
            </div>
            <div
              className="column"
              style={{ marginTop: "100px", float: "left" }}
            >
              <Link
                to={`/courses/${this.props.presentcourse._id}`}
                style={{ float: "right" }}
              >
                <button className="ui massive blue button">
                  RESUME COURSE
                </button>
              </Link>
            </div>

            <hr />
            <hr />
            {/* <div className="container">
              <div class="ui comments">
                <h2 class="ui dividing header">Comments and Reviews</h2>
                <div class="comment">
                  <a class="avatar">
                    <img
                      src="\assets\images\256_daniel-gaffey-1060698-unsplash.jpg"
                      style={{ borderRadius: "50px" }}
                    />
                  </a>
                  <div class="content">
                    <a class="author">Matt</a>
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
                    <div class="metadata">
                      <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">How artistic!</div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>
                <div class="comment">
                  <a class="avatar">
                    <img
                      src="\assets\images\256_jeremy-banks-798787-unsplash.jpg"
                      style={{ borderRadius: "50px" }}
                    />
                  </a>
                  <div class="content">
                    <a class="author">Elliot Fu</a>
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
                    <div class="metadata">
                      <span class="date">Yesterday at 12:30AM</span>
                    </div>
                    <div class="text">
                      <p>
                        This has been very useful for my research. Thanks as
                        well!
                      </p>
                    </div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                  <div class="comments">
                    <div class="comment">
                      <a class="avatar">
                        <img
                          src="\assets\images\256_luke-porter-261779-unsplash.jpg"
                          style={{ borderRadius: "50px" }}
                        />
                      </a>
                      <div class="content">
                        <a class="author">Jenny Hess</a>
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
                        </div>
                        <div class="metadata">
                          <span class="date">Just now</span>
                        </div>
                        <div class="text">
                          Elliot you are always so right :)
                        </div>
                        <div class="actions">
                          <a class="reply">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment">
                  <a class="avatar">
                    <img
                      src="\assets\images\256_rsz_1andy-lee-642320-unsplash.jpg"
                      style={{ borderRadius: "50px" }}
                    />
                  </a>
                  <div class="content">
                    <a class="author">Joe Henderson</a>
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
                    <div class="metadata">
                      <span class="date">5 days ago</span>
                    </div>
                    <div class="text">
                      Dude, this is awesome. Thanks so much
                    </div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>
                <form class="ui reply form">
                  <div class="field">
                    <textarea></textarea>
                  </div>
                  <div class="ui blue labeled submit icon button">
                    <i class="icon edit"></i> Add Reply
                  </div>
                  <br />
                  <hr />
                  <hr />
                </form>
              </div>
            </div> */}
            <br />
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
                {/* <div class="col-md-7 mb-24pt mb-md-0">
                  <h4>About the author</h4>
                  <p>{this.props.presentcourse.username}</p>
                </div> */}
              </div>
            </div>
          </div>

          {/* <div class="page-section bg-white border-bottom-2">
              <div class="container">
                <div class="row">
                  <div class="col-md-7 mb-24pt mb-md-0">
                    <h4>About the author</h4>
                    <p>{this.props.presentcourse.username}</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="layout-boxed">
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="mdk-drawer-layout__content page-content">
            <Header />
            {this.rendercourse()}
          </div>
          {/* <StudentDrawer /> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { presentcourse: state.course.presentcourse };
};
export default connect(mapStateToProps, { FetchCourseByIdAction })(TakeLesson);
