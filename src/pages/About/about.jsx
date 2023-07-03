import Banner from "../../components/Banner/Banner";

import bannerImageSource from "../../assets/image banner 2.jpg";
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
    </div>
  );
}

export default About;
