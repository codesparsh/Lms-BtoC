import React from "react";
import InstructorHeader from "../../Header/instructor-header";
import InsDrawer from "../../Drawer/instructordrawer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchPurchasesByInsIDAndCourseID } from "../../Actions/actions";
import { FetchUserDetailsAction } from "../../Actions/AdminActions";
import axios from "axios";

class EarningByCourse extends React.Component {
  state = { users: [] };
  componentDidMount() {
    this.props.FetchPurchasesByInsIDAndCourseID(
      this.props.match.params.instructorid,
      this.props.match.params.courseid
    );
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.courses) {
      console.log(nextProps.courses);
      nextProps.courses.map(async (course) => {
        console.log(course);
        const res = await axios.get(`/admin/get-user/${course.userId}`);
        console.log(res);
        this.setState({ users: [...this.state.users, res.data] });
      });
    }
  }
  renderusers() {
    if (this.state.users) {
      return this.state.users.map((user) => {
        return (
          <tr>
            <td>
              <div class="media flex-nowrap align-items-center">
                <img
                  src={user.avatar}
                  alt="course"
                  style={{
                    borderRadius: "50px",
                    height: "100px",
                    width: "100px",
                  }}
                />

                <div class="media-body">
                  <Link class="text-body js-lists-values-course" to="#">
                    &nbsp;&nbsp;&nbsp;<strong>{user.username}</strong>
                  </Link>
                  <div class="text-muted small"></div>
                </div>
              </div>
            </td>
            <td class="text text-black-70">
              <strong class="js-lists-values-fees">{user.email}</strong>
            </td>
            <td class="text text-black-70">
              <strong
                class="js-lists-values-fees"
                style={{ marginLeft: "30px" }}
              >
                {user.date}
              </strong>
            </td>
          </tr>
        );
      });
    } else {
      return <div></div>;
    }
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="layout-boxed">
        <div
          class="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div class="mdk-drawer-layout__content page-content">
            <InstructorHeader />
            <div class="pt-32pt">
              <div class="container-fluid page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                <div class="flex d-flex flex-column flex-sm-row align-items-center">
                  <div class="mb-24pt mb-sm-0 mr-sm-24pt">
                    <h2 class="mb-0">{this.props.match.params.title}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid page__container page-section">
              <div class="page-separator">
                <div class="page-separator__text">Details</div>
              </div>
            </div>
            <div class="card mb-0">
              <div
                data-toggle="lists"
                data-lists-values='[
      "js-lists-values-course", 
      "js-lists-values-revenue",
      "js-lists-values-fees"
    ]'
                data-lists-sort-by="js-lists-values-revenue"
                data-lists-sort-desc="true"
                class="table-responsive"
              ></div>
              <table class="table table-nowrap table-flush">
                <thead>
                  <tr class="text-uppercase small">
                    <th>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-course"
                      >
                        User
                      </a>
                    </th>
                    <th>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-course"
                      >
                        Email
                      </a>
                    </th>
                    <th>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-course"
                      >
                        Date of Purchase
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody class="list">{this.renderusers()}</tbody>
              </table>
            </div>
          </div>

          <InsDrawer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { courses: state.purchoursebyid.course };
};
export default connect(mapStateToProps, {
  FetchPurchasesByInsIDAndCourseID,
  FetchUserDetailsAction,
})(EarningByCourse);
