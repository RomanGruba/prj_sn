import React from "react";
import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator
} from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi! It`s my first post", likesCount: 12 },
    { id: 2, message: "Hi! It`s my second post", likesCount: 13 },
    { id: 3, message: "Hi! It`s my third post", likesCount: 1 }
  ]
};

it("length of posts should be incremented", () => {
  let action = addPostActionCreator("text for test");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});

it("new post message is correct", () => {
  let action = addPostActionCreator("text for test");
  let newState = profileReducer(state, action);
  expect(newState.posts[3].message).toBe("text for test");
});

it("after deleting length of messages should decrement", () => {
  let action = deletePostActionCreator(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});

it("after deleting length of messages shouldnot be changed if id is incorrect", () => {
  let action = deletePostActionCreator(35);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
