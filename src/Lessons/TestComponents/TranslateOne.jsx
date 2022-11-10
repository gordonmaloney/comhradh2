import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { cleanText, SubmitBtn } from "./Common";
import { AnswerBtn } from "./Common";
//props: Q, A, handleSubmit, header, topic,

//translate one sentence
export const TranslateOne = (props) => {
  const handleCorrectProp = props.handleCorrect;

  const Q = props.Q;
  const A = props.A.map((As) => cleanText(As));
  const handleSubmit = props.handleSubmit;
  const topic = props.topic;
  const header = props.header;

  useEffect(() => {
    setCorrect("untested");
    setInputField("");
    setShowAnswer(false);
  }, [props]);

  const [correct, setCorrect] = useState("untested");
  const [inputField, setInputField] = useState("");

  const [showAnswer, setShowAnswer] = useState(false);

  //props.handleCorrect && correct == "true" && handleCorrectProp();

  const handleCorrect = () => {
    console.log("correct!");
    correct != "true" && setCorrect("true");
    handleCorrectProp && handleCorrectProp(topic);
  };

  const handleIncorrect = () => {
    correct != "false" && setCorrect("false");

    console.log("QTranslate - false", props.Q, props.A);
  };

  const handleIncorrectTried = () => {
    console.log("incorrect tried");
    correct != "false" && setCorrect("false");
  };

  const handleKeyPress = (e, Q, input) => {
    if (!handleSubmit) {
      e.keyCode == 13 &&
        !A.includes(cleanText(input)) &&
        handleIncorrectTried();
      e.keyCode == 13 && A.includes(cleanText(input)) && handleCorrect();
    }
    if (handleSubmit) {
    }
  };

  const handleChange = (e, Q, input) => {
    setInputField(input);
    A.includes(cleanText(input)) && handleCorrect();
  };

  const handleSubmitCheck = () => {
    console.log(inputField);
    !A.includes(cleanText(inputField)) && handleIncorrect();
    A.includes(cleanText(inputField)) && handleCorrect();
  };

  return (
    <div className="testComponent">
      {header == "default" ? (
        <div style={{ textAlign: "left" }}>
          <h3>Translation</h3>
          <p>
            Translate these sentences - from Gaelic to English or vice versa:
          </p>
        </div>
      ) : (
        <>
          {header} <br />
        </>
      )}

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={5}>
          {Q}
        </Grid>
        <Grid item xs={6}>
          <TextField
            inputProps={{ autoComplete: "off" }}
            disabled={correct == "true" && true}
            value={inputField}
            sx={{
              width: "95%",
              backgroundColor:
                correct == "true" ? "lightgreen" : correct == "false" && "red",
            }}
            size="small"
            onKeyDown={(e, Q, input) => handleKeyPress(e, Q, e.target.value)}
            onChange={(e, Q, input) => handleChange(e, Q, e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          {correct == "true" && <> 👍</>}
        </Grid>
      </Grid>

      <br />
      <br />

      <AnswerBtn variant="contained" onClick={() => setShowAnswer(!showAnswer)}>
        {!showAnswer ? "Show" : "Hide"} Answer
      </AnswerBtn>

      {showAnswer && <div className="answerBox">{props.A[0]}</div>}
    </div>
  );
};
