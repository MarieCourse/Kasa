import Banner from "../../components/Banner/Banner";
import bannerImageSource from "../../assets/image banner 1.jpg";
import Card from "../../components/Card/Card";
import logementsData from "../../datas/logements.json";
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
      {logementsData.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </div>
  );
}

export default Home;
