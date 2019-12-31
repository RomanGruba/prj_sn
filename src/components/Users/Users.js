import React, { Component } from "react";
import styles from "./Users.module.css";
import userLogo from "../../assets/images/userIcon.png";
import axios from "axios";

export default class UsersC extends Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUser(res.data.totalCount);
      });
  }

  render() {
    let pagesCount = this.props.totalUsersCount / this.props.pageSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map(page => (
            <span>{page}</span>
          ))}
        </div>
        {this.props.users.map(user => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  className={styles.userPhoto}
                  src={
                    user.photos.small !== null ? user.photos.small : userLogo
                  }
                  alt=""
                />
              </div>
              <div>
                {user.followed ? (
                  <button onClick={() => this.props.unfollow(user.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(user.id)}>
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
              <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
