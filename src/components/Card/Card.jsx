import "./Card.sass";
function Card({ id, title, cover }) {
  return (
    <div className="logementCard">
      <h2>{title}</h2>
      <img src={cover} alt={title} />
    </div>
  );
}

export default Card;
