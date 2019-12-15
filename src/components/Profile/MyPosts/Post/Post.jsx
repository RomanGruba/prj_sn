import React from "react";
import styles from "./Post.module.css";

const Post = props => {
  return (
    <div className={styles.item}>
      <img
        className={styles.logo}
        src="https://www.datocms-assets.com/7036/1535922717-react-logo.svg"
        alt=""
      />
      {props.message}
      <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
