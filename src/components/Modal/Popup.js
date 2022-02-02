import Modal from "react-modal";
import React from "react";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Modal.css";
const Popup = ({ modalIsOpen, setModalIsOpen, handleIsOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "fit-content",
      width: "50vw",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      boxShadow: "0px 0px 8px #000000",
          overlayClassName: "Overlay",
      borderRadius: "10px",

      //   mobile screen

      "@media (max-width: 600px)": {
        width: "90%",
        height: "fit-content",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: "5px",
      },
    },

    Mdoal: {
      //  mobile screen
      "@media (max-width: 600px)": {
        width: "100%",
        height: "fit-content",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: "15px",
      },
    },
  };
  return (
    <Modal overlayClassName="Overlay" style={customStyles} isOpen={modalIsOpen}>
      <div className="modal-toppanel">
        <h1 className="title">Create Post</h1>
        <button className="close-button" onClick={handleIsOpen}>
          <AiFillCloseCircle className="icon" />
        </button>
      </div>
      <div className="postbox">
        <div className="post-top">
          <img
            className="img-avatar"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFY8qKZZvI7sw/profile-displayphoto-shrink_100_100/0/1641554536571?e=1649289600&v=beta&t=fg9BoFKkofkMljj4ztVrx8di09Nc3eYrrBils6nLWcw"
            alt=""
          />
          <div className="name-container">
            <h3 className="name">Prajwal Ladkat</h3>
            <select className="select-box">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
        <textarea
          className="textarea"
          placeholder="What's on your mind?"
        ></textarea>
        <p className="hashtag">Add Hashtag</p>
              <div className="bottom-panel">
                  <button className="postbutton">Post</button>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
