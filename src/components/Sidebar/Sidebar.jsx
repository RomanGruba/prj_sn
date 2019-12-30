import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <sidebar className={styles.sidebar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/profile" activeClassName={styles.active}>
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs" activeClassName={styles.active}>
            Messages
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/users" activeClassName={styles.active}>
            Users
          </NavLink>
        </li>
        <li className={styles.item}>
          <a href="#">News</a>
        </li>
        <li className={styles.item}>
          <a href="#">Music</a>
        </li>
        <li className={styles.item}>
          <a href="#">Settings</a>
        </li>
      </ul>
    </sidebar>
  );
};

export default Sidebar;
