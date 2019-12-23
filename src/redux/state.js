import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi! It`s my first post", likesCount: 12 },
        { id: 2, message: "Hi! It`s my second post", likesCount: 13 },
        { id: 3, message: "Hi! It`s my third post", likesCount: 1 }
      ],
      newPostText: "helloooo"
    },
    messagesPage: {
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Hellow" },
        { id: 3, message: "Good" },
        { id: 4, message: "Perfect" },
        { id: 5, message: "Yellow" }
      ],
      dialogs: [
        { id: 1, name: "Dimich" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Roman" },
        { id: 4, name: "Ivan" },
        { id: 5, name: "Vadim" }
      ],
      newMessageBody: "555"
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};

export const addPostActionCreator = () => ({ type: "ADD_POST" });
export const updateNewPostActionCreator = message => ({
  type: "UPDATE_NEW_POST_TEXT",
  text: message
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = message => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: message
});

export default store;
window.store = store;
