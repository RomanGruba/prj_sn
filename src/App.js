import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { getAuthUserData } from "../src/redux/authReducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Preloader from "./components/common/Preloader/Preloader";
import { initializeApp } from "./redux/appReducer";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    // debugger;
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Sidebar />
          <div className="app-wrapper_content">
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
