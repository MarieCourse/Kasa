import React, { useState, useRef } from "react";
import "./Deroulant.sass";
import arrowUp from "../../assets/arrowUp.svg";

function Deroulant({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
    if (!isOpen) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  };

  return (
    <div className="deroulant">
      <div>
        <h4>{title}</h4>
        <button onClick={handleToggle}>
          <img
            src={arrowUp}
            alt=""
            className={isOpen ? "img-button rotate" : "img-button"}
          />
        </button>
      </div>
      <div
        className={isOpen ? "content-parent open" : "content-parent"}
        style={{ maxHeight: isOpen ? contentHeight + "px" : "0" }}
      >
        <div ref={contentRef} className="content">
          {typeof content === "object" ? (
            <ul>
              {Object.keys(content).map((key) => (
                <li key={key}>{content[key]}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Deroulant;
