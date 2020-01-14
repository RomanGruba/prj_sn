import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../Profilestatus/ProfileStatusWithHooks";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/spring/pink-blossom-on-a-branch.jpg/pink-blossom-on-a-branch.jpg/metofficegovuk%3AheroMedium"
          alt="content "
        ></img>
      </div>

      <img src={props.profile.photos.large} alt="large" />
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
