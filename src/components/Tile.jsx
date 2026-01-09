import "./styles/Tile.scss"

function Tile({ character }) {

    character = character.toLowerCase();
    character = character.replace(/[ \-]/g, "_");

    return (
        <div className="tile">
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