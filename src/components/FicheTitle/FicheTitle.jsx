import React from "react";
import "./FicheTitle.sass";

function FicheTitle({ title, location }) {
  return (
    <div className="titleLocation">
      <h3>{title}</h3>
      <p>{location}</p>
    </div>
  );
}

export default FicheTitle;
