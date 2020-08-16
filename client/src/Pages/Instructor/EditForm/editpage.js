import React from "react";
import InstructorHeader from "../../../Header/instructor-header";
import { connect } from "react-redux";
import { FetchCourseByIdAction } from "../../../Actions/courseActions";
import _ from "lodash";
import WizDrawer from "../../WizardForm/wizDrawer";
import EditFormFirstPage from "./EditFormFirstPage";
import EditFormSecondPage from "./EditFormSecondPage";
import EditFormThirdPage from "./EditFormThirdPage";
import EditFormFourPage from "./EditFormFourPage";
import { EditCourseAction } from "../../../Actions/courseActions";
import { withRouter } from "react-router";

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.ChangePage = this.ChangePage.bind(this);
    this.state = {
      page: 1,
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  ChangePage = (pagenumber) => {
    console.log(111111);
    this.setState({ page: pagenumber });
  };

  componentDidMount() {
    this.props.FetchCourseByIdAction(this.props.match.params.id);
    console.log(this.props);
  }
  initialValues() {
    if (this.props.presentcourse) {
      return _.pick(
        this.props.presentcourse,
        "title",
        "description",
        "learning",
        "prerequisites",
        "targetStudent",
        "feeStructure",
        "price"
      );
    } else {
      return;
    }
  }
  onSubmit = () => {
    console.log(1231);
    this.props.EditCourseAction(this.props.history, this.props.match.params.id);
  };

  render() {
    console.log(this.props);
    const { page } = this.state;
    console.log(
      _.pick(this.props.presentcourse, "title", "description", "targetStudent")
    );
    return (
      <div className="layout-boxed">
        <div
          class="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div class="mdk-drawer-layout__content page-content">
            <InstructorHeader />

            {page === 1 && (
              <EditFormFirstPage
                initialValues={this.initialValues()}
                onSubmit={this.nextPage}
              />
            )}
            {page === 2 && (
              <EditFormSecondPage
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
              />
            )}
            {page === 3 && (
              <EditFormThirdPage
                previousPage={this.previousPage}
                //onSubmit={onSubmit}
                onSubmit={this.nextPage}
              />
            )}
            {page === 4 && (
              <EditFormFourPage
                previousPage={this.previousPage}
                onsubmit={this.onSubmit}
                history={this.props.history}
                presentcourse={this.props.presentcourse}
                //onSubmit={this.nextPage}
              />
            )}
          </div>

          <WizDrawer ChangePage={this.ChangePage} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { presentcourse: state.course.presentcourse };
};
export default withRouter(
  connect(mapStateToProps, {
    FetchCourseByIdAction,
    EditCourseAction,
  })(EditPage)
);
