const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi! It`s my first post", likesCount: 12 },
    { id: 2, message: "Hi! It`s my second post", likesCount: 13 },
    { id: 3, message: "Hi! It`s my third post", likesCount: 1 }
  ],
  newPostText: "helloooo"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: "ADD_POST" });
export const updateNewPostActionCreator = message => ({
  type: "UPDATE_NEW_POST_TEXT",
  text: message
});

export default profileReducer;
