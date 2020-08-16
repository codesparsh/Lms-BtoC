import axios from "axios";

export const OrderAction = (orderdetails, history) => async (dispatch) => {
  console.log(orderdetails);
  const res = axios.post("/user/course/buy", orderdetails);
  dispatch({ type: "ORDER", payload: res.data });
  history.push("/student-dashboard");
};

export const FetchUsercoursesAction = (id) => async (dispatch, getState) => {
  console.log("action to get current user courses");
  // const userid = getState().Credentials.user.id;

  const res = await axios.get(`/user/my-course/${id}`);
  console.log(res);
  dispatch({ type: "USER_COURSES", payload: res.data });
};
