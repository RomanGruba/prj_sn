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
      ]
    }
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
    if (action.type === "ADD_POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE_NEW_POST_TEXT") {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    }
  }
};

export default store;
window.store = store;
