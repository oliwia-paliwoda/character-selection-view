import "./styles/Tile.scss"

function Tile({ character, onMouseEnter, onClick}) {

    character = character.toLowerCase();
    character = character.replace(/[ \-]/g, "_");

    return (
        <div className="tile" onMouseEnter={onMouseEnter} onClick={onClick}>
        <img
            className="icon"
            src={`assets/characterIcons/${character}.png`}
            alt={character}
        />
            <img
                className="rim"
                src={`assets/T_UI_CS_Panel_Decide_Rim.png`}
            />
        </div>
    );
}

export default Tile;