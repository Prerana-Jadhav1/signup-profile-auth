export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const LOGOUT = "LOGOUT";

export const signupSuccess = (user, accessToken) => ({
  type: SIGNUP_SUCCESS,
  payload: { user, accessToken },
});

export const logout = () => ({
  type: LOGOUT,
});
