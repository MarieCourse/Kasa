import Banner from "../../components/Banner/Banner";
import valeurs from "../../datas/valeurs.json";

import bannerImageSource from "../../assets/image banner 2.jpg";
import Deroulant from "../../components/Deroulant/Deroulant";
const imageAltText =
  "Paysage avec des montagnes enneigées, un lac et une forêt.";
const texteParagraph = "";

function About() {
  return (
    <div>
      <Banner
        imgSrc={bannerImageSource}
        altText={imageAltText}
        paragraphText={texteParagraph}
      />
      <div>
        {valeurs.map((valeur, index) => (
          <Deroulant
            key={index}
            title={valeur.title}
            content={valeur.description}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
