import Tile from "./components/Tile"
import React from "react";
import "./CharSelect.scss";
import Roster from "./components/Roster";
import VsArt from "./components/VsArt";
import {useEffect} from "react";

function CharSelect({playerSide}) {

    const [scale, setScale] = React.useState(1);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newScale = width / 1920;
            setScale(newScale);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [currentTurn, setCurrentTurn] = React.useState(playerSide);
    const [hoveredCharacter, setHoveredCharacter] = React.useState(undefined);

    const [playerCharacter, setPlayerCharacter] = React.useState(undefined);
    const [opponentCharacter, setOpponentCharacter] = React.useState(undefined);

    const toggleTurn = {
        P1: "P2",
        P2: "P1"
    };

    const p1HasChar =
        playerSide === "P1" ? playerCharacter : opponentCharacter;

    const p2HasChar =
        playerSide === "P2" ? playerCharacter : opponentCharacter;

    const isP1Active = currentTurn === "P1" || p1HasChar;
    const isP2Active = currentTurn === "P2" || p2HasChar;


    const handleCharHover = (character) => {

        if (currentTurn === playerSide && playerCharacter !== undefined) {

        } else setHoveredCharacter(character);
    };

    const handleCharSelect = (character) => {
        if (currentTurn === playerSide) {
            setPlayerCharacter(character);
        } else {
            setOpponentCharacter(character);
        }

        setCurrentTurn(prev => toggleTurn[prev]);
    }


    useEffect(() => {
        if (playerCharacter !== undefined && opponentCharacter !== undefined) {
            console.error(playerCharacter, opponentCharacter);
        }
    }, [playerCharacter, opponentCharacter]);

    return (
        <div className="container">
            <div className="wrapper">

                <div className={`p1 ${isP1Active ? "picking" : ""}`}
                >
                    {isP1Active && (
                        <>
                            <div className="char-name-p1">{p1HasChar ?? hoveredCharacter}</div>

                            <VsArt
                                character={p1HasChar ?? hoveredCharacter}
                                side="p1"
                                state={p1HasChar}
                            />
                        </>
                    )}
                </div>

                <div
                    className={`p2 ${isP2Active ? "picking" : ""}`}
                >
                    {isP2Active && (
                        <>
                            <div className="char-name-p2">{p2HasChar ?? hoveredCharacter}</div>
                            <VsArt
                                character={p2HasChar ?? hoveredCharacter}
                                side="p2"
                                state={p2HasChar}
                            />
                        </>
                    )}
                </div>


            </div>

            {!opponentCharacter &&
                <div className="roster" style={{transform: `scale(${scale})`}}>
                    <Roster onHover={handleCharHover} onSelected={handleCharSelect}/>
                </div>
            }

        </div>
    )
}

export default CharSelect;