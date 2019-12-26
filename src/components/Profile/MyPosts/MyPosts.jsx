import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "./../../../redux/profileReducer";

const MyPosts = props => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.changeTextArea(text);
  };

  return (
    <div className={styles.posts}>
      <h3> My posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
        />
        <div className={styles.addPostButton}>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      {props.posts.map(post => (
        <Post message={post.message} likes={post.likesCount} />
      ))}
    </div>
  );
};

export default MyPosts;
