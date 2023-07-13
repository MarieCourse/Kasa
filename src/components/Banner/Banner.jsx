import "./Banner.sass";

function Banner({ imgSrc, altText, paragraphText }) {
  return (
    <div className="banner">
      <p>{paragraphText}</p>
      <span></span>
      <img src={imgSrc} alt={altText} />
    </div>
  );
}

export default Banner;

/*
const Banner = () => {
  return (
    <div className="body">
      <div className="body__banner">
        <p>Chez vous, partout et ailleurs</p>
        <img src={BannerImage} alt="Paysage de mer rocheuse agitée" />
      </div>
    </div>
  );
};
*/
//export default Banner;

////////
