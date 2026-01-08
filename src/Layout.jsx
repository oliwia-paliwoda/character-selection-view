import "./Layout.scss"
import sidePick from "./SidePick";
import SidePick from "./SidePick";
import React from "react";
import { useEffect, useState } from "react";
import CharSelect from "./CharSelect";

const SCREENS = {
    sideSelect: {
        component: SidePick,
        message: "PICK SIDE"
    },
    charSelect: {
        component: CharSelect,
        message: "PICK A CHARACTER"
    }
}

function Layout() {


    const [chosenSide, setChosenSide] = React.useState(undefined);
    const[screenState, setScreenState] = React.useState("sideSelect");

    const handlePickSide = (side) => {
        setChosenSide(side);
        setScreenState("charSelect");
    };

    const CurrentScreen = SCREENS[screenState].component;
    const message = SCREENS[screenState].message;


    return (
      <div className="window">

          {screenState === "sideSelect" ? (
            <CurrentScreen onPickSide={handlePickSide}></CurrentScreen>
          ) : (
              <CurrentScreen/>
          )
          }

          <div className="text-box-container">
              <div className="text">
                  {message}
              </div>
          </div>

      </div>
    );
}

export default Layout;