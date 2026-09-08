import { SIGNUP_SUCCESS, LOGOUT } from "../actions/authActions";

const getStoredUser = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

const initialState = {
  user: getStoredUser(),
  accessToken: localStorage.getItem("accessToken") || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
