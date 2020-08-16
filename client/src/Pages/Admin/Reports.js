import React from "react";
import AdminHeader from "./AdminHeader";
import moment from "moment";
import AdminDrawer from "./AdminDrawer";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchAllUsersActions } from "../../Actions/AdminActions";
import ReactToExcel from "react-html-table-to-excel";
import {
  FetchAllInstructorActions,
  GetAllcoursesAction,
  GetAllpurchasesAction,
} from "../../Actions/AdminActions";

class Reports extends React.Component {
  state = {
    option: "Users",
    total: 0,
    users: "",
    orders: "",
    instrutors: "",
    courses: "",
    startDate: moment().startOf("month").format("DD-MM-YYYY"),
    endDate: moment().endOf("month").format("DD-MM-YYYY"),
    date_create: moment().format("DD-MM-YYYY"),
  };

  componentDidMount() {
    this.props.FetchAllInstructorActions();
    this.props.FetchAllUsersActions();
    this.props.GetAllcoursesAction();
    this.props.GetAllpurchasesAction();
  }
  componentDidUpdate(nextProps, previousProps) {
    console.log(1234);
    console.log(nextProps);
    console.log(previousProps);
    if (
      previousProps.startDate !== this.state.startDate ||
      previousProps.endDate !== this.state.endDate
    ) {
      console.log("pagaaalall");
      if (nextProps.users) {
        console.log(nextProps.users.length);
        if (nextProps.users.length > 0) {
          console.log(8888888);
          console.log(nextProps.users);
          console.log(9999999);
          console.log(112233);
          var startDate = this.state.startDate;
          var endDate = this.state.endDate;
          var result = nextProps.users.filter((obj) => {
            return obj.date >= startDate && obj.date <= endDate;
          });
          console.log(result);
          this.setState({ users: result });
        }
      }
      if (nextProps.orders) {
        console.log(nextProps.orders.length);
        if (nextProps.orders.length > 0) {
          console.log(8888888);
          console.log(nextProps.users);
          console.log(9999999);
          console.log(112233);
          var startDate = this.state.startDate;
          var endDate = this.state.endDate;
          var result = nextProps.orders.filter((obj) => {
            return obj.date >= startDate && obj.date <= endDate;
          });
          console.log(result);
          this.setState({ orders: result });
        }
      }
      if (nextProps.instructors) {
        console.log(nextProps.instructors.length);
        if (nextProps.instructors.length > 0) {
          console.log(8888888);
          console.log(nextProps.instructors);
          console.log(9999999);
          console.log(112233);
          var startDate = this.state.startDate;
          var endDate = this.state.endDate;
          var result = nextProps.instructors.filter((obj) => {
            return obj.date >= startDate && obj.date <= endDate;
          });
          console.log(result);
          this.setState({ instructors: result });
        }
      }
      if (nextProps.courses) {
        console.log(nextProps.courses.length);
        if (nextProps.courses.length > 0) {
          console.log(8888888);
          console.log(nextProps.courses);
          console.log(9999999);
          console.log(112233);
          var startDate = this.state.startDate;
          var endDate = this.state.endDate;
          var result = nextProps.courses.filter((obj) => {
            return obj.date >= startDate && obj.date <= endDate;
          });
          console.log(result);
          this.setState({ courses: result });
        }
      }
    }
    console.log(5678);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.orders) {
      console.log(123456789);
      nextProps.orders.map((order) => {
        console.log(9878987567);
        console.log(this.state.total);
        console.log(Number(order.courseCost));
        this.setState({
          total: Number(this.state.total) + Number(order.courseCost),
        });
      });
      if (nextProps.orders.length > 0) {
        console.log(8888888);
        console.log(nextProps.orders);
        console.log(9999999);
        console.log(112233);
        var startDate = this.state.startDate;
        var endDate = this.state.endDate;
        var result = nextProps.orders.filter((obj) => {
          return obj.date >= startDate && obj.date <= endDate;
        });
        console.log(result);
        this.setState({ orders: result });
      }
      console.log(nextProps.orders);
    }
    if (nextProps.users) {
      console.log(nextProps.users.length);
      if (nextProps.users.length > 0) {
        console.log(8888888);
        console.log(nextProps.users);
        console.log(9999999);
        console.log(112233);
        var startDate = this.state.startDate;
        var endDate = this.state.endDate;
        var result = nextProps.users.filter((obj) => {
          return obj.date >= startDate && obj.date <= endDate;
        });
        console.log(result);
        this.setState({ users: result });
      }
    }
    if (nextProps.instructors) {
      console.log(nextProps.instructors.length);
      if (nextProps.instructors.length > 0) {
        console.log(8888888);
        console.log(nextProps.instructors);
        console.log(9999999);
        console.log(112233);
        var startDate = this.state.startDate;
        var endDate = this.state.endDate;
        var result = nextProps.instructors.filter((obj) => {
          return obj.date >= startDate && obj.date <= endDate;
        });
        console.log(result);
        this.setState({ instructors: result });
      }
    }
    if (nextProps.courses) {
      console.log(nextProps.courses.length);
      if (nextProps.courses.length > 0) {
        console.log(8888888);
        console.log(nextProps.courses);
        console.log(9999999);
        console.log(112233);
        var startDate = this.state.startDate;
        var endDate = this.state.endDate;
        var result = nextProps.courses.filter((obj) => {
          return obj.date >= startDate && obj.date <= endDate;
        });
        console.log(result);
        this.setState({ courses: result });
      }
    }

    console.log(nextProps);
  }

  renderVerified(email) {
    if (email) {
      return <div>True</div>;
    } else {
      return <div>False</div>;
    }
  }
  renderUsers() {
    if (this.props.users) {
      return this.state.users.map((user, id) => {
        return (
          <tr>
            <td>{id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{this.renderVerified(user.emailVerified)}</td>
            <td>{user.date}</td>
            <td>{user.age}</td>
            <td>{user.sex}</td>
            <td>{user.location}</td>
            <td>{user.language}</td>
          </tr>
        );
      });
    } else {
      return <div></div>;
    }
  }
  renderInstructor() {
    if (this.props.users) {
      return this.state.instructors.map((user, id) => {
        return (
          <tr>
            <td>{id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{this.renderVerified(user.emailVerified)}</td>
            <td>{user.date}</td>
            <td>{user.age}</td>
            <td>{user.sex}</td>
            <td>{user.location}</td>
            <td>{user.language}</td>
          </tr>
        );
      });
    } else {
      return <div></div>;
    }
  }
  renderPrice(course) {
    if (course.feeStructure === "free") {
      return <div>00</div>;
    } else {
      return <div>{course.price}</div>;
    }
  }
  renderCourse() {
    if (this.props.courses) {
      return this.state.courses.map((course, id) => {
        return (
          <tr>
            <td>{id}</td>
            <td>{course.title}</td>
            <td>{course.category}</td>
            <td>{course.date}</td>
            <td>{course.permission}</td>
            <td>{course.feeStructure}</td>
            <td>{this.renderPrice(course)}</td>
            <td>{course.username}</td>
          </tr>
        );
      });
    } else {
      return <div></div>;
    }
  }
  renderOrder() {
    if (this.props.orders) {
      return this.state.orders.map((order, id) => {
        return (
          <tr>
            <td>{id}</td>
            <td>{order.courseTitle}</td>
            <td>{order.date}</td>
            <td>{order.userName}</td>
            <td>{order.instructorName}</td>
            <td>{order.courseCost}</td>
          </tr>
        );
      });
    } else {
      return <div></div>;
    }
  }
  renderTables() {
    if (this.state.option === "Users") {
      return (
        <div style={{ margin: "100px" }}>
          <h2>List of Users</h2>
          <Table id="tableid" striped bordered hover>
            <thead>
              <tr>
                <th>Serial no.</th>
                <th>User Name</th>
                <th>Email id</th>
                <th>Email verified</th>
                <th>Date of joining</th>
                <th>Date OF Birth</th>
                <th>Gender</th>
                <th>Location</th>
                <th>Language</th>
              </tr>
            </thead>

            <tbody>{this.renderUsers()}</tbody>
          </Table>
        </div>
      );
    }
    if (this.state.option === "Instructors") {
      return (
        <div style={{ margin: "100px" }}>
          <h2>List of Instructors</h2>
          <Table id="tableid" striped bordered hover>
            <thead>
              <tr>
                <th>Serial no.</th>
                <th>User Name</th>
                <th>Email id</th>
                <th>Email verified</th>
                <th>Date of joining</th>
                <th>Date OF Birth</th>
                <th>Gender</th>
                <th>Location</th>
                <th>Language</th>
              </tr>
            </thead>

            <tbody>{this.renderInstructor()}</tbody>
          </Table>
        </div>
      );
    }
    if (this.state.option === "Earnings") {
      console.log(this.props.orders);
      return (
        <div style={{ margin: "100px" }}>
          <h2>Earnings</h2>
          <Table id="tableid" striped bordered hover>
            <thead>
              <tr>
                <th>Serial no.</th>
                <th>Course Title</th>
                <th>Date of Purchase</th>
                <th>Purchaser Name</th>
                <th>Instructor Name</th>
                <th>Cost of Course</th>
              </tr>
            </thead>

            <tbody>{this.renderOrder()}</tbody>
          </Table>
          {/* <h3>Total Income:${this.state.total}</h3> */}
        </div>
      );
    }
    if (this.state.option === "Courses") {
      console.log(this.state.courses);
      return (
        <div style={{ margin: "100px" }}>
          <h2>Courses</h2>
          <Table id="tableid" striped bordered hover>
            <thead>
              <tr>
                <th>Serial no.</th>
                <th>Title</th>
                <th>Category</th>
                <th>Date added</th>
                <th>permission</th>
                <th>Fee Structure</th>
                <th>Price in $</th>
                <th>Instuctor Name</th>
              </tr>
            </thead>

            <tbody>{this.renderCourse()}</tbody>
          </Table>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="layout-boxed">
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="mdk-drawer-layout__content page-content">
            <AdminHeader />
            <br />
            <br />
            <hr />
            <div style={{ marginLeft: "100px" }} className="page-separator">
              <div className="page-separator__text">
                Choose Report from the list
              </div>
            </div>
            <select
              type="text"
              style={{ width: "700px", marginLeft: "100px" }}
              className="form-control form-control-lg"
              onChange={(e) => this.setState({ option: e.target.value })}
            >
              <option>Users</option>
              <option>Instructors</option>
              <option>Earnings</option>
              <option>Courses</option>
            </select>
            <br />
            <br />
            <label
              style={{ width: "700px", marginLeft: "100px" }}
              className="form-label"
            >
              Pick up start date
            </label>
            <input
              style={{ width: "700px", marginLeft: "100px" }}
              className="form-control form-control-lg"
              //   defaultValue={moment().startOf("month").format("DD-MM-YYYY")}
              type="date"
              onChange={(e) => this.setState({ startDate: e.target.value })}
            />
            <br />
            <br />
            <label
              style={{ width: "700px", marginLeft: "100px" }}
              className="form-label"
            >
              Pick up end date
            </label>
            <input
              style={{ width: "700px", marginLeft: "100px" }}
              className="form-control form-control-lg"
              type="date"
              onChange={(e) => this.setState({ endDate: e.target.value })}
            />

            <br />
            <br />
            <hr />
            {this.renderTables()}
            <div style={{ float: "right", margin: "50px" }}>
              <ReactToExcel
                className="ui green button"
                table="tableid"
                filename="excelFile"
                sheet="sheet 1"
                buttonText="export"
              />
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
    users: state.Users.users,
    instructors: state.Ins.users,
    courses: state.allcourses.course,
    orders: state.orders.course,
  };
};
export default connect(mapStateToProps, {
  FetchAllUsersActions,
  FetchAllInstructorActions,
  GetAllcoursesAction,
  GetAllpurchasesAction,
})(Reports);
