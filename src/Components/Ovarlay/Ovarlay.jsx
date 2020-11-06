import React from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { CSSTransition } from "react-transition-group";
import { setModal } from "../../redux/actions/modalAction";
import "./Ovarlay.scss";

const Ovarlay = (modal) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    document.body.style.overflowY = "scroll";
    dispatch(setModal({ status: false, errMess: "" }));
  };

  const scrollDeactivator = () => {
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      <CSSTransition
        in={modal !== false}
        timeout={200}
        classNames="overlay"
        unmountOnExit
      >
        <div onClick={closeHandler} className="ovarlay"></div>
      </CSSTransition>

      {modal && scrollDeactivator()}
    </>
  );
};

Ovarlay.propTypes = {
  modal: PropTypes.string.isRequired,
};

export default Ovarlay;
