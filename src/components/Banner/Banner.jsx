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
