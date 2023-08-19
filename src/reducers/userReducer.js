export function userReducer(state = {}, action) {
  //
  switch (action.type) {
    //
    case "USER_REQUEST":
      return { ...state, loading: true };

    case "SIGNUP_EMAIL_SUCCESS":
    case "SIGNUP_EMAIL_FAIL":
      return { ...state, loading: false, ...action.payload };

    case "ADD_COOKIE_TOKEN":
      return { ...state, ...action.payload };

    case "SIGNOUT_USER":
      return {};

    default:
      return state;
  }
}
