import React, { useState } from 'react';
import previousIcone from '../../assets/prev.svg';
import nextIcone from '../../assets/next.svg';
import './Carousel.sass';

function Carousel({ pictures, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Méthode pour afficher l'image précédente
  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };
  // Méthode pour afficher l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={alt}
        className="carousel__active"
      />
      {/* Affichage de compteur et des butons s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <div>
          <button onClick={previousImage} className="carousel__previous">
            <img src={previousIcone} alt="Icone flèche gauche" />
          </button>
          <button onClick={nextImage} className="carousel__next">
            <img src={nextIcone} alt="Icone flèche droite" />
          </button>
          {/* Compteur d'images */}
          <p>{`${currentIndex + 1}/${pictures.length}`}</p>
        </div>
      )}
    </div>
  );
}

export default Carousel;
