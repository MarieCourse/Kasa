import "./Card.sass";

function Card({ id, title, cover }) {
  const handleClick = () => {
    window.location.href = `/fiches/${id}`;
  };
  return (
    <div className="logementCard" onClick={handleClick}>
      <h2>{title}</h2>
      <img src={cover} alt={title} />
    </div>
  );
}

export default Card;
