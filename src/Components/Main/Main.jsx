import React, { Suspense } from "react";
import TrackVisibility from "react-on-screen";

import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
// import Users from "../Users/Users";
// import Register from "../Register/Register";
import "./Main.scss";

const Users = React.lazy(() => import("../Users/Users"));
const Register = React.lazy(() => import("../Register/Register"));

const Main = () => {
  return (
    <main>
      <Home />
      <AboutMe />

      <Suspense fallback={null}>
        <TrackVisibility once offset={200}>
          {({ isVisible }) => isVisible && <Users />}
        </TrackVisibility>

        <TrackVisibility once offset={200}>
          {({ isVisible }) => isVisible && <Register />}
        </TrackVisibility>
      </Suspense>
    </main>
  );
};

export default Main;
