import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  let intervalID;

  useEffect(() => {
    intervalID = setInterval(() => setTimer((sec) => sec + 1), 1000);

    return () => {
      //setInterval is cleared on component unmount
      clearInterval(intervalID);
    }
  }, [])

  const stopTimer = () => {
    console.log('stop');
    console.log(intervalID); //undefined

    clearInterval(intervalID);
  }

  return (
    <>
      <div id='timer'>
        {timer}
      </div>
      <button onClick={stopTimer}>STOP</button>
    </>
  )
};