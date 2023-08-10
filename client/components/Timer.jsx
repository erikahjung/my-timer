import React, { useState, useEffect } from "react";
import Count from "./Count.jsx";
import MemoCount from "./MemoCount.jsx";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalID = null;
    if (isActive) {
      intervalID = setInterval(() => setTimer((sec) => sec + 1), 1000);
    } else {
      clearInterval(intervalID);
    }

    return () => {
      //setInterval is cleared on component unmount
      clearInterval(intervalID);
    }
  }, [isActive, timer]);

  const restartTimer = () => {
    setTimer(0);
    setIsActive(false);
  };

  return (
    <>
      <div id='timer'>
        {timer}
      </div>
      <button id={isActive ? "stop-button" : "start-button"} onClick={() => setIsActive((state) => !state)}>{isActive ? "STOP" : "START"}</button>
      <button id="restart-button" onClick={restartTimer}>RESTART</button>
      <Count/>
      <MemoCount/>
    </>
  )
};