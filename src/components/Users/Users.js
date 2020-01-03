import React from "react";
import styles from "./Users.module.css";
import userLogo from "../../assets/images/userIcon.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let followUser = userID => {
    axios
      .post(
        "https://social-network.samuraijs.com/api/1.0/follow/" + userID,
        {},
        {
          withCredentials: true,
          headers: { "API-KEY": "e34c2c28-0715-41fd-ae66-7d008cda5c50" }
        }
      )
      .then(res => {
        if (res.data.resultCode == 0) {
          props.follow(userID);
        }
      });
  };

  let unfollowUser = userID => {
    axios
      .delete("https://social-network.samuraijs.com/api/1.0/follow/" + userID, {
        withCredentials: true,
        headers: { "API-KEY": "e34c2c28-0715-41fd-ae66-7d008cda5c50" }
      })
      .then(res => {
        if (res.data.resultCode == 0) {
          props.unfollow(userID);
        }
      });
  };

  return (
    <div>
      <div>
        {pages.map(page => (
          <span
            className={props.currentPage === page && styles.selectedPage}
            onClick={() => props.onPageChanged(page)}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  className={styles.userPhoto}
                  src={
                    user.photos.small !== null ? user.photos.small : userLogo
                  }
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button onClick={() => unfollowUser(user.id)}>Unfollow</button>
              ) : (
                <button onClick={() => followUser(user.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.city"}</div>
              <div>{"user.location.country"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
