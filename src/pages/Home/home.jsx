import Banner from '../../components/Banner/Banner';
import bannerImageSource from '../../assets/image banner 1.jpg';
import Card from '../../components/Card/Card';
import logementsData from '../../datas/logements.json';
import './home.sass';

const imageAltText = 'Paysage de mer rocheuse agitée';
const texteParagraph = 'Chez vous, partout et ailleurs';

function Home() {
  return (
    <div className="main home__main">
      {/* Composant Banner pour afficher la bannière avec une image et un paragraphe de texte */}
      <Banner
        imgSrc={bannerImageSource}
        altText={imageAltText}
        paragraphText={texteParagraph}
      />
      {/* Affichage de la liste des logements en utilisant le composant Card */}
      <div className="logementsList">
        {/* Utilisation de map pour parcourir les données des logements depuis le fichier "logementsData" */}
        {logementsData.map((item) => (
          // Utilisation du composant Card pour afficher chaque logement sous forme de carte
          <Card
            key={item.id} // Clé unique pour chaque carte (logement)
            id={item.id}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
