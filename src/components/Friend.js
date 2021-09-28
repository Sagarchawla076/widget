import React from "react";

const Friend = ({ friend }) => {
  const { name, age, image } = friend;
  return (
    <div className="friend">
      <img src={image} className="friend__img" alt={name} />
      <div className="details">
        <span className="details__name">{name}</span>
        <span className="details__age">{age} years</span>
      </div>
    </div>
  );
};
export default Friend;
