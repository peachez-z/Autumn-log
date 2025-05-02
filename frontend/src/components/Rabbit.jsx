import React from "react";
import "../styles/App.scss";
import rabbitImg from "../assets/rabbit.png";

function Rabbit({ styleClass }) {
  return (
    <img
      src={rabbitImg}
      alt="flying rabbit"
      className={`flying-rabbit ${styleClass}`}
    />
  );
}

export default Rabbit;
