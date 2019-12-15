import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = props => {
  let path = "/dialogs/" + props.id;

  return (
    <div className="dialog">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = props => {
  return <div className="message">{props.message}</div>;
};

const Dialogs = props => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogsItem name="Dimich" id="1" />
        <DialogsItem name="Andrey" id="2" />
        <DialogsItem name="Roman" id="3" />
      </div>
      <div className={styles.messages}>
        <MessageItem message="Hi!" />
        <MessageItem message="Hellow" />
        <MessageItem message="Salut" />
      </div>
    </div>
  );
};

export default Dialogs;
