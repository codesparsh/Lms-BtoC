import React from "react";
import { Field, reduxForm, formValues } from "redux-form";
import { withRouter } from "react-router-dom";
import Form from "./Form";

import _ from "lodash";
import { connect } from "react-redux";

class EditFormFourPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.presentcourse.sections.length);
    this.state = { number: this.props.presentcourse.sections.length, num: 0 };
  }
  renderform = () => {
    return this.props.presentcourse.sections.map((section) => {
      return (
        <div>
          <Form sections={section} />
        </div>
      );
      // <div>
      //   {_.times(this.state.number, () => (
      //     <Form sections={this.props.presentcourse.sections[this.state.num]} />
      //   ))}
      // </div>
    });
  };
  renderextraform = () => {
    return (
      <div>
        {_.times(this.state.num, () => (
          <Form />
        ))}
      </div>
    );
  };
  // onsubmit = () => {
  //   this.props.AddCourseAction(this.props.history);
  // };
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
                {this.renderextraform()}
                <div>
                  <button
                    class="btn btn-outline-dark mb-24pt mb-sm-0"
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ num: Number(this.state.num) + 1 });
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
  connect(mapStateToProps)(
    reduxForm({
      form: "editcourse", //Form name is same
      destroyOnUnmount: false,
      forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    })(EditFormFourPage)
  )
);
