import React from "react";
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
    </main>
  );
};

export default Main;
