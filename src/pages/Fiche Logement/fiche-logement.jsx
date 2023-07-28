import React from "react";
import "./fiche-logement.sass";
import { useParams } from "react-router-dom";
import logementsData from "../../datas/logements.json";
import Carousel from "../../components/Carousel/Carousel";
import FicheTitle from "../../components/FicheTitle/FicheTitle";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Deroulant from "../../components/Deroulant/Deroulant";

function FicheLogement() {
  // Récuperation de l'id sur la URL
  const { id } = useParams();

  //Récupération de données depuis le fichier JSON grâce à l'ID du logement sélectionné.
  const selectedLogement = logementsData.find((logement) => logement.id === id);

  // Déstructuration d'objets pour extraire les propriétés individuelles de l'objet.
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
    <div className="main" key={id}>
      <Carousel pictures={pictures} alt={`${title}, ${location}`} />
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
        <div>
          <Deroulant title="Description" content={description} />
        </div>
        <div>
          <Deroulant title="Équipements" content={equipments} />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
