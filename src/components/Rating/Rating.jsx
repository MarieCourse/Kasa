import React from "react";
import inactiveStar from "../../assets/starInactive.svg";
import activeStar from "../../assets/starActive.svg";
import "./Rating.sass";

function Rating({ rating }) {
  const maxRating = 5;

  return (
    <div className="rating">
      {Array.from({ length: maxRating }).map((_, index) => (
        <img
          key={index}
          src={index < rating ? activeStar : inactiveStar}
          alt="star"
        />
      ))}
    </div>
  );
}

export default Rating;
