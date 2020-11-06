import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Modal from "../Modal/Modal";
import { postUserOperation } from "../../redux/operations/usersOperation";
import { getTokenOperation } from "../../redux/operations/tokenOperation";
import { getToken } from "../../redux/selectors/selectors";
import "./Register.scss";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  position: "",
  image: "empty",
};

const initialErrMes = {
  name: "",
  email: "",
  phone: "",
  position: "",
  image: "",
  status: false,
};

const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const phonePattern = /^[+]{0,1}380([0-9]{9})$/;

const Register = () => {
  const [inputForm, setInputForm] = useState(initialForm);
  const [positions, setPositions] = useState(null);
  const [errMes, setErrMes] = useState(initialErrMes);

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
    dispatch(getTokenOperation());
  }, [dispatch]);

  // NAME VERIFICATION REAL-TIME
  useEffect(() => {
    if (inputForm.name.length === 1 || inputForm.name.length > 60) {
      setErrMes((state) => ({
        ...state,
        name: "Name length from 2 to 60 characters",
      }));
    } else {
      setErrMes((state) => ({
        ...state,
        name: "",
      }));
    }
  }, [inputForm.name]);

  // EMAIL VERIFICATION REAL-TIME
  useEffect(() => {
    if (inputForm.email.length === 1 || inputForm.email.length > 100) {
      setErrMes((state) => ({
        ...state,
        email: "Email length from 2 to 100 characters",
      }));
    } else if (inputForm.email.length && !emailPattern.test(inputForm.email)) {
      setErrMes((state) => ({
        ...state,
        email: "Not valid email",
      }));
    } else {
      setErrMes((state) => ({
        ...state,
        email: "",
      }));
    }
  }, [inputForm.email]);

  // PHONE VERIFICATION REAL-TIME
  useEffect(() => {
    if (inputForm.phone.length && !phonePattern.test(inputForm.phone)) {
      setErrMes((state) => ({
        ...state,
        phone: "Phone should start with code of Ukraine +380",
      }));
    } else {
      setErrMes((state) => ({
        ...state,
        phone: "",
      }));
    }
  }, [inputForm.phone]);

  // POSITION VERIFICATION REAL-TIME
  useEffect(() => {
    if (inputForm.position.length) {
      setErrMes((state) => ({
        ...state,
        position: "",
      }));
    }
  }, [inputForm.position]);

  // IMAGE VERIFICATION REAL-TIME
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = function () {
      const image = new Image();
      image.src = reader.result;
      image.onload = function () {
        if (inputForm.image && inputForm.image.size > 5 * 1024 * 1024) {
          setErrMes((state) => ({
            ...state,
            image: "Image size should not exceed 5 mb",
          }));
        } else if (image.width < 70 && image.height < 70) {
          setErrMes((state) => ({
            ...state,
            image: "The image must be no less than 70x70",
          }));
        } else {
          setErrMes((state) => ({
            ...state,
            image: "",
          }));
        }
      };
    };

    if (inputForm.image === undefined) {
      setErrMes((state) => ({
        ...state,
        image: "The image field must not be empty",
      }));
    }

    inputForm.image &&
      inputForm.image !== "empty" &&
      reader.readAsDataURL(inputForm.image);
  }, [inputForm.image]);

  useEffect(() => {
    !errMes.name &&
    !errMes.email &&
    !errMes.phone &&
    !errMes.position &&
    !errMes.image
      ? setErrMes((state) => ({
          ...state,
          status: true,
        }))
      : setErrMes((state) => ({
          ...state,
          status: false,
        }));
  }, [errMes.name, errMes.email, errMes.phone, errMes.position, errMes.image]);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setInputForm((state) => ({ ...state, [name]: value }));
  };

  const inputImgHandler = ({ target }) => {
    setInputForm((state) => ({ ...state, image: target.files[0] }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // NAME VERIFICATION ON SUBMIT
    if (inputForm.name.length === 0) {
      setErrMes((state) => ({
        ...state,
        name: "The name field must not be empty",
      }));
    }

    // EMAIL VERIFICATION ON SUBMIT
    if (inputForm.email.length === 0) {
      setErrMes((state) => ({
        ...state,
        email: "The email field must not be empty",
      }));
    }

    // PHONE VERIFICATION ON SUBMIT
    if (inputForm.phone.length === 0) {
      setErrMes((state) => ({
        ...state,
        phone: "The phone field must not be empty",
      }));
    }

    // POSITION VERIFICATION ON SUBMIT
    if (inputForm.position.length === 0) {
      setErrMes((state) => ({
        ...state,
        position: "The position field must not be empty",
      }));
    }

    // IMAGE VERIFICATION ON SUBMIT
    if (inputForm.image === "empty") {
      setErrMes((state) => ({
        ...state,
        image: "The image field must not be empty",
      }));
    }

    inputForm.name &&
      inputForm.email &&
      inputForm.phone &&
      inputForm.position &&
      inputForm.image &&
      errMes.status &&
      isValidate();
  };

  const isValidate = () => {
    setInputForm(initialForm);
    setErrMes(initialErrMes);

    dispatch(postUserOperation(inputForm, token));
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
            className={`register__form_input ${
              errMes.name && `register__form_input_error`
            }`}
            name="name"
            type="text"
            value={inputForm.name}
            placeholder="Your name"
          />
          <p className="register__form_input_error_message">{errMes.name}</p>

          <label className="register__form_label">Email</label>
          <input
            onChange={inputHandler}
            className={`register__form_input ${
              errMes.email && `register__form_input_error`
            }`}
            name="email"
            type="text"
            value={inputForm.email}
            placeholder="Your email"
          />
          <p className="register__form_input_error_message">{errMes.email}</p>

          <label className="register__form_label">Phone number</label>
          <input
            onChange={inputHandler}
            className={`register__form_input ${
              errMes.phone && `register__form_input_error`
            }`}
            name="phone"
            type="tel"
            value={inputForm.phone}
            placeholder="+380XXXXXXXXX"
          />
          <p className="register__form_input_error_message">{errMes.phone}</p>

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
          <p className="register__form_input_error_message">
            {errMes.position}
          </p>

          <label className="register__form_label" htmlFor="true">
            Photo
          </label>

          <div
            className={`register__form_file ${
              inputForm.image !== "empty" &&
              inputForm.image &&
              `register__form_file_chosen`
            }  ${errMes.image && `register__form_file_no_chosen`}`}
          >
            <p className="register__form_file_text">
              {inputForm.image === "empty" && `Upload your file`}
              {inputForm.image && inputForm.image.name}
              {inputForm.image === undefined && `No file chosen`}
            </p>
            <label
              className={`register__form_file_label ${
                inputForm.image &&
                inputForm.image !== "empty" &&
                `register__form_file_label_chosen`
              } ${errMes.image && `register__form_file_label_no_chosen`}`}
              htmlFor="file"
            >
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
          <p className="register__form_input_error_message">{errMes.image}</p>

          <button
            className={`register__form_submit_btn ${
              !errMes.status && `register__form_submit_btn_disabled`
            }`}
            type="submit"
          >
            Sing up now
          </button>
        </form>
      </div>

      <Modal />
    </section>
  );
};

export default Register;
