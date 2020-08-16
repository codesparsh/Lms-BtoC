import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="Age"
        type="date"
        component={renderField}
        label="DATE OF BIRTH"
      />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div>
        <label class="form-label" style={{ fontSize: "20px" }}>
          Gender
        </label>
        <div>
          <label style={{ margin: "10px" }}>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
              class="form-label"
            />{" "}
            Male
          </label>

          <label style={{ margin: "10px" }}>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="female"
              class="form-label"
            />{" "}
            Female
          </label>

          <label style={{ margin: "10px" }}>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="other"
              class="form-label"
            />{" "}
            Other
          </label>
          <br />
          <Field name="sex" component={renderError} />
        </div>
      </div>
      <br />
      <div>
        <br />
        <button type="submit" class="btn btn-outline-dark mb-24pt mb-sm-0 ">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "registration", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
