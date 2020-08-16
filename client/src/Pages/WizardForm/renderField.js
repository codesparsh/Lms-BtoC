import React from "react";
import _ from "lodash";
// import { Editor } from "@tinymce/tinymce-react";

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <label class="form-label">{label}</label>
    <div>
      <input
        class="form-control form-control-lg"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
export const renderTextArea = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <label class="form-label">{label}</label>
    <div>
      <textarea
        class="form-control form-control-lg"
        {...input}
        placeholder={label}
        type={type}
        rows="10"
        cols="80"
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export const renderDropdown = ({
  input,
  label,
  categories,
  meta: { touched, error },
}) => (
  <div>
    <select class="form-control form-control-lg" {...input}>
      {categories.map((cat) => (
        <option>{cat.categorieName}</option>
      ))}
      {/* <option>option one</option>
      <option>Option two</option>
      <option>Option three</option> */}
    </select>
  </div>
);
