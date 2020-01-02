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
        console.log(res.data);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = state => ({});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
