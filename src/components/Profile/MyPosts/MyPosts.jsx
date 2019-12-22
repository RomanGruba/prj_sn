import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD_POST" });
  };

  let changeTextArea = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE_NEW_POST_TEXT", text: text });
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
