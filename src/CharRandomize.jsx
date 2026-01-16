import characters from "./characters.json";

function CharRandomize () {
    const filteredCharacters = characters.filter(item => item !== "RANDOM");

    const randomIndex = Math.floor(
        Math.random() * filteredCharacters.length
    );

    return(filteredCharacters[randomIndex]);
}

export default CharRandomize;