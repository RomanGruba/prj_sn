import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = props => {
  let onPostSubmit = values => {
    props.addPost(values.newPostBody);
  };

  return (
    <div className={styles.posts}>
      <h3> My posts</h3>
      <div>
        <MyPostsFormRedux onSubmit={onPostSubmit} />
      </div>
      {props.posts.map(post => (
        <Post message={post.message} likes={post.likesCount} />
      ))}
    </div>
  );
};

const MyPostsForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPostBody"
        component="textarea"
        placeholder="my new post"
      />
      <div className={styles.addPostButton}>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsFormRedux = reduxForm({ form: "addMyPostForm" })(MyPostsForm);

export default MyPosts;
