import logementsData from "../../datas/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import React from "react";
import FicheTitle from "../../components/FicheTitle/FicheTitle";
import Tag from "../../components/Tag/Tag";

function FicheLogement() {
  return (
    <div>
      {logementsData.map((item, id) => (
        <React.Fragment key={id}>
          <Carrousel pictures={item.pictures} />
          <FicheTitle title={item.title} location={item.location} />
          <Tag tags={item.tags} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default FicheLogement;
