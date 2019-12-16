import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  return (
    <div className={styles.posts}>
      <h3> My posts</h3>
      <div>
        <textarea name=""></textarea>
        <div className={styles.addPostButton}>
          <button>Add post</button>
        </div>
      </div>
      {props.posts.map(post => (
        <Post message={post.message} likes={post.likesCount} />
      ))}
    </div>
  );
};

export default MyPosts;
