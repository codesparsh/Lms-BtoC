import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import { renderField, renderTextArea } from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <div class="page-section border-bottom-2">
      <div class="container-fluid page__container">
        <div class="row">
          <div class="col-md">
            <form onSubmit={handleSubmit}>
              <Field
                name="learning"
                type="text"
                component={renderTextArea}
                label="What will the Students Learn?"
              />
              <br />
              <br />
              <Field
                name="prerequisites"
                type="text"
                component={renderField}
                label="What are the prerequisites/requirements?"
              />
              <br />
              <br />
              <Field
                name="targetStudent"
                type="text"
                component={renderField}
                label="
        Who are your target students?"
              />
              <br />
              <br />

              <div>
                <button
                  class="btn btn-outline-dark mb-24pt mb-sm-0"
                  type="button"
                  onClick={previousPage}
                  style={{ width: "150px", float: "left" }}
                >
                  Previous
                </button>
                <button
                  style={{ float: "right", width: "150px" }}
                  class="btn btn-outline-dark mb-24pt mb-sm-0"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
