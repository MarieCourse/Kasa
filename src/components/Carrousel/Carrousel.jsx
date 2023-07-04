import React, { useState } from "react";
import { ReactComponent as PreviousIcone } from "../../assets/prev.svg";
import { ReactComponent as NextIcone } from "../../assets/next.svg";
import "./Carrousel.sass";

function Carrousel({ pictures }) {
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
    <div className="carrousel">
      <img src={pictures[currentIndex]} alt="" className="carrousel__active" />
      <button onClick={previousImage} className="carrousel__previous">
        <PreviousIcone />
      </button>
      <button onClick={nextImage} className="carrousel__next">
        <NextIcone />
      </button>
    </div>
  );
}

export default Carrousel;
