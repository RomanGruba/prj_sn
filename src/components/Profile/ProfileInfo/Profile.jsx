import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = props => {
  return (
    <section className={styles.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;
