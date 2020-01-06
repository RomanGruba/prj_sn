import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi! It`s my first post", likesCount: 12 },
    { id: 2, message: "Hi! It`s my second post", likesCount: 13 },
    { id: 3, message: "Hi! It`s my third post", likesCount: 1 }
  ],
  newPostText: "helloooo",
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);

      stateCopy.newPostText = "";
      return stateCopy;
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.text;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: "ADD_POST" });
export const updateNewPostActionCreator = message => ({
  type: "UPDATE_NEW_POST_TEXT",
  text: message
});
const setUserProfile = profile => ({
  type: "SET_USER_PROFILE",
  profile
});
const setUserStatus = status => ({ type: SET_USER_STATUS, status });

export const getUserProfile = userId => dispatch => {
  usersAPI.getProfile(userId).then(res => dispatch(setUserProfile(res)));
};

export const getUserStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(res => dispatch(setUserStatus(res)));
};

export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status).then(res => {
    if (res.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
