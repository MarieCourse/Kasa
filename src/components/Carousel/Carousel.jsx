import React, { useState } from "react";
import { ReactComponent as PreviousIcone } from "../../assets/prev.svg";
import { ReactComponent as NextIcone } from "../../assets/next.svg";
import "./Carousel.sass";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img src={pictures[currentIndex]} alt="" className="carousel__active" />
      {pictures.length > 1 && (
        <div>
          <button onClick={previousImage} className="carousel__previous">
            <PreviousIcone />
          </button>
          <button onClick={nextImage} className="carousel__next">
            <NextIcone />
          </button>
          <p>{`${currentIndex + 1}/${pictures.length}`}</p>
        </div>
      )}
    </div>
  );
}

export default Carousel;
