import axios from "axios";

  // ACTIONS
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGIN_LODING = 'LOGIN_LODING';

export const LOGOUT = 'LOGOUT';

// ACTION CREATORS

export const loginLoding = () => ({ type: LOGIN_LODING });

export const loginError = () => ({ type: LOGIN_ERROR });

export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });

export const logoutUser = () => ({ type: LOGOUT})

export const loginSuccessData = (data,navigate ) => (dispatch) => {

    dispatch(loginLoding());
    axios.post("http://localhost:1212/users/login", data).then(({ data }) => {
        dispatch(loginSuccess(data))
        console.log(data)
        alert("Logged in Successfully")
        setTimeout(() => { navigate("/"); }, 3000)
    }).catch((err) => {
        dispatch(loginError())
      alert("Please check your email or password")
    });
}