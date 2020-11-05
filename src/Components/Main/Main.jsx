import React from "react";
import TrackVisibility from "react-on-screen";

import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Users from "../Users/Users";
import Register from "../Register/Register";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <Home />
      <AboutMe />

      <TrackVisibility once offset={200}>
        {({ isVisible }) => isVisible && <Users />}
      </TrackVisibility>

      <TrackVisibility once offset={200}>
        {({ isVisible }) => isVisible && <Register />}
      </TrackVisibility>
    </main>
  );
};

export default Main;
