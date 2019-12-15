import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/spring/pink-blossom-on-a-branch.jpg/pink-blossom-on-a-branch.jpg/metofficegovuk%3AheroMedium"
          alt="content "
        ></img>
      </div>
      <div className={styles.description}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
