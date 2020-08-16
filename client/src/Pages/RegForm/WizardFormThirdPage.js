import React from "react";
import { Field, reduxForm, submit, formValues } from "redux-form";
import validate from "./validate";
import { withRouter } from "react-router-dom";
import { render } from "react-dom";
import { connect } from "react-redux";
import { SingupAction } from "../../Actions/actions";
import Category from "./Categoy";
//import "./Category.css";
// const foi = [
//   {
//     Categories: "Web Development",
//     CategoriesImage: "http://lorempixel.com/100/100",
//   },
//   {
//     Categories: "Machine Learning",
//     CategoriesImage: "http://lorempixel.com/101/101",
//   },
// ];
// const renderInterestSelector = ({ img, input, meta: { touched, error } }) => (
//   <div>
//     <input {...input} type="checkbox" id="cb1" />
//     <label for="cb1">
//       <img src={img} />
//     </label>
//     )
//     {/* <select {...input}>
//       <option value="">Select your Field of Interest...</option>
//       {foi.map((val) => (
//         <option value={val} key={val}>
//           {val}
//         </option>
//       ))}
//     </select>
//     {touched && error && <span>{error}</span>} */}
//   </div>
// );

class WizardFormThirdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newUser: this.props.newUser, fieldofInterest: "" };
  }
  onSubmit = (formValues) => {
    console.log(formValues);
    console.log(this.state.newUser);
    console.log(this.state.fieldofInterest);
    const newUser = {
      ...this.state.newUser,
      formValues,
      fieldofInterest: this.state.fieldofInterest,
    };
    console.log(newUser);
    this.props.SingupAction(newUser, this.props.history);
  };
  // renderCategories() {
  //   return foi.map((cat) => {
  //     return (
  //       <div>
  //         <input type="checkbox" id="cb1" />
  //         <label for="cb1">
  //           <img src={cat.CategoriesImage} />
  //         </label>
  //       </div>
  //     );
  //   });
  // }
  getValues = (a) => {
    console.log(a);
    this.setState({ fieldofInterest: a });
  };
  render() {
    console.log(this.props);
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    return (
      <div>
        <Category onDone={this.getValues} />
        <br />
        <br />
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {/* {this.renderCategories()} */}
          {/* {foi.map((category) => {
            <Field
              name={category.Categories}
              component={renderInterestSelector}
              img={category.CategoriesImage}
            />;
          })} */}

          <div
            style={{
              position: "absolute",
              width: "80%",
              bottom: "10px",
            }}
          >
            <br />
            <button
              style={{ float: "left" }}
              type="button"
              class="btn btn-outline-dark mb-24pt mb-sm-0 "
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              style={{ float: "right" }}
              type="submit"
              class="btn btn-outline-dark mb-24pt mb-sm-0 "
              disabled={pristine || submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, { SingupAction })(
  reduxForm({
    form: "registration", //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
  })(WizardFormThirdPage)
);
