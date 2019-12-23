import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/dialogsReducer";

const Dialogs = props => {
  let newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  let onUpdateMessageBody = e => {
    let text = e.target.value;

    props.dispatch(updateNewMessageBodyCreator(text));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {props.state.dialogs.map(d => (
          <DialogItem name={d.name} id={d.id} />
        ))}
      </div>
      <div className={styles.messages}>
        <div>
          {props.state.messages.map(message => (
            <Message message={message} />
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
