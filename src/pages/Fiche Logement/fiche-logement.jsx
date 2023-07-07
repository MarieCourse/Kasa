import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../datas/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import FicheTitle from "../../components/FicheTitle/FicheTitle";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import "./fiche-logement.sass";
import Deroulant from "../../components/Deroulant/Deroulant";

function FicheLogement() {
  // Recuperation de l'id sur la URL
  const { id } = useParams();

  const selectedLogement = logementsData.find((logement) => logement.id === id);

  const {
    title,
    location,
    tags,
    pictures,
    host,
    rating,
    description,
    equipments,
  } = selectedLogement;

  return (
    <div key={id}>
      <Carrousel pictures={pictures} />
      <div className="fiche__section1">
        <div className="fiche__section1A">
          <FicheTitle title={title} location={location} />
          <Tag tags={tags} />
        </div>
        <div className="fiche__section1B">
          <Host name={host.name} portrait={host.picture} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="informations">
        <Deroulant title="Description" content={description} />
        <Deroulant title="Équipements" content={equipments} />
      </div>
    </div>
  );
}

export default FicheLogement;
