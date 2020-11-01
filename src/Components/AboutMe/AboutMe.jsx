import React from "react";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="aboutMe__section">
      <div className="aboutMe__wrapper">
        <h2 className="aboutMe__section_title">Let's get acquainted</h2>

        <h3 className="aboutMe__title">I am cool frontend developer</h3>

        <p className="aboutMe__desc aboutMe__desc--first">
          We will evaluate how clean your approach to writing CSS and Javascript
          code is. You can use any CSS and Javascript 3rd party libraries
          without any restriction.
        </p>

        <p className="aboutMe__desc aboutMe__desc--second">
          If 3rd party css/javascript libraries are added to the project via
          bower/npm/yarn you will get bonus points. If you use any task runner
          (gulp/webpack) you will get bonus points as well. Slice service
          directory page P​SD mockup​ into HTML5/CSS3.
        </p>

        <button className="aboutMe__btn">Sing up now</button>
      </div>
    </section>
  );
};

export default AboutMe;
