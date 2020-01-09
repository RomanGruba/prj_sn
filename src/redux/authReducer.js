import { authAPI } from "../api/api";

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
      return { ...state, ...action.data, isAuth: true };
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

export const login = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe).then(res => {
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData());
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
