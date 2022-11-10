import React, { useState } from "react";
import { Button, Chip, TextField } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import { AnswerBtn, cleanText, SubmitBtn } from "./Common";

import { useEffect } from "react";
//Blurb for explainer and header
//sentences REQUIRE DOUBLE SPACES
//use X for missing words

export const FindMistake = ({ header, sentence, mistake, correct }) => {
  const [typing, setTyping] = useState(false);
  const [Input, setInput] = useState("");

  const [Correct, setCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setCorrect(false);
    setShowAnswer(false);
    setTyping(false);
    setInput("");
  }, [sentence]);

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
      {header == "default" ? (
        <div style={{ textAlign: "left" }}>
          <h3>Find the mistake</h3>
          <p>
            Click the word that is wrong, or the space where a word is missing,
            and then type in the correct or missing word.
          </p>
        </div>
      ) : (
        <>
          {header}
          <br />
        </>
      )}

      {!Correct ? (
        <>
          {sentence.split(" ").map((word, index) => (
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
          </span>
          <br />
          <Chip
            label={correctSentence}
            style={{ backgroundColor: "lightgreen" }}
          />{" "}
          👍
        </>
      )}


<br/><br/>

      <AnswerBtn variant="contained" onClick={() => setShowAnswer(!showAnswer)}>
        {!showAnswer ? "Show" : "Hide"} Answer
      </AnswerBtn>

      {showAnswer && <div className="answerBox">{correctSentence}</div>}
    </div>
  );
};
