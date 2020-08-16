import React, { Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "../WizardForm/WizardFormFirstPage";
import WizardFormSecondPage from "../WizardForm/WizardFormSecondPage";
import WizardFormThirdPage from "../WizardForm/WizardFormThirdPage";
import WizardFormFourPage from "../WizardForm/WizardFormFourPage";
import Header from "../../Header/header";

import WizDrawer from "../WizardForm/wizDrawer";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { AdminAddCourseAction } from "../../Actions/AdminActions";
import AdminHeader from "./AdminHeader";
class AdminAddCourseForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.ChangePage = this.ChangePage.bind(this);
    this.state = {
      page: 1,
    };
  }
  componentDidMount() {
    if (!this.props.Credentials.isAuthenticated) {
      this.props.history.push("/login");
    }
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

  onSubmit = () => {
    this.props.AdminAddCourseAction(this.props.history);
  };
  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div className="layout-boxed">
        <div
          class="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div class="mdk-drawer-layout__content page-content">
            <AdminHeader />

            {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
            {page === 2 && (
              <WizardFormSecondPage
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
              />
            )}
            {page === 3 && (
              <WizardFormThirdPage
                previousPage={this.previousPage}
                //onSubmit={onSubmit}
                onSubmit={this.nextPage}
              />
            )}
            {page === 4 && (
              <WizardFormFourPage
                previousPage={this.previousPage}
                onsubmit={this.onSubmit}
                history={this.props.history}
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

AdminAddCourseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  Credentials: state.Credentials,
});
export default connect(mapStateToProps, { AdminAddCourseAction })(
  reduxForm({
    form: "wizard", // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  })(AdminAddCourseForm)
);
