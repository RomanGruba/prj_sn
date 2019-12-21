import { rerenderEntireTree } from "./../render";

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let changeNewPostText = text => {
  state.profilePage.newPostText = text;
  rerenderEntireTree(state);
};

export default state;
