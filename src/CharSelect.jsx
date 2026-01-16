import React from "react";
import "./CharSelect.scss";
import Roster from "./components/Roster";
import VsArt from "./components/VsArt";
import {useEffect} from "react";
import CharacterName from "./components/CharacterName";
import {preloadImages} from "./preloadImages";
import p1You from './assets/T_UI_OperationCH_Guide_YOU_Red.png';
import p2You from './assets/T_UI_OperationCH_Guide_YOU_Blue.png';
import vs from "./assets/T_UI_Makuai_VS2.png";
import vsBackground from "./assets/T_UI_HUD_Zone_Icon_Enable3.png";
import CharRandomize from "./CharRandomize";

function CharSelect({playerSide}) {

    const [scale, setScale] = React.useState(1);

    useEffect(() => {

        preloadImages();

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
        if (character==="RANDOM") {
            character = CharRandomize();
        }
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
                            {playerSide === "P1" && (
                            <div className="player-label-p1">
                                <img src={p1You} alt="you"/>
                                </div>
                            )}

                            {hoveredCharacter && (
                                <div className="character-name-p1">
                            <CharacterName character={p1HasChar ?? hoveredCharacter} />
                                </div>
                                )}

                            <VsArt
                                character={p1HasChar ?? hoveredCharacter}
                                side="p1"
                                state={p1HasChar}
                            />
                        </>
                    )}

                    {opponentCharacter &&
                        <div className="vs-screen-background-p1">
                            <img
                                src={vsBackground}
                            />
                        </div>
                    }

                </div>

                <div
                    className={`p2 ${isP2Active ? "picking" : ""}`}
                >
                    {isP2Active && (
                        <>
                            {playerSide === "P2" && (
                                <div className="player-label-p2">
                                    <img src={p2You} alt="you"/>
                                </div>
                            )}

                            {hoveredCharacter && (
                                <div className="character-name-p2">
                                    <CharacterName character={p2HasChar ?? hoveredCharacter} />
                                </div>
                            )}
                            <VsArt
                                character={p2HasChar ?? hoveredCharacter}
                                side="p2"
                                state={p2HasChar}
                            />
                        </>
                    )}

                    {opponentCharacter &&
                        <div className="vs-screen-background-p2">
                            <img
                                src={vsBackground}
                                />
                        </div>
                    }
                </div>

            </div>

            {opponentCharacter && <div className="vs">
                <img
                    src={vs}
                    alt="vs"
                />
            </div>
            }

            {!opponentCharacter &&
                <div className="roster" style={{transform: `scale(${scale})`}}>
                    <Roster onHover={handleCharHover} onSelected={handleCharSelect}/>
                </div>
            }

        </div>
    )
}

export default CharSelect;