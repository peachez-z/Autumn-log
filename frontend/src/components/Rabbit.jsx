import React from "react";
import "../styles/App.scss";
import rabbitImg from "../assets/rabbit.png";

function Rabbit({ style }) {
  return (
    <img src={rabbitImg} alt="bunny" className="flying-rabbit" style={style} />
  );
}

export default Rabbit;
