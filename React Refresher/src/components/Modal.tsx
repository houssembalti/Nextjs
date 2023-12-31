import React, { useEffect } from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
const Modal = (props: any) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("/");
  };
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};
export default Modal;
