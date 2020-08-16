import React from "react";
import TaskList from "./tasklist";
import { connect } from "react-redux";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { AddSectionAction } from "../Actions/courseActions";

class Form extends React.Component {
  state = {
    taskList: [
      {
        index: Math.random(),
        VideoNumber: "",
        VideoName: "",
        VideoURL: "",
        Status: false,
      },
    ],
    SectionTitle: "",
    count: 0,
    presentVideo: null,
  };

  seturl(taskList, data, name) {
    console.log(data);
    console.log(name);
    console.log(this.state.presentVideo);
    taskList[data][name] = this.state.presentVideo;
    //add your concept here
  }
  handleChange = (e) => {
    if (
      ["VideoNumber", "VideoName", "VideoURL", "Status"].includes(e.target.name)
    ) {
      let taskList = [...this.state.taskList];
      if (e.target.name === "Status") {
        console.log(112344556);
        // taskList[e.target.dataset.id][e.target.name] = "url here";
        const data = e.target.dataset.id;
        const name = "VideoURL";
        this.seturl(taskList, data, name);
      } else {
        console.log(99999);
        taskList[e.target.dataset.id][e.target.name] = e.target.value;
      }
    } else {
      if (e.target.name === "VideoURL") {
        this.setState({ presentVideo: this.state.presentVideo });
      } else {
        this.setState({ [e.target.name]: e.target.value });
      }
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      taskList: [
        ...prevState.taskList,
        {
          index: Math.random(),
          VideoNumber: "",
          VideoName: "",
          VideoURL: "",
          Status: "",
        },
      ],
    }));
    this.setState({ count: this.state.count + 1 });
  };

  deteteRow = (index) => {
    this.setState({
      taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
    });
    // const taskList1 = [...this.state.taskList];
    // taskList1.splice(index, 1);
    // this.setState({ taskList: taskList1 });
  };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   if (this.state.date === "" || this.state.description === "") {
  //     NotificationManager.warning(
  //       "Please Fill up Required Field . Please check Task and Date Field"
  //     );
  //     return false;
  //   }
  //   for (var i = 0; i < this.state.taskList.length; i++) {
  //     if (
  //       this.state.taskList[i].projectName === "" ||
  //       this.state.taskList[i].task === ""
  //     ) {
  //       NotificationManager.warning(
  //         "Please Fill up Required Field.Please Check Project name And Task Field"
  //       );
  //       return false;
  //     }
  //   }
  //   this.props.addsections(this.state);
  // };
  onsubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addsections(this.state);
  };

  /* let data = { formData: this.state, userData: localStorage.getItem("user") };
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );
    axios
      .post("http://localhost:9000/api/task", data)
      .then((res) => {
        if (res.data.success) NotificationManager.success(res.data.msg);
      })
      .catch((error) => {
        if (error.response.status && error.response.status === 400)
          NotificationManager.error("Bad Request");
        else NotificationManager.error("Something Went Wrong");
        this.setState({ errors: error });
      });
  };*/
  clickOnDelete(record) {
    this.setState({
      taskList: this.state.taskList.filter((r) => r !== record),
    });
  }
  getData = (data) => {
    console.log(data);
    this.setState({ presentVideo: data });
    //this.setState({
    //   taskList: [
    //     {
    //       VideoNumber: this.state.VideoNumber,
    //       VideoName: this.state.VideoName,
    //       VideoURL: this.state.presentVideo,
    //     },
    //   ],
    // });
  };

  render() {
    let { taskList } = this.state; //let { notes, date, description, taskList } = this.state
    console.log(this.state);
    return (
      <div className="content">
        <NotificationContainer />
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-header text-center">Add Your Sections</div>
                <div className="card-body">
                  <div className="row">
                    <label className="required">Section Name</label>
                    <input
                      type="text"
                      name="SectionTitle"
                      id="SectionTitle"
                      className="form-control"
                      placeholder="Enter Section Title"
                    />
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="required">Video</th>
                        <th className="required">Video Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TaskList
                        add={this.addNewRow}
                        delete={this.clickOnDelete.bind(this)}
                        taskList={taskList}
                        count={this.state.count}
                        sendData={this.getData}
                        presentVideo={this.state.presentVideo}
                      />
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4">
                          <button
                            onClick={this.addNewRow}
                            type="button"
                            className="btn btn-primary text-center"
                          >
                            <i
                              className="fa fa-plus-circle"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="card-footer text-center">
                  {" "}
                  <button
                    onClick={this.onsubmit}
                    className="btn btn-primary text-center"
                  >
                    Add All these Sections
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, { addsections: AddSectionAction })(Form);
