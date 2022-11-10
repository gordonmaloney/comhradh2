import React, { useEffect, useState } from "react";
import { Chip, Button } from "@mui/material";
import { shuffleArray, SubmitBtn } from "./Common";
import { AnswerBtn } from "./Common";
//sentence requires Length property, and words array
//all words have a 'word' and a 'pos' property
//can have optional 'length' property (chan eil vs tha)
//optional 'prev' property, for word that must come before (ag vs a')

export const MakeSentences = ({ words, Length, header }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(
      shuffleArray(
        words.map((word, index) => {
          return {
            word: word.word,
            pos: word.pos,
            prev: word?.prev,
            Length: word?.length,
            key: index,
          };
        })
      )
    );
  }, [words]);

  const [sentence, setSentence] = useState([]);
  const [finishedSentences, setFinishedSentences] = useState([]);

  useEffect(() => {
    setFinishedSentences([]);
    setShowAnswer(false)
  }, [words]);

  if (sentence.length == Length) {
    //check positions
    if (sentence.filter((word, index) => word.pos == index).length == Length) {
      console.log("checking 1...");

      if (sentence.filter((word) => word.prev !== undefined).length == 0) {
        console.log("checking 2...");
        setFinishedSentences((prev) => [
          sentence.map((word) => word.word).join(" "),
          ...prev,
        ]);
        setSentence([]);
      }

      //checking prev
      if (sentence.filter((word) => word.prev !== undefined).length > 0) {
        sentence.map((word, index) => {
          console.log("checking 3...");
          if (word?.prev !== undefined && index > 0) {
            console.log("checking prev");
            if (sentence[index - 1].word == word.prev) {
              setFinishedSentences((prev) => [
                sentence.map((word) => word.word).join(" "),
                ...prev,
              ]);
              setSentence([]);
            } else {
              console.log("prev check -- incorrect");
            }
          }
        });
      }
    } else {
      console.log("pass...");
    }
  }

  const [showAnswer, setShowAnswer] = useState(false);

  //generate possible solutions
  const [possibleSolutions, setPossibleSolutions] = useState([]);
  // clear possible solutions
  useEffect(() => {
    setPossibleSolutions([]);
  }, [words]);

  const [WordsToGo, setWordsToGo] = useState([]);
  useEffect(() => {
    setWordsToGo(words);
  }, [options]);

  useEffect(() => {
    if (WordsToGo.length > 0) {
      let NewSentence = [];

      const AddWord = (index, pos) => {
        if (WordsToGo[index].pos == pos) {
          //add if no prev
          !WordsToGo[index].prev && NewSentence.push(WordsToGo[index]);
          //if prev, check it's right
          WordsToGo[index].prev &&
            NewSentence[pos - 1].word == WordsToGo[index].prev &&
            NewSentence.push(WordsToGo[index]);
          //add space for length
          WordsToGo[index]?.length == 2 && NewSentence.push(" ");
          NewSentence.length < Length && AddWord(index + 1, NewSentence.length);
          NewSentence.length == Length &&
            setPossibleSolutions((prev) => [
              ...prev,
              NewSentence.map((word) => word.word)
                .join(" ")
                .replace(/\s+/g, " "),
            ]);
        } else {
          NewSentence.length < Length && AddWord(index + 1, pos);
        }
        setWordsToGo((prev) =>
          prev.filter((word) => !NewSentence.includes(word))
        );
      };

      AddWord(0, 0);
    }
  }, [WordsToGo]);

  return (
    <div>
      {header == "default" ? (
        <div style={{ textAlign: "left" }}>
          <h3>Make Sentences</h3>
          <p>
            Try to make sentences using the words in the box - click one to
            start:
          </p>
        </div>
      ) : (
        <>
          {header} <br />
        </>
      )}
      {(options.length > 0 || sentence.length > 0) && (
        <div
          style={{
            border: "1px solid black",
            width: "400px",
            maxWidth: "95%",
            margin: "0 auto 5px auto",
            padding: "10px",
            borderRadius: "10px 5px",
            minHeight: "50px",
          }}
        >
          <center>
            {options.map((word, index) => (
              <Chip
                key={index}
                sx={{
                  backgroundColor: "#d1f0d9",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#407a8c",
                  },
                }}
                onClick={() => {
                  setSentence((prev) =>
                    word?.Length == 2
                      ? [...prev, word, { word: "", pos: word.pos + 1 }]
                      : [...prev, word]
                  );
                  setOptions((prev) =>
                    prev.filter((filterword) => filterword.key !== word.key)
                  );
                }}
                style={{ margin: "3px 3px" }}
                label={word.word}
              />
            ))}
          </center>
        </div>
      )}

      {(options.length > 0 || sentence.length > 0) && (
        <>
          <center>
            <div
              style={{
                borderBottom: "1px dashed black",
                minHeight: "40px",
                minWidth: "100px",
                display: "inline-block",
              }}
            >
              {sentence.map(
                (word) =>
                  word.word != "" && (
                    <Chip
                      onClick={() => {
                        setOptions([...options, word]);
                        setSentence((prev) =>
                          prev.filter(
                            (filterword) => filterword.key !== word.key
                          )
                        );
                      }}
                      sx={{
                        backgroundColor: "#d1f0d9",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#407a8c",
                        },
                        margin: "0 2px -20px 2px",
                      }}
                      label={word.word}
                    />
                  )
              )}
            </div>
            {sentence.length > Length - 1 && (
              <>
                <br />
                <i>Hmm, this doesn't look right!</i>
              </>
            )}
          </center>
        </>
      )}

      <div
        style={{
          textAlign: "-webkit-left",
        }}
      >
        <ul>
          {finishedSentences.map((sentence) => (
            <li>
              <Chip
                style={{ backgroundColor: "#d1f0d9", margin: "5px 0" }}
                label={sentence}
              />{" "}
              👍
            </li>
          ))}
        </ul>
      </div>

      <br/><br/>

      <AnswerBtn variant="contained" onClick={() => setShowAnswer(!showAnswer)}>
        {!showAnswer ? "Show" : "Hide"} Answer
      </AnswerBtn>

      {showAnswer && (
        <div className="answerBox">
          {" "}
          <div style={{ textAlign: "-webkit-left" }}>
            For these exercises, there are often multiple different solutions.
            Here's just some:
            <ul>
              {[...new Set(possibleSolutions)].map((solution) => (
                <li>{solution}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
