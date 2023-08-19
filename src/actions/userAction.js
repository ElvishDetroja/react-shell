import axios from "axios";

//
//
//

export function userSignUpEmail({ email }) {
  //
  return async function fetch(dispatch, getState) {
    try {
      dispatch({ type: "USER_REQUEST" });

      const { data } = await axios.post("/api/user/signup", { email: email });

      dispatch({ type: "SIGNUP_EMAIL_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "SIGNUP_EMAIL_FAIL", payload: error?.response?.data });
    }
  };
}
