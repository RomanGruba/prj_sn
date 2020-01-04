import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentWillMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUserData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUserData);
