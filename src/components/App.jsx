import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../scss/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharactersList from "./CharactersList";

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [kiMinInput, setKiMinInput] = useState("from");
  const [kiMaxInput, setKiMaxInput] = useState("to");

  useEffect(() => {
    callToApi().then((response) => {
      setCharactersData(response);
    });
  }, []);

  const handleNameChange = (value) => {
    setNameInput(value);
  };

  const handleKiMinChange = (value) => {
    setKiMinInput(value);
  };

  const handleKiMaxChange = (value) => {
    setKiMaxInput(value);
  };

  const filteredCharacters = charactersData
    .filter((character) => {
      return character.name.toLowerCase().includes(nameInput.toLowerCase());
    })
    .filter((character) => {
      return kiMinInput === "from" && kiMaxInput === "to"
        ? true
        : character.ki > parseInt(kiMinInput) &&
            character.ki < parseInt(kiMaxInput);
    });

  return (
    <>
      <Header />
      <Filters
        handleNameChange={handleNameChange}
        handleKiMinChange={handleKiMinChange}
        handleKiMaxChange={handleKiMaxChange}
      />
      <CharactersList characters={filteredCharacters} />
    </>
  );
}

export default App;
