import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <section className={styles.content}>
      <img
        className={styles.contentImage}
        src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/spring/pink-blossom-on-a-branch.jpg/pink-blossom-on-a-branch.jpg/metofficegovuk%3AheroMedium"
        alt="content "
      ></img>
      <MyPosts />
    </section>
  );
};

export default Profile;
