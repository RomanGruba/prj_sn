import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = props => {
  return (
    <section className={styles.content}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </section>
  );
};

export default Profile;
