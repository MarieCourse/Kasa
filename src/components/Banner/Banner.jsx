import "./Banner.sass";

function Banner({ imgSrc, altText, paragraphText }) {
  return (
    <div className="body__banner">
      <p>{paragraphText}</p>
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
