import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = props => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className="dialog">
          <NavLink to="/dialogs/1">Dimich</NavLink>
        </div>
        <div className="dialog">
          <NavLink to="/dialogs/2">Andrey</NavLink>
        </div>
      </div>
      <div className={styles.messages}>
        <div className="message">Hi!</div>
        <div className="message">Hellow</div>
        <div className="message">Salut</div>
      </div>
    </div>
  );
};

export default Dialogs;
