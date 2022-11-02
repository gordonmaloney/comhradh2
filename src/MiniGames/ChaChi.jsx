import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

import Caudio from "./c.ogg";
import Xaudio from "./x.ogg";

export const ChaChi = () => {
  const [XC, setXC] = useState("");

  const [audio, setAudio] = useState(new Audio(""));

  const setX = () => {
    setXC("x");
    setAudio(new Audio(Xaudio));
  };

  const setC = () => {
    setXC("c");
    setAudio(new Audio(Caudio));
  };

  const Begin = () => {
    Math.random() > 0.5 ? setX() : setC();

    audio.play();
  };

  const [correct, setCorrect] = useState('')

  const handleCorrect = () => {
    setCorrect('Correct!')
    setTimeout(() => {
        setCorrect('')
    }, 3000)
  }

  const handleIncorrect = () => {
    setCorrect('Try again!')
    setTimeout(() => {
        setCorrect('')
    }, 3000)
  }

  const handleClick = (entry) => {
    console.log(entry, XC);
    if (entry == XC) {
        audio.pause()
        handleCorrect()
      console.log("correct!");
      Math.random() > 0.5 ? setX() : setC();
    }

    if (entry !== XC) {
        handleIncorrect()
        console.log("try again");
    }
  };

  useEffect(() => {
    audio.play();
  }, [audio]);





  return (
    <div>
      <center>
        {XC ? (
          <>
            <br />
            <br />
            {XC == "x" ? (
              <audio src={Xaudio} type="audio/ogg" controls />
            ) : (
              <audio src={Caudio} type="audio/ogg" controls autoplay />
            )}
            <br />
            <br />
            <Button
              onClick={() => handleClick("x")}
              variant="contained"
              style={{ textTransform: "none" }}
            >
              /x/
            </Button>{" "}
            <Button
              onClick={() => handleClick("c")}
              variant="contained"
              style={{ textTransform: "none" }}
            >
              /ç/
            </Button>

            <h1>{correct}</h1>
          </>
        ) : (
          <Button variant="contained" onClick={() => Begin()}>
            Begin
          </Button>
        )}
      </center>
    </div>
  );
};
