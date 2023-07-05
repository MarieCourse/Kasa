import "./Card.sass";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/fiches/${id}`}>
      <div className="logementCard">
        <h2>{title}</h2>
        <img src={cover} alt={title} />
      </div>
    </Link>
  );
}

export default Card;
