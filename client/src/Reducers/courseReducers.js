import _ from "lodash";

const initialState = {
  isAuthenticated: false,
  user: {},
  courses: {},
};
export const ReducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return { ...state, courses: action.payload };
    case "FETCH_COURSEBYID":
      return { ...state, presentcourse: action.payload };
    case "FETCH_INSTRUCTOR_COURSES":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "ADD_COURSE":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export const ReducersSection = (state = [], action) => {
  switch (action.type) {
    case "ADD_SECTION": {
      console.log(state);
      console.log(action.payload);
      console.log(12121212);
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
export const ReducerQuiz = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUIZ": {
      console.log(action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};

export const ReducerUserCourses = (state = {}, action) => {
  console.log("reducer of my courses");
  if (action.type === "USER_COURSES") {
    console.log(action.payload);
    return { ...state, mycourse: action.payload };
  } else {
    return state;
  }
};
