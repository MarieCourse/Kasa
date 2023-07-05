import React from "react";
import "./Host.sass";

function Host({ name, portrait }) {
  return (
    <div className="host">
      <p>{name}</p>
      <img src={portrait} alt="" />
    </div>
  );
}

export default Host;
