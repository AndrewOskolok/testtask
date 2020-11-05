import React from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../redux/actions/modalAction";
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();

  const modalMenuHandler = () => {
    dispatch(setModal("modalmenu"));
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <a className="header__logo_link" href="/">
            <p className="visually-hidden">logotype testtask</p>
          </a>
        </div>

        <nav className="header__nav">
          <div onClick={modalMenuHandler} className="header__nav_burger"></div>

          <ul className="header__nav_list">
            <li className="header__nav_list_item">
              <a className="header__nav_list_item_link" href="#register">
                About me
              </a>
            </li>
            <li className="header__nav_list_item">
              <a className="header__nav_list_item_link" href="#register">
                Relationships
              </a>
            </li>
            <li className="header__nav_list_item">
              <a className="header__nav_list_item_link" href="#register">
                Requirement
              </a>
            </li>
            <li className="header__nav_list_item">
              <a className="header__nav_list_item_link" href="#register">
                Users
              </a>
            </li>
            <li className="header__nav_list_item">
              <a className="header__nav_list_item_link" href="#register">
                Sing Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
