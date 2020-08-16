import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { renderField } from "./renderField";
import UploadImageVaishnav from "../../../Upload/UploadImageVaishnav";
import UploadVideo from "../../../Upload/uploadvideo";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

class EditFormThirdPage extends React.Component {
  state = { sel: "" };

  renderprice() {
    if (this.props.presentcourse.feeStructure === "paid") {
      if (this.state.sel === "free") {
        return <div></div>;
      } else {
        return (
          <Field
            name="price"
            type="number"
            component={renderField}
            label="Price"
          />
        );
      }
    } else {
      return <div></div>;
    }
  }

  // uploadImages = (image) => {
  //   console.log(image)
  // }
  rendercourseprice() {
    if (this.props.presentcourse.feeStructure === "paid") {
      if (this.state.sel === "free") {
        return <div></div>;
      } else {
        return (
          <div>
            <h4>
              Your Course is Presently Paid and it costs{" "}
              {this.props.presentcourse.price}
            </h4>
          </div>
        );
      }
    } else {
      return <div>Your Course is Presently Free</div>;
    }
  }

  render() {
    console.log(this.state);

    const { handleSubmit, previousPage } = this.props;
    return (
      <div class="page-section border-bottom-2">
        <div class="container-fluid page__container">
          <div class="row">
            <div class="col-md-8">
              <div class="page-separator">
                <div class="page-separator__text">Cost of your Course</div>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  {this.rendercourseprice()}
                  <label class="form-label" style={{ fontSize: "20px" }}>
                    Change Your Course Fee Structure Here
                  </label>
                  <div>
                    <label>
                      <Field
                        name="feeStructure"
                        component="input"
                        type="radio"
                        value="free"
                        class="form-label"
                        onChange={(e) => this.setState({ sel: e.target.value })}
                      />{" "}
                      Free
                    </label>
                    <br />
                    <label>
                      <Field
                        name="feeStructure"
                        component="input"
                        type="radio"
                        value="paid"
                        class="form-label"
                        onChange={(e) => this.setState({ sel: e.target.value })}
                      />{" "}
                      Paid
                    </label>
                    <br />

                    <Field name="feeStructure" component={renderError} />
                  </div>
                </div>
                {this.renderprice()}

                <br />
                <br />
                <div>
                  <UploadImageVaishnav
                    title="Change Your Cover Image Here"
                    // onDone={this.uploadImages}
                  />
                  <br />
                  <hr />
                  <hr />
                  <UploadVideo title="Change Your Preview Video Here" />
                  <br />
                  <button
                    class="btn btn-outline-dark mb-24pt mb-sm-0"
                    type="button"
                    onClick={previousPage}
                  >
                    Previous
                  </button>
                  <button
                    class="btn btn-outline-dark mb-24pt mb-sm-0"
                    type="submit"
                    style={{ float: "right" }}
                  >
                    next
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
  return { presentcourse: state.course.presentcourse };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "editcourse", // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  })(EditFormThirdPage)
);
