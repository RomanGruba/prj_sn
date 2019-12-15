import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      <h3> My posts</h3>
      <div>
        <textarea name=""></textarea>
        <div className={styles.addPostButton}>
          <button>Add post</button>
        </div>
      </div>
      <Post message="Hi! It`s my first post" likes="15" />
      <Post message="Hi! It`s my second post" likes="3" />
      <Post message="Hi! It`s my third post" likes="2" />
    </div>
  );
};

export default MyPosts;
