import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { addPost } from "./redux/state";
import App from "./App";

export let rerenderEntireTree = state => {
  ReactDOM.render(
    <App state={state} addPost={addPost} />,
    document.getElementById("root")
  );
};
