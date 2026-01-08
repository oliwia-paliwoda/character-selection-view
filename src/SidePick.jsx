import React from "react";
import './SidePick.scss';
import p1 from './assets/T_UI_OperationCH_Guide_P1.png';
import p2 from './assets/T_UI_OperationCH_Guide_P2.png';


function SidePick({onPickSide}){


    const [side, setSide] = React.useState(undefined);
    const handleSetSide = (side) => {
        setSide(side);
    }

    return (

      <div className="container">
          <div className="wrapper">

              <div className="left" onClick={() => onPickSide("P1")}>
                  <img
                      src={p1}
                      className="img"
                      style={{width: "30%"}}
                  />
              </div>

              <div className="right" onClick={() => onPickSide("P2")}>
                  <img
                      src={p2}
                      className="img"
                      style={{width: "30%"}}
                  />
              </div>
          </div>
      </div>

    );
}

export default SidePick;