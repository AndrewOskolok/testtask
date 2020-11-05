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
              <a className="modalMenu__list_item_link" href="#register">
                About me
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Relationships
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Users
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Sign Up
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Terms and Conditions
              </a>
            </li>
          </ul>
          <ul className="modalMenu__list">
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                How it works
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Partnershop
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Help
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Leave testimonial
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Contact us
              </a>
            </li>
          </ul>
          <ul className="modalMenu__list">
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Articles
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Our news
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Testimonials
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
                Licenses
              </a>
            </li>
            <li className="modalMenu__list_item">
              <a className="modalMenu__list_item_link" href="#register">
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
