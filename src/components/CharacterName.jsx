
function CharacterName({character}) {



    character = character.toLowerCase();
    character = character.replace(/[ \-]/g, "_");

    return (
    <div className="character-name">
        <img src={`assets/characterName/${character}.png`} alt={character}/>
    </div>
    )
}

export default CharacterName;