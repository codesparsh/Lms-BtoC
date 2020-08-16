import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const LoginAction = (credentials) => (dispatch) => {
  axios
    .post("/user/login", credentials)
    .then((res) => {
      const { token } = res.data;
      //set token to ls
      localStorage.setItem("token", token);
      //set token to auth heder
      setAuthToken(token);
      //decode the token
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => console.log(err));
};

//admin login action
export const AdminLoginAction = (credentials, history) => (dispatch) => {
  axios
    .post("/admin/login", credentials)
    .then((res) => {
      console.log(res);
      const { token } = res.data;
      //set token to ls
      localStorage.setItem("token", token);
      //set token to auth heder
      setAuthToken(token);
      //decode the token
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history.push("/admin/dashboard");
    })
    .catch((err) => console.log(err));
};

export const setCurrentUser = (decoded) => {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded,
  };
};

export const setCurrentAdmin = (decoded) => {
  return {
    type: "SET_CURRENT_ADMIN",
    payload: decoded,
  };
};

export const SingupAction = (credentials, history) => (dispatch) => {
  console.log(history);
  console.log(credentials);
  axios
    .post("/user/register", credentials)
    .then((res) => history.push("/login"))
    .catch((err) => console.log(err));
};

//logout
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

export const ForgotPasswordAction = (data, history) => async (dispatch) => {
  console.log("forget password ation");
  const response = await axios.put("/user/forgot-password", data);
  dispatch({ type: "FORGOT", payload: response.data });
};

export const ResetPasswordAction = (newPassword, token, history) => async (
  dispatch
) => {
  console.log("reset password ation");
  const response = await axios.put(
    `/user/reset-password/${token}`,
    newPassword
  );
  history.push("/login");
  dispatch({ type: "RESET-PASSWORD", payload: response.data });
};

//Action to fetch all the courses
export const FetchCourseAction = () => async (dispatch) => {
  const response = await axios.get("");
  dispatch({ type: "FETCH_COURSES", payload: response.data });
};
//Action to fetch courses of a instructor
export const FetchInstructorCoursesAction = () => async (dispatch) => {
  const response = await axios.get("");
  dispatch({ type: "FETCH_INSTRUCTOR_COURSES", payload: response.data });
};
//Action to add course by the instructor
export const AddCourseAction = (formValues) => async (dispatch, getState) => {
  const sections = getState().Sections;
  console.log(sections);
  const res = await axios.post("", { ...formValues, sections });
  dispatch({ type: "ADD_COURSE", payload: res.data });
};
//This is a basic action which adds a section to the reducers and from the reducers state we got this state in as sections in the AddCourseAction creator
export const AddSectionAction = (sections) => {
  console.log("From action creator");
  console.log(sections);
  return {
    type: "ADD_SECTION",
    payload: sections,
  };
};

export const UploadImageAction = (formData, options, filename) => (
  dispatch
) => {
  axios
    .get("/image/test", formData, options, filename)
    .then((res) => {
      console.log(res);
      dispatch({ type: "UPLOAD_IMAGE", payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const VaihnavUploadImageAction = (pictures) => (dispatch) => {
  console.log("Inside Action");
  let uploadPromises = pictures.map((image) => {
    let data = new FormData();
    data.append("image", image, image.name);
    console.log(data);
    return axios.post("/image/upload", data);
  });

  axios
    .all(uploadPromises)
    .then((results) => {
      console.log(results);
      dispatch({ type: "IMAGE", payload: results });
    })
    .catch((e) => {
      console.log(e);
    });
};
export const NewUploadImageAction = (pictures) => (dispatch) => {
  console.log("Inside Action");
  let uploadPromises = pictures.map((image) => {
    let data = new FormData();
    data.append("image", image, image.name);
    console.log(data);
    return axios.post("/image/upload", data);
  });

  axios
    .all(uploadPromises)
    .then((results) => {
      console.log(results);
      dispatch({ type: "IMAGE_NEW", payload: results });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const UploadVideoAction = (formData, options) => (dispatch) => {
  axios.post("/image/file-upload", formData, options).then((res) => {
    console.log(res);
    dispatch({ type: "VIDEO", payload: res });
  });
};

// export const UploadImageAction = (formData, options, filename) => {
//    axios.post("/image/upload", formData, options, filename).then((res) => {
//     console.log(res)
//     dispatch({ type: "UPLOAD_IMAGE", payload: res.data }).catch((err)=>console.log(err))

//     // this.setState({ per: 100 }, () => {
//     //   setTimeout(() => {
//     //     this.setState({ per: 0 })
//     //   }, 1000)
//     // })
//   }
// }

export const FetchInstructorCourseByInstructorId = (id) => async (dispatch) => {
  const res = await axios.get(`/instructor/manage-course/${id}`);
  console.log(res.data);
  dispatch({ type: "FETCH_INS_COURSES", payload: res.data });
};

export const BeAnInstructorAction = (id, history) => async (dispatch) => {
  console.log(id);
  const a = { instructor: true };
  const res = await axios.put(`/instructor/getting-started/${id}`, a);
  console.log(res.data);
  dispatch({ type: "BE_INST", payload: res.data });
  history.push("/instructor-dashboard");
};

export const FetchPurchasesByInsID = (id) => async (dispatch) => {
  const res = await axios.get(`/instructor/earning/${id}`);
  dispatch({ type: "INS_PUR_COURSE", payload: res.data });
};

export const FetchPurchasesByInsIDAndCourseID = (
  instructorid,
  courseid
) => async (dispatch) => {
  const res = await axios.get(
    `/instructor/earning/${instructorid}/course/${courseid}`
  );
  dispatch({ type: "INS_PUR_COURSE_ID", payload: res.data });
};
