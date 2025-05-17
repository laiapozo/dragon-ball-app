const callToApi = () => {
  return fetch("https://dragonball-api.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const parsedCharacters = data.items.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          description: character.description,
          ki: parseInt(character.ki.replace(/\./g, "")),
        };
      });
      return parsedCharacters;
    })
    .catch((error) => console.log(`There is an error: ${error}`));
};

export default callToApi;
