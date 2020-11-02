import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <a className="header__logo_link" href="/">
            <p className="visually-hidden">logotype testtask</p>
          </a>
        </div>

        <nav className="header__nav">
          <div className="header__nav_burger"></div>

          <ul className="header__nav_list">
            <li className="header__nav_list_item">
              <a className="header__nav_list_item_link" href="#about">
                About me
              </a>
            </li>
            <li className="header__nav_list_item">
              <a className="header__nav_list_item_link" href="#none">
                Relationships
              </a>
            </li>
            <li className="header__nav_list_item">
              <a className="header__nav_list_item_link" href="#none">
                Requirement
              </a>
            </li>
            <li className="header__nav_list_item">
              <a className="header__nav_list_item_link" href="#users">
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
