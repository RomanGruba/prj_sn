import React from "react";
import styles from "./Users.module.css";

let Users = props => {
  debugger;
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img className={styles.userPhoto} src={user.photoUrl} alt="" />
            </div>
            <div>
              {user.followed ? (
                <button onClick={() => props.unfollow(user.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.follow(user.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.city}</div>
              <div>{user.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
