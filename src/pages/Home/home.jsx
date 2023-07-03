import Banner from "../../components/Banner/Banner";

import bannerImageSource from "../../assets/image banner 1.jpg";
const imageAltText = "Paysage de mer rocheuse agitée";
const texteParagraph = "Chez vous, partout et ailleurs";

function Home() {
  return (
    <div>
      <Banner
        imgSrc={bannerImageSource}
        altText={imageAltText}
        paragraphText={texteParagraph}
      />
    </div>
  );
}

export default Home;
