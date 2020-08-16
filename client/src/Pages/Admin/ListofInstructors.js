import React from "react";
import AdminDrawer from "./AdminDrawer";
import Header from "../../Header/header";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { FetchAllInstructorActions } from "../../Actions/AdminActions";
import { Link } from "react-router-dom";
import ReactToExcel from "react-html-table-to-excel";
import AdminHeader from "./AdminHeader";
class ListofInstructors extends React.Component {
  componentDidMount() {
    this.props.FetchAllInstructorActions();
  }
  renderUsers() {
    if (this.props.users) {
      return this.props.users.map((user, id) => {
        return (
          <tr>
            <td>
              <Link to={`/admin/ins/${user._id}`}>{id}</Link>
            </td>
            <td>
              <Link to={`/admin/ins/${user._id}`}>{user.username}</Link>
            </td>
            <td>
              {user.email}&nbsp;&nbsp;
              <i class="check circle icon" style={{ color: "green" }}></i>
            </td>
            <td>{user.date}</td>
          </tr>
        );
      });
    } else {
      return <div></div>;
    }
  }
  render() {
    console.log(this.props.users);
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
            <h1 style={{ marginLeft: "20px" }}>List of Instructors</h1>
            <br />
            <Table id="tableid" striped bordered hover>
              <thead>
                <tr>
                  <th>Serial no.</th>
                  <th>User Name</th>
                  <th>Email id</th>
                  <th>Date of joining</th>
                </tr>
              </thead>

              <tbody>{this.renderUsers()}</tbody>
            </Table>
            <br />
            <br />
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
  return { users: state.Ins.users };
};
export default connect(mapStateToProps, { FetchAllInstructorActions })(
  ListofInstructors
);
