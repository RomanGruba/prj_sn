import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://f0.pngfuel.com/png/477/472/node-js-javascript-react-logo-express-js-javascript-logo-png-clip-art.png"
          alt=""
        />
      </header>
      <sidebar className="sidebar">
        <ul>
          <li>Profile</li>
          <li>Messages</li>
        </ul>
      </sidebar>
      <section className="content">Main content</section>
    </div>
  );
};

export default App;
