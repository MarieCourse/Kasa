import React, { useState, useRef } from 'react';
import './Deroulant.sass';
import arrowUp from '../../assets/arrowUp.svg';

function Deroulant({ title, content }) {
  // State pour gérer l'état d'ouverture ou de fermeture du contenu
  const [isOpen, setIsOpen] = useState(false);
  // Référence à l'élément DOM du contenu pour calculer la hauteur
  const contentRef = useRef(null);
  // State pour stocker la hauteur du contenu (sera utilisée pour l'animation de la hauteur)
  const [contentHeight, setContentHeight] = useState(0);

  // Fonction pour gérer le basculement de l'état d'ouverture/fermeture
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
    // Si le contenu n'était pas ouvert, on met à jour la hauteur pour afficher le contenu
    if (!isOpen) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      // Sinon, on réinitialise la hauteur pour cacher le contenu
      setContentHeight(0);
    }
  };

  return (
    <div className="deroulant">
      <div>
        {/* Titre dynamique du deroulant */}
        <h4>{title}</h4>
        {/* Bouton pour ouvrir/fermer le contenu */}
        <button onClick={handleToggle}>
          <img
            src={arrowUp}
            alt=""
            className={isOpen ? 'img-button rotate' : 'img-button'}
          />
        </button>
      </div>
      {/* Conteneur du contenu, la hauteur sera animée avec un style conditionnel */}
      <div
        className={isOpen ? 'content-parent open' : 'content-parent'}
        style={{ maxHeight: isOpen ? contentHeight + 'px' : '0' }}
      >
        {/* Le contenu réel qui sera affiché ou masqué */}
        <div ref={contentRef} className="content">
          {/* Vérifie si le contenu est un objet ou une chaîne de caractères */}
          {typeof content === 'object' ? (
            // Si c'est un objet, affiche le contenu sous forme de liste non ordonnée (ul/li)
            <ul>
              {Object.keys(content).map((key) => (
                <li key={key}>{content[key]}</li>
              ))}
            </ul>
          ) : (
            // Sinon, affiche le contenu comme un paragraphe (p)
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Deroulant;
