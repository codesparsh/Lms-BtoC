import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField, renderTextArea } from "./renderField";

const EditFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <div class="page-section border-bottom-2">
      <div class="container-fluid page__container">
        <div class="row">
          <div class="col-md">
            <div class="page-separator">
              <div class="page-separator__text">Basic information</div>
            </div>
            <form onSubmit={handleSubmit}>
              <Field
                name="title"
                type="text"
                component={renderField}
                label="You can Change Your Title here"
              />
              <br />

              <Field
                name="description"
                type="textarea"
                component={renderTextArea}
                label="You can Change Your Description here"
              />
              <div>
                <br />
                <button
                  class="btn btn-outline-dark mb-24pt mb-sm-0 "
                  type="submit"
                  style={{ width: "150px" }}
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
  form: "editcourse", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(EditFormFirstPage);
