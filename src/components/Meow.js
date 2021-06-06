import React from "react";
import Username from "./Username";
import Icon from "./Icon";
import Hashtag from "./Hashtag";
import Avatar from "./Avatar";

const Meow = ({ user, text, hashtags, replies, likes, photo }) => (
  <div className="Meow">
    <div className="top-section">
      <Username username={name} />
      <Avatar photo={photo} />
    </div>
    <div className="mid-section">
      <p>{text}</p>
      <div className="hashtags">
        {hashtags.map((hashtag, index) => (
          <hashtag key={index}>{hashtag} </hashtag>
        ))}
      </div>
    </div>
    <div className="bottom-section">
      <Icon type="replies" number={replies} />
      <Icon type="likes" number={likes} />
    </div>
  </div>
);

export default Meow;
