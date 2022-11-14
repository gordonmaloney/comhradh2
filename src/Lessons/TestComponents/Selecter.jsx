import { useEffect, useState } from "react";
import { Button, Select, MenuItem } from "@mui/material";
import { AnswerBtn } from "./Common";

//select one option
export const Selecter = ({
  text,
  options,
  correct,
  textCont,
  handleCorrect,
  handleSubmit,
  header,
}) => {
  const [selectValue, setSelectValue] = useState("Select...");

  const [showAnswer, setShowAnswer] = useState(false);

  useState(() => {
    setSelectValue("Select...");
  }, []);

  useEffect(() => {
    setSelectValue("Select...");
  }, [text]);

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  const [graded, setGraded] = useState("");

  !handleSubmit && handleCorrect && selectValue == correct && handleCorrect();

  //handleIncorrect
  const handleIncorrect = () => {
    console.log("Selecter false", text, options, correct, textCont);
  };

  selectValue != "Select..." && !correct && handleIncorrect();

  if (!handleSubmit) {
    selectValue == correct && graded != "lightgreen" && setGraded("lightgreen");
    selectValue != "Select..." &&
      selectValue != correct &&
      graded != "red" &&
      setGraded("red");
    graded != "" && selectValue == "Select..." && setGraded("");
  }

  const handleSubmitCheck = () => {
    selectValue == correct && graded != "lightgreen" && setGraded("lightgreen");
    selectValue != "Select..." &&
      selectValue != correct &&
      graded != "red" &&
      setGraded("red");
    graded != "" && selectValue == "Select..." && setGraded("");
    if (handleCorrect && selectValue == correct) {
      handleCorrect();
      setSelectValue("Select...");
      setGraded("white");
    }
  };

  return (
    <div className="testComponent">
      {header && header == "default" ? (
        <div style={{ textAlign: "left" }}>
          <h3>Select the correct option:</h3>
        </div>
      ) : (
        header && (
          <div style={{ textAlign: "left" }}>
            <h3>{header}</h3>
          </div>
        )
      )}

      <p style={{ marginBottom: "10px" }}>
        {text && text}
        <Select
          autoWidth
          value={selectValue}
          onChange={handleChange}
          label="select"
          sx={{ backgroundColor: graded }}
        >
          <MenuItem value="Select...">
            <em>Select...</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
        {textCont && textCont}
      </p>

      <AnswerBtn variant="contained" onClick={() => setShowAnswer(!showAnswer)}>
        {!showAnswer ? "Show" : "Hide"} Answer
      </AnswerBtn>

      {showAnswer && (
        <div className="answerBox">
          {" "}
          {text}
          <u>{correct}</u>
          {textCont}
        </div>
      )}

    </div>
  );
};
