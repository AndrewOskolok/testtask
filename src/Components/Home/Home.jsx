import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home__wrapper">
        <h1 className="home__title">
          Test assignment {<br />} for Frontend Developer position
        </h1>
        <p className="home__desc">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository. Please be patient, we consider
          and respond to every application that meets minimum requirements. We
          look forward to your submission. Good luck! The photo has to scale in
          the banner area on the different screens
        </p>
        <a href="#register" className="home__btn">
          Sing up now
        </a>
      </div>
    </section>
  );
};

export default Home;
