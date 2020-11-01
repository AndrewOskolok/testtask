import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home__wrapper">
        <h1 className="home__title">
          Test assignment for Frontend Developer position
        </h1>
        <p className="home__desc">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository.
        </p>
        <button className="home__btn">Sing up now</button>
      </div>
    </section>
  );
};

export default Home;
