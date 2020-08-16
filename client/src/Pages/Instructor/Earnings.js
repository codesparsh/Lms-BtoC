import React from "react";
import InstructorHeader from "../../Header/instructor-header";
import InsDrawer from "../../Drawer/instructordrawer";
import { FetchPurchasesByInsID } from "../../Actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Earnings extends React.Component {
  state = {
    courses: "",
    courseone: "",
    coursetwo: "",
    coursetwo: "",
    check: [{ id: 1212213 }, { id: 12131232 }],
  };
  componentDidMount() {
    this.props.FetchPurchasesByInsID(this.props.Insid);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.courses) {
      console.log(nextProps.courses);
      var newArray = [];
      var uniqueObject = {};
      for (var i in nextProps.courses) {
        var objTitle = nextProps.courses[i]["courseTitle"];

        uniqueObject[objTitle] = nextProps.courses[i];
      }
      for (var i in uniqueObject) {
        newArray.push(uniqueObject[i]);
      }
      console.log(5555555555);

      console.log(newArray);
      this.setState({ courses: newArray });

      var result = nextProps.courses.filter((course) => {
        return course.courseTitle === "Modern React With Redux";
      });
      console.log(result);
      this.setState({ courseone: result });

      var resultone = nextProps.courses.filter((course) => {
        return course.courseTitle === "Machine Learning";
      });
      console.log(resultone);
      this.setState({ coursetwo: resultone });
    }
  }
  renderrevenue(title) {
    if (title === "Machine Learning") {
      var a = 0;
      for (var i in this.state.coursetwo) {
        var cost = this.state.coursetwo[i]["courseCost"];
        console.log(cost);
        a = Number(a) + Number(cost);
        console.log(a);
      }

      return <div>{a}</div>;
    } else {
      var a = 0;
      for (var i in this.state.courseone) {
        var cost = this.state.courseone[i]["courseCost"];
        console.log(cost);
        a = Number(a) + Number(cost);
        console.log(a);
      }

      return <div>{a}</div>;
    }
  }
  renderTabel() {
    if (this.state.courses) {
      return this.state.courses.map((course) => {
        return (
          <tr>
            <td>
              <div class="media flex-nowrap align-items-center">
                <Link
                  to={`/instructor/earnings/${course.courseTitle}/${course.instructorId}/${course.courseId}`}
                  class="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                >
                  <img
                    src={course.courseImageUrl}
                    alt="course"
                    class="avatar-img rounded"
                  />
                  <span class="overlay__content"></span>
                </Link>
                <div class="media-body">
                  <Link
                    class="text-body js-lists-values-course"
                    to={`/instructor/earnings/${course.courseTitle}/${course.instructorId}/${course.courseId}`}
                  >
                    <strong>{course.courseTitle}</strong>
                  </Link>
                  <div class="text-muted small"></div>
                </div>
              </div>
            </td>
            <td class="text-center text-black-70">
              $<span class="js-lists-values-fees">{course.courseCost}</span> USD
            </td>
            <td class="text-center text-black-70">
              $
              <span class="js-lists-values-fees">
                {this.renderrevenue(course.courseTitle)}
              </span>
              USD
            </td>
          </tr>
        );
      });
    } else {
      return <div></div>;
    }
  }
  render() {
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
                    <h2 class="mb-0">Earnings</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid page__container page-section">
              <div class="page-separator">
                <div class="page-separator__text">Transactions</div>
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
                        Course
                      </a>
                    </th>
                    <th class="text-center" style={{ width: "130px" }}>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-fees"
                      >
                        Fees
                      </a>
                    </th>
                    <th class="text-center" style={{ width: "130px" }}>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-revenue"
                      >
                        Revenue
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody class="list">{this.renderTabel()}</tbody>
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
  return {
    Insid: state.Credentials.user.id,
    courses: state.purchasedcourses.course,
  };
};
export default connect(mapStateToProps, { FetchPurchasesByInsID })(Earnings);
