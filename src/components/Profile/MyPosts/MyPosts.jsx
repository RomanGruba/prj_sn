import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "./../../../redux/profileReducer";

const MyPosts = props => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let changeTextArea = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <div className={styles.posts}>
      <h3> My posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={changeTextArea}
        />
        <div className={styles.addPostButton}>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {props.posts.map(post => (
        <Post message={post.message} likes={post.likesCount} />
      ))}
    </div>
  );
};

export default MyPosts;
