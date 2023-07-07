import React from "react";
import "./Deroulant.sass";
import { ReactComponent as ArrowUp } from "../../assets/arrowUp.svg";
import { useState } from "react";

function Deroulant({ title, content }) {
  const [open, setOpen] = useState(false);
  const [rotated, setRotated] = useState(false);

  const contentClassName = open ? "showContent" : "hiddeContent";

  const handleShowContent = () => {
    setOpen(!open);
    setRotated(!rotated);
  };

  return (
    <div className="deroulant">
      <div>
        <h4>{title}</h4>
        <button
          className={`${rotated ? "rotated" : ""}`}
          onClick={handleShowContent}
        >
          <ArrowUp />
        </button>
      </div>
      {typeof content === "object" ? (
        <ul className={contentClassName}>
          {Object.keys(content).map((key) => (
            <li key={key}>{content[key]}</li>
          ))}
        </ul>
      ) : (
        <p className={contentClassName}>{content}</p>
      )}
    </div>
  );
}

export default Deroulant;
