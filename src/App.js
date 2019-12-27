import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/ProfileInfo/Profile";
import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper_content">
          {/* <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} /> */}

          <Route
            path="/profile"
            render={() => <Profile store={props.store} />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
