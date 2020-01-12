import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth }
});

export const getAuthUserData = () => dispatch => {
  authAPI.me().then(res => {
    if (res.data.resultCode === 0) {
      let { id, email, login } = res.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

// rg0969246941@gmail.com

export const login = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe).then(res => {
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message =
        res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};

export const logout = () => dispatch => {
  authAPI.logout().then(res => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
