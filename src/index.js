import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/redux-store";
import App from "./App";

let rerenderEntireTree = state => {
  ReactDOM.render(
    <App store={store} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
