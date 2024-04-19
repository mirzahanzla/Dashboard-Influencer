import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";
import { UilCommentAlt } from "@iconscout/react-unicons";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <div className="time-comment-container">
                <span>{update.time}</span>
                <UilCommentAlt className="comment-icon" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
