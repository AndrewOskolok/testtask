import React, { Suspense } from "react";

const Home = React.lazy(() => import("../Home/Home"));
const AboutMe = React.lazy(() => import("../AboutMe/AboutMe"));
const Users = React.lazy(() => import("../Users/Users"));
const Register = React.lazy(() => import("../Register/Register"));

// import Home from "../Home/Home";
// import AboutMe from "../AboutMe/AboutMe";
// import Users from "../Users/Users";
// import Register from "../Register/Register";
// import "./Main.scss";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Home />
        <AboutMe />
        <Users />
        <Register />
      </Suspense>
    </main>
  );
};

export default Main;
