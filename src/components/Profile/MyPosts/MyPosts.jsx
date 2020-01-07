import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

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

let maxLength10 = maxLengthCreator(10);

const MyPostsForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPostBody"
        component={Textarea}
        placeholder="my new post"
        validate={[required, maxLength10]}
      />
      <div className={styles.addPostButton}>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsFormRedux = reduxForm({ form: "addMyPostForm" })(MyPostsForm);

export default MyPosts;
