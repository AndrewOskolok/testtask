import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Modal from "../Modal/Modal";
import { getToken } from "../../redux/selectors/selectors";
import { setModal } from "../../redux/actions/modalAction";
import "./Register.scss";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

const initialState = {
  name: "",
  email: "",
  phone: "",
  position: "",
  image: "empty",
};
console.log("load");
const Register = () => {
  const [inputForm, setInputForm] = useState(initialState);
  const [positions, setPositions] = useState(null);

  const token = useSelector((state) => getToken(state));

  const dispatch = useDispatch();

  const getPositions = async () => {
    try {
      const request = await axios.get(`/positions`);
      setPositions(request.data.positions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPositions();
  }, []);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setInputForm((state) => ({ ...state, [name]: value }));
  };

  const inputImgHandler = ({ target }) => {
    setInputForm((state) => ({ ...state, image: target.files[0] }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("position_id", inputForm.position);
      formData.append("name", inputForm.name);
      formData.append("email", inputForm.email);
      formData.append("phone", inputForm.phone);
      formData.append("photo", inputForm.image);

      const result = await axios({
        method: "post",
        data: formData,
        url: "/users",
        headers: {
          Token: token,
          "Content-Type": "multipart/form-data",
        },
      });

      result.status && dispatch(setModal("modal"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="register" className="register">
      <div className="register__wrapper">
        <h2 className="register__title">Register to get a work</h2>

        <p className="register__desc">
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </p>

        <form onSubmit={submitHandler} className="register__form">
          <label className="register__form_label">Name</label>
          <input
            onChange={inputHandler}
            className="register__form_input"
            name="name"
            type="text"
            value={inputForm.name}
            placeholder="Your name"
            minLength="2"
            maxLength="60"
            required
          />

          <label className="register__form_label">Email</label>
          <input
            onChange={inputHandler}
            className="register__form_input"
            name="email"
            type="email"
            value={inputForm.email}
            placeholder="Your email"
            minLength="2"
            maxLength="100"
            required
          />

          <label className="register__form_label">Phone number</label>
          <input
            onChange={inputHandler}
            className="register__form_input"
            name="phone"
            type="tel"
            value={inputForm.phone}
            pattern="[+]{1}[380]{3}[0-9]{9}"
            placeholder="+380XXXXXXXXX"
            required
          />

          <p className="register__form_list_title">Select your position</p>

          <ul className="register__form_list">
            {positions &&
              positions.map((pos) => (
                <li key={pos.id} className="register__form_list_item">
                  <input
                    onClick={inputHandler}
                    className="register__form_list_item_input"
                    type="radio"
                    name="position"
                    value={pos.id}
                    id={pos.id}
                    hidden
                  ></input>
                  <label
                    className="register__form_list_item_btn"
                    htmlFor={pos.id}
                  ></label>
                  <label
                    className="register__form_list_item_label"
                    htmlFor={pos.id}
                  >
                    {pos.name}
                  </label>
                </li>
              ))}
          </ul>

          <label className="register__form_label" htmlFor="true">
            Photo
          </label>

          <div
            className={`register__form_file ${
              inputForm.image !== "empty" && `register__form_file_chosen`
            } ${
              inputForm.image === undefined && `register__form_file_no_chosen`
            }`}
          >
            <p className="register__form_file_text">
              {inputForm.image === "empty" && `Upload your file`}
              {inputForm.image && inputForm.image.name}
              {inputForm.image === undefined && `No file chosen`}
            </p>
            <label className="register__form_file_label" htmlFor="file">
              Browse
            </label>

            <input
              onChange={inputImgHandler}
              type="file"
              name="image"
              accept=".jpg,.jpeg,.png"
              id="file"
              hidden
            />
          </div>

          <button className="register__form_submit_btn" type="submit">
            Sing up now
          </button>
        </form>
      </div>

      <Modal />
    </section>
  );
};

export default Register;
