import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../scss/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharactersList from "./CharactersList";
import CharacterDetail from "./CharacterDetail";

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

  const { pathname } = useLocation();
  const routeData = matchPath("/detail/:id", pathname);
  let idCharacterRoute = undefined;
  if (routeData !== null) {
    idCharacterRoute = routeData.params.id;
  }
  const characterSelected = filteredCharacters.find((character) => {
    return character.id === parseInt(idCharacterRoute);
  });

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleNameChange={handleNameChange}
                handleKiMinChange={handleKiMinChange}
                handleKiMaxChange={handleKiMaxChange}
              />
              <CharactersList characters={filteredCharacters} />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={<CharacterDetail character={characterSelected} />}
        />
      </Routes>
    </>
  );
}

export default App;
