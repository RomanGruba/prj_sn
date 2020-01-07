import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const Dialogs = props => {
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessageCreator();
  };

  let onUpdateMessageBody = e => {
    let text = e.target.value;
    props.updateNewMessageBodyCreator(text);
  };

  let addNewMessage = values => {
    props.sendMessageCreator(values.newMessageBody);
  };

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
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength15 = maxLengthCreator(15);

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength15]}
        name="newMessageBody"
        placeholder="enter your message"
      />
      <button>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
