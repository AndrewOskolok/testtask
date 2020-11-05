import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { getModal } from "../../redux/selectors/selectors";
import Ovarlay from "../Ovarlay/Ovarlay";
import "./transition/ModalMenu.scss";
import "./ModalMenu.scss";

const ModalMenu = () => {
  const modal = useSelector((state) => getModal(state));

  return (
    <>
      <CSSTransition
        in={modal === "modalmenu"}
        timeout={200}
        classNames="modal-menu"
        unmountOnExit
      >
        <div className="modalMenu">
          <div className="modalMenu__logo">
            <a className="modalMenu__logo_link" href="/">
              <p className="visually-hidden">logotype testtask</p>
            </a>
          </div>

          <ul className="modalMenu__list">
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#about">
                About me
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Relationships
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#users">
                Users
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Sign Up
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Terms and Conditions
              </a>
            </li>
          </ul>
          <ul className="modalMenu__list">
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                How it works
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Partnershop
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Help
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Leave testimonial
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Contact us
              </a>
            </li>
          </ul>
          <ul className="modalMenu__list">
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Articles
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Our news
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Testimonials
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Licenses
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#none">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </CSSTransition>

      {modal === "modalmenu" && <Ovarlay modal={modal} />}
    </>
  );
};

export default ModalMenu;
