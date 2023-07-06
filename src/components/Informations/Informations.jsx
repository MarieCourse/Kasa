import React from "react";
import Deroulant from "../Deroulant/Deroulant";
import "./Informations.sass";

function Informations({ description, equipments }) {
  return (
    <div className="informations">
      <Deroulant title="Description" content={description} />
      <Deroulant title="Équipements" content={equipments} />
    </div>
  );
}

export default Informations;
