import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      My posts
      <div>
        <textarea name=""></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hi! It`s my first post" likes="15" />
      <Post message="Hi! It`s my second post" likes="3" />
      <Post message="Hi! It`s my third post" likes="2" />
    </div>
  );
};

export default MyPosts;
