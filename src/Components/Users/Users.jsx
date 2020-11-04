import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOperation } from "../../redux/operations/usersOperation";
import { getButton, getPage, getUsers } from "../../redux/selectors/selectors";
import { setButton } from "../../redux/actions/buttonAction";
import avatar from "../../images/icons/photo-cover.svg";
import "./Users.scss";

const Users = () => {
  const users = useSelector((state) => getUsers(state));
  const button = useSelector((state) => getButton(state));
  const page = useSelector((state) => getPage(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOperation(page));
  }, []);

  const showMoreHandler = () => {
    dispatch(setButton(false));
    dispatch(getUserOperation(page));
  };

  return (
    <section id="users" className="users">
      <div className="users__wrapper">
        <h2 className="users__section_title">Our cheerful users</h2>

        <p className="users__section_desc">
          Attention! Sorting users by registration date
        </p>

        <ul className="users__list">
          {users.length > 0 &&
            users.map((user) => (
              <li key={user.id} className="users__list_item">
                <img
                  className="users__list_item_avatar"
                  src={user.photo}
                  alt="avatar"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = avatar;
                  }}
                />
                <h3 className="users__list_item_name">{user.name}</h3>
                <p className="users__list_item_position">{user.position}</p>
                <a
                  href={`email: ${user.email}`}
                  className="users__list_item_email_link"
                >
                  <p className="users__list_item_email">{user.email}</p>
                  <span className="users__list_item_email_tooltip">
                    {user.email}
                  </span>
                </a>
                <a
                  href={`tel: ${user.phone}`}
                  className="users__list_item_phone"
                >
                  {user.phone}
                </a>
              </li>
            ))}
        </ul>

        {button && (
          <button onClick={showMoreHandler} className="users__btn">
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

export default Users;
