import React from "react";
import AdminDrawer from "./AdminDrawer";
import Header from "../../Header/header";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { FetchAllUsersActions } from "../../Actions/AdminActions";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import ReactToExcel from "react-html-table-to-excel";
class ListofUsers extends React.Component {
  componentDidMount() {
    this.props.FetchAllUsersActions();
  }
  renderUsers() {
    if (this.props.users) {
      return this.props.users.map((user, id) => {
        return (
          <tr>
            <td>
              <Link to={`/admin/user/${user._id}`}>{id}</Link>
            </td>
            <td>
              <Link to={`/admin/user/${user._id}`}>{user.username}</Link>
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
            <h1 style={{ marginLeft: "20px" }}>List of Users</h1>
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
  return { users: state.Users.users };
};
export default connect(mapStateToProps, { FetchAllUsersActions })(ListofUsers);
