import React from "react";
import { connect } from "react-redux";
import { FetchCourseByIdAction } from "../../Actions/courseActions";
import Modal from "../Instructor/Modal";
import { Link } from "react-router-dom";
import { AdminDeleteAction } from "../../Actions/AdminActions";

class AdminDelete extends React.Component {
  componentDidMount() {
    this.props.FetchCourseByIdAction(this.props.match.params.id);
  }
  action = () => {
    return (
      <div>
        <button onClick={this.delete} className="ui red button">
          Delete
        </button>
        <Link to="/" className="ui  button">
          Cancel
        </Link>
      </div>
    );
  };
  delete = () => {
    console.log("this will delete");
    this.props.AdminDeleteAction(
      this.props.match.params.id,
      this.props.history
    );
  };
  onDismiss = (event) => {
    this.props.history.push("/admin/dashboard");
  };
  renderDisc() {
    if (!this.props.presentcourse) {
      return "Are you sure you want to delete this Course?";
    } else {
      return `Are you sure you want to delete ${this.props.presentcourse.title} Course?`;
    }
  }
  render() {
    return (
      <div>
        Delete Course
        <Modal
          title="Course Delete"
          Disc={this.renderDisc()}
          action={this.action()}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { presentcourse: state.course.presentcourse };
};
export default connect(mapStateToProps, {
  FetchCourseByIdAction,
  AdminDeleteAction,
})(AdminDelete);
