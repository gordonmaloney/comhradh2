import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button } from "@mui/material";
import { AnswerBtn } from "./Common";

//put sentence in order, optional prompt
export const Dragger = ({
  Blurb,
  sentence,
  prompt,
  handleCorrect,
  handleSubmit,
  header,
  topic,
}) => {
  //take sentence from props and turn into randomised array
  const sentenceSplit = sentence.split(" ");
  sentenceSplit.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const [options, setOptions] = useState([""]);
  const [correct, setCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  !handleSubmit && correct == true && handleCorrect && handleCorrect(topic);

  const shuffleOptions = () => {
    setOptions(sentenceSplit.map((word, index) => ({ word: word, id: index })));
  };

  useEffect(() => {
    shuffleOptions();
    setCorrect(false);
    setShowAnswer(false);
    setChosen([])
  }, [sentence]);


  //ensure the shuffled version isn't not in the same order
  useEffect(() => {
    if (options.map((word) => word.word).join(" ") == sentence) {
      console.log("reshuffling");
      setOptions(
        sentenceSplit.map((word, index) => ({ word: word, id: index }))
      );
    }
  }, [sentenceSplit]);

  const [chosen, setChosen] = useState([]);

  useEffect(() => {
    setSubmitted(false);
  }, [chosen]);

  //dragging logic
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return result;
    };

    const items = reorder(
      chosen,
      result.source.index,
      result.destination.index
    );

    setChosen(items);
  };

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver
      ? "aliceblue"
      : correct
      ? "#00842a"
      : !correct && submitted
      ? "red"
      : "white",
    display: "flex",
    padding: 2,
    minHeight: "32px",
    flexWrap: "wrap",
    borderRadius: "0 0 5px 5px",
    border: "1px solid grey",
    borderTop: "none",
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "white",
    borderRadius: "20px",
    marginBottom: "2px",
    marginTop: "2px",
    marginRight: "5px",
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const handleClick = (e) => {
    setChosen([...chosen, e]);

    setOptions((chips) => options.filter((chip) => chip !== e));
  };

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const handleDelete = (item) => {
    console.log(item);
    if (item != " " || item != undefined) {
      setChosen((chips) => chosen.filter((chip) => chip !== item));
      setOptions([...options, item]);
    }
  };

  //handleIncorrect
  const handleIncorrect = () => {
    console.log("Dragger false", sentence);
  };

  chosen.length == sentenceSplit.length &&
    sentence != chosen.map((word) => word.word).join(" ") &&
    handleIncorrect();

  //handleSubmit Check
  if (!handleSubmit) {
    sentence == chosen.map((word) => word.word).join(" ") &&
      correct == false &&
      setCorrect(true);
    sentence != chosen.map((word) => word.word).join(" ") &&
      correct == true &&
      setCorrect(false);
  }

  const handleSubmitCheck = () => {
    if (
      sentence == chosen.map((word) => word.word).join(" ") &&
      correct == false
    ) {
      handleCorrect && handleCorrect(topic);
      setChosen([]);
      shuffleOptions();
    }

    if (sentence != chosen.map((word) => word.word).join(" ")) {
      setCorrect(false);
      setSubmitted(true);
    }
    //submitted but false
  };

  return (
    <div className="testComponent">
      {header == "default" ? (
        <div style={{ textAlign: "left" }}>
          <h3>Unscramble these sentences</h3>
        </div>
      ) : (
        <>
          {header} <br />
        </>
      )}

      <div style={{ marginBottom: "10px", marginTop: "10px" }}>
        {prompt && (
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              listStyle: "none",
              minHeight: "20px",
              backgroundColor: "aliceblue",
              p: 0,
              m: 0,
              borderRadius: "5px 5px 0 0",
              border: "1px solid grey",
              borderBottom: "0px",
            }}
          >
            <h4>{prompt}</h4>
          </Paper>
        )}

        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            minHeight: "20px",
            backgroundColor: "white",
            p: 0.5,
            m: 0,
            borderRadius: prompt ? "0 0 0 0 " : "5px 5px 0 0",
            border: "1px solid grey",
            borderBottom: "1px solid #00842a",
          }}
          component="ul"
        >
          {options.map((data, index) => {
            return (
              <ListItem key={data.id}>
                <Chip
                  sx={{
                    backgroundColor: "#d1f0d9",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#407a8c",
                    },
                  }}
                  label={data.word}
                  onClick={() => handleClick(data)}
                />
              </ListItem>
            );
          })}
        </Paper>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {chosen.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.word + item.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Chip
                          sx={{
                            backgroundColor: "#d1f0d9",
                            "&:hover": {
                              color: "white",
                              backgroundColor: "#407a8c",
                            },
                          }}
                          label={item.word}
                          onDelete={() => handleDelete(item)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <AnswerBtn variant="contained" onClick={() => setShowAnswer(!showAnswer)}>
        {!showAnswer ? "Show" : "Hide"} Answer
      </AnswerBtn>

      {showAnswer && <div className="answerBox">{sentence}</div>}
    </div>
  );
};
