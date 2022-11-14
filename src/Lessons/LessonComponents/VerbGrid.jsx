import React from "react";
import { Grid } from "@mui/material";

export const VerbGrid = ({words}) => {

const gridLines = {
    borderRadius: '10px',
    border: '1px solid black',
    padding: '5px',
}

const Spacing = 3

  return (
    <Grid container  justifyContent={'space-between'} 
    sx={{...gridLines, mx: 'auto', maxWidth: '500px', width: '95%', textAlign: 'center'}}>
      <Grid item>
        <Grid container spacing={Spacing} direction={"column"}>
          <Grid item>-</Grid>
          <Grid item><b>Positive</b></Grid>
          <Grid item><b>Negative</b></Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={Spacing} direction={"column"}>
          <Grid item><b>Statement</b></Grid>
          <Grid item>{words[0]}</Grid>
          <Grid item>{words[1]}</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={Spacing} direction={"column"}>
          <Grid item><b>Question</b></Grid>
          <Grid item>{words[2]}</Grid>
          <Grid item>{words[3]}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
