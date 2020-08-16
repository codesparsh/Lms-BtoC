import axios from "axios";
import { get } from "mongoose";
import history from "../History";

//Action to fetch all the courses
export const FetchCourseAction = () => async (dispatch) => {
  console.log("all course action called");
  const response = await axios.get("/user/all-course");
  console.log(response);
  dispatch({ type: "FETCH_COURSES", payload: response.data });
};
//Action to fetch course by id
export const FetchCourseByIdAction = (id) => async (dispatch) => {
  console.log("get action by id");
  const res = await axios.get(`/instructor/all-course/${id}`);
  console.log(res);
  dispatch({ type: "FETCH_COURSEBYID", payload: res.data });
};

//Action to fetch courses of a instructor
export const FetchInstructorCoursesAction = () => async (dispatch) => {
  const response = await axios.get("");
  dispatch({ type: "FETCH_INSTRUCTOR_COURSES", payload: response.data });
};
//Action to add course by the instructor
export const AddCourseAction = (history) => async (dispatch, getState) => {
  console.log(history);
  const sections = getState().Sections;
  const formValues = getState().form.wizard.values;
  const image = getState().Image[0].data.downloadImageUrl;
  const video = getState().Video.data.downloadVideoUrl;

  const currentUsername = getState().Credentials.user.username;
  const currentUserId = getState().Credentials.user.id;
  const currentUser = { currentUsername, currentUserId };

  console.log(sections);
  console.log(formValues);

  const course = { ...formValues, sections, currentUser, image, video };
  console.log(course);
  const res = await axios.post("/instructor/add-course", course);

  dispatch({ type: "ADD_COURSE", payload: res.data });
  history.push("/");
};
//This is a basic action which adds a section to the reducers and from the reducers state we got this state in as sections in the AddCourseAction creator
export const AddSectionAction = (sections) => {
  return {
    type: "ADD_SECTION",
    payload: sections,
  };
};
export const AddQuizAction = (questions) => {
  return {
    type: "ADD_QUIZ",
    payload: questions,
  };
};

export const EditCourseAction = (history, id) => async (dispatch, getState) => {
  const sections = getState().Sections;
  const formValues = getState().form.editcourse.values;
  console.log(sections);
  console.log(formValues);
  var course = { ...formValues, sections };
  if (!getState().Image[0]) {
    console.log("No new Image");
  } else {
    console.log("new Image");
    const image = getState().Image[0].data.downloadImageUrl;
    course = { ...course, image };
  }
  if (!getState().Video.data) {
    console.log("No new Video added");
  } else {
    console.log("New Video Added");
    const video = getState().Video.data.downloadVideoUrl;
    course = { ...course, video };
  }
  console.log(course);
  const res = await axios.put(`/instructor/all-course/${id}`, course); //give edit course route here
  dispatch({ type: "EDIT_COURSE", payload: res.data });
  history.push("/instructor-dashboard");
};

export const DeleteAction = (id) => async (dispatch) => {
  const res = await axios.delete(`/instructor/all-course/${id}`);
  dispatch({ type: "DEL_STREAM", payload: id });
  history.push("/");
};

export const AddCompletedVideosAction = (CompletedVideos, courseid) => async (
  dispatch
) => {
  CompletedVideos = { ...CompletedVideos, courseid };
  console.log(CompletedVideos);
  const res = await axios.post("/user/completed-video", CompletedVideos);
  dispatch({ type: "COMPLETED_VIDEOS", payload: res.data });
};
