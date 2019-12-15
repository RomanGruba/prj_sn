import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <section className={styles.content}>
      <ProfileInfo />
      <MyPosts />
    </section>
  );
};

export default Profile;
