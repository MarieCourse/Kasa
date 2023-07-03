function Card({ id, title, cover }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={cover} alt={title} />
    </div>
  );
}

export default Card;
