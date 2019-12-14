import React from "react";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name=""></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <div className={styles.item}>
          <img
            className={styles.postAvatar}
            src="https://mpng.pngfly.com/20180531/wxl/kisspng-avatar-computer-icons-logo-photographer-5b102d1e728c13.7251972015277867824692.jpg"
            alt=""
          />
          <span className={styles.postText}>post 1</span>
        </div>
        <div className={styles.item}>
          <img
            className={styles.postAvatar}
            src="https://mpng.pngfly.com/20180531/wxl/kisspng-avatar-computer-icons-logo-photographer-5b102d1e728c13.7251972015277867824692.jpg"
            alt=""
          />
          <span className={styles.postText}>post 2</span>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
