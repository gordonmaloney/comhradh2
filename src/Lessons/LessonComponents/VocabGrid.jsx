import React from "react";
import { Grid } from "@mui/material";

export const VocabGrid = ({ Words }) => {
  return (
    <Grid container>
      {Words.map((word, index) => {
        if (index % 2 == 0) {
          return (
            <>
              <Grid item xs={6}>
                <b>{word}</b>
              </Grid>
              <Grid item xs={6}>
                {Words[index + 1]}
              </Grid>
            </>
          )
        }
      })}
    </Grid>
  );
};
