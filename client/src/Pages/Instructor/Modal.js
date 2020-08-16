import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div /*onClick={() => history.push('/')}*/
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        //className="ui standard modal visible active"
      >
        <div className="header" style={{ color: "white" }}>
          <h1 style={{ color: "white" }}> {props.title}</h1>
        </div>
        <div className="content">
          <h2 style={{ color: "white" }}>{props.Disc}</h2>
        </div>
        <div className="actions">{props.action}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
