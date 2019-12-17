import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = props => {
  return (
    <section className={styles.content}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </section>
  );
};

export default Profile;
