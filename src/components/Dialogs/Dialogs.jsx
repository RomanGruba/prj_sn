import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = props => {
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessageCreator();
  };

  let onUpdateMessageBody = e => {
    let text = e.target.value;
    props.updateNewMessageBodyCreator(text);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {props.dialogsPage.dialogs.map(d => (
          <DialogItem key={d.id} name={d.name} id={d.id} />
        ))}
      </div>
      <div className={styles.messages}>
        <div>
          {props.dialogsPage.messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onUpdateMessageBody}
            placeholder="enter your message"
          ></textarea>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
