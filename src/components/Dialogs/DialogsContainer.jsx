import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onUpdateMessageBody = body => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBodyCreator={onUpdateMessageBody}
            sendMessageCreator={onSendMessageClick}
            state={state.messagesPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
