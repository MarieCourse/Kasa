import Banner from '../../components/Banner/Banner';
import './about.sass';
import valeurs from '../../datas/valeurs.json';
import Deroulant from '../../components/Deroulant/Deroulant';

// Import de l'image de bannière et définition du texte alternatif (alt) de l'image
import bannerImageSource from '../../assets/image banner 2.jpg';
const imageAltText =
  'Paysage avec des montagnes enneigées, un lac et une forêt.';
// Texte par défaut pour le paragraphe de la bannière (peut être laissé vide)
const texteParagraph = '';

function About() {
  return (
    <div className="main">
      {/* Composant Banner pour afficher la bannière avec une image et un paragraphe de texte */}
      <Banner
        imgSrc={bannerImageSource}
        altText={imageAltText}
        paragraphText={texteParagraph}
      />
      {/* Section "Deroulant" pour afficher les valeurs depuis le fichier "valeurs.json" */}
      <div className="deroulantAbout">
        {valeurs.map((valeur, index) => (
          <Deroulant
            key={index}
            title={valeur.title} // Titre de la valeur
            content={valeur.description} // Description de la valeur
          />
        ))}
      </div>
    </div>
  );
}

export default About;
