import { Button, Grid } from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import { Words } from "../../Words";
import { styled } from "@mui/material";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

//Lesson prop required, filter prop option: filter={['tha', 'mi']}

export const Vocab = ({ Lesson, filter }) => {
  const [expand, setExpand] = useState([]);

  const LessonWords = Words.filter(
    (word) => word.lesson == Lesson
  )[0].words.filter((filteredword) =>
    filter?.length > 0
      ? filter.includes(filteredword.gd.props.children)
      : filteredword !== ""
  );

  return (
    <div>
      <div id="expand-btn" style={{ float: "right", marginBottom: "5px" }}>
        {expand.length == LessonWords.length ? (
          <Button
            sx={{
              backgroundColor: "#d1f0d9",
              borderRadius: "10px",
              padding: "5px 10px",
              border: "1px solid black",
              fontWeight: "600",
              color: "black",
              "&:hover": {
                color: "black",
                backgroundColor: "#ece9e9",
              },
            }}
            size="small"
            onClick={() => setExpand([])}
            variant="contained"
          >
            Collapse All
          </Button>
        ) : (
          <Button
            sx={{
              backgroundColor: "#d1f0d9",
              borderRadius: "10px",
              padding: "5px 10px",
              border: "1px solid black",
              fontWeight: "600",
              color: "black",
              "&:hover": {
                color: "black",
                backgroundColor: "#ece9e9",
              },
            }}
            size="small"
            onClick={() =>
              setExpand((prev) => LessonWords.map((word) => word.gd))
            }
            variant="contained"
          >
            Expand All
          </Button>
        )}
      </div>

      <Grid container className="vocabGrid">
        {LessonWords.map((word, index) => (
          <Fragment key={`${word.gd.props.children}-${word.en.props.children}`}>
            <Grid
              item
              xs={5}
              sm={6}
              sx={{
                fontSize: "16px",
                paddingLeft: "10px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                borderRadius:
                  index == LessonWords.length - 1 &&
                  !expand.includes(word.gd) &&
                  "0 0 0 10px",
                backgroundColor: index % 2 == 0 ? "" : "#d1f0d9",
              }}
            >
              <span>{word.gd}</span>
            </Grid>

            <Grid
              item
              alignItems="center"
              xs={5}
              sx={{
                fontSize: "16px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                backgroundColor: index % 2 == 0 ? "" : "#d1f0d9",
              }}
            >
              {word.en}
            </Grid>

            <Grid
              alignItems="center"
              item
              xs={2}
              sm={1}
              sx={{
                height: "50px",
                display: "flex",
                alignItems: "center",
                borderRadius:
                  index == LessonWords.length - 1 &&
                  !expand.includes(word.gd) &&
                  "0 0 10px 0",
                backgroundColor: index % 2 == 0 ? "" : "#d1f0d9",
              }}
            >
              <span
                onClick={
                  expand.includes(word.gd)
                    ? () =>
                        setExpand((prev) => prev.filter((f) => f !== word.gd))
                    : () => setExpand([...expand, word.gd])
                }
              >
                {expand.includes(word.gd) ? (
                  <ArrowCircleUpIcon />
                ) : (
                  <ArrowCircleDownIcon />
                )}
              </span>
            </Grid>

            {expand.includes(word.gd) && (
              <>
                <Grid
                  item
                  xs={5}
                  sm={6}
                  sx={{
                    fontSize: "14px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                    backgroundColor: index % 2 == 0 ? "" : "#d1f0d9",
                    borderRadius:
                      index == LessonWords.length - 1 && "0 0 0 10px",
                  }}
                >
                  <b>Pronunciation:</b>
                  <br />
                  <br />
                  {word.pro !== "<br/><br/>" && word.pro}
                </Grid>
                <Grid
                  item
                  xs={7}
                  sm={6}
                  sx={{
                    fontSize: "14px",
                    paddingRight: "20px",
                    paddingBottom: "10px",
                    backgroundColor: index % 2 == 0 ? "" : "#d1f0d9",
                    borderRadius:
                      index == LessonWords.length - 1 && "0 0 10px 0",
                  }}
                >
                  <b>Mnemonic:</b>
                  <br /> <br />
                  {word.mne !== "<br/><br/>" && word.mne}
                </Grid>
              </>
            )}
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};
