import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../../redux/profileReducer";

class ProfileContainer extends Component {
  componentWillMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(res => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    console.log(this.props.profile);
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
