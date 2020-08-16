import React from "react";
import UploadVideo from "../Upload/uploadvideo";
import { Dropdown, SplitButton } from "react-bootstrap";
import { UploadImageAction } from "../Actions/actions";
import UploadImageVaishnav from "../Upload/UploadImageVaishnav";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

class TaskList extends React.Component {
  state = {
    count: 0,
    SelectedFile: null,
    UploadPercentage: 0,
    presentvideourl: "",
    checked: false,
    value: null,
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = async (event) => {
    event.preventDefault();
    // this.setState({ selectedFile: event.target.files[0] });

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "image",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    const options = {
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        if (percent < 100) {
          this.setState({ Uploadpercentage: percent });
        }
      },
    };

    // Request made to the backend api
    // Send formData object

    //this.props.UploadVideoAction(formData, options);
    await axios.post("/image/file-upload", formData, options).then((res) => {
      console.log(111111111111111111);
      console.log(res);
      this.setState({ presentvideourl: res.data.downloadVideoUrl });

      this.props.sendData(this.state.presentvideourl);

      this.setState({ Uploadpercentage: 100 }, () => {
        setTimeout(() => {
          this.setState({ Uploadpercentage: 0 });
          this.setState({ checked: true });
          this.setState({ value: "yes" });
        }, 1000);
      });
    });
    // if (this.state.UploadPercentage === 0) {
    //   setTimeout(() => {
    //     this.setState({ checked: true });
    //   }, 3000);
    // }

    // this.setState({ checked: true });
    //Here give the backend where to upload the files
  };

  // const [count, setCount] = React.useState(0);
  // canchecked = () => {
  //   if (this.props.presentVideo) {
  //     if (this.props.presentVideo === this.state.presentvideourl) {
  //       return true;
  //     } else {
  //       return null;
  //     }
  //   } else {
  //     return null;
  //   }
  // };
  render() {
    console.log(this.state);
    return this.props.taskList.map((val, idx) => {
      let projectName = `projectName-${idx}`,
        task = `task-${idx}`,
        taskNotes = `taskNotes-${idx}`,
        taskStatus = `taskStatus-${idx}`;

      return (
        <tr key={val.index}>
          <td>
            <input
              type="number"
              name="VideoNumber"
              data-id={idx}
              id={projectName}
              placeholder="Video Number"
              className="form-control "
              style={{ width: "70px" }}
            />
          </td>
          <td>
            <input
              type="text"
              name="VideoName"
              id={task}
              data-id={idx}
              className="form-control "
              placeholder="Video Name"
              style={{ width: "250px" }}
            />
          </td>
          <td>
            <SplitButton
              key="right"
              id={`dropdown-button-drop-right`}
              drop="right"
              variant="success"
              title="ADD Matreials"
            >
              <button onClick={(e) => e.stopPropagation()}>
                {/* <UploadVideo name title="Upload Video" /> */}
                <label>Upload Your Lecture</label>
                <input
                  type="file"
                  name="VideoURL"
                  id={taskNotes}
                  data-id={idx}
                  onChange={this.onFileChange}
                />

                {this.state.Uploadpercentage > 0 && (
                  <ProgressBar
                    now={this.state.Uploadpercentage}
                    active
                    label={`${this.state.Uploadpercentage}%`}
                  />
                )}
                <button
                  class="btn btn-outline-dark mb-24pt mb-sm-0 "
                  onClick={this.onFileUpload}
                >
                  Upload!
                </button>
              </button>
              <hr />
              <label>Click To Add Quiz</label>
              <Link
                to="/instructor/quiz"
                class="btn btn-outline-dark mb-24pt mb-sm-0 "
                style={{ float: "right" }}
              >
                Add Quiz
              </Link>
              <hr />
              <button onClick={(e) => e.stopPropagation()}>
                add Assignments
              </button>
              <hr />
            </SplitButton>
          </td>
          <td>
            <label>Added</label>
            <input
              type="checkbox"
              name="Status"
              //value={this.state.value}
              //checked={this.state.checked}
              id={taskStatus}
              data-id={idx}
              className="form-control"
              placeholder="Status"
            />
          </td>

          <td>
            {idx === 0 ? (
              <button
                onClick={() => {
                  this.props.add();
                  this.setState({ count: this.state.count + 1 });
                  // setCount(count + 1);
                }}
                type="button"
                className="btn btn-primary text-center"
              >
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
            ) : (
              <button
                className="btn btn-danger"
                onClick={() => this.props.delete(val)}
              >
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
            )}
          </td>
        </tr>
      );
    });
  }
}
export default TaskList;
