import React from "react";
import Username from "./Username";
import Icon from "./Icon";

const Meow = ({ user, text, hashtags, replies, likes }) => (
  <div className="Meow">
    <div className="top-section">
      <Username />
    </div>
    <div className="mid-section">
      <p></p>
      <div className="hashtags"></div>
    </div>
    <div className="bottom-section"></div>
  </div>
);

export default Meow;
