import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me")
      .then(res => {
        debugger;
        console.log(res);
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
