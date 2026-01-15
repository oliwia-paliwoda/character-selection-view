import Tile from "./Tile";
import "./styles/Roster.scss"
import characters from "../characters.json";

function Roster( {onHover, onSelected}){

    const row1 = characters.slice(0,15);

    const row2 = characters.slice(15,28);

    const row3 = characters.slice(28,characters.length);

    return(
        <div className="border">
            <div className="row">
                {row1.map((character) => (
                    <Tile key={character} character={character} onMouseEnter = {() => onHover(character)} onClick = {() => onSelected(character)}/>
                    )
                )}
            </div>
            <div className="row">
                {row2.map((character) => (
                        <Tile key={character} character={character} onMouseEnter = {() => onHover(character)} onClick = {() => onSelected(character)}/>
                    )
                )}
            </div>
            <div className="row">
                {row3.map((character) => (
                        <Tile key={character} character={character} onMouseEnter = {() => onHover(character)} onClick = {() => onSelected(character)}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Roster;