import React from "react";
import Avatar from "./Avatar";

const profile = ({ photo }, { displayName }) => (
  <div className="profile">
    <Avatar photo={photo} />
    <h3>{displayName}</h3>
  </div>
);

export default profile;
