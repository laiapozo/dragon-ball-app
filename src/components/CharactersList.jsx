import React from "react";
import "../scss/components/CharactersList.scss";
import { Link } from "react-router-dom";

const CharactersList = ({ characters }) => {
  return (
    <ul>
      {characters.map((character) => {
        return (
          <Link to={`/detail/${character.id}`}>
            <li className="character" key={character.id}>
              <p>{character.name}</p>
              <p>{character.ki}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default CharactersList;
