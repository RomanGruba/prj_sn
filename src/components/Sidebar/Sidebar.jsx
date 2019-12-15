import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <sidebar className={styles.sidebar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#">Profile</a>
        </li>
        <li className={styles.item}>
          <a href="#">Messages</a>
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
