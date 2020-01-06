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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: action.message }]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = message => ({ type: SEND_MESSAGE, message });
export const updateNewMessageBodyCreator = message => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: message
});

export default dialogsReducer;
