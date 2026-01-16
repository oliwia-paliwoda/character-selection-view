import "./styles/VsArt.scss";

function VsArt( {character, side, state}) {
    if (!character) return null;

    character = character.toLowerCase();
    character = character.replace(/[ \-]/g, "_")
    if (character === "random") return null;

    return (
        <div className="art-container">
            {side === "p1" ? (
             <img
                className={state ? "image-p1" : "image-p1-hover"}
                src={`assets/vsArt/${character}.png`}
                />
            ) :
                (
                    <img
                        className={state ? "image-p2" : "image-p2-hover"}
                        src={`assets/vsArt/${character}.png`}
                    />
                )
            }
        </div>
    )
}

export default VsArt;