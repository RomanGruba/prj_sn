import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
