const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Hellow" },
    { id: 3, message: "Good" },
    { id: 4, message: "Perfect" },
    { id: 5, message: "Yellow" }
  ],
  dialogs: [
    { id: 1, name: "Dimich" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Roman" },
    { id: 4, name: "Ivan" },
    { id: 5, name: "Vadim" }
  ],
  newMessageBody: "555"
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.messages.push({ id: 6, message: body });
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = message => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: message
});

export default dialogsReducer;
