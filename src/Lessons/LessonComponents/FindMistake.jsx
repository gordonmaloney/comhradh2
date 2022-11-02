import React, { useState } from "react";
import { Button, Chip } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";

//sentences REQUIRE DOUBLE SPACES
//use X for missing words

export const FindMistake = ({ sentence, mistake, correct }) => {
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
    Input == correct && console.log("Correct!");
    setCorrect(true);
  };

  return (
    <div>
      <h3>Find the mistake</h3>

      {!Correct ? (
        <>
            {sentence.split(" ").map((word) => (
              <Chip
                label={word != "X" ? word : ""}
                onClick={() => word == mistake && setTyping(true)}
              />
            ))}

          <br />
          {typing && (
            <>
              <input value={Input} onChange={(x) => setInput(x.target.value)} />
              <br />
              <Button onClick={() => checkInput()}>Submit</Button>
            </>
          )}
        </>
      ) : (
        correctSentence
      )}
    </div>
  );
};
