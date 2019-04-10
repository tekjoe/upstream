import React from "react";

const Card = ({ content }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://via.placeholder.com/300" alt="hyahha" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">{content.preview}</div>
      </div>
    </div>
  );
};

export default Card;
