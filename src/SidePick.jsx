import React from "react";
import './SidePick.scss';
import p1 from './assets/T_UI_OperationCH_Guide_P1.png';
import p2 from './assets/T_UI_OperationCH_Guide_P2.png';


function SidePick(){
    return (

        <div className="window">

      <div className="container">
          <div className="wrapper">

              <div className="left">
                  <img
                      src={p1}
                      className="img"
                      style={{width: "30%"}}
                  />
              </div>

              <div className="right">
                  <img
                      src={p2}
                      className="img"
                      style={{width: "30%"}}
                  />
              </div>
          </div>
      </div>



      </div>
    );
}

export default SidePick;