import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import { renderField, renderTextArea, renderDropdown } from "./renderField";
import { FetchCatogoriesAction } from "../../Actions/AdminActions";
import UploadVideo from "../../Upload/uploadvideo";
import { connect } from "react-redux";

class WizardFormFirstPage extends React.Component {
  componentDidMount() {
    this.props.FetchCatogoriesAction();
  }
  rendercat() {
    if (this.props.category) {
      return (
        <Field
          name="Category"
          type="text"
          component={renderDropdown}
          categories={this.props.category}
          label="Category"
        />
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    const { handleSubmit } = this.props;
    console.log(2222222);
    console.log(this.props.category);
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
                  label="Title"
                />
                <br />

                <Field
                  name="description"
                  type="textarea"
                  component={renderTextArea}
                  label="Short Discription"
                />
                <br />
                <label className="form-label">Give Category</label>
                {this.rendercat()}

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
  }
}
const mapStateToProps = (state) => {
  console.log(state.categories.settings);
  return { category: state.categories.settings };
};

export default connect(mapStateToProps, { FetchCatogoriesAction })(
  reduxForm({
    form: "wizard", // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
  })(WizardFormFirstPage)
);
