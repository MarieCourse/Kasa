import React from 'react';
import inactiveStar from '../../assets/starInactive.svg';
import activeStar from '../../assets/starActive.svg';
import './Rating.sass';

function Rating({ rating }) {
  // Nombre maximal d'étoiles dans le système de notation
  const maxRating = 5;

  return (
    <div className="rating">
      {/* Utilisation de Array.from pour créer un tableau de la longueur maxRating */}
      {Array.from({ length: maxRating }).map((_, index) => (
        // Affichage de l'étoile en utilisant l'image activeStar si l'index est inférieur au rating (notation) actuel, sinon l'image inactiveStar
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
