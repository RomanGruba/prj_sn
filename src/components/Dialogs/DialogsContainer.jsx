import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
  // debugger;
  let state = props.store.getState();
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onUpdateMessageBody = body => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBodyCreator={onUpdateMessageBody}
      sendMessageCreator={onSendMessageClick}
      state={state.messagesPage}
    />
  );
};

export default DialogsContainer;
