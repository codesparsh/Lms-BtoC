import React from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";

class RegMoadl extends React.Component {
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
    //  this.props.deletestream(this.props.match.params.id);
    console.log("del");
  };
  onDismiss = (event) => {
    //history.push("/");
    console.log(124);
  };
  renderDisc() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this Stream?";
    } else {
      return `Are you sure you want to delete Stream?`;
    }
  }
  render() {
    return <Modal />;
  }
}
export default RegMoadl;
