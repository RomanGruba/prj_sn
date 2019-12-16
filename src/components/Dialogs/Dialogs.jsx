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
  let dialogsData = [
    { id: 1, name: "Dimich" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Roman" },
    { id: 4, name: "Ivan" },
    { id: 5, name: "Vadim" }
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsData.map(d => (
          <DialogsItem name={d.name} id={d.id} />
        ))}
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
