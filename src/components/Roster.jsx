import Tile from "./Tile";
import "./styles/Roster.scss"

function Roster(){

    const row1 = [
        "ARMOR KING",
        "EDDY",
        "CLAUDIO",
        "ZAFINA",
        "PAUL",
        "RAVEN",
        "VICTOR",
        "REINA",
        "AZUCENA",
        "SHAHEEN",
        "LAW",
        "LEROY",
        "LEO",
        "LIDIA",
        "MIARY ZO"
    ]

    const row2 = [
        "HEIHACHI",
        "PANDA",
        "ASUKA",
        "LEE",
        "XIAOYU",
        "JIN",
        "RANDOM",
        "KAZUYA",
        "NINA",
        "HWOARANG",
        "FENG",
        "YOSHIMITSU",
        "CLIVE",
    ]

    const row3 = [
        "ANNA",
        "KUMA",
        "LILI",
        "ALISA",
        "LARS",
        "JUN",
        "DEVIL JIN",
        "JACK-6",
        "KING",
        "STEVE",
        "DRAGUNOV",
        "BRYAN",
        "FAHKUMRAM"
    ]

    return(
        <div className="border">
            <div className="row">
                {row1.map((character) => (
                    <Tile key={character} character={character} />
                    )
                )}
            </div>
            <div className="row">
                {row2.map((character) => (
                        <Tile key={character} character={character} />
                    )
                )}
            </div>
            <div className="row">
                {row3.map((character) => (
                        <Tile key={character} character={character} />
                    )
                )}
            </div>
        </div>
    )
}

export default Roster;