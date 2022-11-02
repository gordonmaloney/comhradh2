import React, { useEffect, useState } from "react";
import { Chip } from "@mui/material";

//sentence requires Length property, and words array
//all words have a 'word' and a 'pos' property
//can have optional 'length' property (chan eil vs tha)
//optional 'prev' property, for word that must come before (ag vs a')

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    return array;
  }
}

export const MakeSentences = ({ words, Length }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(
      shuffleArray(
        words.map((word, index) => {
          return {
            word: word.word,
            pos: word.pos,
            prev: word?.prev,
            length: word?.length,
            key: index,
          };
        })
      )
    );
  }, [words]);

  const [sentence, setSentence] = useState([]);
  const [finishedSentences, setFinishedSentences] = useState([]);



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

  return (
    <div>
      <h3>Make Sentences</h3>
      {options.length > 0 && (
        <div
          style={{
            border: "1px solid black",
            width: "400px",
            maxWidth: '95%',
            margin: "0 auto 5px auto",
            padding: '10px',
            borderRadius: '10px 5px'
          }}
        >
          <center>
            {options.map((word, index) => (
              <Chip
                key={index}
                onClick={() => {
                  setSentence((prev) =>
                    word?.length > 1
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
                      prev.filter((filterword) => filterword.key !== word.key)
                    );
                  }}
                  style={{ margin: "0 2px -20px 2px" }}
                  label={word.word}
                />
              )
          )}
        </div>
        {sentence.length == Length && (
          <>
            <br />
            <i>Hmm, this doesn't look right!</i>
          </>
        )}
      </center>

      <ul>
        {finishedSentences.map((sentence) => (
          <li>
            <Chip
              style={{ backgroundColor: "lightgreen", margin: "5px 0" }}
              label={sentence}
            />{" "}
            👍
          </li>
        ))}
      </ul>
    </div>
  );
};
