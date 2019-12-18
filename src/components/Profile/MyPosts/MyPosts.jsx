import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let newPostElement = React.createRef();
  let text = "";
  if (newPostElement) {
    text = newPostElement.current.value;
  }
  return (
    <div className={styles.posts}>
      <h3> My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div className={styles.addPostButton}>
          <button onClick={props.addPost(text)}>Add post</button>
        </div>
      </div>
      {props.posts.map(post => (
        <Post message={post.message} likes={post.likesCount} />
      ))}
    </div>
  );
};

export default MyPosts;
