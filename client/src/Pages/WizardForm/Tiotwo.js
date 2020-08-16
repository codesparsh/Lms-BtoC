import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import { renderField, renderTextArea } from "./renderField";

const Tiptwo = (props) => {
  return (
    <div class="page-section border-bottom-2">
      <div class="container-fluid page__container">
        <div class="row">
          <div class="col-md">
            <div class="page-separator">
              <div class="page-separator__text">
                <h2>Setup & test video</h2>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <h3>Arrange your ideal studio and get early feedback</h3>
            <br />
            <p style={{ fontSize: "20px" }}>
              It's important to get your audio and video set up correctly now,
              because it's much more difficult to fix your videos after you’ve
              recorded. There are many creative ways to use what you have to
              create professional looking video.
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
            <h5>Equipment can be easy.</h5>
            <p style={{ fontSize: "14px" }}>
              You don’t need to buy fancy equipment. Most smartphone cameras can
              capture video in HD, and you can record audio on another phone or
              external microphone.
            </p>
            <br />
            <h5>Students need to hear you.</h5>
            <p style={{ fontSize: "14px" }}>
              A good microphone is the most important piece of equipment you
              will choose. There are lot of affordable options.. Make sure it’s
              correctly plugged in and 6-12 inches (15-30 cm) from you.
            </p>
            <br />
            <br />
            <h5>Make a studio.</h5>
            <p style={{ fontSize: "14px" }}>
              Clean up your background and arrange props. Almost any small space
              can be transformed with a backdrop made of colored paper or an
              ironed bed sheet.
            </p>
            <br />
            <h5>Light the scene and your face.</h5>
            <p style={{ fontSize: "14px" }}>
              Turn off overhead lights. Experiment with three point lighting by
              placing two lamps in front of you and one behind aimed on the
              background.
            </p>
            <br />
            <br />
            <h5>Reduce noise and echo.</h5>
            <p style={{ fontSize: "14px" }}>
              Turn off fans or air vents, and record at a time when it’s quiet.
              Place acoustic foam or blankets on the walls, and bring in rugs or
              furniture to dampen echo.
            </p>
            <br />
            <br />
            <h5>Be creative.</h5>
            <p style={{ fontSize: "14px" }}>
              Students won’t see behind the scenes. No one will know if you’re
              surrounded by pillows for soundproofing...unless you tell other
              instructors in the community!
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
                Film and export in HD to create videos of at least 720p, or
                1080p if possible
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
                Audio should come out of both the left and right channels and be
                synced to your video
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
                Audio should be free of echo and background noise so as not to
                be distracting to students
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

export default Tiptwo;
