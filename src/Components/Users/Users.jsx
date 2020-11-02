import React from "react";
import "./Users.scss";

import avatar from "../../images/icons/photo-cover.svg";

const Users = () => {
  return (
    <section id="users" className="users">
      <div className="users__wrapper">
        <h2 className="users__section_title">Our cheerful users</h2>

        <p className="users__section_desc">
          Attention! Sorting users by registration date
        </p>

        <ul className="users__list">
          <li className="users__list_item">
            <img
              className="users__list_item_avatar"
              src={avatar}
              alt="avatar"
            />
            <h3 className="users__list_item_name">Maximillian</h3>
            <p className="users__list_item_position">
              Leading specialist of the Control Department
            </p>
            <p className="users__list_item_email">controldepartment@gmail</p>
            <p className="users__list_item_phone">+380 50 678 03 24</p>
          </li>
          <li className="users__list_item">
            <img
              className="users__list_item_avatar"
              src={avatar}
              alt="avatar"
            />
            <h3 className="users__list_item_name">
              Adolph Blaine Charles Davi Earl Matthew Matthe
            </h3>
            <p className="users__list_item_position">
              Contextual advertising specialist
            </p>
            <p className="users__list_item_email">adolph.blainecharles@...</p>
            <p className="users__list_item_phone">+380 50 678 03 24</p>
          </li>
          <li className="users__list_item">
            <img
              className="users__list_item_avatar"
              src={avatar}
              alt="avatar"
            />
            <h3 className="users__list_item_name">Elizabeth</h3>
            <p className="users__list_item_position">Frontend developer</p>
            <p className="users__list_item_email">elisabet.front@gmail.com</p>
            <p className="users__list_item_phone">+380 50 678 03 24</p>
          </li>

          <li className="users__list_item">
            <img
              className="users__list_item_avatar"
              src={avatar}
              alt="avatar"
            />
            <h3 className="users__list_item_name">Maximillian</h3>
            <p className="users__list_item_position">
              Leading specialist of the Control Department
            </p>
            <p className="users__list_item_email">controldepartment@gmail</p>
            <p className="users__list_item_phone">+380 50 678 03 24</p>
          </li>
          <li className="users__list_item">
            <img
              className="users__list_item_avatar"
              src={avatar}
              alt="avatar"
            />
            <h3 className="users__list_item_name">Elizabeth</h3>
            <p className="users__list_item_position">Frontend developer</p>
            <p className="users__list_item_email">elisabet.front@gmail.com</p>
            <p className="users__list_item_phone">+380 50 678 03 24</p>
          </li>
          <li className="users__list_item">
            <img
              className="users__list_item_avatar"
              src={avatar}
              alt="avatar"
            />
            <h3 className="users__list_item_name">Elizabeth</h3>
            <p className="users__list_item_position">Frontend developer</p>
            <p className="users__list_item_email">elisabet.front@gmail.com</p>
            <p className="users__list_item_phone">+380 50 678 03 24</p>
          </li>
        </ul>

        <button className="users__btn">Show more</button>
      </div>
    </section>
  );
};

export default Users;
