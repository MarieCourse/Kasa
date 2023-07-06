import React from "react";
import "./Deroulant.sass";
import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";
import { useState } from "react";

function Deroulant({ title, content }) {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="deroulant">
      <div>
        <h4>{title}</h4>
        <button onClick={handleShowContent}>
          <ArrowDown />
        </button>
      </div>
      <p className={`${showContent ? "showContent" : "hiddeContent"}`}>
        {content}
      </p>
    </div>
  );
}

export default Deroulant;
