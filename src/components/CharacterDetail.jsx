import React from "react";
import "../scss/components/CharacterDetail.scss";

const CharacterDetail = ({ character }) => {
  return (
    <section className="detail">
      <img
        className="detail__image"
        src={character.image}
        alt={`Image ${character.name}`}
      />
      <div className="detail__info">
        <p>{character.name}</p>
        <p>{character.ki}</p>
      </div>
      <p className="detail__description">{character.description}</p>
    </section>
  );
};

export default CharacterDetail;
