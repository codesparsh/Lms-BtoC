import React from "react";

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <label class="form-label" style={{ fontSize: "20px" }}>
      {label}
    </label>
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
    <label class="form-label" style={{ fontSize: "20px" }}>
      {label}
    </label>
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
