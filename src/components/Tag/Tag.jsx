import './Tag.sass';

function Tag({ tags }) {
  return (
    <div className="tags">
      {/* Utilisation de map pour itérer sur le tableau de tags */}
      {tags.map((tag, index) => (
        // Affichage de chaque tag (élément du tableau) dans un paragraphe (<p>)
        <p key={index}>{tag}</p>
      ))}
    </div>
  );
}
export default Tag;
