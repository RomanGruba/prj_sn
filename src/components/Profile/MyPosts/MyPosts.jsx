import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi! It`s my first post", likesCount: 12 },
    { id: 2, message: "Hi! It`s my second post", likesCount: 13 },
    { id: 3, message: "Hi! It`s my third post", likesCount: 1 }
  ];
  return (
    <div className={styles.posts}>
      <h3> My posts</h3>
      <div>
        <textarea name=""></textarea>
        <div className={styles.addPostButton}>
          <button>Add post</button>
        </div>
      </div>
      {posts.map(post => (
        <Post message={post.message} likes={post.likesCount} />
      ))}
    </div>
  );
};

export default MyPosts;
