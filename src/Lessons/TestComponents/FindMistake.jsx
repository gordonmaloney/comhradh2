import React, { useState } from "react";
import { Button, Chip, TextField } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import { cleanText } from "./CleanText";
//Blurb for explainer and header
//sentences REQUIRE DOUBLE SPACES
//use X for missing words

export const FindMistake = ({ Blurb, sentence, mistake, correct }) => {
  const [typing, setTyping] = useState(false);
  const [Input, setInput] = useState("");

  const [Correct, setCorrect] = useState(false);

  const correctSentence = sentence
    .split(" ")
    .map((word) => (word == mistake ? correct : word))
    .join(" ")
    .replace(/\s+/g, " ");
  console.log(correctSentence);

  const checkInput = () => {
    cleanText(Input) == correct && console.log("Correct!");
    setCorrect(true);
  };

  return (
    <div>
      {Blurb && (
        <>
          <h3>Find the mistake</h3>
          <p>Click the word that is wrong, or the space where a word is missing, and then type in the correct or missing word.</p>
        </>
      )}

      {!Correct ? (
        <>
          {sentence.split(" ").map((word) => (
            <Chip
              style={{
                backgroundColor: typing && word == mistake && "red",
                margin: "2px 5px",
                width: (word == "" || word == "X") && "15px",
              }}
              label={word != "X" ? word : ""}
              onClick={() => word == mistake && setTyping(true)}
            />
          ))}

          <br />
          {typing && (
            <>
              <TextField
                variant="standard"
                style={{ minWidth: "250px" }}
                autoFocus
                placeholder="Type your correction here..."
                value={Input}
                onChange={(x) => setInput(x.target.value)}
              />
              <br />
              <Button variant="contained" onClick={() => checkInput()}>
                Submit
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <span style={{ textDecoration: "line-through" }}>
            {sentence.replace(/\X/g, "").replace(/\s+/g, " ")}
          </span>{" "}
          <Chip
            label={correctSentence}
            style={{ backgroundColor: "lightgreen" }}
          />{" "}
          👍
        </>
      )}
    </div>
  );
};
