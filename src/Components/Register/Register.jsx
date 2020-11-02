import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <section id="register" className="register">
      <div className="register__wrapper">
        <h2 className="register__title">Register to get a work</h2>

        <p className="register__desc">
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </p>

        <form className="register__form">
          <label className="register__form_label">Name</label>
          <input
            className="register__form_input"
            type="text"
            placeholder="Your name"
          />

          <label className="register__form_label">Email</label>
          <input
            className="register__form_input"
            type="email"
            placeholder="Your email"
          />

          <label className="register__form_label">Phone number</label>
          <input
            className="register__form_input"
            type="tel"
            placeholder="+380 XX XXX XX XX"
          />

          <p className="register__form_list_title">Select your position</p>

          <ul className="register__form_list">
            <li className="register__form_list_item">
              <input
                className="register__form_list_item_input"
                type="radio"
                name="position"
                value="front"
                id="pos1"
                hidden
              ></input>
              <label
                className="register__form_list_item_btn"
                htmlFor="pos1"
              ></label>
              <label className="register__form_list_item_label" htmlFor="pos1">
                Frontend developer
              </label>
            </li>

            <li className="register__form_list_item">
              <input
                className="register__form_list_item_input"
                type="radio"
                name="position"
                value="back"
                id="pos2"
                hidden
              ></input>
              <label
                className="register__form_list_item_btn"
                htmlFor="pos2"
              ></label>
              <label className="register__form_list_item_label" htmlFor="pos2">
                Backend developer
              </label>
            </li>

            <li className="register__form_list_item">
              <input
                className="register__form_list_item_input"
                type="radio"
                name="position"
                value="des"
                id="pos3"
                hidden
              ></input>
              <label
                className="register__form_list_item_btn"
                htmlFor="pos3"
              ></label>
              <label className="register__form_list_item_label" htmlFor="pos3">
                Designer
              </label>
            </li>

            <li className="register__form_list_item">
              <input
                className="register__form_list_item_input"
                type="radio"
                name="position"
                value="qa"
                id="pos4"
                hidden
              ></input>
              <label
                className="register__form_list_item_btn"
                htmlFor="pos4"
              ></label>
              <label className="register__form_list_item_label" htmlFor="pos4">
                QA
              </label>
            </li>
          </ul>

          <label className="register__form_label" htmlFor="true">
            Photo
          </label>

          <div className="register__form_file">
            <p className="register__form_file_text">Upload your file</p>
            <label className="register__form_file_label" htmlFor="file">
              Browse
            </label>

            <input type="file" accept=".jpg,.jpeg,.png" id="file" hidden />
          </div>

          <button className="register__form_submit_btn" type="submit">
            Sing up now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
