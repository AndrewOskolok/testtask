import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { setModal } from "../../redux/actions/modalAction";
import { getModal } from "../../redux/selectors/selectors";
import { setUsers } from "../../redux/actions/usersAction";
import { setPage } from "../../redux/actions/pageAction";
import { getUserOperation } from "../../redux/operations/usersOperation";
import "./transition/Modal.scss";
import "./Modal.scss";
import Ovarlay from "../Ovarlay/Ovarlay";

const Modal = () => {
  const modal = useSelector((state) => getModal(state));

  const dispatch = useDispatch();

  const closeModal = ({ target }) => {
    if (target.id === "overlay" || target.id === "closure") {
      document.body.style.overflowY = "scroll";
      dispatch(setModal(false));
      dispatch(setUsers([]));
      dispatch(setPage(1));
      dispatch(getUserOperation(1));
    }
  };

  return (
    <>
      <CSSTransition
        in={modal === "modal"}
        timeout={200}
        classNames="modal"
        unmountOnExit
      >
        <>
          <div className="modal">
            <p className="modal__title">Congratulations</p>

            <button
              onClick={closeModal}
              id="closure"
              className="modal__close_btn"
            ></button>

            <p className="modal__message">
              You have successfully passed the registration
            </p>

            <button
              onClick={closeModal}
              id="closure"
              className="modal__agree_btn"
            >
              Great
            </button>
          </div>
          <div onClick={closeModal} id="overlay" className="overlay"></div>
        </>
      </CSSTransition>

      {modal === "modal" && <Ovarlay modal={modal} />}
    </>
  );
};

export default Modal;
