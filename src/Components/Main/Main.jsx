import React from "react";
// import TrackVisibility from "react-on-screen";

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

      <Users />
      <Register />
      {/* <TrackVisibility once partialVisibility offset={500}>
        {({ isVisible }) => isVisible && <Users />}
      </TrackVisibility>

      <TrackVisibility once partialVisibility offset={500}>
        {({ isVisible }) => isVisible && <Register />}
      </TrackVisibility> */}
    </main>
  );
};

export default Main;
