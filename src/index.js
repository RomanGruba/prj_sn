import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/state";
import App from "./App";

let rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      addPost={store.addPost.bind(store)}
      changeNewPostText={store.changeNewPostText.bind(store)}
    />,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
