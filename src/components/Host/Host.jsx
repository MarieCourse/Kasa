import React from 'react';
import './Host.sass';

function Host({ name, portrait }) {
  // Trouver l'index de l'espace dans le nom complet pour séparer le prénom du nom de famille
  const spaceIndex = name.lastIndexOf(' ');
  const firstName = name.substring(0, spaceIndex);
  const lastName = name.substring(spaceIndex + 1);

  return (
    <div className="host">
      {/* Affichage du prénom et du nom de famille du propriétaire */}
      <p>
        {firstName}
        <br />
        {lastName}
      </p>
      {/* Affichage de la photo du propriétaire avec un texte alternatif (alt) pour l'accessibilité */}
      <img src={portrait} alt={name} />
    </div>
  );
}

export default Host;
