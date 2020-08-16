import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import { renderField, renderTextArea } from "./renderField";

const Tipone = (props) => {
  return (
    <div class="page-section border-bottom-2">
      <div class="container-fluid page__container">
        <div class="row">
          <div class="col-md">
            <div class="page-separator">
              <div class="page-separator__text">
                <h2>Course Structure</h2>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <h3>There's a course in you. Plan it out.</h3>
            <br />
            <p style={{ fontSize: "20px" }}>
              Planning your course carefully will create a clear learning path
              for students and help you once you film. Think down to the details
              of each lecture including the skill you’ll teach, estimated video
              length, practical activities to include, and how you’ll create
              introductions and summaries.
            </p>
            <br />
            <hr />
            <h3>
              <span
                className="material-icons sidebar-menu-icon sidebar-menu-icon--left"
                style={{ color: "orange" }}
              >
                wb_sunny
              </span>
              Tips
            </h3>
            <br />
            <br />
            <h5>Create an Outline</h5>
            <p style={{ fontSize: "14px" }}>
              Decide what skills you’ll teach and how you’ll teach them.
              Organize lectures into sections. Each section should have 3-7
              lectures, and include at least one assignment or practical
              activity.
            </p>
            <br />
            <h5>Introduce yourself and create momentum.</h5>
            <p style={{ fontSize: "14px" }}>
              People online want to start learning quickly. Make an introduction
              section that gives students something to be excited about in the
              first 10 minutes.
            </p>
            <br />
            <br />
            <h5>Sections have a clear learning objective.</h5>
            <p style={{ fontSize: "14px" }}>
              Introduce each section by describing the section goal and why it’s
              important. Give lectures and sections titles that reflect their
              content and have a logical flow.
            </p>
            <br />
            <h5>Lectures cover one concept.</h5>
            <p style={{ fontSize: "14px" }}>
              A good lecture length is 2-7 minutes, to keep students interested
              and help them study in short bursts. Make lectures around single
              topics so students can easily re-watch specific points later.
            </p>
            <br />
            <br />
            <h5>Mix and match your lecture types.</h5>
            <p style={{ fontSize: "14px" }}>
              Alternate between filming yourself, your screen, and slides or
              other visuals. Showing yourself can help students feel connected.
            </p>
            <br />
            <br />
            <h5>Practice activities create hands-on learning.</h5>
            <p style={{ fontSize: "14px" }}>
              Help students apply your lessons to their real world with
              projects, assignments, coding exercises, or worksheets.
            </p>
            <br />
            <br />
            <hr />
            <h3>
              <span
                className="material-icons sidebar-menu-icon sidebar-menu-icon--left"
                style={{ color: "blue" }}
              >
                description
              </span>
              Requirements
            </h3>
            <br />
            <br />
            <ul type="circle">
              <li style={{ fontSize: "14px" }}>
                <span
                  className="material-icons sidebar-menu-icon sidebar-menu-icon--left"
                  style={{ color: "orange" }}
                >
                  star
                </span>
                Your course has at least five lectures
              </li>
              <br />
              <br />
              <li style={{ fontSize: "14px" }}>
                <span
                  className="material-icons sidebar-menu-icon sidebar-menu-icon--left"
                  style={{ color: "orange" }}
                >
                  star
                </span>
                All lectures add up to at least 30+ minutes of total video
              </li>
              <br />
              <br />
              <li style={{ fontSize: "14px" }}>
                <span
                  className="material-icons sidebar-menu-icon sidebar-menu-icon--left"
                  style={{ color: "orange" }}
                >
                  star
                </span>
                You course is composed of valuable educational content
              </li>
              <br />
              <br />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tipone;
