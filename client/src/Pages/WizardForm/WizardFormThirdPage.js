import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import { renderField, renderTextArea } from "./renderField";
import UploadImageVaishnav from "../../Upload/UploadImageVaishnav";
import { reduceRight } from "lodash";
import UploadVideo from "../../Upload/uploadvideo";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

class WizardFormThirdPage extends React.Component {
  state = { sel: "free" };

  renderprice() {
    if (this.state.sel === "paid") {
      return (
        <Field
          name="Price"
          type="number"
          component={renderField}
          label="Price in Dollars"
        />
      );
    } else {
      return <div></div>;
    }
  }

  // uploadImages = (image) => {
  //   console.log(image)
  // }

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
                  <label class="form-label" style={{ fontSize: "20px" }}>
                    Is Your Course Free or Paid?
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
                    title="Add Your Cover Image Here"
                    // onDone={this.uploadImages}
                  />
                  <br />
                  <hr />
                  <hr />
                  <UploadVideo title="Upload Your Preview Video Here" />
                  <br />
                  <button
                    class="btn btn-outline-dark mb-24pt mb-sm-0"
                    type="button"
                    onClick={previousPage}
                    style={{ float: "left" }}
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

export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
