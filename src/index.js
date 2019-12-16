import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let posts = [
  { id: 1, message: "Hi! It`s my first post", likesCount: 12 },
  { id: 2, message: "Hi! It`s my second post", likesCount: 13 },
  { id: 3, message: "Hi! It`s my third post", likesCount: 1 }
];

let dialogs = [
  { id: 1, name: "Dimich" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Roman" },
  { id: 4, name: "Ivan" },
  { id: 5, name: "Vadim" }
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} />,
  document.getElementById("root")
);
