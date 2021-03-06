import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    changeTextArea: text => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
    addPost: value => {
      dispatch(addPostActionCreator(value));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
