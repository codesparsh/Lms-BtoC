import React from "react";
import { connect } from "react-redux";
import { FetchCourseByIdAction } from "../../Actions/courseActions";
import StudentDrawer from "../../Drawer/StudentDrawer";
import Header from "../../Header/header";
import { OrderAction } from "../../Actions/orderAction";

import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (!this.props.Credentials.isAuthenticated) {
      this.props.history.push("/login");
    }
    this.props.FetchCourseByIdAction(this.props.match.params.id);
    console.log(this.props);
  }

  onSubmit = (e) => {
    console.log(this.props);
    const studentdetails = this.props.Credentials.user;
    console.log(studentdetails);
    const instructorid = this.props.presentcourse.userId;
    const instructorname = this.props.presentcourse.username;
    const instructordetails = { instructorid, instructorname };
    console.log(instructordetails);
    var cost_in_dollar = 0;
    if (this.props.presentcourse.feeStructure === "free") {
      cost_in_dollar = 0;
    } else {
      cost_in_dollar = this.props.presentcourse.price;
    }
    console.log(cost_in_dollar);
    const coursedetails = {
      courseid: this.props.presentcourse._id,
      courseTitle: this.props.presentcourse.title,
      coverimgUrl: this.props.presentcourse.imageUrl,
      instructorName: this.props.presentcourse.username,
    };
    console.log(coursedetails);
    const orderdetails = {
      studentdetails,
      instructordetails,
      cost_in_dollar,
      coursedetails,
    };
    console.log(orderdetails);
    this.props.OrderAction(orderdetails, this.props.history);
  };

  renderfees = () => {
    if (this.props.presentcourse.feeStructure === "free") {
      return <p>{this.props.presentcourse.feeStructure}</p>;
    } else {
      return <p>Only at ${this.props.presentcourse.price}</p>;
    }
  };
  rendercart() {
    if (this.props.presentcourse) {
      return (
        <div class="page-section border-bottom-2">
          <div class="container-fluid page__container">
            <div class="page-separator">
              <div class="page-separator__text">Your Course Order Summary</div>
            </div>
            <div style={{ boxShadow: "3px 2px 3px 2px", padding: "20px" }}>
              <div
                class="ui items"
                style={{ backgroundColor: "#303956", padding: "10px" }}
              >
                <div class="item">
                  <div class="image">
                    <img
                      src={this.props.presentcourse.imageUrl}
                      style={{
                        borderRadius: "100px",
                        height: "150px",
                        width: "150px",
                      }}
                    />
                  </div>

                  <div class="content" style={{ color: "white" }}>
                    <h2 style={{ color: "white" }}>
                      {this.props.presentcourse.title}
                    </h2>
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
                    {this.renderfees()}
                    <p>{this.props.presentcourse.learning}</p>

                    <p>by--{this.props.presentcourse.username}</p>
                  </div>
                </div>
                <br />
                <br />
                <button
                  style={{
                    float: "right",
                    margin: "20px",
                    height: "50px",
                    width: "150px",
                  }}
                  onClick={this.onSubmit}
                  className="ui green button"
                >
                  PAY $ {this.props.presentcourse.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
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
            {this.rendercart()}
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
export default connect(mapStateToProps, { FetchCourseByIdAction, OrderAction })(
  Cart
);