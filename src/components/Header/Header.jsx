import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="https://f0.pngfuel.com/png/477/472/node-js-javascript-react-logo-express-js-javascript-logo-png-clip-art.png"
        alt=""
      />
      <div className={styles.loginBlock}>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
