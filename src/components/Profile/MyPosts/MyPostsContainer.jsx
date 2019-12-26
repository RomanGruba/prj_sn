import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let changeTextArea = text => {
    props.store.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <MyPosts
      changeTextArea={changeTextArea}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
