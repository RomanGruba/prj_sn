import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = props => {
  return (
    <section className={styles.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        changeNewPostText={props.changeNewPostText}
        addPost={props.addPost}
      />
    </section>
  );
};

export default Profile;
