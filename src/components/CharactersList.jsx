import React from "react";
import "../scss/components/CharactersList.scss";

const CharactersList = ({ characters }) => {
  return (
    <ul>
      {characters.map((character) => {
        return (
          <li className="character" key={character.id}>
            <p>{character.name}</p>
            <p>{character.ki}</p>
            <i className="fa-solid fa-caret-down"></i>
          </li>
        );
      })}
    </ul>
  );
};

export default CharactersList;
