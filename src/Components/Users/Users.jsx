import React, { useEffect, useState } from "react";
import axios from "axios";
import avatar from "../../images/icons/photo-cover.svg";
import "./Users.scss";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loadMoreStatus, setLoadMoreStatus] = useState(true);
  const [page, setPage] = useState(1);

  const getUser = async (page) => {
    try {
      const request = await axios.get(`/users?page=${page}&count=6`);
      setUsers((state) => [...state, ...request.data.users]);

      request.data.links.next_url !== null && setLoadMoreStatus(true);

      setPage((state) => state + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser(page);
  }, []);

  const showMoreHandler = () => {
    setLoadMoreStatus(false);
    getUser(page);
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
                <p className="users__list_item_email">{user.email}</p>
                <p className="users__list_item_phone">{user.phone}</p>
              </li>
            ))}
        </ul>

        {loadMoreStatus && (
          <button onClick={showMoreHandler} className="users__btn">
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

export default Users;
