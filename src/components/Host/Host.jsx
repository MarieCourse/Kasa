import React from "react";
import "./Host.sass";

function Host({ name, portrait }) {
  const spaceIndex = name.lastIndexOf(" ");
  const firstName = name.substring(0, spaceIndex);
  const lastName = name.substring(spaceIndex + 1);

  return (
    <div className="host">
      <p>
        {firstName}
        <br />
        {lastName}
      </p>
      <img src={portrait} alt={name} />
    </div>
  );
}

export default Host;
