import React from "react";
import { Field, reduxForm, formValues } from "redux-form";
import { withRouter } from "react-router-dom";
import validate from "./validate";
import Form from "../../DynamicInput/form";
import _ from "lodash";
import { connect } from "react-redux";
import { AddCourseAction } from "../../Actions/courseActions";
import UploadImageVaishnav from "../../Upload/UploadImageVaishnav";

class WizardFormFourPage extends React.Component {
  constructor() {
    super();
    this.state = { number: 1 };
  }
  renderform() {
    return (
      <div>
        {_.times(this.state.number, () => (
          <Form />
        ))}
      </div>
    );
  }
  onsubmit = () => {
    this.props.AddCourseAction(this.props.history);
  };
  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    console.log("yess");
    console.log(this.props);
    return (
      //   <form onSubmit={handleSubmit}>
      <div class="page-section border-bottom-2">
        <div class="container-fluid page__container">
          <div class="row">
            <div class="col-md">
              <form onSubmit={this.props.handleSubmit(this.props.onsubmit)}>
                {this.renderform()}
                <div>
                  <button
                    class="btn btn-outline-dark mb-24pt mb-sm-0"
                    style={{ float: "left" }}
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ number: Number(this.state.number) + 1 });
                    }}
                  >
                    ADD Another Section
                  </button>
                  <button
                    class="btn btn-outline-dark mb-24pt mb-sm-0"
                    style={{ float: "right" }}
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ number: Number(this.state.number) - 1 });
                    }}
                  >
                    Remove Section
                  </button>
                </div>
                <hr />
                <hr />
                <br />
                <div>
                  <button
                    class="btn btn-outline-dark mb-24pt mb-sm-0"
                    type="button"
                    onClick={previousPage}
                    style={{ float: "left" }}
                  >
                    Previous
                  </button>
                  <button
                    style={{ float: "right" }}
                    class="btn btn-outline-dark mb-24pt mb-sm-0"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return state;
};
export default withRouter(
  connect(mapStateToProps, { AddCourseAction })(
    reduxForm({
      form: "wizard", //Form name is same
      destroyOnUnmount: false,
      forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
      validate,
    })(WizardFormFourPage)
  )
);
