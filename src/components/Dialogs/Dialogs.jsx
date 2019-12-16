import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {props.dialogs.map(d => (
          <DialogItem name={d.name} id={d.id} />
        ))}
      </div>
      <div className={styles.messages}>
        <Message message="Hi!" />
        <Message message="Hellow" />
        <Message message="Salut" />
      </div>
    </div>
  );
};

export default Dialogs;