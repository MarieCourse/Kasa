import React, { useState } from 'react';
import previousIcone from '../../assets/prev.svg';
import nextIcone from '../../assets/next.svg';
import './Carousel.sass';

function Carousel({ pictures, alt }) {
  // State pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);
  // Méthode pour afficher l'image précédente
  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      // Si l'index actuel est 0, revenir à la dernière image, sinon décrémenter l'index
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };
  // Méthode pour afficher l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      // Si l'index actuel est la dernière image, revenir à la première image, sinon incrémenter l'index
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {/* Image active à afficher en utilisant l'index actuel */}
      <img
        src={pictures[currentIndex]}
        alt={alt}
        className="carousel__active"
      />
      {/* Affichage des boutons de navigation et de la numérotation s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <div>
          {/* Bouton pour afficher l'image précédente */}
          <button onClick={previousImage} className="carousel__previous">
            <img src={previousIcone} alt="Icone flèche gauche" />
          </button>
          {/* Bouton pour afficher l'image suivante */}
          <button onClick={nextImage} className="carousel__next">
            <img src={nextIcone} alt="Icone flèche droite" />
          </button>
          {/* Numérotation d'images (index actuel + 1) / (nombre total d'images) */}
          <p>{`${currentIndex + 1}/${pictures.length}`}</p>
        </div>
      )}
    </div>
  );
}

export default Carousel;
