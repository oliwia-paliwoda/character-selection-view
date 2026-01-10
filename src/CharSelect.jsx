import Tile from "./components/Tile"
import React from "react";
import "./CharSelect.scss";
import Roster from "./components/Roster";
import VsArt from "./components/VsArt";
import {useEffect} from "react";

function CharSelect() {

    const [hoveredCharacter, setHoveredCharacter] = React.useState(undefined);
    const [selectedCharacter, setSelectedCharacter] = React.useState(undefined);
    const [selectionState, setSelectionState] = React.useState(undefined);

    const handleCharHover = (character) => {
        setHoveredCharacter(character);
    };

    const handleCharSelect = (character) => {
        setSelectedCharacter(character);
    }


    useEffect(() => {
        if (selectedCharacter !== undefined) {
            setSelectionState("selected");
            console.log("state selected");
        }
    }, [selectedCharacter]);

    return (
        <div className="container">
            <div className="wrapper">

                <div className="p1 picking">
                    <VsArt character={hoveredCharacter} state={selectionState} side={"p1"}></VsArt>
                </div>

                <div className="p2">
                    <VsArt character={hoveredCharacter} state={selectionState} side={"p2"}></VsArt>
                </div>
            </div>

           <div className="roster">
           <Roster onHover={handleCharHover} onSelected={handleCharSelect} />
           </div>

        </div>
    )
}

export default CharSelect;