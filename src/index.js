import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { addPost, changeNewPostText } from "./redux/state";
import App from "./App";
import state from "./redux/state";

ReactDOM.render(
  <App state={state} addPost={addPost} changeNewPostText={changeNewPostText} />,
  document.getElementById("root")
);
