import React from "react";
import styles from "./Users.module.css";
import userLogo from "../../assets/images/userIcon.png";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
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
                <button
                  disabled={props.followingInProgress.some(
                    el => el === user.id
                  )}
                  onClick={() => props.unfollow(user.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    el => el === user.id
                  )}
                  onClick={() => props.follow(user.id)}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
