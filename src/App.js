import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = props => {
  console.log(props);
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      {/* <Profile /> */}
      <Dialogs />
    </div>
  );
};

export default App;
