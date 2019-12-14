import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <sidebar className={styles.sidebar}>
      <ul>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </sidebar>
  );
};

export default Sidebar;
