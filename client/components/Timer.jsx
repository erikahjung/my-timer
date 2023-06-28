import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  // useEffect(() => {
  //   setIntervalID(setInterval(() => setTimer((sec) => sec + 1), 1000));

  //   return () => {
  //     //setInterval is cleared on component unmount
  //     clearInterval(intervalID);
  //   }
  // }, []);

  const startTimer = () => {
    if (!intervalID) {
      setIntervalID(setInterval(() => setTimer((sec) => sec + 1), 1000));
    }
  };

  const stopTimer = () => {
    clearInterval(intervalID);
    setIntervalID(null);
  };

  const restartTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <>
      <div id='timer'>
        {timer}
      </div>
      <button id="start-button" onClick={startTimer}>START</button>
      <button id="stop-button" onClick={stopTimer}>STOP</button>
      <button id="restart-button" onClick={restartTimer}>RESTART</button>
    </>
  )
};