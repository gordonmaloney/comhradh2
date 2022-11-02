import { Button, Grid } from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import { Words } from "./Words";

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


      <div id="expand-btn" style={{ float: "right", marginBottom: '5px' }}>
        {expand.length == LessonWords.length ? (
          <Button
            size="small"
            onClick={() => setExpand([])}
            variant="contained"
          >
            Collapse All
          </Button>
        ) : (
          <Button
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

      <Grid container spacing={2}
      sx={{border: '1px solid black', width: '95%', marginX: 'auto'}}>
        {LessonWords.map((word, index) => (
          <Fragment key={`${word.gd.props.children}-${word.en.props.children}`}>
            <Grid
              item
              xs={5}
              sx={{ backgroundColor: index % 2 == 0 ? "" : "lightgrey" }}
            >
              {word.gd}
            </Grid>

            <Grid
              item
              xs={5}
              sx={{ backgroundColor: index % 2 == 0 ? "" : "lightgrey" }}
            >
              {word.en}
            </Grid>

            <Grid
              item
              xs={2}
              sx={{ backgroundColor: index % 2 == 0 ? "" : "lightgrey" }}
            >
              <Button
                onClick={
                  expand.includes(word.gd)
                    ? () =>
                        setExpand((prev) => prev.filter((f) => f !== word.gd))
                    : () => setExpand([...expand, word.gd])
                }
                size="small"
                variant="contained"
              >
                {expand.includes(word.gd) ? "^" : "v"}
              </Button>
            </Grid>

            {expand.includes(word.gd) && (
              <>
                <Grid item xs={6}>
                  <b>Pronunciation:</b>
                  <br />
                  {word.pro !== "<br/><br/>" && word.pro}
                </Grid>
                <Grid item xs={6}>
                  <b>Mnemonic:</b>
                  <br />
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
