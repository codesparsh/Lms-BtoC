import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="location"
        type="text"
        component={renderField}
        label="location"
      />
      <br />
      <br />

      <hr />
      <Field
        name="language"
        type="text"
        component={renderField}
        label="language"
      />

      <div>
        <br />
        <br />
        <button
          type="button"
          style={{ float: "left" }}
          class="btn btn-outline-dark mb-24pt mb-sm-0 "
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          style={{ float: "right" }}
          type="submit"
          class="btn btn-outline-dark mb-24pt mb-sm-0 "
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "registration", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
