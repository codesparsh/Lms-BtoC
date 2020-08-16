import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  admin: {},
  resetPassword: false,
};

export const ReducerAuthenticateAdmin = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_ADMIN":
      console.log(111);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        admin: action.payload,
      };

    default:
      return state;
  }
};
