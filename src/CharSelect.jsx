import Tile from "./components/Tile"
import React from "react";
import "./CharSelect.scss";
import Roster from "./components/Roster";
function CharSelect() {

    return (
        <div className="container">
            <div className="wrapper">

                <div className="p1 picking">

                </div>

                <div className="p2">

                </div>
            </div>

           <div className="roster">
           <Roster />
           </div>

        </div>
    )
}

export default CharSelect;