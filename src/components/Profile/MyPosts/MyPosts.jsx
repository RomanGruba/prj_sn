import React from "react";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      My posts
      <div>
        <textarea name=""></textarea>
        <button>Add post</button>
      </div>
    </div>
  );
};

export default MyPosts;
